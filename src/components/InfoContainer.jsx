export default function InfoContainer(props) {
  const {response} = props
  const {ip, location, isp} = response||{}
  const {region, timezone} = location||{}

  return (
    <div
      id="infocontainer"
      className=" bg-white flex flex-row align-middle justify-center w-3/4 m-auto mt-24 h-48 rounded-xl text-left pl-8 pt-10 pb-10 "
    >
      <div id="ip-address" className="w-1/4">
        <h3 className="text-1xl font-bold">IP ADDRESS</h3>
        <span className="text-3xl font-bold">{ip}</span>
      </div>
      <div id="location" className="w-1/4 border-solid border-l-2 pl-8">
        <h3 className="text-1xl font-bold">LOCATION</h3>
        <span className="text-3xl font-bold">{region}</span>
      </div>
      <div id="timezone" className="w-1/4 border-l-2 pl-8">
        <h3 className="text-1xl font-bold">TIMEZONE</h3>
        <span className="text-3xl font-bold">{timezone}</span>
      </div>
      <div id="service-provider" className="w-1/4 border-l-2 pl-8">
        <h3 className="text-1xl font-bold">ISP</h3>
        <span className="text-3xl font-bold">{isp}</span>
      </div>
    </div>
  )}
