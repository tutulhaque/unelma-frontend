import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star, ArrowLeft, Minus, Plus, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext"; // ✅ import

const productsData = [
    {
        id: 1,
        name: "Open-source software",
        image:
            "https://www.unelmaplatforms.com/assets/uploads/media-uploader/grid-open-source-software-icon-181689275745.png",
        price: 0,
        features: ["Unelma Platforms brings to you UnelmaBrowser and Unelma-Code Translator - innovative software designed for optimised user experience. With open-source access, full support, maintenance, security provisions, and bug fixes, we ensure a smooth, secure and efficient digital journey."],
        description:
            "Empower your digital journey with Unelma Platforms' cutting-edge innovations - UnelmaBrowser and Unelma-Code Translator! UnelmaBrowser is not just a browser but a powerful tool that ensures a fast, reliable, and secure browsing experience. With its user-friendly interface and tailored features, exploring the web has never been more effortless and enjoyable! But we didn't stop at browsing. Our Unelma-Code Translator is an open-source software designed to make your work easier. Whether it's simplifying complex codes or translating code languages, Unelma-Code Translator elevates the seamless coding experience to a whole new level. What's more? We understand the significance of continuous support, maintenance, and security in the rapidly evolving digital landscape. That's why we provide comprehensive support, periodic maintenance, and regular security updates ensuring the smooth operation and longevity of our products.Facing technical glitches? Our professional team is right there to provide prompt bug fixes, ensuring minimal disruption. So why wait? Embark on your digital revolution with UnelmaBrowser and Unelma-Code Translator. Join the Unelma Platforms family and experience a superior digital journey like never before!",
        rating: 4.7,
        reviews: [
            { name: "Alice", comment: "Fantastic sound quality and battery life!" },
            { name: "David", comment: "Very comfortable for long use." },
        ],
        code: 2345,
    },
    {
        id: 2,
        name: "UnelmaMail",
        image:
            "https://www.unelmaplatforms.com/assets/uploads/media-uploader/grid-unelma-mail-11-transperency1689274046.png",
        price: 49,
        features: ["Explore UnelmaMail, the world's first AI-powered email marketing platform developed by Unelma Platforms. Offering user-friendly and efficient solutions, UnelmaMail revolutionizes the way businesses engage in email marketing strategies for ultimate growth and expansion. Experience the future of email marketing with UnelmaMail."],
        description:
            "Unleash the full potential of your email marketing with UnelmaMail! Harness the power of AI to secure the edge your business needs in today's competitive marketing landscape. Our platform is packed with advanced features, user-friendly design, and unprecedented efficiencies to support your unique business needs. But that's not all! We understand that adopting a new platform can come with its additional challenges, which is why we offer a comprehensive two-year support package with every purchase. You'll have full access to maintenance, security updates, and bug fixes - ensuring UnelmaMail operates seamlessly with your business. What if you have issues that need immediate redress? We've got you covered. The cost of one to two developers is included in the package to provide real-time solutions to any issues you may have. No more worrying about hidden fees or charges. With UnelmaMail, you receive not just a product but a reliable partnership. Make the smart choice for your email marketing strategy; choose UnelmaMail. Revolutionize the way you engage with your clients today.",
        rating: 4.5,
        reviews: [
            { name: "Sophia", comment: "Looks amazing and works flawlessly!" },
            { name: "John", comment: "Battery lasts all week. Totally worth it." },
        ],
        code: 5487,
    },
    {
        id: 3,
        name: "UnelmaCRM",
        image: "https://www.unelmaplatforms.com/assets/uploads/media-uploader/grid-unelma-platforms-unelma-crm-image1688587849.jpg",
        price: 10,
        features: ["When you choose UnelmaCRM, you choose a comprehensive CRM solution that offers 1 year of full support, maintenance, hosting, SaaS, top-notch security, and bug fixes."],
        description:
            "Introducing UnelmaCRM - your ultimate customer relationship management solution! With UnelmaCRM, we offer more than just a CRM system; we provide a comprehensive package that includes 1 year of full support, maintenance, hosting, SaaS (Software as a Service), top-notch security, and bug fixes. Our goal is to empower your business with the tools and resources necessary to enhance customer relationships and improve overall efficiency. With UnelmaCRM, you can streamline your sales processes, optimize lead management, and nurture long-lasting customer engagements. But that's not all. We believe in providing a seamless experience for our customers, which is why we take care of all hosting responsibilities. Say goodbye to the hassle of managing servers or worrying about downtime. With UnelmaCRM, your system will be hosted on our secure and reliable infrastructure, allowing you to focus on what matters most - growing your business. We understand the importance of data security in today's digital landscape. That's why we prioritize the protection of your valuable information. UnelmaCRM implements robust security measures to safeguard your data from unauthorized access. You can trust us to keep your business and customer data secure, giving you peace of mind. Additionally, software bugs can be frustrating and detrimental to your operations. With UnelmaCRM, our team of experts is dedicated to addressing any issues promptly. We provide regular bug fixes to ensure your CRM system runs smoothly and flawlessly. When you choose UnelmaCRM, you choose a comprehensive CRM solution that offers 1 year of full support, maintenance, hosting, SaaS, top-notch security, and bug fixes. Put your business on the fast track to success with our intuitive and feature-rich CRM system. Experience the power of UnelmaCRM today! Contact us now to unlock the full potential of your customer relationships and watch your business thrive. Don't miss out on this opportunity to elevate your CRM experience with UnelmaCRM.",
        rating: 4.9,
        reviews: [
            { name: "Mark", comment: "Runs all my games perfectly on max settings." },
            { name: "Linda", comment: "Fast and sleek. Excellent cooling system!" },
        ],
        code: 7123,
    },
    {
        id: 4,
        name: "UnelmaCloud",
        image: "https://www.unelmaplatforms.com/assets/uploads/media-uploader/grid-unelmacloud-certificate-for-guru-of-the-day1688581011.jpg",
        price: 24,
        features: ["With UnelmaCloud, we offer more than just storage space. Our product comes with a comprehensive package that includes one year of full support, maintenance, and security, along with free bug fixes from our experienced team of developers."],
        description:
            "Are you tired of dealing with the complexities and limitations of traditional cloud storage services? Look no further than UnelmaCloud, the ultimate solution for all your cloud storage needs. With UnelmaCloud, we offer more than just storage space. Our product comes with a comprehensive package that includes one year of full support, maintenance, and security, along with free bug fixes from our experienced team of developers. Imagine having a dedicated developer at your disposal, ensuring that your cloud storage remains optimized, secure, and bug-free. Our team will work tirelessly to address any issues that may arise, providing you with peace of mind and the assurance that your data is in capable hands. But that's not all. UnelmaCloud offers much more than just exceptional support. Our platform boasts an intuitive user interface, making it effortless to manage and organize your files. Whether you need to access important documents, share files with colleagues, or collaborate on projects, UnelmaCloud provides a seamless and efficient experience. Moreover, our advanced security measures guarantee the utmost protection for your data. We employ the latest encryption protocols to safeguard your information, ensuring that it remains confidential and inaccessible to unauthorized parties. By choosing UnelmaCloud, you not only invest in a robust cloud storage solution but also gain a trusted partner that is committed to your success. We go above and beyond to exceed your expectations, providing unparalleled customer service and continuous improvements to enhance your overall experience. Don't settle for mediocrity when it comes to cloud storage. Upgrade to UnelmaCloud and enjoy the benefits of 1 year of full support, maintenance, and security, with free bug fixes, all at an affordable cost. Experience the future of cloud storage with UnelmaCloud. Contact us today to get started.",
        rating: 4.9,
        reviews: [
            { name: "Mark", comment: "Runs all my games perfectly on max settings." },
            { name: "Linda", comment: "Fast and sleek. Excellent cooling system!" },
        ],
        code: 7123,
    },
];

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart(); // ✅ add to cart function
    const [quantity, setQuantity] = useState(1);

    const product = productsData.find((p) => p.id === parseInt(id));
    if (!product)
        return <div className="text-center py-32 text-gray-500 text-lg">Product not found 😞</div>;

    const handleScrollToDescription = () => {
        const descSection = document.getElementById("description-section");
        if (descSection) descSection.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-[#008081] font-medium hover:underline mb-8 mt-20"
            >
                <ArrowLeft className="w-5 h-5" /> Back to Products
            </button>

            {/* Product Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-2xl shadow-lg w-full h-[400px] object-cover mx-auto"
                />

                <div className="flex flex-col justify-center text-gray-800">
                    <h1 className="text-3xl font-bold mb-3">{product.name}</h1>

                    <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mb-6">
                        <p className="text-2xl font-semibold text-[#008081]">${product.price}</p>
                        <p className="text-gray-600">Product Code: {product.code}</p>
                        <p className="text-green-600 font-medium">Status: In Stock</p>
                    </div>

                    <div className="mb-4">
                        <h2 className="font-semibold text-lg mb-2">Key Features:</h2>
                        <ul className="list-disc list-inside text-gray-600 mb-2">
                            {product.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                        <button
                            onClick={handleScrollToDescription}
                            className="text-[#008081] hover:underline font-medium text-sm"
                        >
                            View more info →
                        </button>
                    </div>

                    {/* Quantity and Actions */}
                    <div className="flex items-center gap-4 mt-6">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                            <button
                                onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                                className="p-2 px-3 text-gray-700 hover:bg-gray-100"
                            >
                                <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-4 text-gray-800 font-semibold">{quantity}</span>
                            <button
                                onClick={() => setQuantity((prev) => prev + 1)}
                                className="p-2 px-3 text-gray-700 hover:bg-gray-100"
                            >
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>

                        <button
                            onClick={() => addToCart(product)} // ✅ Add to Cart
                            className="bg-[#008081] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#006666] transition-colors duration-300 cursor-pointer flex items-center gap-2"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            Add to Cart
                        </button>

                        <button className="bg-[#ff9900] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#e68a00] transition-colors duration-300 cursor-pointer">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <section id="description-section" className="mt-20 bg-gray-50 rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Product Description</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

                {/* Ratings & Reviews */}
                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Customer Reviews</h3>
                    <div className="flex items-center gap-1 mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                className={`w-5 h-5 ${i < Math.round(product.rating)
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-300"
                                    }`}
                            />
                        ))}
                        <span className="ml-2 text-gray-600 text-sm">{product.rating.toFixed(1)} / 5.0</span>
                    </div>

                    {product.reviews.map((review, idx) => (
                        <div key={idx} className="border-b border-gray-200 last:border-none py-3">
                            <p className="font-medium text-gray-900">{review.name}</p>
                            <p className="text-gray-600 text-sm">{review.comment}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProductDetails;



