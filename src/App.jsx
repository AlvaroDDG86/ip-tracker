import background from './assets/images/bg.svg'
import IPInfo from './components/IPInfo';
import Search from './components/Search';

function App() {
  return (
    <div className="flex flex-col h-screen max-h-screen">
      <div className="flex justify-center relative px-4 pt-8 pb-32 bg-cover bg-center"  style={{ backgroundImage: `url(${background})` }}>
        <div className="w-full max-w-screen-sm">
          <h1 className="text-center text-white text-3xl pb-4">React IP Tracker</h1>
          <Search />
        </div>
        <IPInfo />
      </div>
    </div>
  );
}

export default App;
