/* eslint-disable react-hooks/exhaustive-deps */
import { motion, AnimatePresence } from "framer-motion";
import {
  Outlet,
  Link,
  useNavigate,
  useLocation,
  useLoaderData,
} from "react-router-dom";
import { getUserAuth } from "../modules/servcies/auth_service";
import { useEffect, useState } from "react";
import { IUser } from "../modules/types/user";

export default function Layout() {
  const userData: IUser = useLoaderData() as IUser;
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebar, setIsSidebar] = useState<boolean>(false);

  async function validateToken() {
    const token = await getUserAuth();
    if (!token) {
      navigate("/login", {
        state: {
          prev: location.pathname,
        },
      });
    }
  }

  useEffect(() => {
    validateToken();
  }, []);

  function signOut() {
    localStorage.removeItem("userAuth");
    localStorage.removeItem("userId");
    navigate("/login", {
      replace: true,
    });
  }

  return (
    <main className="relative grid grid-cols-12 w-full h-screen">
      <section
        id="userDetail"
        className="hidden lg:block relative bg-blue-400 col-span-2"
      >
        <div className="h-screen w-full sticky top-0 flex flex-col justify-between items-center py-10 px-5">
          <Link to="/" className="text-white text-4xl">
            <i className="bx bx-home-alt"></i>
          </Link>
          <div className="flex flex-col items-center gap-10">
            <div className="w-24 h-24 rounded-full border-2 border-dashed p-1 border-white">
              <div className="w-full h-full rounded-full bg-red-300 overflow-hidden">
                {userData && (
                  <img src={userData.avatar} className="object-cover" />
                )}
              </div>
            </div>
            <div className="text-center text-white">
              <h3 className="text-xl font-semibold">{userData.name ?? ""}</h3>
              <h5>{userData.email ?? ""}</h5>
            </div>
          </div>
          <button
            onClick={signOut}
            className="max-w-[250px] w-full py-2 bg-white rounded font-medium"
          >
            Log Out
          </button>
        </div>
      </section>
      <AnimatePresence>
        {isSidebar && (
          <motion.section
            initial={{ left: -999 }}
            animate={{ left: 0 }}
            exit={{ left: -999 }}
            id="userDetail"
            className="block lg:hidden absolute bg-blue-400 z-20"
          >
            <div className="bg-blue-400 h-screen w-full sticky top-0 flex flex-col justify-between items-center py-10 px-5">
              <Link to="/" className="text-white text-4xl">
                <i className="bx bx-home-alt"></i>
              </Link>
              <div className="flex flex-col items-center gap-10">
                <div className="w-24 h-24 rounded-full border-2 border-dashed p-1 border-white">
                  <div className="w-full h-full rounded-full bg-red-300 overflow-hidden">
                    {userData && (
                      <img src={userData.avatar} className="object-cover" />
                    )}
                  </div>
                </div>
                <div className="text-center text-white">
                  <h3 className="text-xl font-semibold">
                    {userData.name ?? ""}
                  </h3>
                  <h5>{userData.email ?? ""}</h5>
                </div>
              </div>
              <button
                onClick={signOut}
                className="max-w-[250px] w-full py-2 bg-white rounded font-medium"
              >
                Log Out
              </button>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
      <section className="col-span-12 lg:col-span-10 lg:px-10 lg:py-5">
        <div className="text-white lg:text-black bg-blue-400 lg:bg-transparent sticky top-0 flex justify-between items-center mb-8 px-5 py-4 lg:p-0">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
            Travelyo
          </h1>
          <button
            className="flex flex-col gap-1 lg:hidden"
            onClick={() => setIsSidebar(!isSidebar)}
          >
            <span className="block w-6 h-1 bg-white"></span>
            <span className="block w-6 h-1 bg-white"></span>
            <span className="block w-6 h-1 bg-white"></span>
          </button>
        </div>
        <div className="px-5 lg:px-10">
          <Outlet />
        </div>
      </section>
    </main>
  );
}
