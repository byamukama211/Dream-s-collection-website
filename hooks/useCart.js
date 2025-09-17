import { useState } from "react";

export function useCart() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, selectedSize, selectedColor) => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color before adding to cart");
      return;
    }

    setCartItems((prev) => {
      const existing = prev.find(
        (item) =>
          item.id === product.id &&
          item.selectedSize === selectedSize &&
          item.selectedColor.name === selectedColor.name,
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id &&
          item.selectedSize === selectedSize &&
          item.selectedColor.name === selectedColor.name
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
          selectedSize,
          selectedColor,
          cartId: `${product.id}-${selectedSize}-${selectedColor.name}`,
        },
      ];
    });
  };

  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(cartId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.cartId === cartId ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const removeFromCart = (cartId) => {
    setCartItems((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
    cartItemCount,
  };
}
