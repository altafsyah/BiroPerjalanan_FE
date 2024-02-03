import axios from "axios";
import { IAuthForm, IRegisterForm, IUser } from "../types/user";

const baseUrl = "https://biroperjalanan.datacakra.com/api";
export async function getUserAuth() {
  return localStorage.getItem("userAuth");
}

export async function signIn(formData: IAuthForm) {
  try {
    const response = await axios.post(`${baseUrl}/authaccount/login`, {
      email: formData.email,
      password: formData.password,
    });
    if (response.status === 201) {
      localStorage.setItem("userAuth", response.data.data.Token);
      localStorage.setItem("userId", response.data.data.Id);
      return true;
    }
    return;
  } catch (error) {
    return;
  }
}

export async function register(formData: IRegisterForm) {
  try {
    const response = await axios.post(`${baseUrl}/authaccount/registration`, {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });
    if (response.status === 201) {
      // localStorage.setItem("userAuth", response.data.data.Token);
      return true;
    }
    return;
  } catch (error) {
    console.log(error);

    return;
  }
}

export async function getUserData() {
  const token = await getUserAuth();
  const userId = await localStorage.getItem("userId");

  try {
    const response = await axios.get(`${baseUrl}/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      const data: IUser = {
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
        avatar: response.data.avatar,
      };
      return data;
    }
    return null;
  } catch (error) {
    return null;
    console.log(error);
  }
}
