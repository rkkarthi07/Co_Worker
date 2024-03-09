
import "./courses.css";
import { online } from "../../dummydata";
import Heading from "../common/heading/Heading";

const OnlineCourses = () => {
  const slicedOnline = online.slice(0, 6); // Slice the array to get only the first 6 items
  const amenityNames = [
    "Blazing Fast Wifi",
    "Modern Lounge Areas",
    "Multi-Cuisine Restaurant",
    "Roof-Top Deck",
    "Free Printing",
    "Table Tennis and Foosball Table"
  ];

  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='Amenities' title='WE OFFER' />
          <div className='content grid3'>
            {slicedOnline.map((val, index) => (
              <div className='box' key={index}>
                <h1>{amenityNames[index]}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
