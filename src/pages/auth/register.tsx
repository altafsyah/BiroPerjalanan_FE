import { useState } from "react";
import { Link } from "react-router-dom";

interface UserForm {
  email: string;
  password: string;
}

export default function Register() {
  const [form, setForm] = useState<UserForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e: Event) {
    const { name, value } = e.currentTarget;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: Event) {
    e.preventDefault();
    console.log("halo");
  }

  return (
    <main className="w-full h-screen flex flex-col justify-center items-center">
      <section>
        <h1 className="text-xl font-medium">Masuk sekarang</h1>
        <p className="mb-5 text-gray-400">
          Masuk dan kelola destinasi wisata anda
        </p>
        <form className="w-[400px]">
          <div className="mb-3">
            <label>Email</label>
            <input
              id="name"
              name="name"
              type="text"
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
              type="password"
              onChange={handleChange}
              value={form.password}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-3">
            <label>Email</label>
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
            type="submit"
            className="w-full py-2 rounded mt-5 border border-blue-600 bg-blue-500 hover:bg-blue-700 transition-all duration-300 text-white font-medium"
          >
            Masuk
          </button>
        </form>
        <p className="text-center mt-4">
          Belum memiliki akun?{" "}
          <Link to="/register" className="underline">
            Buat akun sekarang
          </Link>
        </p>
      </section>
    </main>
  );
}
