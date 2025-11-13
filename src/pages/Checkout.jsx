import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Lock, HelpCircle } from "lucide-react";

const Checkout = () => {
    const { cartItems, clearCart } = useCart();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        zip: "",
    });

    const [coupon, setCoupon] = useState("");
    const [discount, setDiscount] = useState(0);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleApplyCoupon = () => {
        if (coupon.toLowerCase() === "unelma10") {
            setDiscount(0.1); // 10% discount
            alert("✅ Coupon applied! You got 10% off.");
        } else {
            alert("❌ Invalid coupon code.");
            setDiscount(0);
        }
    };

    const handleCheckout = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.address) {
            alert("Please fill in all required fields.");
            return;
        }

        alert("✅ Order placed successfully! (Demo checkout)");
        clearCart();
        navigate("/");
    };

    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    const discountAmount = subtotal * discount;
    const totalPrice = subtotal - discountAmount;

    return (
        <div className="max-w-6xl mx-auto px-4 py-16 mt-12">
            <h1 className="text-3xl font-bold mb-8 text-center text-[#008081]">
                Checkout
            </h1>

            {cartItems.length === 0 ? (
                <div className="text-center text-gray-600">
                    Your cart is empty 😞 <br />
                    <button
                        onClick={() => navigate("/product")}
                        className="mt-4 bg-[#008081] text-white px-6 py-2 rounded-lg hover:bg-[#006666]"
                    >
                        Continue Shopping
                    </button>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 gap-10">
                    {/* 🧾 Order Summary */}
                    <div className="bg-white shadow-lg rounded-2xl p-6">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">
                            Order Summary
                        </h2>
                        <ul className="divide-y divide-gray-200 mb-4">
                            {cartItems.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex items-center justify-between py-3"
                                >
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-12 h-12 rounded-lg object-cover"
                                        />
                                        <span className="text-gray-700">{item.name}</span>
                                    </div>
                                    <span className="text-gray-800 font-semibold">
                                        ${item.price.toFixed(2)}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Coupon Input */}
                        <div className="flex gap-2 mb-4">
                            <input
                                type="text"
                                placeholder="Enter coupon code"
                                value={coupon}
                                onChange={(e) => setCoupon(e.target.value)}
                                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-[#008081] outline-none"
                            />
                            <button
                                onClick={handleApplyCoupon}
                                className="bg-[#008081] text-white px-4 py-2 rounded-lg hover:bg-[#006666] transition"
                            >
                                Apply
                            </button>
                        </div>

                        {/* Totals */}
                        <div className="border-t pt-4 mt-4 text-right space-y-1">
                            <p className="text-gray-600">
                                Subtotal: <span className="font-medium">${subtotal.toFixed(2)}</span>
                            </p>
                            {discount > 0 && (
                                <p className="text-green-600">
                                    Discount (10%): -${discountAmount.toFixed(2)}
                                </p>
                            )}
                            <p className="text-lg font-bold text-[#008081]">
                                Total: ${totalPrice.toFixed(2)}
                            </p>
                        </div>

                        {/* Payment Methods */}
                        <div className="mt-6 border-t pt-4">
                            <h3 className="text-sm font-semibold text-gray-600 mb-2">
                                Accepted Payment Methods
                            </h3>
                            <div className="flex items-center gap-4">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                                    alt="Visa"
                                    className="h-6"
                                />
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                                    alt="PayPal"
                                    className="h-6"
                                />
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                                    alt="Mastercard"
                                    className="h-6"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 🧍 Customer Information */}
                    <form
                        onSubmit={handleCheckout}
                        className="bg-white shadow-lg rounded-2xl p-6 space-y-4"
                    >
                        <h2 className="text-xl font-semibold text-gray-800">
                            Billing Details
                        </h2>

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#008081] outline-none"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#008081] outline-none"
                            required
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Shipping Address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#008081] outline-none"
                            required
                        />
                        <div className="flex gap-4">
                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#008081] outline-none"
                            />
                            <input
                                type="text"
                                name="zip"
                                placeholder="ZIP Code"
                                value={formData.zip}
                                onChange={handleChange}
                                className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#008081] outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#008081] text-white py-3 rounded-lg font-semibold hover:bg-[#006666] transition"
                        >
                            Place Order →
                        </button>

                        {/* Footer Info */}
                        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                            <Lock className="w-4 h-4 text-[#008081]" />
                            <span>Secure checkout — your information is encrypted</span>
                        </div>

                        <div className="mt-2 flex items-center justify-center text-sm text-gray-500 gap-1">
                            <HelpCircle className="w-4 h-4 text-[#008081]" />
                            <span>
                                Need help?{" "}
                                <a
                                    href="/contact"
                                    className="text-[#008081] font-medium hover:underline"
                                >
                                    Contact support
                                </a>
                            </span>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Checkout;

