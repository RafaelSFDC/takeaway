import BrowseMenu from "../(home)/BrowseMenu";

export default function Order() {
  return (
    <div>
      <div className="w-full flex justify-center">
        <h1 className="text-6xl font-bold max-w-[800px]">
          Get your food <span className="text-primary">delivered</span>, or{" "}
          <span className="text-primary">picked up</span> in store.
        </h1>
      </div>

      <BrowseMenu full />
    </div>
  );
}
