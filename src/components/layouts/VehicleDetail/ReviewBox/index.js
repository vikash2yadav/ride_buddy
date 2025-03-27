import React, { useContext } from "react";
import GradeIcon from "@mui/icons-material/Grade";
import { Avatar } from "@mui/material";
import { format } from "date-fns";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { CommonContext } from "../../../../context/CommonContext";

const ReviewBox = ({ title, data }) => {
  const { currentLangCode } = useContext(CommonContext);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "dd MMM yyyy");
  };

  const calculateAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) return 0;
    const totalRating =
      reviews?.length > 0 &&
      reviews?.reduce((acc, review) => acc + review.rating, 0);
    return (totalRating / reviews.length).toFixed(1); // Keep one decimal place
  };

  const averageRating = calculateAverageRating(data);

  return (
    <>
      <div className="border text-gray-800 border-gray-300 py-4 rounded-2xl shadow-sm mb-3">
        <div className="mx-8">
          <h1 className="text-xl font-medium mb-3 noto_font">{title}</h1>

          {data?.length > 0 ? (
            <>
              <div className="text-5xl items-center flex md:mb-8 mb-5">
                {React.cloneElement(<GradeIcon className="text-orange-400" />, {
                  style: { fontSize: "40px" },
                })}

                <p className="mx-2 font-medium noto_font">{averageRating}</p>
                <p className="text-sm w-32 base_font">
                  {currentLangCode === "hn"
                    ? "समग्र रेटिंग के आधार पर"
                    : currentLangCode === "guj"
                    ? "પર આધારિત એકંદર રેટિંગ"
                    : "Overall Rating Based on"} &nbsp;
                  <span className="font-medium">{data?.length} reviews</span>
                </p>
              </div>
              <div className="base_font">
                <h1 className="text-lg font-medium mb-5">
                  {data?.length} &nbsp;
                  {currentLangCode === "hn"
                    ? "समीक्षाएं और रेटिंग"
                    : currentLangCode === "guj"
                    ? "સમીક્ષાઓ અને રેટિંગ્સ"
                    : "Reviews and Ratings"}
                </h1>

                {data?.length > 0 &&
                  data?.map((item) => (
                    <div className="mb-8">
                      <div className="flex items-center mb-3 cursor-pointer">
                        <Avatar />
                        <div className="mx-3">
                          <p className="text-xs noto_font">
                            {item?.user?.fullName} wrote a review{" "}
                            {formatDate(item?.createdAt)}
                          </p>
                          <p className="font-medium noto_font">
                            {item?.rating}
                            {React.cloneElement(
                              <GradeIcon className="mx-1 text-orange-400" />,
                              {
                                style: { fontSize: "15px" },
                              }
                            )}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-800 font-medium mb-3 base_font">
                        {item?.review_text}
                      </p>
                      <div className="flex gap-2 items-center text-xs">
                        <p>
                          {currentLangCode === "hn"
                            ? "क्या यह मददगार है?"
                            : currentLangCode === "guj"
                            ? "શું આ મદદરૂપ છે?"
                            : " Is this helpful?"}
                        </p>
                        {React.cloneElement(<ThumbUpOutlinedIcon />, {
                          style: { fontSize: "18px" },
                          className: "cursor-pointer text-gray-600",
                        })}
                        {item?.helpful_count}
                      </div>
                    </div>
                  ))}
              </div>
            </>
          ) : (
            <>
            <div className="flex justify-center items-center">
                <div className="mt-5 noto_font text-2xl text-[#EA850C]">No Data Found</div>
            </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ReviewBox;
