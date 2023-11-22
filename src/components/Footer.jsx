import React from "react";

const Footer = () => {
  const emailSubmit = () => {
    const p = document.getElementById("email-submit");
    p.innerHTML = `We will send an email soon!`;
  };
  return (
    <div>
      <footer className="bg-zinc-700 text-white  p-16">
        {/* <p className="font-semibold">&copy; Food Restaurant 2023</p> */}
        <div className="grid grid-cols-2">
          <div>
            <p className="pb-5">
              Sign up for exclusive offers, updates & more...{" "}
            </p>
            <p className="text-red-400" id="email-submit"></p>
            <input
              className="px-8 py-1 mr-4 rounded text-black"
              type="email"
              name=""
              id=""
              placeholder="  enter your email"
            />
            <button
              onClick={emailSubmit}
              className="rounded bg-red-600 px-8 py-1"
            >
              Submit
            </button>
          </div>

          <div className="space-y-4 ">
            <div className="flex gap-20 border-l pl-20 m:flex m:gap-16 m:border-l m:pl-16 sm:flex sm:gap-10 sm:border-l sm:pl-10">
              <ul className="space-y-5 ">
                <li className="hover:text-red-500">About</li>
                <li className="hover:text-red-500">Jobs</li>
                <li className="hover:text-red-500">Find us</li>
                <li className="hover:text-red-500">FAQs</li>
                <li className="hover:text-red-500">Franchising</li>
              </ul>
              <ul className="space-y-5">
                <li className="hover:text-red-500">Blog</li>
                <li className="hover:text-red-500">CEO</li>
                <li className="hover:text-red-500">Story</li>
                <li className="hover:text-red-500">Location</li>
                <li className="hover:text-red-500">Report</li>
              </ul>
              <ul className="space-y-5">
                <li className="hover:text-red-500">Careers</li>
                <li className="hover:text-red-500">Apply</li>
                <li className="hover:text-red-500">Help</li>
                <li className="hover:text-red-500">Contact us</li>
                <li className="hover:text-red-500">Pay rise report</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex pt-12 gap-4 justify-center pb-7">
          <img
            className=" w-8 m:w-8 sm:w-8"
            src="https://img.icons8.com/?size=96&id=Xy10Jcu1L2Su&format=png"
            alt=""
          />
          <img
            className=" w-8 m:w-8 sm:w-8"
            src="https://img.icons8.com/?size=96&id=5MQ0gPAYYx7a&format=png"
            alt=""
          />
          <img
            className=" w-8 m:w-8 sm:w-8"
            src="https://img.icons8.com/?size=96&id=19318&format=png"
            alt=""
          />
          <img
            className=" w-8 m:w-8 sm:w-8"
            src="https://img.icons8.com/?size=96&id=P7UIlhbpWzZm&format=png"
            alt=""
          />
        </div>
        <hr />
        <div className="flex justify-center gap-11 pt-8 text-gray-200">
          <p className="hover:text-red-500">Privacy Policy</p>
          <p className="hover:text-red-500">News</p>
          <p className="hover:text-red-500">T&Cs</p>
        </div>
        <p className="text-center text-xs pt-3">&copy; Food Restaurant 2023</p>
      </footer>
    </div>
  );
};

export default Footer;
