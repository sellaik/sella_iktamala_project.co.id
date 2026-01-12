function SearchProjectSection() {
  return (
    <section className="relative w-full min-h-[420px] sm:min-h-[520px] lg:min-h-[600px] overflow-hidden mt-24 sm:mt-32 lg:mt-36">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/web-sella.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div
          className="
          w-full
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-16
          pt-16
          sm:pt-20
          lg:pt-28
        "
        >
          {/* Heading */}
          <h1
            className="
            text-2xl
            sm:text-3xl
            lg:text-[42px]
            font-bold
            leading-tight
            mb-4
            text-gray-900
          "
          >
            Temukan Proyek Sesuai <br className="hidden sm:block" />
            dengan Keahlian Anda
          </h1>

          {/* Subtitle */}
          <p
            className="
            text-gray-600
            mb-6
            sm:mb-8
            max-w-xl
            text-sm
            sm:text-base
          "
          >
            Jutaan pilihan project untuk Anda. Cari apa yang Anda inginkan.
          </p>

          {/* Search Bar */}
          <div
            className="
            flex
            items-center
            bg-white
            border
            border-gray-400
            rounded-full
            overflow-hidden
            w-full
            max-w-xl
            shadow-sm
          "
          >
            <span className="px-4 text-gray-400">
              <img src="search.svg" alt="search" className="w-5 h-5" />
            </span>

            <input
              type="text"
              placeholder="Cari proyek, jasa, atau produk..."
              className="flex-1 py-3 sm:py-4 text-sm outline-none"
            />

            <button
              className="
              px-5
              sm:px-6
              py-2
              bg-orange-500
              text-white
              font-semibold
              rounded-full
              m-1
              text-sm
            "
            >
              Cari
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchProjectSection;
