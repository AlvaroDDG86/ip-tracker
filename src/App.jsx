import { useEffect, useState } from "react";
import background from "./assets/images/bg.svg";
import IPInfo from "./components/IPInfo";
import Search from "./components/Search";
import Map from "./components/Map";
import "leaflet/dist/leaflet.css";
import LoadingOverlay from "react-loading-overlay";
import GeoService from "./services/geo";

function App() {
  const [ipInfo, setIpinfo] = useState("");
  const [marker, setMarker] = useState(null);
  const [errorMsg, setErrorMsg] = useState();
  const [ isSearching, setIsSearching ] = useState(false)

  useEffect(() => {
    searchIP('')
  }, [])

  async function searchIP(IP) {
    try {
      setIsSearching(true)
      const res = await GeoService.getIPInfo(IP);
      setIpinfo(res.data);
      setMarker([res.data.location.lat, res.data.location.lng]);
      setErrorMsg(null);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSearching(false)
    }
  }

  function onSearchError(msg) {
    setIpinfo(null);
    setMarker(null);
    setErrorMsg(msg);
  }

  return (
    <LoadingOverlay active={isSearching} spinner text="Searching information...">
      <div className="flex flex-col h-screen max-h-screen">
        <div
          className="z-20 flex justify-center relative px-4 pt-8 pb-32 bg-cover bg-center"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="w-full max-w-screen-sm">
            <h1 className="text-center text-white text-3xl pb-4">
              React IP Tracker
            </h1>
            <Search onSearch={searchIP} onSearchError={onSearchError} />
            {errorMsg && (
              <div className="bg-red-100 text-red-900 mt-2 rounded p-2 text-center text-xs font-bold uppercase">
                {errorMsg}
              </div>
            )}
          </div>
          {ipInfo && <IPInfo info={ipInfo} />}
        </div>
        <Map marker={marker} />
      </div>
    </LoadingOverlay>
  );
}

export default App;
