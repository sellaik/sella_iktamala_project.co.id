function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0B1325] to-[#0A1020] text-gray-300 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* BRAND & CONTACT */}
          <div className="lg:col-span-1">
            <img
              src="/projects-logo.png"
              alt="projects.co.id"
              className="h-10 mb-6"
            />

            <p className="text-sm leading-relaxed mb-6">
              Platform freelance & digital marketplace untuk mencari jasa
              profesional dan menawarkan layanan digital.
            </p>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span>📍</span>
                <span>Bandung, Indonesia</span>
              </li>
              <li className="flex items-start gap-3">
                <span>✉️</span>
                <span>contact@projects.co.id</span>
              </li>
              <li className="flex items-start gap-3">
                <span>☎️</span>
                <span>(022) 6902 - 1117</span>
              </li>
              <li className="flex items-start gap-3">
                <span>📱</span>
                <span>+62 - 858 - 9105 - 5785</span>
              </li>
            </ul>
          </div>

          {/* ABOUT US */}
          <div>
            <h4 className="font-semibold text-white mb-5">About Us</h4>
            <ul className="space-y-3 text-sm">
              <li>Perusahaan Kami</li>
              <li>Syarat Layanan</li>
              <li>Kebijakan Privasi</li>
              <li>Investing</li>
            </ul>

            <h4 className="font-semibold text-white mt-8 mb-4">
              Customer Support
            </h4>
            <ul className="space-y-3 text-sm">
              <li>Live Chat</li>
              <li>Contact Form</li>
              <li>Service Hours: 9am - 5pm</li>
            </ul>
          </div>

          {/* KNOWLEDGEBASE */}
          <div>
            <h4 className="font-semibold text-white mb-5">Knowledgebase</h4>
            <ul className="space-y-3 text-sm">
              <li>Pengenalan</li>
              <li>Cara Kerja</li>
              <li>Keunggulan</li>
              <li>Aturan Main</li>
              <li>Menjadi Owner</li>
              <li>Menjadi Worker</li>
              <li>Menjadi Seller</li>
              <li>Menjadi Affiliate</li>
            </ul>
          </div>

          {/* AFFILIATE & COMMUNITY */}
          <div>
            <h4 className="font-semibold text-white mb-5">Affiliate</h4>
            <ul className="space-y-3 text-sm mb-8">
              <li>Menjadi Affiliate</li>
              <li>Aturan Affiliate</li>
              <li>FAQ Affiliate</li>
              <li>Media Kit</li>
            </ul>

            <h4 className="font-semibold text-white mb-4">Community</h4>
            <ul className="space-y-3 text-sm">
              <li>Blog</li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="font-semibold text-white mb-5">Newsletter</h4>

            <div className="flex items-center bg-[#1A2238] rounded-full overflow-hidden mb-8">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent px-4 py-2 text-sm outline-none flex-1"
              />
              <button className="bg-orange-500 text-white px-5 py-2 text-sm font-semibold">
                Subscribe
              </button>
            </div>

            <h4 className="font-semibold text-white mb-4">Payment Methods</h4>

            <img
              src="/payment-methods.png"
              alt="Payment Methods"
              className="max-w-full"
            />
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-16 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} projects.co.id. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
