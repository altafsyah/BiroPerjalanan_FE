import { useState, useEffect } from "react";
import { ITourist } from "../types/user";
import { getAllTourist } from "../servcies/tourist_service";

interface Pagination {
  firstPage: number;
  currentPage: number;
  lastPage: number;
}

export default function TouristList() {
  const [tourists, setTourists] = useState<ITourist[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [pagination, setPagination] = useState<Pagination>({
    firstPage: 1,
    currentPage: 1,
    lastPage: 0,
  });

  async function fetchTourists() {
    const response = await getAllTourist(pagination.currentPage);
    if (response) {
      setTourists(response.data);
      setPagination((prev) => ({
        ...prev,
        lastPage: response.total_pages,
      }));
    }
    setIsFetching(false);
  }

  useEffect(() => {
    setIsFetching(true);
    console.log("negara");
    fetchTourists();
  }, [pagination.currentPage]);

  function goToFirstPage() {
    setPagination((prev) => ({
      ...prev,
      currentPage: 1,
    }));
  }

  function goToLastPage() {
    setPagination((prev) => ({
      ...prev,
      currentPage: prev.lastPage,
    }));
  }

  if (isFetching) {
    return (
      <div className="rounded-lg overflow-hidden">
        <div className="shimmer-dark h-16"></div>
        <div className="shimmer-light h-8"></div>
      </div>
    );
  }
  if (!isFetching && tourists.length === 0) {
    return <div className="shimmer">fetched but null</div>;
  } else {
    return (
      <>
        <table className="w-full border-2 mt-2">
          <thead>
            <tr className="text-left">
              <th className="text-center w-1/12 py-5">No.</th>
              <th className="w-3/12">Name</th>
              <th className="hidden lg:table-cell w-3/12">Email</th>
              <th className="hidden md:table-cell w-3/12">Location</th>
              <th className="w-2/12 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {tourists.map((tourist, index) => (
              <tr
                className={`${index % 2 == 0 ? "bg-gray-100" : "bg-gray-50"}`}
                key={`${tourist.name}_${index}`}
              >
                <td className="text-center py-5">{index + 1}</td>
                <td>{tourist.name}</td>
                <td className="hidden lg:table-cell">{tourist.email}</td>
                <td className="hidden md:table-cell">{tourist.location}</td>
                <td className="text-center">
                  <a
                    href={`tourist/${tourist.id}`}
                    className="rounded px-5 py-2 bg-blue-500 text-white text-sm hover:bg-blue-600 transition-all duration-200"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="py-2 flex justify-end items-center gap-2 text-2xl text-gray-500">
          <button type="button" onClick={goToFirstPage}>
            <i className="bx bx-chevrons-left hover:text-gray-800 transition-all duration-200" />
          </button>
          <button
            type="button"
            onClick={() => {
              if (pagination.currentPage === 1) return;
              setPagination((prev) => ({
                ...prev,
                currentPage: prev.currentPage - 1,
              }));
            }}
          >
            <i className="bx bx-chevron-left hover:text-gray-800 transition-all duration-200" />
          </button>
          <button
            type="button"
            onClick={() => {
              setPagination((prev) => ({
                ...prev,
                currentPage: prev.currentPage + 1,
              }));
            }}
          >
            <i className="bx bx-chevron-right hover:text-gray-800 transition-all duration-200" />
          </button>
          <button type="button" onClick={goToLastPage}>
            <i className="bx bx-chevrons-right hover:text-gray-800 transition-all duration-200" />
          </button>
        </div>
      </>
    );
  }
}
