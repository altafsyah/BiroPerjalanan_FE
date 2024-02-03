import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { register } from "../../modules/servcies/auth_service";
import { IRegisterForm } from "../../modules/types/user";

interface UserForm extends IRegisterForm {
  confirmPassword: string;
}

export default function Register() {
  const [form, setForm] = useState<UserForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const navigate = useNavigate();

  function handleChange(e: ChangeEvent) {
    const { name, value } = e.currentTarget as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmit(true);
    if (form.password != form.confirmPassword) {
      toast.error("Password tidak sama");
      return;
    }
    const response = await register(form);
    if (response) {
      toast.loading("Berhasil membuat akun, mengarahkan ke halaman login");
      setTimeout(() => {
        toast.dismiss();
        navigate("/login");
      }, 700);
    }
  }

  return (
    <main className="p-5 w-full h-screen flex flex-col justify-center items-center">
      <section>
        <h1 className="text-xl font-medium">Masuk sekarang</h1>
        <p className="mb-5 text-gray-400">
          Masuk dan kelola destinasi wisata anda
        </p>
        <form className="w-[300px] md:w-[400px]" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Nama Lengkap</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              onChange={handleChange}
              value={form.name}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input
              id="email"
              name="email"
              required
              type="email"
              onChange={handleChange}
              value={form.email}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              id="password"
              name="password"
              required
              type="password"
              onChange={handleChange}
              value={form.password}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-3">
            <label>Konfirmasi Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={handleChange}
              value={form.confirmPassword}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            disabled={isSubmit}
            type="submit"
            className="disabled:bg-blue-200 w-full py-2 rounded mt-5 border border-blue-600 bg-blue-500 hover:bg-blue-700 transition-all duration-300 text-white font-medium"
          >
            Daftar
          </button>
        </form>
        <p className="text-center mt-4">
          Sudah memiliki akun?{" "}
          <Link to="/login" className="underline">
            Masuk sekarang
          </Link>
        </p>
      </section>
    </main>
  );
}
