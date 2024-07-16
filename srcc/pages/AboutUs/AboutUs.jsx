import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Hero from "./Hero";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutUs() {
  return (
    <div className="font-dmsans text-white">
      <Helmet>
        <title>About Us - FuelCab</title>
        <meta
          name="description"
          content="Discover FuelCab, a leading provider of on-demand fuel delivery services. Learn about our mission, values, achievements, and global presence."
        />
        <meta
          name="keywords"
          content="FuelCab, on-demand fuel delivery, fuel management, fuel delivery services, mission, values, achievements, global presence"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            url: "https://www.fuelcab.com/about-us",
            name: "FuelCab",
            description:
              "FuelCab is a leading provider of on-demand fuel delivery services. We are dedicated to making fuel management easy and convenient for our customers.",
          }`}
        </script>
      </Helmet>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
