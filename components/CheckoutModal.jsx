import { X, MapPin, CreditCard } from "lucide-react";
import { kampalaAreas } from "@/data/shop";

export function CheckoutModal({
  showCheckout,
  setShowCheckout,
  cartTotal,
  cartItemCount,
  deliveryArea,
  setDeliveryArea,
  deliveryAddress,
  setDeliveryAddress,
  paymentMethod,
  setPaymentMethod,
  phoneNumber,
  setPhoneNumber,
  isProcessingPayment,
  processMTNPayment,
  MTN_MERCHANT_CODE,
}) {
  if (!showCheckout) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold">Checkout</h2>
          <button
            onClick={() => setShowCheckout(false)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Delivery Information */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Delivery Information
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Delivery Area in Kampala
                </label>
                <select
                  value={deliveryArea}
                  onChange={(e) => setDeliveryArea(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select delivery area</option>
                  {kampalaAreas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Specific Address
                </label>
                <textarea
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  placeholder="Enter your specific address, building name, landmark, etc."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows="3"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Please provide detailed address for accurate delivery
                </p>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="flex justify-between mb-2">
                <span>Items ({cartItemCount})</span>
                <span>${cartTotal.toFixed(2)}</span>
              </p>
              <p className="flex justify-between mb-2">
                <span>Delivery within Kampala</span>
                <span>Free</span>
              </p>
              <div className="border-t pt-2">
                <p className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 border rounded-lg bg-yellow-50 border-yellow-200">
                <input
                  type="radio"
                  id="mtn"
                  name="payment"
                  value="mtn"
                  checked={paymentMethod === "mtn"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-4 h-4"
                />
                <label
                  htmlFor="mtn"
                  className="flex-1 flex items-center space-x-2"
                >
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">MTN</span>
                  </div>
                  <div>
                    <p className="font-semibold">MTN Mobile Money</p>
                    <p className="text-sm text-gray-600">
                      Merchant Code: {MTN_MERCHANT_CODE}
                    </p>
                  </div>
                </label>
              </div>
            </div>
            {paymentMethod === "mtn" && (
              <div className="mt-4">
                <label className="block text-sm font-medium mb-2">
                  MTN Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +256 77 123 4567"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">
                  You will receive a prompt on your phone to authorize payment
                </p>
              </div>
            )}
          </div>

          <button
            onClick={processMTNPayment}
            disabled={
              isProcessingPayment ||
              !phoneNumber ||
              !deliveryArea ||
              !deliveryAddress
            }
            className="w-full bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isProcessingPayment ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                <span>Processing Payment...</span>
              </>
            ) : (
              <>
                <CreditCard className="w-5 h-5" />
                <span>Pay with MTN MoMo - ${cartTotal.toFixed(2)}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
