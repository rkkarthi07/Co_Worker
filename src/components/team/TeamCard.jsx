import { team } from "../../dummydata";

const TeamCard = () => {
  return (
    <>
      {team.map((val, index) => (
        <div key={index} className="items shadow transition duration-500 hover:bg-teal-500 hover:text-white cursor-pointer">
          <div className="relative">
            <img src={val.cover} alt="" className="w-full h-full" />
            <div className="overlay absolute bottom-0 z-10 flex flex-col items-center justify-center p-5 opacity-0 transition duration-500 hover:opacity-100">
              <i className="fab fa-facebook-f icon bg-black text-white m-1 p-2 rounded-full transition duration-500 hover:bg-teal-500 hover:text-white"></i>
              <i className="fab fa-twitter icon bg-black text-white m-1 p-2 rounded-full transition duration-500 hover:bg-teal-500 hover:text-white"></i>
              <i className="fab fa-instagram icon bg-black text-white m-1 p-2 rounded-full transition duration-500 hover:bg-teal-500 hover:text-white"></i>
              <i className="fab fa-tiktok icon bg-black text-white m-1 p-2 rounded-full transition duration-500 hover:bg-teal-500 hover:text-white"></i>
            </div>
          </div>
          <div className="details p-5 text-center">
            <h2 className="font-semibold text-lg transition duration-500">{val.name}</h2>
            <p className="text-gray-500 mt-2 transition duration-500">{val.work}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamCard;
