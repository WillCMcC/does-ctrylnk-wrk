import React from "react";
import { PuffLoader } from "react-spinners";
import useCheck from "../hooks/useCheck.js";
import useBestOffer from "../hooks/useBestOffer.js";

const CenturyCheck = (props) => {
  const { status, data, error, isFetching } = useCheck();
  const { status: bestStatus, data: bestOffer } = useBestOffer();

  let gigaBit = [];

  if (data && !bestOffer.fiber) {
    gigaBit = data && data.filter((offer) => offer.downloadSpeedMbps > 900);
  } else if (bestOffer && bestOffer.fiber) {
    gigaBit = [bestOffer];
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        padding: "60px",
        backgroundColor: "rgba(0,0,0,.1)",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div style={{ opacity: isFetching ? ".6" : "0" }}>
        <PuffLoader size={20} />
      </div>
      <h1>Do Chelsea and Will have gigbit ethernet available yet?</h1>
      {bestStatus != "loading" && <h2>{gigaBit[0] ? "Yes" : "Nope"}</h2>}
      {status == "loading" && !isFetching && <div>{"Loading..."}</div>}
      {bestOffer && bestOffer[0] && (
        <div>
          <div>{`Best known offer is ${bestOffer[0].mbps} Mbps down at $${bestOffer[0].price}/month`}</div>
          <div
            style={{
              fontWeight: 'lighter'
            }}
          >"{bestOffer[0].description}"</div>
        </div>
      )}
    </div>
  );
};

export default CenturyCheck;
