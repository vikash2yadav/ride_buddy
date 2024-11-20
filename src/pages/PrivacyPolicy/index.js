import React from "react";
import Footer from "../../components/layouts/Footer";
import Header from "../../components/layouts/Header";
import {
  contactUs,
  NotPersonalInfo,
  purposeCollection,
  topicCovered,
} from "../../config/sampleData";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <div className="bg-white shadow-md border border-gray-300 rounded-2xl md:mx-20 lg:mr-96 lg:ml-40 mt-4 lg:mt-10 text-gray-800">
        <div className="max-w-full mx-auto px-6 py-6">
          <h1 className="text-2xl font-semibold text-left text-gray-800 mb-4">
            Privacy Policy
          </h1>
          <p className="text-left text-m text-gray-600 mb-1">
            ( Last Updated On : 20/11/2024 )
          </p>
          <p className="text-left text-m text-gray-600 mb-3">
            RideBuddy Software Private Limited and its affiliates, subsidiaries
            & associate companies as mentioned in this Privacy Policy
            (hereinafter referred individually and/ or collectively as
            RideBuddy) is/are concerned about the privacy of the data and
            information of the users accessing, offering, selling or purchasing
            products or services on any of RideBuddy websites, mobile sites or
            mobile applications thereof accessible through various internet
            enabled smart devices (individually and collectively referred to as
            “Platform”) or otherwise doing business with RideBuddy. This Privacy
            Policy applies to RideBuddy which includes all its affiliates,
            subsidiaries & associate companies and help you understand how we
            collect, use, store, process, transfer, share, and otherwise deal
            with and protect all your information when you visit any of our
            Platform and use our products and services or even otherwise visit
            the Platform.
          </p>
          <p className="text-left text-m text-gray-600 mb-3">
            THIS PRIVACY POLICY IS AN ELECTRONIC RECORD IN THE FORM OF
            ELECTRONIC CONTRACT IN TERMS OF INDIAN INFORMATION TECHNOLOGY ACT,
            2000 AND RULES MADE THEREUNDER (AS AMENDED FROM TIME TO TIME) AND
            DOES NOT REQUIRE ANY PHYSICAL SIGNATURE OR SEAL.
          </p>

          <p className="text-left text-m text-gray-600 mb-4">
            The term “We”/ “Us” / “Our” used in this document refer to RideBuddy
            and "You" / "Your" /"Yourself" refer to the users, who visit or
            access or use (collectively“usage”) Platform.
          </p>

          <div className="space-y-10">
            <section>
              <h1 className="text-2xl font-semibold text-left text-gray-800 mb-4">
                Terms & Conditions:
              </h1>
              <p className="text-lg text-gray-800 font-semibold mb-4">
                Acknowledgment:
              </p>

              <p className="text-left text-gray-600 mb-3">
                PLEASE READ THIS PRIVACY POLICY CAREFULLY. YOU INDICATE THAT YOU
                UNDERSTAND, AGREE AND CONSENT TO THIS PRIVACY POLICY. HENCE BY
                VISITING OUR PLATFORM OR BY USING / AVAILING ANY OF OUR SERVICE
                OR PRODUCT, YOU HEREBY GIVE YOUR UNCONDITIONAL CONSENT OR
                AGREEMENT TO RIDEBUDDY AS PROVIDED UNDER SECTION 43A AND SECTION
                72A OF INDIAN INFORMATION TECHNOLOGY ACT, 2000 FOR COLLECTION,
                USE, STORAGE, PROCESSING, SHARING AND TRANSFER AND DISCLOSURE OF
                YOUR INFORMATION.{" "}
              </p>

              <p className="text-left text-gray-600 mb-3">
                YOU ACKNOWLEDGE THAT YOU HAVE ALL LEGAL RIGHTS AND LAWFUL
                AUTHORITY TO SHARE THE INFORMATION WITH US AND FURTHER
                ACKNOWLEDGE THAT BY COLLECTING, SHARING, PROCESSING AND
                TRANSFERRING INFORMATION PROVIDED BY YOU, SHALL NOT CAUSE ANY
                LOSS OR WRONFUL GAIN TO YOU OR ANY OTHER PERSON.
              </p>

              <p className="text-left text-gray-600 mb-3">
                IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY,
                PLEASE DO NOT ACCESS / USE OUR PLATFORM OR AVAIL ANY OF OUR
                SERVICE OR PRODUCT ON OUR PLATFORM.
              </p>
            </section>

            <section>
              <p className="text-lg text-gray-800 font-semibold mb-4">
                Topics Covered:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {topicCovered.map((item) => (
                  <li className="">{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h1 className="text-xl font-semibold text-left underline text-gray-800 mb-4">
                Information We Collect (Your Information):
              </h1>

              <p className="text-left text-gray-600 mb-3">
                We collect Your information during Your usage of Platform or
                when You avail any of products or services available on or
                through Platform, either as a registered user or otherwise when
                you visit any of our other website pages or mobile applications.
              </p>

              <p className="text-left text-gray-600 mb-3">
                The information collected may consist of:
              </p>
              <p className="text-left text-gray-600 font-semibold mb-3">
                1) Your Personal Information:
              </p>

              <p className="text-left text-gray-600 mb-3">
                Your full name, age, address, email id, phone number, date of
                birth, gender, financial information, any other sensitive
                personal data or information etc. We collect Your Personal
                Information when You create an account at Our Platform or fill
                out a form or respond to a survey.
              </p>

              <p className="text-left text-gray-600 font-semibold mb-3">
                2) Your Non-Personal information:
              </p>

              {NotPersonalInfo.map((item) => (
                <p className="text-left text-gray-600 mb-3">
                  <span className="font-semibold">{item?.title} :</span>
                  {item?.description}
                </p>
              ))}
            </section>

            <section>
              <h1 className="text-xl font-semibold text-left underline text-gray-800 mb-4">
                Purpose of Collection, Storage, Processing of Your Information:
              </h1>
              <p className="mb-3 text-gray-600">
                RideBuddy collect Your Information solely for the purpose of
                providing you the products or services that is connected with
                the function or activity of the RideBuddy which includes but not
                limited to the following (“Purpose”):
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {purposeCollection.map((item) => (
                  <li className="">{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 mb-4">
                If you have any questions or concerns about this Privacy Policy,
                please contact us at:
              </p>
              <ul className="space-y-2 text-gray-600">
                {contactUs.map((item) => (
                  <li>
                    <strong className="font-medium">{item?.title} : </strong>{" "}
                    {item?.Value}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
