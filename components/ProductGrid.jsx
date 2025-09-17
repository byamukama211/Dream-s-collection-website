import { ProductCard } from "@/components/ProductCard";
import { categories } from "@/data/shop";

export function ProductGrid({
  products,
  addToCart,
  selectedCategory,
}) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900">
            {selectedCategory === "all"
              ? "All Products"
              : categories.find((c) => c.id === selectedCategory)?.name}
          </h3>
          <p className="text-gray-600">{products.length} products found</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
