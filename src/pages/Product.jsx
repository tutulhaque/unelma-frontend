import React, { useState } from "react";
import { ShoppingCart, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // ✅ import context

const productsData = [
  {
    id: 1,
    name: "Open-source software",
    image:
      "https://www.unelmaplatforms.com/assets/uploads/media-uploader/grid-open-source-software-icon-181689275745.png",
    price: 0,
    features: [],
  },
  {
    id: 2,
    name: "UnelmaMail",
    image:
      "https://www.unelmaplatforms.com/assets/uploads/media-uploader/grid-unelma-mail-11-transperency1689274046.png",
    price: 49,
    features: [],
  },
  {
    id: 3,
    name: "UnelmaCRM",
    image: "https://www.unelmaplatforms.com/assets/uploads/media-uploader/grid-unelma-platforms-unelma-crm-image1688587849.jpg",
    price: 10,
    features: [],
  },
  {
    id: 4,
    name: "UnelmaCloud",
    image:
      "https://www.unelmaplatforms.com/assets/uploads/media-uploader/grid-unelmacloud-certificate-for-guru-of-the-day1688581011.jpg",
    price: 24,
    features: [],
  },
];

const Product = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // ✅ hook from context

  const backgroundImage =
    "https://images.unsplash.com/photo-1503264116251-35a269479413";
  const title = "Our Products";

  const [sortOrder, setSortOrder] = useState("default");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter & Sort
  const filteredProducts = productsData
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "low-to-high") return a.price - b.price;
      if (sortOrder === "high-to-low") return b.price - a.price;
      return 0;
    });

  return (
    <div className="w-full">
      {/* Banner Section */}
      <section
        className="w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-white relative overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#3780B2cc] via-[#008081cc] to-black/60"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[100px] blur-3xl opacity-50 bg-gradient-to-t from-[#008081] to-transparent"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold z-10 drop-shadow-lg">
          {title}
        </h1>
      </section>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#008081] text-gray-700"
            />
          </div>

          {/* Sort Dropdown */}
          <select
            className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#008081] cursor-pointer"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="default">Sort by</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-2xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300 flex flex-col"
              >
                {/* Product Image */}
                <div
                  className="overflow-hidden cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)} // ✅ navigate to single product
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-[#008081] font-bold mb-2">
                    ${product.price}
                  </p>

                  {/* Features */}
                  <ul className="text-gray-500 text-sm mb-4 list-disc list-inside">
                    {product.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => addToCart(product)} // ✅ add product to global cart
                    className="mt-auto bg-[#008081] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#006666] transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-16 text-lg">
            No products found 😞
          </div>
        )}
      </section>
    </div>
  );
};

export default Product;








