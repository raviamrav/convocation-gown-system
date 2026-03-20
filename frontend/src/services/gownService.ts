import api from "./api";

export const getGowns = async () => {
    const response = await api.get("/Gown");
    return response.data;
};