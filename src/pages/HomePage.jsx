import React from "react";

const HomePage = () => {
  return (
    <div className="py-10 bg-orange-50">
      <h2 className="text-center font-bold text-3xl p-6">
        Try Our Latest Snack...
      </h2>
      <div className="flex justify-center gap-6 md:flex md:justify-center sm:flex sm:justify-center">
        <img
          className="w-3/12"
          src="https://www.cocodimama.co.uk/propeller/uploads/2021/09/White-choc-bomboloni-trio-916x916-1.jpg?format=auto&width=1024"
          alt=""
        />
        <img
          className="w-3/12"
          src="https://www.cocodimama.co.uk/propeller/uploads/2022/05/Bomboloni-trio-updated-916x916-1.jpg?format=auto&width=1024"
          alt=""
        />
        <img
          className="w-3/12"
          src="https://www.cocodimama.co.uk/propeller/uploads/2021/09/White-choc-bomboloni-trio-916x916-1.jpg?format=auto&width=1024"
          alt=""
        />
      </div>
      <div className="text-center font-medium p-8">
        <h1 className="text-2xl font-bold">EAT IN, OR TAKE AWAY</h1>
        <p>
          Our restaurants are spacious with lots of light. Sharing tables,
          lounge chairs and window seats – all great for groups and chilled
          dates
        </p>
      </div>
      <div className="lg:flex justify-center gap-6 px-40 pb-10 md:flex md:justify-center md:gap-6  sm:justify-center sm:gap-6">
        <img
          src="https://www.cocodimama.co.uk/propeller/uploads/2021/11/IMG20211027121357-scaled-e1637616512564.jpg?format=auto&width=640"
          alt=""
        />
        <div className="text-center">
          <h1 className="font-bold text-xl text-red-500 pt-20">
            THE DAILY GRIND
          </h1>
          <br />
          <p className="text-gray-600">
            We’ve welcomed a keen new bean to our in-store menu, to help elevate
            the daily grind from as little as £1.50. Hailed from Yunnan, China,
            it goes by Aqi Badu and offers tasting notes of orange, cacao and
            cream.
          </p>
          <br />
          <p className="text-gray-600">
            Pop in with your reusable cup to save 50p on the cost, and enjoy
            your coffee for as little as £1!
          </p>
        </div>
      </div>
      <div className=" background-img py-72">
        <h1 className="text-center text-5xl text-white font-extrabold bg-red-400 mx-40 py-4">
          FOOD IS HAPPINESS, HAPPINESS IS FOOD!
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
