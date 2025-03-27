import React from "react";
import EventNoteIcon from "@mui/icons-material/EventNote";
import OpacityIcon from "@mui/icons-material/Opacity";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import AirlineSeatReclineNormalOutlinedIcon from "@mui/icons-material/AirlineSeatReclineNormalOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CarpenterOutlinedIcon from "@mui/icons-material/CarpenterOutlined";
import PodcastsOutlinedIcon from "@mui/icons-material/PodcastsOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";

import Rows from "./Rows";

const Overview = ({ title, data }) => {
  return (
    <>
      <div className="border border-gray-300 text-gray-800 py-4 rounded-2xl shadow-sm mb-3">
        <h1 className="text-xl font-medium mx-8 mb-5 noto_font">{title}</h1>

        <div className="mx-8 grid md:grid-cols-2 gap-4 text-gray-800 mb-5">
          <Rows
            title="Registration No"
            value={data?.registration_number}
            icon={<EventNoteIcon />}
          />
          <Rows
            title="Fuel Type"
            value={data?.fuel_type}
            icon={<OpacityIcon />}
          />
          <Rows
            title="Insurance Type"
            value={data?.insurance_type}
            icon={<EventNoteIcon />}
          />
          <Rows
            title="Insurance No"
            value={data?.insurance_policy_number}
            icon={<ShieldOutlinedIcon />}
          />
          <Rows
            title="Seats"
            value={data?.seats}
            icon={<AirlineSeatReclineNormalOutlinedIcon />}
          />
          <Rows
            title="Kms Driven"
            value={data?.km_driven}
            icon={<SpeedOutlinedIcon />}
          />
          <Rows
            title="RTO"
            value={data?.rto}
            icon={<LocationCityOutlinedIcon />}
          />
          <Rows
            title="Ownership"
            value={data?.ownership}
            icon={<PermIdentityOutlinedIcon />}
          />
          <Rows
            title="Transmission"
            value={data?.transmission}
            icon={<PodcastsOutlinedIcon />}
          />
          <Rows
            title="Year Manufacture"
            value={data?.year}
            icon={<DateRangeOutlinedIcon />}
          />
                    <Rows
            title="Engine Displacement"
            value={data?.engine_capacity}
            icon={<CarpenterOutlinedIcon />}
          />
        </div>
      </div>
    </>
  );
};

export default Overview;
