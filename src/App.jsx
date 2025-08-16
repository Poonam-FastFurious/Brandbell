import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/plugins.css";
import "./assets/style.css";
import "./assets/fonts/unicons/unicons.css";
import "./App.css";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";

import Bloglist from "./Pages/BlogsPage/Bloglist";
import Contactus from "./Pages/Contactus/Contactus";
import ServiceList from "./Pages/Services/ServiceList";
import ScrollToTop from "./Shared/ScrollToTop";
import Appdevelopments from "./Pages/Services/Appdevelopments";
import Webdevelopments from "./Pages/Services/Webdevelopments";
import DigitalMarketing from "./Pages/Services/DigitalMarketing";
import CreativeService from "./Pages/Services/CreativeService";
import SoftWareDevelopment from "./Pages/Services/SoftWareDevelopment";
import Terms from "./Shared/Terms";
// import Team from "./Pages/Team/Team";
// import Careerlist from "./Pages/Career/Careerlist";
import Privacy from "./Shared/Privacy";
import Blogdetails from "./Pages/BlogsPage/Blogdetails";
import Ecommerce from "./Pages/Services/Ecommerce";
import Thankyou from "./Pages/Services/Thankyou";
import Layout from "./Components/Layout"; // This is your main layout component
import Whatsappchatbot from "./Pages/Services/Whatsappchatbot";

// import Ecomercepage from "./Pages/Onepage/Ecomercepage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/About-us" element={<AboutUs />} />
          <Route path="/Blogs" element={<Bloglist />} />
          <Route path="/Blogs/:blogUrl" element={<Blogdetails />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/Services" element={<ServiceList />} />
          <Route path="/E-commerce" element={<Ecommerce />} />
          <Route path="/App-development" element={<Appdevelopments />} />
          <Route path="/website-development" element={<Webdevelopments />} />
          <Route path="/Digital-marketing" element={<DigitalMarketing />} />
          <Route path="/Craetive-Service" element={<CreativeService />} />
          <Route
            path="/whatsapp-chatbot-development"
            element={<Whatsappchatbot />}
          />
          <Route path="/TermsandConditions" element={<Terms />} />
          {/* <Route path="/Team" element={<Team />} /> */}
          <Route path="/Privacy" element={<Privacy />} />
          {/* <Route path="/Career" element={<Careerlist />} /> */}
          <Route
            path="/Software-Development"
            element={<SoftWareDevelopment />}
          />
        </Route>

        {/* No Header or Footer for Thank-you page */}
        <Route path="/Thank-you" element={<Thankyou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
