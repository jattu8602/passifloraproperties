import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Passiflora Properties</h3>
            <p className="text-gray-600 text-sm">
              Luxury eco-real estate across India. Invest in land. Grow with nature.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Regions */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Regions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition">
                  Maharashtra
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition">
                  Bihar
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition">
                  Jharkhand
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-600">© 2025 Passiflora Properties. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
