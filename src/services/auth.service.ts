import type { LoginResponse } from "./interface";
import axios from "./base.service";

const API_URL = "http://localhost:5000";

export async function DoLogin(
  email: string,
  password: string
): Promise<LoginResponse | null> {
  try {
    const response = await axios.post<LoginResponse>(`${API_URL}/auth/login`, {
      email,
      password,
    });
    if (!response?.data) {
      return null;
    }
    return response.data;
  } catch (e) {
    if (e instanceof Error) {
      return null;
    }
    return null;
  }
}

export async function DoLogout(token: string) {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");

  try {
    const response = await axios.post(
      "/auth/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response?.data) {
      return null;
    }
    return response.data;
  } catch (e) {
    if (e instanceof Error) {
      return null;
    }
    return null;
  }
}
