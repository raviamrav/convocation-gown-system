import api from "./api";

export async function submitOrder(orderData: {
  customerName: string;
  email: string;
  phone: string;
  deliveryDate: string;
  items: { gownId: number; quantity: number }[];
}) {
    const response = await api.post("/Order", orderData); // match Swagger exactly
    return response.data;
}