import React from "react";
import Service from "./components/service/Service";
import Job from "./components/job/Job";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/Footer/Footer";
import Hero from "./components/Hero/Hero";
import News from "./components/news";
import Category from "./components/category/Category";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Category />
      <Service />
      <Job />
      <News />
      <Footer />
    </div>
  );
}

export default App;
