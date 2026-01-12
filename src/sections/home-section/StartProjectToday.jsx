function StartProjectToday() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Heading */}
        <h2
          className="
          text-3xl
          sm:text-4xl
          lg:text-5xl
          font-bold
          text-gray-900
          mb-6
        "
        >
          Mulai Cari Proyek Hari Ini
        </h2>

        {/* Subtitle */}
        <p
          className="
          text-sm
          sm:text-base
          text-[#8B6F4E]
          max-w-xl
          mx-auto
          mb-10
          leading-relaxed
        "
        >
          Bergabunglah dengan komunitas freelancer berbakat kami dan temukan
          peluang yang sesuai dengan keahlian Anda.
        </p>

        {/* CTA Button */}
        <button
          className="
            inline-flex
            items-center
            justify-center
            px-8
            py-3
            bg-[#F58220]
            text-white
            font-semibold
            rounded-xl
            shadow-md
            hover:shadow-lg
            hover:bg-[#e5741d]
            transition
            duration-200
          "
        >
          Daftar Sekarang
        </button>
      </div>
    </section>
  );
}

export default StartProjectToday;
