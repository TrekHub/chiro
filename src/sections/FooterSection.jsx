const FooterSection = () => {
  return (
    <div className="h-80 w-full bg-custom-dark-green py-10">
      <div className="w-11/12 mx-auto">
        <div className="flex  justify-around">
          <div className="w-2/5">
            <h1 className="text-white text-lg font-bold font-urbanist mb-5 ">
              About Us
            </h1>
            <p className="text-gray-500 text-sm font-urbanist font-light ">
              We are a team of designers and developers that create high quality
              HTML Template & WordPress Theme.
            </p>
          </div>

          <div className="w-1/5">
            <h1 className="text-white text-lg font-bold font-urbanist mb-5">
              Contact Us
            </h1>
            <p className="text-gray-500 text-sm font-urbanist font-light mb-2">
              1234 North Luke Lane, South Bend, IN 360001
            </p>
            <p className="text-gray-500 text-sm font-urbanist font-light mb-2">
              +254 706 271 861
            </p>
            <p className="text-gray-500 text-sm font-urbanist font-light mb-2">
              teddyomondi001@gmail.com{" "}
            </p>
          </div>

          <div className="w-1/5">
            <h1 className="text-white text-lg font-bold font-urbanist mb-5">
              Links
            </h1>
            <p className="text-gray-500 text-sm font-urbanist font-light mb-2">
              Home
            </p>
            <p className="text-gray-500 text-sm font-urbanist font-light mb-2">
              Shop
            </p>
            <p className="text-gray-500 text-sm font-urbanist font-light mb-2">
              Blog
            </p>
            <p className="text-gray-500 text-sm font-urbanist font-light">
              Contact
            </p>
          </div>
        </div>
        <hr className="w-full h-0.5  my-10 bg-gray-500 border-0 rounded"></hr>
        <div className="flex justify-between">
          <div className="text-gray-500  text-sm font-urbanist font-light">
            © 2024 All Rights Reserved.
          </div>
          <div className="text-gray-500  text-sm font-urbanist font-light">
            Designed by Teddy Omondi
          </div>
          <div className="text-gray-500  text-sm font-urbanist font-light">
            Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
