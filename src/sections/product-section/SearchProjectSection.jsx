function SearchProjectSection() {
  return (
    <section className="relative w-full h-122 overflow-hidden mt-36">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/web-sella.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-300 px-6 pl-100">
          {/* Heading */}
          <h1 className="text-4xl md:text-[42px] font-bold leading-tight mb-4 text-gray-900 ">
            Temukan Proyek Sesuai <br />
            dengan Keahlian Anda
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 mb-8 max-w-130">
            Jutaan pilihan project untuk Anda. Cari apa yang Anda inginkan.
          </p>

          {/* Search Bar */}
          <div className="flex items-center bg-white border border-gray-600 rounded-3xl overflow-hidden max-w-300 shadow-sm">
            <span className="px-5 text-gray-400">
              <img src="search.svg" />
            </span>

            <input
              type="text"
              placeholder="Cari proyek, jasa, atau produk..."
              className="flex-1 py-4 text-sm outline-none"
            />

            <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-2xl m-1">
              Cari
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchProjectSection;
