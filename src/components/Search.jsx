export default function Search(props) {
  return (
    <div className="flex">
      <input
        type="text"
        className="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md focus:outline-none"
        placeholder="Type any IP adress or get your ip info when empty"
      />
      <button className="bg-white flex items-center rounded-tr-md rounded-br-md p-2">
        <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-search-ecommerce-kiranshastry-gradient-kiranshastry.png" />
      </button>
    </div>
  );
}
