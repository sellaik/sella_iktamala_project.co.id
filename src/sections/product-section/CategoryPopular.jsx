const categories = [
  {
    title: "Development & IT",
    count: "200 Proyek Aktif",
    icon: (
      <img
        src="/icons/computer.svg"
        alt="Development & IT"
        className="w-6 h-6"
      />
    ),
  },
  {
    title: "Design and Creative",
    count: "315 Proyek Aktif",
    icon: (
      <img
        src="/icons/papan.svg"
        alt="Design and Creative"
        className="w-6 h-6"
      />
    ),
  },
  {
    title: "Writing & Translation",
    count: "80 Proyek Aktif",
    icon: (
      <img
        src="/icons/streamline.svg"
        alt="Writing & Translation"
        className="w-6 h-6"
      />
    ),
  },
  {
    title: "Business & Finance",
    count: "95 Proyek Aktif",
    icon: (
      <img
        src="/icons/graphic2.svg"
        alt="Business & Finance"
        className="w-6 h-6"
      />
    ),
  },
  {
    title: "AI Service",
    count: "58 Proyek Aktif",
    icon: (
      <img src="/icons/AI-icons.svg" alt="AI Service" className="w-6 h-6" />
    ),
  },
  {
    title: "Others",
    count: "286 Proyek Aktif",
    icon: "⋯",
  },
];

export default function KategoriPopular() {
  return (
    <section className="bg-[#FBF1E6] py-16 px-6">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-900">Kategori Popular</h1>
        <p className="text-gray-500 mt-3">
          Jelajahi Proyek diberbagai kategori
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-9 flex items-center gap-8
                       shadow-md hover:shadow-xl transition-all duration-300
                       hover:-translate-y-1 cursor-pointer"
          >
            {/* Icon */}
            <div className="w-15 h-15 bg-[#FBD3A8] rounded-xl flex items-center justify-center">
              <span className="text-2xl">{item.icon}</span>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{item.count}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
