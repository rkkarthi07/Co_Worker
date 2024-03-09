import React, { useRef, useState } from "react";
import { faq } from "../../dummydata";
import Heading from "../common/heading/Heading";

const Faq = () => {
  const [click, setClick] = useState(false);

  const toggle = (index) => {
    if (click === index) {
      return setClick(null);
    }
    setClick(index);
  };

  return (
    <>
      <Heading subtitle="FAQS" title="Frequently Ask Question" />
      <section className="faq">
        <div className="container max-w-3xl mx-auto">
          {faq.map((val, index) => (
            <div className="box bg-white mb-4" key={index}>
              <button
                className="accordion w-full flex justify-between px-4 py-2"
                onClick={() => toggle(index)}
              >
                <h2 className="font-medium">{val.title}</h2>
                <span>
                  {click === index ? (
                    <i className="fa fa-chevron-down"></i>
                  ) : (
                    <i className="fa fa-chevron-right"></i>
                  )}
                </span>
              </button>
              {click === index && (
                <div className="text p-4">{val.desc}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Faq;
