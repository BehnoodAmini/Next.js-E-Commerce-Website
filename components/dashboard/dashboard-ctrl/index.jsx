import DCBtn from "./btn";

const DashboardCtrl = ({setContentChanger}) => {
  return (
    <div className="w-60 bg-zinc-200 p-4 rounded-lg flex justify-center items-center">
      <div className="flex flex-col gap-6 ">
        <DCBtn title={"بنرهای تبلیغاتی"} content={"midBan"} setContentChanger={setContentChanger}/>
        <DCBtn title={"اسلایدرها"} content={"sliders"} setContentChanger={setContentChanger}/>
      </div>
    </div>
  );
};

export default DashboardCtrl;
