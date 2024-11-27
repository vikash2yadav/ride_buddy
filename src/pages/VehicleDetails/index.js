import React, { useState } from "react";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import {
  overviewDetails,
  vehicleDetailKeyFeatures,
} from "../../config/sampleData";
import Overview from "../../components/layouts/VehicleDetail/Overview";
import Detailkeys from "../../components/layouts/VehicleDetail/Detailkeys";
import ImageBox from "../../components/layouts/VehicleDetail/ImageBox";
import Features from "../../components/layouts/VehicleDetail/Features";

const VehicleDetails = () => {
  // const params = useParams();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Header />
      <div className="py-3 grid grid-cols-5 gap-3 py-4 mt-3 mx-40">
        <div className="col-span-3 mx-10 ">
          {/* {image box } */}
          <ImageBox image="https://images10.gaadi.com/usedcar_image/4234356/original/processed_0b1e5188641eb731ad09354fc0fe212a.jpg?imwidth=640" />

          {/* {detail keys} */}
          <Detailkeys
            keys={vehicleDetailKeyFeatures}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />

          {/* overview */}
          <Overview title="Overview" data={overviewDetails} />

          {/* {features} */}
          <Features title={"Features"} data={''} />
        </div>

        <div className="">
          <h1>this is second part</h1>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default VehicleDetails;
