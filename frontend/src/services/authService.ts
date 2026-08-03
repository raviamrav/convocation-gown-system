import api from "./api";
import type { LoginResponse } from "../models/LoginResponse";

export async function login(
  userName: string,
  password: string
): Promise<LoginResponse> {

    const response = await api.post<LoginResponse>("/auth/login", {
        userName,
        password
    });
    return response.data;
}