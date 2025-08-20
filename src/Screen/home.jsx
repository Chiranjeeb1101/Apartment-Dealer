import React from "react";
import Navbar from "../Components/navbar";
import Hero from "../Components/hero";
import About from "../Components/about";
import AdvantagesSection from "../Components/advantages";
import ProjectPhilosophy from "../Components/project";
import Apartments from "../Components/apartments";
import CityLife from "../Components/cityLife";
import FeaturesTable from "../Components/table";
import LocationArea from "../Components/location";
import Testimonials from "../Components/testimonials";
import SubmitForm from "../Components/submitForm";
import Footer from "../Components/footer";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <AdvantagesSection />
      <ProjectPhilosophy />
      <Apartments />
      <CityLife />
      <FeaturesTable />
      <LocationArea />
      <Testimonials />
      <SubmitForm />
      <Footer />
    </div>
  );
};

export default Home;
