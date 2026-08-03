import { useState, useEffect } from "react";
import {
    getGowns,
    createGown,
    updateGown,
    deleteGown
} from "../services/gownService";

import type { Gown } from "../models/Gown";
import type { CreateGown } from "../models/CreateGown";
import GownForm from "../components/GownForm";

function AdminGownPage() {

    const [gowns, setGowns] = useState<Gown[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [editingGown, setEditingGown] = useState<Gown | null>(null);

    const refreshGowns = async () => {
        const data = await getGowns();
        setGowns(data);
    };

    useEffect(() => {
        const fetchGowns = async () => {
            try {
                await refreshGowns();
            }
            catch {
                setError(
                    "⚠️ Service temporarily unavailable — monthly hosting limit reached.\nPlease contact: raviamrav@yahoo.com"
                );
            }
            finally {
                setLoading(false);
            }
        };
        fetchGowns();
    }, []);

    const handleCreateGown = async (gown: CreateGown) => {
        try {
            await createGown(gown);
            alert("Gown created successfully!");
            await refreshGowns();
        }
        catch (err) {
            console.error(err);
            alert("Failed to create gown.");
        }
    };

    const handleUpdateGown = async (gown: CreateGown) => {
        if (!editingGown) return;
        try {
            await updateGown(editingGown.id, gown);
            alert("Gown updated successfully!");
            setEditingGown(null);
            await refreshGowns();
        }
        catch (err) {
            console.error(err);
            alert("Failed to update gown.");
        }

    };

    const handleDeleteGown = async (id: number) => {

        if (!window.confirm("Are you sure you want to delete this gown?")) {
            return;
        }

        alert("Sorry!! Delete function is disabled in the public demo.");
        return;

        try {
            await deleteGown(id);
            alert("Gown deleted successfully!");
            await refreshGowns();
        }
        catch (err) {
            console.error(err);
            alert("Failed to delete gown.");
        }

    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                    <p className="text-gray-500 text-sm">Loading gowns...</p>
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
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                🎓 Manage Gowns
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
                <h3 className="text-xl font-semibold text-center mb-4">
                    {editingGown ? "✏️ Edit Gown" : "➕ Add New Gown"}
                </h3>
                <GownForm
                    initialData={
                        editingGown
                            ? {
                                name: editingGown.name,
                                description: editingGown.description,
                                size: editingGown.size,
                                color: editingGown.color,
                                price: editingGown.price,
                                cautionDeposit: editingGown.cautionDeposit,
                            }
                            : null
                    }
                    onSave={
                        editingGown
                            ? handleUpdateGown
                            : handleCreateGown
                    }
                />
                {editingGown && (
                    <button
                        onClick={() => setEditingGown(null)}
                        className="mt-4 w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
                    >
                        Cancel Edit
                    </button>
                )}
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                🎓 Available Gowns
            </h2>
            {gowns.length === 0 ? (
                <p className="text-gray-500">
                    No gowns available.
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gowns.map((gown) => (
                        <div
                            key={gown.id}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                        >
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-3">
                                    {gown.name}
                                </h3>
                                <p>Size: {gown.size}</p>
                                <p>Color: {gown.color}</p>
                                <p>
                                    Price: {gown.price.toFixed(2)} €
                                </p>
                                <p>
                                    Deposit: {gown.cautionDeposit.toFixed(2)} €
                                </p>
                                <p className="mb-4">
                                    {gown.description}
                                </p>
                                <div className="flex justify-between">
                                    <button
                                        onClick={() => {
                                            setEditingGown(gown);

                                            window.scrollTo({
                                                top: 0,
                                                behavior: "smooth"
                                            });
                                        }}
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => handleDeleteGown(gown.id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                    >
                                        Delete (Disabled)
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default AdminGownPage;