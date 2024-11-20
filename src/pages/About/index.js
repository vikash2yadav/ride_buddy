import React from "react";
import Footer from "../../components/layouts/Footer";
import Header from "../../components/layouts/Header";

const About = () => {
  return (
    <>
      <Header />
      <div className="bg-white border border-gray-300 shadow-md rounded-2xl md:mx-20 lg:mr-96 lg:ml-40 mt-4 lg:mt-10 text-gray-800">
        <div className="max-w-full mx-auto px-6 py-6">
          <h1 className="text-2xl font-semibold text-left text-gray-800 mb-4">
            About RideBuddy
          </h1>
          <p className="text-left text-m text-gray-600 mb-3">
            RideBuddy.com is India's leading car and bike rental venture that
            helps users rent cars that are right for them. Its website and app
            carry rich automotive content such as expert reviews, detailed specs
            and prices, comparisons as well as videos and pictures of all car
            brands and models available in India. The company has tie-ups with
            many auto manufacturers, more than 4000 car dealers and numerous
            financial institutions to facilitate the purchase of vehicles.
          </p>
          <p className="text-left text-m text-gray-600 mb-3">
            RideBuddy.com has launched many innovative features to ensure that
            users get an immersive experience of the car model before visiting a
            dealer showroom. These include a Feel The Car tool that gives
            360-degree interior/exterior views with sounds of the car and
            explanations of features with videos; search and comparison by make,
            model, price, features; and live offers and promotions in all
            cities. The platform also has used car classifieds wherein users can
            upload their cars for sale, and find used cars for buying from
            individuals and used car dealers.
          </p>
          <p className="text-left text-m text-gray-600 mb-3">
            Besides the above consumer product features, RideBuddy.com provides
            a rich array of tech-enabled tools to OE manufacturers and car
            dealers. These include apps for dealer sales executives to manage
            leads, cloud services for tracking sales performance, call tracker
            solution, digital marketing support, virtual online showroom and
            outsourced lead management operational process for taking consumers
            from enquiry to sale.
          </p>

          <p className="text-left text-m text-gray-600 mb-4">
            Our vision is to construct a complete ecosystem for consumers and
            car manufacturers, dealers and related businesses such that
            consumers have easy and complete access to not only buying and
            selling cars, but also manage their entire ownership experience, be
            it accessories, tyres, batteries, insurance or roadside assistance.
          </p>

          <p className="text-left text-m text-gray-600 mb-4">
            To diversify our product offerings we have ventured into car
            insurance business through{" "}
            <span className="font-semibold underline">
              <a href="#">RideBuddyInsurance.com</a>
            </span>
          </p>

          <div className="space-y-10">
            <section>
              <h1 className="text-2xl font-semibold text-left text-gray-800 mb-4">
                Investors and shareholders
              </h1>
              <p className="text-left text-gray-600 mb-3">
                RideBuddy.com, which went live in 2008, was set up by a bunch of
                young, enthusiastic IIT graduates. Its investors include Google
                Capital, Tybourne Capital, Hillhouse Capital, Sequoia Capital,
                HDFC Bank, Ratan Tata and Times Internet.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
