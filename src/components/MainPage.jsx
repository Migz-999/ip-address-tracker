import InfoContainer from "./InfoContainer";
import Map from "./Map";
import Searchbar from "./Searchbar";
import React, { useState } from "react";

export default function MainPage() {
  const [response, setResponse] = useState({
    "ip": "-",
    "location": {
      "country": "-",
      "region": "-",
      "timezone": "-",
      "lat": 52.51,
      "lng": 13.38,

    },
    "isp": "-"
  });

  return (
    <div className="bg-[url('../src/assets/pattern-bg-desktop.png')] bg-no-repeat bg-cover">
      <h1 className="text-3xl text-bold text-center text-white">
        IP Address Tracker
      </h1>
      <Searchbar setResponse={setResponse} />
      <InfoContainer response={response} />
      <Map response={response}/>
    </div>
  );
}