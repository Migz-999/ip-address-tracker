import React, { useState } from 'react';

export default function Searchbar(props) {
  const apiKey = import.meta.env.VITE_API_KEY
  const {setResponse} = props
  const [ip, setIp] = useState("");
  async function SubmitYes(){
      const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`);
      const apiData = await response.json();
      setResponse(apiData)
  }

  return (
    <form className="flex m-8 justify-center">
      <input onChange={(event) => setIp(event.target.value)} className="p-2 pl-4 w-96 rounded-l-lg" type="text" required placeholder="Search for any IP address or domain" />
      <button type="button" onClick={() => SubmitYes()} className="p-4 bg-black rounded-r-lg" >
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/></svg>
      </button>
    </form>
  );
}