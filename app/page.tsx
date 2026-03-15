import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import HowItWorks from "./components/HowItWorks";
import TokenComparison from "./components/TokenComparison";
import Features from "./components/Features";
import Commands from "./components/Commands";
import CommandSearch from "./components/CommandSearch";
import WhoItsFor from "./components/WhoItsFor";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <TokenComparison />
        <Features />
        <Commands />
        <CommandSearch />
        <WhoItsFor />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
