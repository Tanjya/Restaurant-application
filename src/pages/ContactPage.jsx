import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-orange-50 ">
      <h1 className="text-5xl font-bold text-center  py-10 text-cyan-600">
        CONTACT OUR TEAM
      </h1>
      <p className=" text-gray-500 text-center">Let's chat</p>
      <h4 className="text-xl  px-40 py-4 text-gray-500 text-center">
        Hello. We want to know how we’re doing and love it when you get in
        touch. If you'd like us to respond to you, make sure you leave your
        contact details at the end of the survey and we'll aim to get back to
        you within 48 hours from Monday to Friday (but we're usually much
        quicker than this).
      </h4>
      <div className="lg:flex lg:justify-center lg:gap-16 md:flex md:justify-center md:gap-8 md:p-5 sm:p-10">
        <img
          src="https://www.tmforum.org/wp-content/uploads/2021/09/contact_us.svg"
          alt=""
        />
        <div className="pt-20 text-m  space-y-5 text-gray-500">
          <p>
            Something to tell us about our restaurants?{" "}
            <span className="text-orange-400 hover:text-orange-800">
              guesthappiness@kitchen.com
            </span>
          </p>
          <p>
            {" "}
            For press and media enquiries{" "}
            <span className="text-orange-400 hover:text-orange-800">
              {" "}
              press@kitchen.com
            </span>
          </p>
          <p>
            {" "}
            Something for our marketing team?
            <span className="text-orange-400 hover:text-orange-800">
              {" "}
              marketing@kitchen.com
            </span>
          </p>
          <p>
            {" "}
            For team reference requests please email
            <span className="text-orange-400 hover:text-orange-800">
              {" "}
              hradmin@kitchen.com
            </span>
          </p>
        </div>
      </div>
      <img
        className="p-20 "
        src="https://cdn.sanity.io/images/m6cxd6zv/production/0ad61261b1d559455801eb14b9e6da2b45302702-1600x1066.jpg?rect=0,83,1600,900&w=2560&h=1440&fit=clip&auto=format"
        alt=""
      />
      <div>
        <h1 className="text-4xl font-bold text-center text-cyan-800">
          ALLERGENS
        </h1>
        <p className="text-gray-500 text-center">
          We handle all allergens in our kitchen and cannot guarantee an
          allergen-free environment.
        </p>
        <div className="px-36 pt-10 pb-10 text-xl  space-y-5 text-gray-500 ">
          <h3 className="font-bold text-rose-700 text-2xl">
            Allergens at SHOHO
          </h3>
          <p>
            Our mission has always been to make it easy for everyone to eat well
            and live well, and that means creating good fast food that as many
            people as possible can enjoy.
          </p>
          <p>
            All of our teams are trained that in the event of a guest mentioning
            they have an allergy, the guest should be directed to our Foodie
            Fact Sheet. This lists every ingredient in our dishes with the
            allergens marked in bold, and listed again in a separate column. We
            keep copies of the Foodie Fact Sheet at our counters.
          </p>
          <p>
            If you have an allergy we ask that you check the Foodie Fact Sheet
            before you order. Even if you checked it on your last visit, we
            occasionally change our recipes and this is the only way to make
            sure you are receiving the most up-to-date information
          </p>
          <p className="font-bold text-orange-600">
            when ingredients are in the same kitchen it is impossible to
            guarantee that your dish will be 100% allergen-free.
          </p>
          <p>
            Which is why, if you do have a serious allergy, we have to ask you
            to make that known to us before dining so we can provide you with
            information to help you make safe choices.{" "}
          </p>
        </div>
      </div>
      <div className="background-contactPage py-96">
        <p className="text-center font-bold text-white text-4xl mb-10 ">
          YOUR HEALTH MATTERS
        </p>
      </div>
      <div className="px-36 pt-10  text-xl  space-y-5 text-gray-500 pb-10">
        <h1 className="font-bold text-rose-700 text-2xl">
          Nutritional Symbols
        </h1>
        <p>
          We believe that nourishing your body and delighting your taste buds
          should always go hand in hand. We’re not just a restaurant; we are a
          destination for those seeking a mindful and wholesome experience. We
          use a range of nutritional symbols to help you quickly identify the
          dishes we have on offer.
        </p>
        <p>
          For our <span className="text-black font-semibold">vegetarian</span>{" "}
          customers, we have created an array of dishes that celebrate the
          bountiful goodness of vegetables and plant-based ingredients. Whether
          you've embraced a vegetarian lifestyle or simply wish to indulge in
          meatless marvels, our menu is brimming with delicious options that
          will tantalize your senses and leave you craving for more.
        </p>
        <p>
          <span className="text-black font-semibold">Vegans, </span>
          rejoice! We have crafted a paradise of plant-powered choices, where
          every dish is free from animal products, yet bursting with flavour and
          creativity. Savor the delectable tastes of nature's finest offerings
          while knowing that you are treading lightly on the planet with every
          savoury bite.
        </p>
        <p>
          For those seeking{" "}
          <span className="text-black font-semibold">gluten-free </span>{" "}
          alternatives, we have gone the extra mile to ensure that your dining
          experience is both worry-free and scrumptious. Embrace the freedom to
          explore our menu, knowing that each dish has been carefully crafted to
          be utterly devoid of gluten, but never lacking in taste or variety.
        </p>
        <p>
          <span className="text-black font-semibold">Protein </span>
          enthusiasts, you're in for a treat! Indulge in our selection of dishes
          that are not just a source of protein but are generously high in this
          essential nutrient. Whether you're a fitness enthusiast, an athlete,
          or simply someone looking to build a balanced diet, our protein-rich
          options will fuel your body and ignite your passion for healthy
          living.
        </p>
        <p>
          We take pride in serving not only mouthwatering meals but also in
          being your ally in the journey towards a mindful and nutritionally
          conscious lifestyle. So come, join us in this celebration of food that
          is good for your body, good for your soul, and great for the world we
          share. Prepare to be dazzled by flavours, inspired by nutrition, and
          uplifted by the knowledge that every dish we serve has been crafted
          with love and care, just for you.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
