export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <div className="bg-white px-5 py-3 w-full rounded-xl border flex items-center gap-5 border-gray-300">
          <div className="h-8 aspect-square rounded-full bg-gray-300"></div>
          <input
            placeholder="Search tourist"
            className="outline-none w-full text-gray-500 focus:text-gray-800 transition-all duration-200"
          />
        </div>
        <div className="h-full w-full rounded-xl bg-blue-300"></div>
      </div>
      <div className="mt-5">
        <div className="py-2 flex justify-end items-center gap-2 text-2xl text-gray-500">
          <button>
            <i className="bx bx-chevrons-left hover:text-gray-800 transition-all duration-200" />
          </button>
          <button>
            <i className="bx bx-chevron-left hover:text-gray-800 transition-all duration-200" />
          </button>
          <button>
            <i className="bx bx-chevron-right hover:text-gray-800 transition-all duration-200" />
          </button>
          <button>
            <i className="bx bx-chevrons-right hover:text-gray-800 transition-all duration-200" />
          </button>
        </div>
        <table className="w-full border-2 mt-2">
          <thead>
            <tr className="text-left">
              <th className="text-center w-1/12 py-5">No.</th>
              <th className="w-3/12">Name</th>
              <th className="w-3/12">Email</th>
              <th className="w-2/12">Location</th>
              <th className="w-3/12">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-red-100">
              <td className="text-center py-5">1</td>
              <td>Miss Patricia Nicolas Sandra</td>
              <td>Josie75@gmail.com</td>
              <td>La Mirada</td>
              <td>Edit Delete View</td>
            </tr>
            <tr className="bg-red-100">
              <td className="text-center py-5">1</td>
              <td>Miss Patricia Nicolas Sandra</td>
              <td>Josie75@gmail.com</td>
              <td>La Mirada</td>
              <td>Edit Delete View</td>
            </tr>
            <tr className="bg-red-100">
              <td className="text-center py-5">1</td>
              <td>Miss Patricia Nicolas Sandra</td>
              <td>Josie75@gmail.com</td>
              <td>La Mirada</td>
              <td>Edit Delete View</td>
            </tr>
            <tr className="bg-red-100">
              <td className="text-center py-5">1</td>
              <td>Miss Patricia Nicolas Sandra</td>
              <td>Josie75@gmail.com</td>
              <td>La Mirada</td>
              <td>Edit Delete View</td>
            </tr>
            <tr className="bg-red-100">
              <td className="text-center py-5">1</td>
              <td>Miss Patricia Nicolas Sandra</td>
              <td>Josie75@gmail.com</td>
              <td>La Mirada</td>
              <td>Edit Delete View</td>
            </tr>
            <tr className="bg-red-100">
              <td className="text-center py-5">1</td>
              <td>Miss Patricia Nicolas Sandra</td>
              <td>Josie75@gmail.com</td>
              <td>La Mirada</td>
              <td>Edit Delete View</td>
            </tr>
            <tr className="bg-red-100">
              <td className="text-center py-5">1</td>
              <td>Miss Patricia Nicolas Sandra</td>
              <td>Josie75@gmail.com</td>
              <td>La Mirada</td>
              <td>Edit Delete View</td>
            </tr>
            <tr className="bg-red-100">
              <td className="text-center py-5">1</td>
              <td>Miss Patricia Nicolas Sandra</td>
              <td>Josie75@gmail.com</td>
              <td>La Mirada</td>
              <td>Edit Delete View</td>
            </tr>
            <tr className="bg-red-100">
              <td className="text-center py-5">1</td>
              <td>Miss Patricia Nicolas Sandra</td>
              <td>Josie75@gmail.com</td>
              <td>La Mirada</td>
              <td>Edit Delete View</td>
            </tr>
            <tr className="bg-red-100">
              <td className="text-center py-5">1</td>
              <td>Miss Patricia Nicolas Sandra</td>
              <td>Josie75@gmail.com</td>
              <td>La Mirada</td>
              <td>Edit Delete View</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
