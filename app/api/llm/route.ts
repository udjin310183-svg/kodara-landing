import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { prompt, session_token } = await request.json();

    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json({ error: 'Missing prompt' }, { status: 400 });
    }

    // Validate session token with Supabase
    if (!session_token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ehenobyqkkrnisfszyke.supabase.co';
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_ymzG5sgLGy_x-WHy910zaw_1xxBNOqZ';

    // Verify session token with Supabase
    const authRes = await fetch(`${supabaseUrl}/auth/v1/user`, {
      headers: {
        'Authorization': `Bearer ${session_token}`,
        'apikey': supabaseKey,
      },
    });

    if (!authRes.ok) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Call GitHub Models with our token
    const githubToken = process.env.GITHUB_TOKEN;
    if (!githubToken) {
      return NextResponse.json({ error: 'LLM not configured' }, { status: 503 });
    }

    const llmRes = await fetch('https://models.github.ai/inference/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${githubToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'openai/o4-mini',
        messages: [
          { role: 'system', content: 'You are a code analyst. Be concise, max 3 sentences.' },
          { role: 'user', content: prompt.slice(0, 1000) },
        ],
        max_tokens: 120,
      }),
    });

    if (!llmRes.ok) {
      return NextResponse.json({ error: 'LLM error' }, { status: 502 });
    }

    const data = await llmRes.json();
    const text = data.choices?.[0]?.message?.content?.trim() || '';

    return NextResponse.json({ text });

  } catch (err) {
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
