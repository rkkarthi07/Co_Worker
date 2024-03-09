import React from "react";
import Back from "../common/back/Back";
import PriceCard from "./PriceCard";
import Faq from "./Faq";

const Pricing = () => {
  return (
    <>
      <Back title="Choose The Right Plan" />
      <section className="price py-8">
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <PriceCard />
        </div>
      </section>
      <Faq />
    </>
  );
};

export default Pricing;
