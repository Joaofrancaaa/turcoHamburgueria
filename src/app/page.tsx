import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HighlightMenu from "@/components/HighlightMenu";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HighlightMenu />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
