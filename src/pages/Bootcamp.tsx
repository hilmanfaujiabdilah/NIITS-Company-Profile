import { Link } from "react-router-dom";
import { Clock, Calendar, CheckCircle, ArrowRight, Users, Award } from "lucide-react";
import { bootcamps } from "../data";

export default function Bootcamp() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold">Program Bootcamp</h1>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto text-lg">
            Program intensif berbasis industri yang akan membawa karir teknologi Anda ke level berikutnya. Belajar dari para praktisi, bukan sekadar teori.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
            {[
              { icon: Users, text: "1000+ alumni berhasil" },
              { icon: Award, text: "Sertifikat terakreditasi" },
              { icon: CheckCircle, text: "Job placement assistance" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Icon size={15} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bootcamp Cards ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bootcamps.map((camp) => (
              <div
                key={camp.id}
                className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                {camp.badge && (
                  <span
                    className={`absolute top-5 right-5 text-xs font-bold px-3 py-1 rounded-full ${
                      camp.badge === "Terpopuler"
                        ? "bg-orange-100 text-orange-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {camp.badge}
                  </span>
                )}

                <div className="p-7">
                  <div className="flex items-center gap-2 text-xs text-secondary font-semibold uppercase tracking-wide mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {camp.level}
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-800 mb-3">{camp.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{camp.description}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-5">
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-secondary" />
                      {camp.duration}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-secondary" />
                      {camp.schedule}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 mb-5">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Materi Utama</p>
                    <div className="grid grid-cols-2 gap-2">
                      {camp.topics.map((topic) => (
                        <div key={topic} className="flex items-center gap-1.5 text-sm text-gray-700">
                          <CheckCircle size={12} className="text-secondary flex-shrink-0" />
                          {topic}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400">Investasi mulai dari</p>
                      <p className="text-lg font-extrabold text-primary">{camp.price}</p>
                    </div>
                    <Link
                      to="/kontak"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Daftar <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why NIITS Bootcamp ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-800">Mengapa NIITS Bootcamp?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "👨‍💻", title: "Mentor Praktisi", desc: "Belajar langsung dari developer dan designer yang aktif di industri." },
              { icon: "🎯", title: "Kurikulum Industri", desc: "Materi diperbarui setiap semester mengikuti kebutuhan pasar kerja." },
              { icon: "💼", title: "Job Placement", desc: "Koneksi dengan 100+ perusahaan mitra untuk membantu penempatan kerja alumni." },
              { icon: "🏆", title: "Proyek Nyata", desc: "Kerjakan proyek portfolio yang bisa langsung ditampilkan ke employer." },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white">Mulai Perjalanan Karir Anda</h2>
          <p className="mt-3 text-blue-100">
            Daftar sekarang dan jadilah bagian dari komunitas 1000+ alumni NIITS yang sudah berkarir di perusahaan top.
          </p>
          <Link
            to="/kontak"
            className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-primary font-bold hover:bg-blue-50 transition-colors shadow"
          >
            Daftar Sekarang <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
