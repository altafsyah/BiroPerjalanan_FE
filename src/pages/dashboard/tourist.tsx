import Modal from "../../modules/components/modal";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getTouristById,
  deleteTourist,
  editTourist,
} from "../../modules/servcies/tourist_service";
import { ITourist } from "../../modules/types/user";
import toast from "react-hot-toast";

interface IState {
  isFetching: boolean;
  isEditing: boolean;
  isDeleting: boolean;
}

export default function Tourist() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("");
  const [state, setState] = useState<IState>({
    isFetching: false,
    isEditing: false,
    isDeleting: false,
  });
  const [tourist, setTourist] = useState<ITourist>();
  const { id } = useParams();
  const navigate = useNavigate();

  const toggleOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleModal = (id) => {
    setModalType(id);
    toggleOpen();
  };

  async function fetchTourist() {
    const res = await getTouristById(id);
    if (res) {
      setTourist(res);
    }
  }

  async function confirmDelete() {
    setState((prev) => ({
      ...prev,
      isDeleting: true,
    }));
    const res = await deleteTourist(id);
    setTimeout(() => {
      if (res) {
        toast.success("Berhasil menghapus");
        setTimeout(() => {
          navigate("/");
        }, 500);
      } else {
        toast.error("Terjadi kesalahan");
      }
      setIsModalOpen(false);
      setState((prev) => ({
        ...prev,
        isDeleting: false,
      }));
    }, 500);
  }

  async function confirmEdit(data) {
    setState((prev) => ({
      ...prev,
      isEditing: true,
    }));
    const res = await editTourist(data);
    console.log(res);
    setTimeout(() => {
      if (res) {
        toast.success("Berhasil memperbarui data turis");
        fetchTourist();
      } else {
        toast.error("Terjadi kesalahan");
      }
      setIsModalOpen(false);
      setState((prev) => ({
        ...prev,
        isEditing: false,
      }));
    }, 500);
  }

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      isFetching: true,
    }));
    fetchTourist();
    setState((prev) => ({
      ...prev,
      isFetching: false,
    }));
  }, []);

  if (state.isFetching) {
    return <div className="w-full h-10 shimmer-dark rounded"></div>;
  } else if (!state.isFetching && !tourist) {
    return <div>no data found</div>;
  }

  return (
    <>
      <div
        id="touristInfo"
        className="flex flex-col w-full min-w-[300px] lg:w-fit gap-10 bg-white  border border-gray-200 rounded-xl items-center p-5"
      >
        <div className="w-32 aspect-square overflow-hidden rounded-full bg-gray-200">
          <img src={tourist.avatar} className="object-cover" />
        </div>
        <div className="text-center">
          <h1 className="font-semibold">{tourist.name}</h1>
          <h5 className="text-sm">{tourist.email}</h5>
          <div className="text-sm flex justify-center items-center gap-2 text-gray-500">
            <i className="bx bxs-map-pin"></i>
            <p>{tourist.location}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <button
            type="button"
            onClick={() => toggleModal("edit")}
            className="bg-blue-400 border border-blue-600 hover:border-blue-700 transition-all duration-150 hover:bg-blue-500 rounded text-white w-full py-1"
          >
            Edit
          </button>
          <button
            tyoe="button"
            onClick={() => toggleModal("delete")}
            className="bg-red-500 border border-red-700 hover:border-red-800 transition-all duration-150 hover:bg-red-600 rounded text-white w-full py-1"
          >
            Hapus
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} toggle={toggleOpen}>
        {modalType === "edit" ? (
          <EditForm
            tourist={tourist}
            isEditing={state.isEditing}
            confirmEdit={confirmEdit}
          />
        ) : (
          <DeleteModal
            confirmDelete={confirmDelete}
            isDeleting={state.isDeleting}
          />
        )}
      </Modal>
    </>
  );
}

function EditForm({
  tourist,
  isEditing,
  confirmEdit,
}: {
  tourist: ITourist;
  isEditing: boolean;
  confirmEdit: () => void;
}) {
  const [updated, setUpdated] = useState<ITourist>({ ...tourist });

  function handleChange(e: Event) {
    const { name, value } = e.currentTarget;
    setUpdated((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: Event) {
    e.preventDefault();
    confirmEdit(updated);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <label>Nama</label>
        <input
          className="bordered-input !py-1"
          name="name"
          id="name"
          onChange={handleChange}
          value={updated.name}
        />
      </div>
      <div className="mb-2">
        <label>Email</label>
        <input
          className="bordered-input !py-1"
          onChange={handleChange}
          name="email"
          id="email"
          value={updated.email}
        />
      </div>
      <div>
        <label>Lokasi</label>
        <input
          onChange={handleChange}
          className="bordered-input !py-1"
          name="location"
          id="location"
          value={updated.location}
        />
      </div>
      <button
        disabled={isEditing}
        type="submit"
        className="disabled:bg-blue-200 w-full mt-10 rounded py-2 bg-blue-400 hover:bg-blue-500 text-white"
      >
        {isEditing ? "Menyimpan..." : "Simpan Perubahan"}
      </button>
    </form>
  );
}

function DeleteModal({
  confirmDelete,
  isDeleting,
}: {
  confirmDelete: () => void;
  isDeleting: boolean;
}) {
  return (
    <div className="mt-5">
      <h5>Apakah anda yakin ingin menghapus data ini?</h5>
      <button
        disabled={isDeleting}
        onClick={confirmDelete}
        className="disabled:bg-red-200 w-full bg-red-500 hover:bg-red-600 transition-all duration-150 text-white font-semibold py-2 mt-3 rounded"
      >
        {isDeleting ? "Menghapus..." : "Hapus"}
      </button>
    </div>
  );
}
