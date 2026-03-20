import { useState, useEffect, FormEvent } from "react";
import { getGowns } from "../services/gownService";
import { submitOrder } from "../services/orderServices";

function OrderPage() {
    const [gowns, setGowns] = useState<{ id: number; name : string}[]>([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [selectedGownId, setSelectedGownId] = useState<number | null>(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    useEffect(() => {
        const fetchGowns = async () => {
            try {
                setLoading(true);

                const data = await getGowns();

                setGowns(data);
                if (data.length > 0) {
                    setSelectedGownId(data[0].id);
                }
                setLoading(false);
            } catch (error) {
                setError("Failed to fetch gowns.");
                setLoading(false);
            }
        };

        fetchGowns();
    }, []);

        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            if (!selectedGownId) {
                setError("Please select a gown.");
                return;
            }
            try {
                setLoading(true);
                setError(null);
                const orderData = {
                    customerName: name,
                    email: email,
                    phone: "1234567890", // Placeholder phone number
                    deliveryDate: new Date().toISOString(), // Placeholder delivery date
                    items: [
                        {
                            gownId: selectedGownId,
                            quantity: 1,
                        },
                    ],
                };

                const result = await submitOrder(orderData);

                console.log("Order created:", result);

                setSuccess("Order submitted successfully!");
                setName("");
                setEmail("");
                setLoading(false);
            } catch (error) {
                console.error("Error submitting order:", error);
                setError("Failed to submit order.");
                setLoading(false);
            }
        };

            return (
            <div>
                <h2>Place Your Order</h2>
                {loading && <p>Loading gowns...</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{success}</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Select Gown:</label>
                        <select value={selectedGownId ?? ""} onChange={(e) => setSelectedGownId(Number(e.target.value))}>
                            {gowns.map((gown) => (
                                <option key={gown.id} value={gown.id}>
                                    {gown.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <br/>
                    <button type="submit">Submit Order</button>
                </form>
            </div>

        )

}

export default OrderPage;