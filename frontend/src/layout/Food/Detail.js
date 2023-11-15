import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getImageURL, getFoodDetailByID } from "../../utils/api";
import { isEmpty } from "../../utils/util";
import Button from "react-bootstrap/Button";
import { DetailBodyWrapper, TopContentWrapper } from "./styled-components";

export default function Detail() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    getFoodDetailByID(id).then((foodDetail) => {
      setData(foodDetail);
    });
  }, [id]);
  return (
    <div className="m-sm-4">
      <DetailBodyWrapper>
        <h1>{data.name}</h1>
        <div className="d-flex align-items-end m-sm-5">
          <TopContentWrapper>
            <img
              src={getImageURL(data.photo)}
              title={data.name}
              alt={data.name}
            />
            <div className="button-class">
              <a href={data.website_url} target="_blank" rel="noreferrer">
                <Button
                  className="mr-2"
                  style={{
                    margin: "9px",
                    color: "#E1E8ED",
                    backgroundColor: "#1DA1F2",
                    border: "none",
                  }}
                >
                  See Website
                </Button>
              </a>
              <a href={data.map_url} target="_blank" rel="noreferrer">
                <Button
                  style={{
                    margin: "9px",
                    color: "#E1E8ED",
                    backgroundColor: "#1DA1F2",
                    border: "none",
                  }}
                >
                  See Map
                </Button>
              </a>
            </div>
          </TopContentWrapper>
        </div>
        <div className="m-sm-5">
          <p>{data?.editorial_summary?.overview}</p>
          <div>
            <span className="font-weight-bold mr-2">Service options:</span>
            <ul>
              <li>{data.curbside_pickup ? "curbside pickup" : ""}</li>
              <li>{data.delivery ? "delivery" : ""}</li>
              <li>{data.dine_in ? "dine in" : ""}</li>
              <li>{data.reservable ? "reservable" : ""}</li>
              <li>{data.curbside_pickup ? "curbside pickup" : ""}</li>
              <li>{data.serves_beer ? "serves beer" : ""}</li>
              <li>{data.serves_dinner ? "serves dinner" : ""}</li>
              <li>{data.serves_lunch ? "serves lunch" : ""}</li>
              <li>
                {data.serves_vegetarian_food ? "serves vegetarian food" : ""}
              </li>
              <li>{data.serves_wine ? "serves wine" : ""}</li>
              <li>{data.takeout ? "takeout" : ""}</li>
              <li>
                {data.wheelchair_accessible_entrance
                  ? "wheelchair accessible entrance"
                  : ""}
              </li>
            </ul>
          </div>
          <div className="m-sm-5">
            <p>{data?.editorial_summary?.overview}</p>
            <div>
              <span className="font-weight-bold mr-2">Service options:</span>
              <ul>
                <li>{data.curbside_pickup ? "curbside pickup" : ""}</li>
                <li>{data.delivery ? "delivery" : ""}</li>
                <li>{data.dine_in ? "dine in" : ""}</li>
                <li>{data.reservable ? "reservable" : ""}</li>
                <li>{data.curbside_pickup ? "curbside pickup" : ""}</li>
                <li>{data.serves_beer ? "serves beer" : ""}</li>
                <li>{data.serves_dinner ? "serves dinner" : ""}</li>
                <li>{data.serves_lunch ? "serves lunch" : ""}</li>
                <li>
                  {data.serves_vegetarian_food ? "serves vegetarian food" : ""}
                </li>
                <li>{data.serves_wine ? "serves wine" : ""}</li>
                <li>{data.takeout ? "takeout" : ""}</li>
                <li>
                  {data.wheelchair_accessible_entrance
                    ? "wheelchair accessible entrance"
                    : ""}
                </li>
              </ul>
            </div>
            <p>
              <span className="font-weight-bold mr-2">Address:</span>
              {data.formatted_address}
            </p>
            <p>
              <span className="font-weight-bold mr-2">Phone Number:</span>
              {data.international_phone_number}
            </p>
            {!isEmpty(data.opening_hours?.weekday_text) && (
              <div>
                <span className="font-weight-bold mr-2">Opening hours:</span>
                {data.opening_hours?.weekday_text?.map((item, index) => (
                  <p className="ml-4" key={index}>
                    {item}
                  </p>
                ))}
              </div>
            )}
            <p>
              <span className="font-weight-bold mr-2">Price Level:</span>
              {data.price_level}
            </p>
            <p>
              <span className="font-weight-bold mr-2">Rating:</span>
              {data.rating}
            </p>
            <p>
              <span className="font-weight-bold mr-2">User Ratings Total:</span>
              {data.user_ratings_total}
            </p>
            {!isEmpty(data.reviews) && (
              <>
                <p className="font-weight-bold mr-2">Reviews:</p>
                {data.reviews.map((item, index) => (
                  <div key={index}>
                    <div className="text-center w-25">
                      <img src={item.profile_photo_url} alt="profile"></img>
                      <p>{item.author_name}</p>
                    </div>
                    <p>
                      <span className="font-weight-bold mr-2">Rating:</span>
                      {item.rating}
                    </p>
                    <p>
                      <span className="font-weight-bold mr-2">
                        relative time:
                      </span>
                      {item.relative_time_description}
                    </p>
                    <p>{item.text}</p>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </DetailBodyWrapper>
    </div>
  );
}
