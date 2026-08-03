import { useState, useEffect } from "react";
import type { CreateGown } from "../models/CreateGown";
import type { GownFormProps } from "../models/GownFormProps";

const createEmptyGown = (): CreateGown => ({
    name: "",
    description: "",
    size: "",
    color: "",
    price: 0,
    cautionDeposit: 0,
});

export default function GownForm({onSave, initialData}: GownFormProps) {
    const [gown, setGown] = useState<CreateGown>(createEmptyGown());

    useEffect(() => {
        if (initialData) {
            setGown({ ...initialData });
        } else {
            setGown(createEmptyGown());
        }
    }, [initialData]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!gown.name.trim()) {
            alert("Please enter gown name.");
            return;
        }

        if (!gown.description.trim()) {
            alert("Please enter description.");
            return;
        }

        if (!gown.size.trim()) {
            alert("Please enter gown size.");
            return;
        }

        if (!gown.color.trim()) {
            alert("Please enter gown color.");
            return;
        }

        if (gown.price <= 0) {
            alert("Price must be greater than 0.");
            return;
        }

        if (gown.cautionDeposit < 0) {
            alert("Caution deposit cannot be negative.");
            return;
        }

        try {
            await onSave(gown);
            setGown(createEmptyGown());
        }
        catch (error) {
            console.error(error);
        }
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Gown Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={gown.name}
                    onChange={(e) => setGown({ ...gown, name: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                </label>
                <textarea
                    id="description"
                    value={gown.description}
                    onChange={(e) => setGown({ ...gown, description: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="size" className="block text-sm font-medium text-gray-700">
                    Size
                </label>
                <input
                    type="text"
                    id="size"
                    value={gown.size}
                    onChange={(e) => setGown({ ...gown, size: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="color" className="block text-sm font-medium text-gray-700">
                    Color
                </label>
                <input
                    type="text"
                    id="color"
                    value={gown.color}
                    onChange={(e) => setGown({ ...gown, color: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                    Price
                </label>
                <input  
                    type="number"
                    step="0.01"
                    id="price"
                    value={gown.price}
                    onChange={(e) => setGown({ ...gown, price: Number(e.target.value) || 0 })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="cautionDeposit" className="block text-sm font-medium text-gray-700">
                    Caution Deposit
                </label>
                <input
                    type="number"
                    id="cautionDeposit"
                    value={gown.cautionDeposit}
                    onChange={(e) => setGown({ ...gown, cautionDeposit: Number(e.target.value) || 0 })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                {initialData ? "Update Gown" : "Create Gown"}
            </button>
        </form>
    );
}
