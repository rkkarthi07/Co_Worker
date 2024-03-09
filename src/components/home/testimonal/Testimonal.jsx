
import { testimonal } from "../../../dummydata";
import Heading from "../../common/heading/Heading";

const Testimonial = () => {
  return (
    <>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <Heading subtitle="TESTIMONIAL" title="Our Workers" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {testimonal.map((val, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:bg-teal-500 hover:text-white cursor-pointer"
              >
                <div className="flex items-center">
                  <img
                    className="w-16 h-16 rounded-full mr-4"
                    src={val.cover}
                    alt=""
                  />
                  <i className="fa fa-quote-left text-teal-500"></i>
                </div>
                <div className="mt-4">
                  <h2 className="text-lg font-semibold">{val.name}</h2>
                  <span className="text-gray-500">{val.post}</span>
                </div>
                <p className="mt-4 text-gray-500">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
