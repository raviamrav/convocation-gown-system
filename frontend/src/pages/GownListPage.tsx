import { useEffect, useState } from "react";
import { getGowns } from "../services/gownService";
import { Gown } from "../models/Gown";

function GownListPage() {
    const [gowns, setGowns] = useState<Gown[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchGowns = async () => {
            try {
                const data = await getGowns();
                setGowns(data);
            } catch (error) {
                console.error("Error fetching gowns:", error);
                setError("Failed to fetch gowns.");
            } finally {
                setLoading(false);
            }
        };
        fetchGowns();
    }, []);

    if (loading) {
        console.log("Loading gowns...");
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Available Gowns</h2>
            <ul>
                {/* {gowns.map((gown: any) => (
                    <li key={gown.id}>{JSON.stringify(gown)}</li>
                ))} */}
                {gowns.map(gown => (
                    <li key={gown.id}>{gown.name} - {gown.size} - {gown.color} - {gown.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default GownListPage;