import { useState, useEffect } from "react";
import { Heart, Star } from "lucide-react";

export function ProductCard({ product, addToCart }) {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [currentImage, setCurrentImage] = useState(product.image);
  const [imageLoading, setImageLoading] = useState(false);

  // Update image when color is selected
  useEffect(() => {
    if (selectedColor && selectedColor.image) {
      setImageLoading(true);
      setCurrentImage(selectedColor.image);
      console.log(
        "Color changed to:",
        selectedColor.name,
        "Image:",
        selectedColor.image,
      );
    } else {
      setImageLoading(true);
      setCurrentImage(product.image);
      console.log("Reset to default image:", product.image);
    }
  }, [selectedColor, product.image]);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleColorSelect = (color) => {
    console.log("Selected color:", color);
    setSelectedColor(color);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <div className="relative overflow-hidden bg-gray-100">
          {imageLoading && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse z-10"></div>
          )}
          <img
            key={`${product.id}-${currentImage}`} // Force re-render on image change
            src={currentImage}
            alt={`${product.name}${selectedColor ? ` in ${selectedColor.name}` : ""}`}
            className="w-full h-64 object-cover transition-all duration-500 ease-in-out transform hover:scale-105"
            onLoad={handleImageLoad}
            onError={() => setImageLoading(false)}
          />
          {/* Color change indicator with enhanced visibility */}
          {selectedColor && (
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-90 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg animate-fade-in">
              {selectedColor.name}
            </div>
          )}
        </div>
        {product.discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded z-10">
            {product.discount}
          </span>
        )}
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 z-10">
          <Heart className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      <div className="p-4">
        <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h4>

        <div className="flex items-center mb-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-500 ml-2">
            ({product.reviews} reviews)
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* Size Selection */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Size
          </label>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 text-sm border rounded transition-colors ${
                  selectedSize === size
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:border-blue-600"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selection with Preview */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Color {selectedColor && `- ${selectedColor.name}`}
          </label>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => handleColorSelect(color)}
                className={`flex items-center space-x-2 px-3 py-2 text-sm border rounded transition-all duration-200 hover:scale-105 hover:shadow-md ${
                  selectedColor?.name === color.name
                    ? "bg-blue-50 border-blue-600 ring-2 ring-blue-200 shadow-md"
                    : "bg-white border-gray-300 hover:border-blue-600 hover:shadow-sm"
                }`}
              >
                <div
                  className="w-5 h-5 rounded-full border-2 border-gray-300 shadow-sm"
                  style={{ backgroundColor: color.hex }}
                ></div>
                <span className="font-medium">{color.name}</span>
                {color.image && (
                  <div className="w-6 h-6 rounded border overflow-hidden ml-1">
                    <img
                      src={color.image}
                      alt={`${product.name} in ${color.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </button>
            ))}
          </div>
          {product.colors.length > 1 && !selectedColor && (
            <p className="text-xs text-gray-500 mt-1">
              💡 Select a color to see how it looks
            </p>
          )}
        </div>

        <button
          onClick={() => addToCart(product, selectedSize, selectedColor)}
          disabled={!selectedSize || !selectedColor}
          className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
            !selectedSize || !selectedColor
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {!selectedSize || !selectedColor
            ? "Select Size & Color"
            : "Add to Cart"}
        </button>
      </div>

      {/* Add fade-in animation for color indicator */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
