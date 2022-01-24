export default function IPInfo(props) {
  const { info } = props;
  const infoLocates = [
    { title: "IP Adress", value: info.ip },
    { title: "Isp", value: info.isp },
    { title: "Location", value: info.location.region },
    { title: "Time zone", value: info.location.timezone },
  ];
  return (
    <div className="absolute -bottom-20 flex gap-y-4 gap-x-2 lg:gap-x-12 px-8 pt-8 pb-12 rounded-md bg-white text-blue-800 max-w-full">
      {infoLocates.map((item, index) => {
        return (
          <div className="flex flex-col" key={index}>
            <h3 className="text-xs mb-2 uppercase">{item.title}</h3>
            <span className="text-xs lg:text-2xl">{item.value}</span>
          </div>
        );
      })}
    </div>
  );
}
