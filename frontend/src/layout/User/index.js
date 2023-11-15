import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../utils/api";
import { UserBodyWrapper } from "./styled-components";

const UserPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  console.log(id);

  useEffect(() => {
    getUserById(id).then((userDetail) => {
      setData(userDetail);
    });
  }, [id]);
  console.log(data);
  return (
    <div className="m-sm-4">
      <UserBodyWrapper>
        <div>
          <h3>
            {data.first_name ? data?.first_name : null}{" "}
            {data.last_name ? data?.last_name : null}
          </h3>
        </div>
        {data?.email ? (
          <div>
            <span>{data?.email}</span>
          </div>
        ) : null}
        {data?.identify ? (
          <div>
            <span>{data?.identify}</span>
          </div>
        ) : null}
        {data?.age ? (
          <div>
            <span>{data?.age}</span>
          </div>
        ) : null}
        {data?.ideal ? (
          <div>
            <h5>Ideal Outing</h5>
            {data?.ideal?.map((option) => {
              return <span>{option}, </span>;
            })}
          </div>
        ) : null}
        {data?.reason ? (
          <div>
            <h5>Reason for Using Zappt</h5>
            {data?.reason?.map((option) => {
              return <span>{option}, </span>;
            })}
          </div>
        ) : null}
      </UserBodyWrapper>
    </div>
  );
};

export default UserPage;
