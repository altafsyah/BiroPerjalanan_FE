import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="grid grid-cols-12 w-full h-screen">
      <section id="userDetail" className="relative bg-blue-200 col-span-2">
        <div className="bg-red-500 h-screen w-full sticky top-0 flex flex-col justify-between items-center py-10">
          <div></div>
          <div className="flex flex-col items-center gap-10">
            <div className="w-24 h-24 rounded-full border-2 border-dashed p-1 border-white">
              <div className="w-full h-full rounded-full bg-red-300"></div>
            </div>
            <div className="text-center text-white">
              <h3 className="text-xl font-semibold">Si Badu</h3>
              <h5>badu@gmail.com</h5>
            </div>
          </div>
          <button className="max-w-[250px] w-full py-2 bg-white rounded font-medium">
            Log Out
          </button>
        </div>
      </section>
      <section className="col-span-10 px-10 py-10">
        <h1 className="text-4xl font-bold mb-8">Travelyo</h1>
        <div>
          <Outlet />
        </div>
      </section>
    </main>
  );
}
