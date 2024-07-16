import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "./Card";
import { useSelector } from "react-redux";

import EvStationIcon from "@mui/icons-material/EvStation";
import AirIcon from "@mui/icons-material/Air";
import OilBarrelIcon from "@mui/icons-material/OilBarrel";
import SouthAmericaIcon from "@mui/icons-material/SouthAmerica";
import Hero from "./Hero";
import ProductList from "../../components/ProductList";
import Banner from "./Banner";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const {
    productsByFC,
    newProducts,
    nearByProducts,
    solidProducts,
    liquidProducts,
    gasProducts,
  } = useSelector((state) => state.products);
  const navigate = useNavigate();

  const handleCardClick = (category)=>{
    navigate(`/products`,{state:{categories:["solid"]}})
  }

  return (
    <div className="font-dmsans">
      <Navbar />
      <Hero />
      <div className="grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 grid-cols-1 grid-rows-4 gap-1 mx-6 px-6">
        <Card
          onClick={()=>handleCardClick("solid")}
          heading="Solid Fuels"
          border
          subHeading="Used in residential heating and traditional cooking methods."
          Icon={SouthAmericaIcon}
        />
        <Card
           onClick={()=>handleCardClick("liquid")}
          heading="Liquid Fuels"
          border
          subHeading="Derived from petroleum, utilized for transportation, heating, etc."
          Icon={OilBarrelIcon}
        />
        <Card
           onClick={()=>handleCardClick("gas")}
          border
          heading="Gas Fuels"
          subHeading="It is widely utilized for heating, cooking, and powering various appliances."
          Icon={AirIcon}
        />
        <Card
          border
          heading="EV"
          subHeading="It is the electrical energy stored in a battery used to power an electric vehicle."
          Icon={EvStationIcon}
        />
      </div>
      <ProductList title="Trending Products" products={newProducts} showPrice />
      <ProductList
        title="Solid Products"
        subtitle="Solid Products"
        products={solidProducts}
      />
      <Banner />
      <ProductList
        title="Liquid Products"
        subtitle="Liquid Products"
        products={liquidProducts}
      />
      <ProductList
        title="Gas Products"
        subtitle="Gas Products"
        products={gasProducts}
      />
      <Banner />
      <ProductList
        title="FCI Products"
        subtitle="Insurity, Qualtity."
        products={productsByFC}
      />
      <ProductList
        title="Nearby Products"
        subtitle="Fast delivery."
        products={nearByProducts}
      />
      <ProductList
        title="Featured Products"
        subtitle="Fast delivery."
        products={productsByFC}
      />
      <Banner />
      <ProductList
        title="Trending Products"
        subtitle="Frequently used."
        products={newProducts}
      />
      <ProductList
        title="New Products"
        subtitle="Better Quality."
        products={newProducts}
      />
      <Footer />
    </div>
  );
};

export default Home;
