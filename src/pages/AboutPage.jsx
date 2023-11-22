import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-orange-50 ">
      <h1 className="text-5xl font-bold text-center py-10 text-cyan-600">
        ALL ABOUT US
      </h1>
      <p className="text-xl text-center px-40 py-4 text-gray-500">
        Our handmade fresh pasta and pizza is made in an open kitchen, so you
        can watch the chef make your meal exactly as you like it. Extra Chilli?
        Sure. No Garlic? No problem.
      </p>
      <p className="text-xl text-center px-40 text-gray-500">
        Perfect for all dietary preferences, intolerances and fussy eaters.
      </p>
      <p className="text-xl text-center px-40 py-4 text-gray-500">
        Our Italian restaurants are like nowhere else. Spacious, full of natural
        light with plenty of seats – sharing tables and lounge seating. You can
        sit where you like and stay as long as you want. The laid back vibes and
        great music make Vapiano one of *the* places to go and eat.
      </p>
      <p className="text-xl text-center px-40 text-gray-500">
        All orders are taken by scanning a QR code at your table, and we bring
        all food and drink to you – no more queuing for the chef.
      </p>
      <p className="text-xl text-center px-40 pb-4 text-gray-500">
        Come on by, you’ll love it,
      </p>
      <img
        src="https://vapiano.com/app/uploads/sites/2/2021/06/Screenshot-2021-06-04-at-12.51.25.png"
        alt=""
      />
      <p className="text-5xl font-bold text-center py-10  text-cyan-600">
        OUR STORY
      </p>
      <p className="text-xl text-center px-40 py-4 text-gray-500">
        Our one of a kind restaurant started in London, in 2003 and we opened
        our first UK restaurant in 2008 in Islington, by Angel station, truly
        offering something different.
      </p>
      <p className="text-xl text-center px-40 pb-4 text-gray-500">
        Personalisation was key and today that’s more relevant than ever.
        Handmade fresh pasta cooked in front of you, exactly as you like it.
        Extra chilli? Sure? No garlic? No problem. Can’t eat mushrooms? We’ll
        leave them out.
      </p>
      <p className="text-xl text-center px-40 pb-4 text-gray-500">
        Since our first restaurant in 2002, we now have over 134 restaurants
        across 25 countries including Austria, Australia, Bahrain, Columbia,
        Dubai, Egypt, France, Hungary, Lithuania, Netherlands, Poland, Qatar,
        Romania, Spain, Ukraine and more. Basically, wherever you travel, you’re
        pretty much guaranteed to get yourself a great bowl of Vapiano pasta.
      </p>
      <div className="grid grid-cols-2 gap-4 px-10 pb-14">
        <img
          src="https://vapiano.com/app/uploads/sites/2/2021/05/151124_vapiano_cornexchange_039.jpg"
          alt=""
        />
        <img
          src="https://vapiano.com/app/uploads/sites/2/2021/05/Screenshot-2021-05-28-at-16.46.16.png"
          alt=""
        />
        <img
          src="https://vapiano.com/app/uploads/sites/2/2021/06/team-1.jpg"
          alt=""
        />
        <img
          src="https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutPage;
