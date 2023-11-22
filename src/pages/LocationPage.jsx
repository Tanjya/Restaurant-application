import React from "react";

const LocationPage = () => {
  return (
    <div className="bg-orange-50 ">
      <div className="background-locationPage py-96">
        <p className="font-bold text-white text-5xl text-center bg-cyan-500 mx-52 py-4">
          FIND YOUR NEAREST FAVOURITE TAKEAWAY
        </p>
      </div>
      <div className="lg:flex px-20 gap-10    sm:justify-center sm:px-20 sm:gap-10">
        <img
          className="w-7/12 pb-20 md:w-9/12  sm:w-11/12 sm:pl-20"
          src="https://st3.depositphotos.com/2567911/17619/v/450/depositphotos_176194122-stock-illustration-united-kingdom-aka-uk-of.jpg"
          alt=""
        />

        <div>
          <p className="text-center font-bold text-3xl pt-24 text-red-400 m:pt-20 ">
            NATIONWIDE TAKEAWAY
          </p>
          <br />
          <p>
            If you’re looking for takeaway pasta, you can find a location right
            across the UK. Simply search for your area or type in your postcode
            to find your nearest takeaway. You can get your favourite pasta
            dishes delivered straight to your door through our trusted partners
            (Deliveroo, Just Eat, Uber Eats). With over 100 local delivery
            kitchens, you’ll certainly be able to find a restaurant near you.
          </p>
          <br />
          <p>
            The more ways to get your food fix, the merrier. Are we right or are
            we right? Order your favourite dishes online get your food in a
            hurry! We know that life can be hectic. That’s why we have created
            perfect blend between food-on-the-go and delicious cuisine.
          </p>
        </div>
      </div>

      <div className="lg:flex  px-20 gap-10 justify-between text-center  sm:justify-center sm:px-20 sm:gap-10">
        <div className="space-y-4">
          <h1 className="font-bold text-3xl pt-24 text-red-400">
            Explore More Locations
          </h1>
          <p className="pt-4">
            Takeaway pasta is now available across the UK! Simply enter your
            postcode to find the nearest restaurant and have your favorite pasta
            dishes delivered straight to your door through our trusted partners
            (Deliveroo, Just Eat, Uber Eats). With over 100 local delivery
            kitchens, you're sure to find a restaurant near you. We know that
            life can be busy, so we've made it easy for you to get your food fix
            in a hurry. Order your favorite dishes online and enjoy delicious
            food on-the-go.
            <p>The more ways to get your food, the better!</p>
          </p>
        </div>

        <img
          className="lg:w-6/12 pb-20  sm:pt-7 sm:w-9/12 sm:ml-32"
          src="https://www.lifewire.com/thmb/YBQuRMKxxhx3Zb3uJ1x-QOT6VsM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Maplocation_-5a492a4e482c52003601ea25.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default LocationPage;
