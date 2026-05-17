// frontend/src/pages/GownListPage.tsx

import { useEffect, useState } from "react";
import { getGowns } from "../services/gownService";
import type { Gown } from "../models/Gown";
import { getGownImage } from "../assets/images/gownImages";

function GownListPage() {
    const [gowns, setGowns] = useState<Gown[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGowns = async () => {
            try {
                const data = await getGowns();
                setGowns(data);
            } catch {
                // setError("Failed to fetch gowns.");
                setError("⚠️ Service temporarily unavailable — monthly hosting limit reached.\nFor a live demo, please contact: raviamrav@yahoo.com");
            } finally {
                setLoading(false);
            }
        };
        fetchGowns();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                    <p className="text-gray-500 text-sm">Loading gowns…</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg">
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🎓 Available Gowns</h2>

            {gowns.length === 0 ? (
                <p className="text-gray-500">No gowns available at the moment.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gowns.map(gown => (
                        <div
                            key={gown.id}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                        >
                            <div className="h-100 bg-gray-100 flex items-center justify-center overflow-hidden">
                                <img
                                    src={getGownImage(gown.name)}
                                    alt={gown.name}
                                    className="h-full w-full object-cover"
                                    onError={e => {
                                        // Fallback if image file is missing
                                        (e.currentTarget as HTMLImageElement).src =
                                            "https://placehold.co/400x300?text=No+Image";
                                    }}
                                />
                            </div>

                            <div className="p-4">
                                <h3 className="font-semibold text-gray-800 text-sm leading-snug mb-3">
                                    {gown.name}
                                </h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                                        Size: {gown.size}
                                    </span>
                                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                                        Color: {gown.color}
                                    </span>
                                    <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
                                        Price: {gown.price} €
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default GownListPage;