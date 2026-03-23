import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5050/api",
    // headers: {
    //     "Content-Type": "application/json",
    // },
});

export async function submitOrder(orderData: {
  customerName: string;
  email: string;
  phone: string;
  deliveryDate: string;
  items: { gownId: number; quantity: number }[];
}) {
    const response = await api.post("/Order", orderData);
    return response.data;
}