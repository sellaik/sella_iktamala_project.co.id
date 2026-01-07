function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* GAMBAR KIRI */}
        <div>
          <img
            src="/women-marketing.png"
            alt="Why Choose Us"
            className="max-w-130 h-110 object-cover rounded-2xl"
          />
        </div>

        {/* TEKS KANAN */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-5">
            Mengapa Memilih Kami?
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Bergabunglah dengan ribuan freelancer sukses yang mempercayai
            platform kami untuk menemukan proyek berkualitas dan mengembangkan
            karier mereka.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>• Klien terverifikasi dengan kebutuhan proyek yang asli</li>
            <li>• Proses penawaran yang jelas dan transparan</li>
            <li>• Notifikasi real-time untuk proyek baru</li>
            <li>• Sistem pembayaran aman berbasis milestone</li>
            <li>• Dukungan 24/7 dan resolusi sengketa</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
