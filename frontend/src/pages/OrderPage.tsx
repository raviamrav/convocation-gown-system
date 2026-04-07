// frontend/src/pages/OrderPage.tsx

import { useState, useEffect } from "react";
import type { FormEvent } from "react";
import { getGowns } from "../services/gownService";
import { submitOrder } from "../services/orderServices";
import type { Gown } from "../models/Gown";
import { getGownImage } from "../assets/images/gownImages";

interface CartItem {
    gownId: number;
    gownName: string;
    gownImage: string;
    quantity: number;
}

function OrderPage() {
    const [gowns, setGowns] = useState<Gown[]>([]);
    const [cart, setCart] = useState<CartItem[]>([]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [deliveryDate, setDeliveryDate] = useState("");

    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    useEffect(() => {
        const fetchGowns = async () => {
            try {
                const data = await getGowns();
                setGowns(data);
            } catch {
                setError("Failed to fetch gowns.");
            } finally {
                setLoading(false);
            }
        };
        fetchGowns();
    }, []);

    const addToCart = (gown: Gown) => {
        setCart(prev => {
            const exists = prev.find(item => item.gownId === gown.id);
            if (exists) {
                return prev.map(item =>
                    item.gownId === gown.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [
                ...prev,
                {
                    gownId: gown.id,
                    gownName: gown.name,
                    gownImage: getGownImage(gown.name),
                    quantity: 1,
                },
            ];
        });
    };

    const removeFromCart = (gownId: number) => {
        setCart(prev => prev.filter(item => item.gownId !== gownId));
    };

    const updateQuantity = (gownId: number, quantity: number) => {
        if (quantity < 1) return;
        setCart(prev =>
            prev.map(item => item.gownId === gownId ? { ...item, quantity } : item)
        );
    };

    const cartTotal = cart.reduce((sum, item) => sum + item.quantity, 0);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (cart.length === 0) {
            setError("Your cart is empty. Please add at least one gown.");
            return;
        }

        try {
            setSubmitting(true);
            setError(null);

            await submitOrder({
                customerName: name,
                email,
                phone,
                deliveryDate: new Date(deliveryDate).toISOString(),
                items: cart.map(item => ({
                    gownId: item.gownId,
                    quantity: item.quantity,
                })),
            });

            setSuccess("🎉 Order submitted successfully!");
            setName(""); setEmail(""); setPhone(""); setDeliveryDate("");
            setCart([]);
        } catch {
            setError("Failed to submit order. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-10 font-sans">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🎓 Place Your Gown Order</h2>

            {error && (
                <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                </div>
            )}
            {success && (
                <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                    {success}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">

                <section>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Customer Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                            className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            required
                            className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="date"
                            value={deliveryDate}
                            onChange={e => setDeliveryDate(e.target.value)}
                            required
                            className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                </section>

                <section>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Available Gowns</h3>
                    {loading ? (
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                            Loading gowns…
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {gowns.map(gown => (
                                <div
                                    key={gown.id}
                                    className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="h-65 bg-gray-100 overflow-hidden">
                                        <img
                                            src={getGownImage(gown.name)}
                                            alt={gown.name}
                                            className="w-full h-full object-cover"
                                            onError={e => {
                                                (e.currentTarget as HTMLImageElement).src =
                                                    "https://placehold.co/400x300?text=No+Image";
                                            }}
                                        />
                                    </div>
                                    <div className="p-3">
                                        <p className="text-sm font-medium text-gray-800 leading-snug mb-1">{gown.name}</p>
                                        <div className="flex gap-2 flex-wrap mb-3">
                                            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                                                {gown.size}
                                            </span>
                                            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                                                {gown.color}
                                            </span>
                                            <span className="text-xs bg-blue-50 text-blue-600 font-medium px-2 py-0.5 rounded-full">
                                            Price: {gown.price} €
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => addToCart(gown)}
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-lg transition-colors"
                                        >
                                            + Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                <section>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">
                        Cart{" "}
                        {cartTotal > 0 && (
                            <span className="text-sm font-normal text-gray-400">
                                ({cartTotal} item{cartTotal !== 1 ? "s" : ""})
                            </span>
                        )}
                    </h3>

                    {cart.length === 0 ? (
                        <p className="text-gray-400 text-sm">Your cart is empty. Add gowns above.</p>
                    ) : (
                        <div className="space-y-3">
                            {cart.map(item => (
                                <div
                                    key={item.gownId}
                                    className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl p-3"
                                >
                                    <img
                                        src={item.gownImage}
                                        alt={item.gownName}
                                        className="w-14 h-14 object-cover rounded-lg flex-shrink-0"
                                        onError={e => {
                                            (e.currentTarget as HTMLImageElement).src =
                                                "https://placehold.co/100x100?text=?";
                                        }}
                                    />
                                    <p className="flex-1 text-sm font-medium text-gray-700 leading-snug">
                                        {item.gownName}
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <button
                                            type="button"
                                            onClick={() => updateQuantity(item.gownId, item.quantity - 1)}
                                            className="w-7 h-7 rounded-md border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 text-base leading-none"
                                        >
                                            −
                                        </button>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <input 
                                                    type="number"
                                                    value={item.quantity}
                                                    min="1"
                                                    max="99"
                                                    onChange={(e) => {
                                                        const val = parseInt(e.target.value);
                                                        if (!isNaN(val)) {
                                                            updateQuantity(item.gownId, val);
                                                        }
                                                    }}
                                                    style={{ 
                                                        width: '40px', 
                                                        textAlign: 'center',
                                                        appearance: 'textfield',
                                                        border: '1px solid #ccc',
                                                    }}
                                                />
                                            </div>
                                        <button
                                            type="button"
                                            onClick={() => updateQuantity(item.gownId, item.quantity + 1)}
                                            className="w-7 h-7 rounded-md border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 text-base leading-none"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => removeFromCart(item.gownId)}
                                        className="text-red-400 hover:text-red-600 text-lg leading-none ml-1"
                                        aria-label="Remove"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white font-semibold py-3 rounded-xl transition-colors text-base"
                >
                    {submitting ? "Submitting…" : "Submit Order"}
                </button>
            </form>
        </div>
    );
}

export default OrderPage;