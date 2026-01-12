function WhyChooseUs() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* GAMBAR */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="/women-marketing.png"
            alt="Why Choose Us"
            className="
              w-full
              max-w-sm
              sm:max-w-md
              lg:max-w-lg
              h-auto
              object-cover
              rounded-2xl
            "
          />
        </div>

        {/* TEKS */}
        <div className="flex flex-col justify-center">
          <h2
            className="
            text-2xl
            sm:text-3xl
            lg:text-4xl
            font-bold
            text-black
          "
          >
            Mengapa Memilih Kami?
          </h2>

          <p
            className="
            text-whychooseus
            py-4
            sm:py-6
            leading-relaxed
            text-sm
            sm:text-base
          "
          >
            Bergabunglah dengan ribuan freelancer sukses yang mempercayai
            platform kami untuk menemukan proyek berkualitas dan mengembangkan
            karier mereka.
          </p>

          <ul
            className="
            space-y-3
            text-whychooseus
            text-sm
            sm:text-base
          "
          >
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
