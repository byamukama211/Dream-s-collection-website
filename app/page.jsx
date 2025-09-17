"use client";
import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import { useProducts } from "@/hooks/useProducts";
import { useCheckout } from "@/hooks/useCheckout";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductGrid } from "@/components/ProductGrid";
import { CartModal } from "@/components/CartModal";
import { CheckoutModal } from "@/components/CheckoutModal";
import { CartSummary } from "@/components/CartSummary";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  const [showCart, setShowCart] = useState(false);
  const {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
    cartItemCount,
  } = useCart();
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filteredProducts,
  } = useProducts();
  const {
    showCheckout,
    setShowCheckout,
    paymentMethod,
    setPaymentMethod,
    phoneNumber,
    setPhoneNumber,
    isProcessingPayment,
    deliveryArea,
    setDeliveryArea,
    deliveryAddress,
    setDeliveryAddress,
    processMTNPayment,
    MTN_MERCHANT_CODE,
  } = useCheckout(cartTotal, clearCart);

  const handleCheckout = () => {
    setShowCart(false);
    setShowCheckout(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartItemCount={cartItemCount}
        setShowCart={setShowCart}
      />
      <Hero />
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductGrid
        products={filteredProducts}
        addToCart={addToCart}
        selectedCategory={selectedCategory}
      />
      <Footer />

      <CartModal
        showCart={showCart}
        setShowCart={setShowCart}
        cartItems={cartItems}
        cartTotal={cartTotal}
        cartItemCount={cartItemCount}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        handleCheckout={handleCheckout}
      />

      <CheckoutModal
        showCheckout={showCheckout}
        setShowCheckout={setShowCheckout}
        cartTotal={cartTotal}
        cartItemCount={cartItemCount}
        deliveryArea={deliveryArea}
        setDeliveryArea={setDeliveryArea}
        deliveryAddress={deliveryAddress}
        setDeliveryAddress={setDeliveryAddress}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        isProcessingPayment={isProcessingPayment}
        processMTNPayment={processMTNPayment}
        MTN_MERCHANT_CODE={MTN_MERCHANT_CODE}
      />

      <CartSummary
        cartItems={cartItems}
        cartTotal={cartTotal}
        cartItemCount={cartItemCount}
        handleCheckout={handleCheckout}
      />
    </div>
  );
}
