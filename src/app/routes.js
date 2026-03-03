import React from "react";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { Footer } from "../components/footer";   

function AppRoutes() {
  return (
    <div className="s_c">
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <Footer />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;