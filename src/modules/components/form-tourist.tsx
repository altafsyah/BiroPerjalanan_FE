import { useState } from "react";
import { ITourist } from "../types/user";
import { addTourist } from "../servcies/tourist_service";
import toast from "react-hot-toast";
export default function FormTourist({ toggle }: { toggle: () => void }) {
  const [data, setData] = useState<ITourist>({
    id: "",
    name: "",
    email: "",
    avatar: "",
    location: "",
  });
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  function handleChange(e: Event) {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: Event) {
    e.preventDefault();
    setIsSubmit(true);
    const response = await addTourist(data);
    setTimeout(() => {
      if (response) {
        toast.success("Berhasil menambah data");
        toggle();
      } else {
        toast.error("Gagal menambah data");
      }
      setIsSubmit(false);
    }, 500);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <label>Email</label>
        <input
          name="email"
          id="email"
          required
          value={data.email}
          onChange={handleChange}
          type="email"
          className="bordered-input !py-1"
        />
      </div>
      <div className="mb-2">
        <label>Nama</label>
        <input
          name="name"
          id="name"
          required
          onChange={handleChange}
          value={data.name}
          type="text"
          className="bordered-input !py-1"
        />
      </div>
      <div>
        <label>Lokasi</label>
        <input
          name="location"
          id="location"
          required
          onChange={handleChange}
          value={data.location}
          type="text"
          className="bordered-input !py-1"
        />
      </div>
      <button
        disabled={isSubmit}
        className="disabled:bg-blue-200 w-full py-2 rounded text-white font-semibold mt-8 bg-blue-400 hover:bg-blue-500 transition-all duration-200"
      >
        {isSubmit ? "Menyimpan.." : "Simpan"}
      </button>
    </form>
  );
}
