import ChildComp from "./ChildComp";

const ParentProp = () => {
  let name = "Umair Ali Khan";
  return (
    <>
      <div className="flex flex-col justify-center space-y-2 bg-slate-500 items-center h-screen">
        {/* <h1 className="text-3xl font-bold mb-3">Parent Comp</h1> */}
        <ChildComp name={name} />
      </div>
    </>
  );
};

export default ParentProp;
