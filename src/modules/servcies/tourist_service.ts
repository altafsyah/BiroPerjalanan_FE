import axios from "axios";
import { getUserAuth } from "./auth_service";
import { ITourist } from "../types/user";

const baseUrl = "https://biroperjalanan.datacakra.com/api/Tourist";
export async function getAllTourist(page: number = 1) {
  const token = await getUserAuth();
  try {
    const response = await axios.get(`${baseUrl}?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      const touristList: ITourist[] = [];
      response.data.data.map((tourist) => {
        touristList.push({
          id: tourist.id,
          name: tourist.tourist_name,
          email: tourist.tourist_email,
          avatar: tourist.tourist_profilepicture,
          location: tourist.tourist_location,
        });
      });
      return {
        total_pages: response.data.total_pages,
        data: touristList,
      };
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getTouristById(id: string) {
  const token = await getUserAuth();
  try {
    const response = await axios.get(`${baseUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      const data: ITourist = {
        id: response.data.id,
        email: response.data.tourist_email,
        name: response.data.tourist_name,
        avatar: response.data.tourist_profilepicture,
        location: response.data.tourist_location,
      };
      return data;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function addTourist(tourist: ITourist) {
  const token = await getUserAuth();
  const data = {
    tourist_name: tourist.name,
    tourist_email: tourist.email,
    tourist_location: tourist.location,
  };
  try {
    const response = await axios.post(`${baseUrl}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 201 || response.status === 200) {
      return true;
    }
    return;
  } catch (error) {
    return;
  }
}

export async function editTourist(tourist: ITourist) {
  const token = await getUserAuth();
  const data = {
    tourist_name: tourist.name,
    tourist_email: tourist.email,
    tourist_location: tourist.location,
  };
  try {
    const response = await axios.put(`${baseUrl}/${tourist.id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      return true;
    }
    return;
  } catch (error) {
    return;
  }
}

export async function deleteTourist(id: string) {
  const token = await getUserAuth();
  try {
    const res = await axios.delete(`${baseUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}
