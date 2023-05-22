"use client";
import React from "react";
import CustomMediaQuery from "./CustomMediaQuery";

const FeatureSection = ({}) => {
  const isLargeScreen = CustomMediaQuery("(min-width: 1200px)");

  return (
    <>
      {/* Card 1 */}
      <section className="w-screen items-center flex flex-col gap-8 justify-center my-[100px]">
        <div className="lg:grid-cols-2 xxs:grid-cols-1 grid gap-8 px-4 items-center max-w-[70%] text-white opacity-80">
          {/* Image */}
          <div className=" ">
            <img
              src="/landingimage.jpg"
              alt="Picture of the author"
              className=" object-cover opacity-70 rounded-lg"
            />
          </div>
          {/* Text */}
          <div className="flex flex-col justify-around text-start h-full">
            <h1 className="heading xxl:text-5xl sm:text-5xl xs:text-3xl xxs:text-xl text font-semibold opacity-80  items-end">
              Feature
            </h1>
            <h1 className="xxl:text-3xl sm:text-3xl xs:text-xl xxs:text-lg opacity-80  items-end">
              Experience luxury and performance like never before with Porche's
              iconic lineup of precision-engineered vehicles.
            </h1>
            <div className="flex justify-start gap-2 opacity-100 sm:flex-row xxs:flex-col">
              <button className="bg-primary px-8 py-3 text-white opacity-100 rounded-md min-w-[130px]">
                Try now
              </button>
              <button className="px-8 py-3 bg-gray-700 text-white rounded-md min-w-[130px]">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Card 2 */}
      <section className="w-screen items-center flex justify-center">
        {isLargeScreen ? (
          <div className="grid-cols-2 grid gap-8 px-4 items-center max-w-[70%] text-white opacity-80">
            {/* Text */}
            <div className="flex flex-col justify-around items-start text-start h-full w-full">
              <h1 className="heading xxl:text-5xl sm:text-5xl xs:text-3xl xxs:text-xl text font-semibold opacity-80 ">
                Feature
              </h1>
              <h1 className="xxl:text-3xl sm:text-3xl xs:text-xl xxs:text-lg opacity-80">
                Experience luxury and performance like never before with
                Porche's iconic lineup of precision-engineered vehicles.
              </h1>
              <div className="flex justify-start gap-2 opacity-100 sm:flex-row xxs:flex-col">
                <button className="bg-primary px-8 py-3 text-white opacity-100 rounded-md min-w-[130px]">
                  Try now
                </button>
                <button className="px-8 py-3 bg-gray-700 text-white rounded-md min-w-[130px]">
                  Learn more
                </button>
              </div>
            </div>
            {/* Image */}
            <div className=" ">
              <img
                src="/landingimage.jpg"
                alt="Picture of the author"
                className=" object-cover opacity-70 rounded-lg"
              />
            </div>
          </div>
        ) : (
          <div className="lg:grid-cols-2 xxs:grid-cols-1 grid gap-8 px-4 items-center max-w-[70%] text-white opacity-80">
            {/* Image */}
            <div className=" ">
              <img
                src="/landingimage.jpg"
                alt="Picture of the author"
                className=" object-cover opacity-70 rounded-lg"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col justify-around text-start h-full">
              <h1 className="heading xxl:text-5xl sm:text-5xl xs:text-3xl xxs:text-xl text font-semibold opacity-80  items-end">
                Feature
              </h1>
              <h1 className="xxl:text-3xl sm:text-3xl xs:text-xl xxs:text-lg opacity-80  items-end">
                Experience luxury and performance like never before with
                Porche's iconic lineup of precision-engineered vehicles.
              </h1>
              <div className="flex justify-start gap-2 opacity-100 sm:flex-row xxs:flex-col">
                <button className="bg-primary px-8 py-3 text-white opacity-100 rounded-md min-w-[130px]">
                  Try now
                </button>
                <button className="px-8 py-3 bg-gray-700 text-white rounded-md min-w-[130px]">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default FeatureSection;
