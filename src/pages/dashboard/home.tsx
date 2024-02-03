import TouristList from "../../modules/components/tourist-list";
import { useState } from "react";
import Modal from "../../modules/components/modal";
import FormTourist from "../../modules/components/form-tourist";
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <div className="flex justify-end">
        <button
          onClick={toggleModal}
          type="button"
          className="flex w-fit px-5 py-2 jusify-center items-center gap-3 bg-blue-400 border border-blue-300 text-white rounded hover:bg-blue-500 hover:border-blue-400 tranisiton-all duration-300"
        >
          <i className="bx bx-plus-circle"></i>
          Tambah Turis Baru
        </button>
      </div>
      <div className="mt-5">
        <TouristList />
      </div>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <FormTourist toggle={toggleModal} />
      </Modal>
    </>
  );
}
