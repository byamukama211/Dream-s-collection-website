import { useState } from "react";

// MTN Merchant Configuration
const MTN_MERCHANT_CODE = "MTN_MENSTYLE_001";

export function useCheckout(cartTotal, clearCart) {
  const [showCheckout, setShowCheckout] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("mtn");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [deliveryArea, setDeliveryArea] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const processMTNPayment = async () => {
    if (!phoneNumber) {
      alert("Please enter your MTN phone number");
      return;
    }

    if (!deliveryArea || !deliveryAddress) {
      alert("Please enter your delivery area and address in Kampala");
      return;
    }

    setIsProcessingPayment(true);

    try {
      // Simulate MTN payment processing
      const paymentData = {
        amount: cartTotal.toFixed(2),
        currency: "USD",
        externalId: `ORDER_${Date.now()}`,
        payer: {
          partyIdType: "MSISDN",
          partyId: phoneNumber,
        },
        payerMessage: "Payment for MenStyle order",
        payeeNote: `Order from MenStyle - Merchant: ${MTN_MERCHANT_CODE}`,
        merchantCode: MTN_MERCHANT_CODE,
        deliveryInfo: {
          area: deliveryArea,
          address: deliveryAddress,
        },
      };

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Simulate successful payment
      alert(
        `Payment successful! 
Transaction ID: TXN${Date.now()}
Merchant Code: ${MTN_MERCHANT_CODE}
Amount: $${cartTotal.toFixed(2)}
Delivery to: ${deliveryArea}
Address: ${deliveryAddress}
Expected delivery: 2-3 business days`,
      );

      // Clear cart and close modals
      clearCart();
      setShowCheckout(false);
      setPhoneNumber("");
      setDeliveryArea("");
      setDeliveryAddress("");
    } catch (error) {
      alert("Payment failed. Please try again.");
    } finally {
      setIsProcessingPayment(false);
    }
  };

  return {
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
  };
}
