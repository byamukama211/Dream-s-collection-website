export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MenStyle</h3>
            <p className="text-gray-400 mb-4">
              Your premier destination for men's fashion and style in Kampala,
              Uganda.
            </p>
            <div className="text-gray-400">
              <p className="mb-2">📍 Plot 123, Kampala Road</p>
              <p className="mb-2">📞 +256 700 123 456</p>
              <p>✉️ info@menstyle.ug</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shirts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pants
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shoes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Accessories
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="tel:+256700123456"
                  className="hover:text-white transition-colors"
                >
                  📞 +256 700 123 456
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@menstyle.ug"
                  className="hover:text-white transition-colors"
                >
                  📧 support@menstyle.ug
                </a>
              </li>
              <li>
                <span className="text-gray-400">
                  🚚 Free delivery in Kampala (2-3 days)
                </span>
              </li>
              <li>
                <span className="text-gray-400">🔄 30-day return policy</span>
              </li>
              <li>
                <span className="text-gray-400">📏 Size guide available</span>
              </li>
              <li>
                <span className="text-gray-400">⏰ Mon-Sat: 9AM-7PM</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest collections and exclusive offers
            </p>
            <div className="space-y-3">
              <a
                href="https://facebook.com/menstyleuganda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <span>📘</span>
                <span>@MenStyleUganda</span>
              </a>
              <a
                href="https://instagram.com/menstyle_ug"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <span>📸</span>
                <span>@menstyle_ug</span>
              </a>
              <a
                href="https://twitter.com/menstyleug"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <span>🐦</span>
                <span>@MenStyleUG</span>
              </a>
              <a
                href="https://wa.me/256700123456"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <span>💬</span>
                <span>WhatsApp: +256 700 123 456</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 MenStyle Uganda. All rights reserved. | Privacy Policy |
            Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
