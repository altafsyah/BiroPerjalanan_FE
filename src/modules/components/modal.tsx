import React from "react";

export default function Modal({
  isOpen,
  toggle,
  children,
}: {
  isOpen: boolean;
  toggle: () => void;
  children: React.ReactNode;
}) {
  if (!isOpen) {
    return;
  }
  return (
    <div
      id="modalOverlay"
      className="fixed inset-0 h-full bg-black/20 flex justify-center items-center p-5"
    >
      <div className="bg-white flex flex-col px-10 py-5 rounded-lg relative w-full md:w-fit lg:min-w-[350px] min-h-[200px]">
        <button
          type="button"
          onClick={toggle}
          className="bg-gray-300 border-gray-500 shadow hover:shadow-lg transition-all duration-200 self-end aspect-square text-lg w-7 rounded"
        >
          <i className="bx bx-x"></i>
        </button>
        {children}
      </div>
    </div>
  );
}
