export function CartSummary({ cartItems, cartTotal, cartItemCount, handleCheckout }) {
  if (cartItems.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border">
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold">Cart Total:</span>
        <span className="font-bold text-lg">${cartTotal.toFixed(2)}</span>
      </div>
      <button
        onClick={handleCheckout}
        className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
      >
        Checkout ({cartItemCount} items)
      </button>
    </div>
  );
}
