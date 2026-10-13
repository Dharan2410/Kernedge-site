import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Effects from "@/components/Effects";
import Hero from "@/components/sections/Hero";
import JobFamilies from "@/components/sections/JobFamilies";
import WhatWeBuild from "@/components/sections/WhatWeBuild";
import Statement from "@/components/sections/Statement";
import Capabilities from "@/components/sections/Capabilities";
import People from "@/components/sections/People";
import Stories from "@/components/sections/Stories";
import Mission from "@/components/sections/Mission";
import Why from "@/components/sections/Why";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import WhatWeDo from "@/components/sections/WhatWeDo";

// Reorder, add or remove sections here.
export default function Home() {
  return (
    <>
      <Loader />
      <Effects />
      <Nav />
      <main id="top">
        <Hero />
        <WhatWeDo />
        <JobFamilies />
        <WhatWeBuild />
        <Statement />
        <Capabilities />
        {/* <People /> */}
        <Stories />
        <Mission />
        <Why />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
