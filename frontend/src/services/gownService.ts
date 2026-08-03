import type { CreateGown } from "../models/CreateGown";
import api from "./api";

export const getGowns = async () => {
    const response = await api.get("/gown");
    return response.data;
};

export async function createGown(gown: CreateGown){
    const response = await api.post("/gown", gown);
    return response.data;
}

export async function updateGown(id: number, gown: CreateGown){
    const response = await api.put(`/gown/${id}`, gown);
    return response.data;
}

export async function deleteGown(id: number){
    const response = await api.delete(`/gown/${id}`);
    return response.data;
}