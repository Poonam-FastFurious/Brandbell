import CTA from "../../Components/CTA";
import ComunityCount from "../../Shared/ComunityCount";

import ContactForm from "../../Shared/ContactForm";
import Faq from "../../Shared/Faq";

import Community from "./Community";
import Hero from "./Hero";
// import Language from "./Language";
import MainService from "./MainService";
import OurClient from "./OurClient";
import OurProcess from "./OurProcess";

import Service from "./Service";
import TestiMonial from "./TestiMonial";
import Whatwedo from "./Whatwedo";

import Whoarewe from "./Whoarewe";
import Whychooseus from "./Whychooseus";

function Home() {
  return (
    <>
      <Hero />
      <MainService />
      <Whoarewe />
      <Whatwedo />
      <OurProcess />
      <Whychooseus />
      <Service />
      <ComunityCount />
      <Community />
      <Faq />
      <TestiMonial />
      <OurClient />
      <ContactForm />
      <CTA />
    </>
  );
}

export default Home;
