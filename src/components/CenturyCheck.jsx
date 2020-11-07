import React from "react";
import useCheck from "../hooks/useCheck.js";

const mapStyles = {
  width: "100%",
  height: "100%",
};
const CenturyCheck = (props) => {
  const { status, data, error, isFetching } = useCheck();

  let gigaBit = data && data.filter((offer) => offer.downloadSpeedMbps > 900);
  console.log(status)
  return (
    <div>
      {status == "loading" && !isFetching && <div>{"Loading..."}</div>}
      {isFetching && <div>{"Updating..."}</div>}
      {status != "loading" && !isFetching && <div>{gigaBit[0] ? "Yes" : "Nope"}</div>}
      {data && data[0] && <div>{`Best known offer is ${data[0].downloadSpeedMbps} Mbps`}</div>}
    </div>
  );
};

export default CenturyCheck;
