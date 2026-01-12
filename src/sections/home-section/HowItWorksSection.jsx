function HowItWorksSection() {
  return (
    <section className="bg-[#FBF1E6] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Cara Kerja</h2>
          <p className="text-sm text-gray-600 mt-2">
            Mulai dalam tempat langkah sederhana
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FAD3AE] mb-6">
              <img src="/add-account.png" alt="Buat Akun" className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Buat Akun</h3>
            <p className="text-sm text-gray-600 max-w-55">
              Daftar gratis dan bangun profil profesional. Anda dalam hitungan
              menit.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FAD3AE] mb-6">
              <img
                src="/search-symbol.png"
                alt="Cari Proyek"
                className="w-7 h-7"
              />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Cari Proyek</h3>
            <p className="text-sm text-gray-600 max-w-55">
              Jelajahi ribuan proyek dan filter berdasarkan keahlian, anggaran,
              dan timeline.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FAD3AE] mb-6">
              <img
                src="/pepicons.png"
                alt="Kirim Penawaran"
                className="w-7 h-7"
              />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Kirim Penawaran</h3>
            <p className="text-sm text-gray-600 max-w-55">
              Kirim proposal Anda dan mulai bekerja setelah klien menerima.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FAD3AE] mb-6">
              <img
                src="/database-icons.png"
                alt="Ambil Proyek"
                className="w-7 h-7"
              />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Ambil Proyek</h3>
            <p className="text-sm text-gray-600 max-w-55">
              Selamat kamu berhasil mengambil proyek!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
