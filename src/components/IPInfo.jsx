export default function IPInfo(props) {
  const info = [
    { title: "IP Adress", value: "8.8.8.8" },
    { title: "IP Adress", value: "8.8.8.8" },
    { title: "IP Adress", value: "8.8.8.8" },
    { title: "IP Adress", value: "8.8.8.8" },
  ];
  return (
    <div className="absolute -bottom-20 flex gap-y-4 gap-x-12 px-8 pt-8 pb-12 rounded-md bg-white text-blue-800">
      {info.map((item, index) => {
        return (
          <div className="flex flex-col" key={index}>
            <h3 className="text-xs mb-2 uppercase">{item.title}</h3>
            <span className="text-2xl">{item.value}</span>
          </div>
        );
      })}
    </div>
  );
}
