function FeaturesSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-300 mx-auto px-6">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* CARD 1 */}
          <div className="rounded-2xl border border-[#C9B6A6] bg-[#FBF7F3] p-6 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center mb-4">
              <img src="flowbite.svg" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Smart Filtering</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Filter canggih membantu Anda menemukan proyek yang tepat dengan
              presisi tinggi
            </p>
          </div>

          {/* CARD 2 */}
          <div className="rounded-2xl border border-[#C9B6A6] bg-[#FBF7F3] p-6 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center mb-4">
              <img src="shield.svg" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Pembayaran Aman</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Penghasilan Anda dilindungi dengan sistem escrow dan pembayaran
              berbasis milestone.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="rounded-2xl border border-[#C9B6A6] bg-[#FBF7F3] p-6 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center mb-4">
              <img src="graphic.svg" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Penawaran Transparan</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Proses penawaran yang jelas memastikan kompetisi yang adil dan
              proposal yang jujur.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="rounded-2xl border border-[#C9B6A6] bg-[#FBF7F3] p-6 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center mb-4">
              <img src="thunder.svg" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Proyek Real-time</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Dapatkan notifikasi instan ketika ada proyek baru yang sesuai
              dengan keahlian Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
