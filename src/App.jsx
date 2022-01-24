import { useState } from 'react'
import background from './assets/images/bg.svg'
import IPInfo from './components/IPInfo';
import Search from './components/Search';
import Map from './components/Map';
import 'leaflet/dist/leaflet.css';
import GeoService from './services/geo';

function App() {
  const [ ipInfo, setIpinfo] = useState('')
  async function searchIP(IP) {
    try {
      setIpinfo(IP)
      const res = await GeoService.getIPInfo(IP)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col h-screen max-h-screen">
      <div className="z-20 flex justify-center relative px-4 pt-8 pb-32 bg-cover bg-center"  style={{ backgroundImage: `url(${background})` }}>
        <div className="w-full max-w-screen-sm">
          <h1 className="text-center text-white text-3xl pb-4">React IP Tracker</h1>
          <Search onSearch={searchIP} />
        </div>
        { ipInfo && <IPInfo info={ipInfo} /> }
      </div>
      <Map />
    </div>
  );
}

export default App;
