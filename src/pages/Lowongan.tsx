import { Link } from "react-router-dom";
import { MapPin, Clock, Banknote, ArrowRight, Briefcase } from "lucide-react";
import { jobs } from "../data";

export default function Lowongan() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold">Lowongan Kerja</h1>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto text-lg">
            Bergabunglah dengan tim kami dan bantu membangun masa depan teknologi Indonesia bersama orang-orang terbaik di bidangnya.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            {[
              "Gaji Kompetitif",
              "Remote Friendly",
              "Tunjangan Kesehatan",
              "Learning Budget",
            ].map((perk) => (
              <span key={perk} className="px-4 py-2 bg-white/20 rounded-full">
                ✦ {perk}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Jobs List ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-extrabold text-gray-800">
              {jobs.length} Posisi Tersedia
            </h2>
          </div>

          <div className="space-y-4">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-lg font-extrabold text-gray-800">{job.title}</h3>
                      {job.hot && (
                        <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs font-bold rounded-full">
                          🔥 Hot
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-gray-500 mt-2">
                      <span className="flex items-center gap-1.5">
                        <Briefcase size={13} className="text-secondary" />
                        {job.department} · {job.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} className="text-secondary" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Banknote size={13} className="text-secondary" />
                        {job.salary}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} className="text-secondary" />
                        Dipost {job.posted}
                      </span>
                    </div>

                    <p className="text-sm text-gray-500 leading-relaxed mt-3">{job.description}</p>

                    <div className="mt-4">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Requirements
                      </p>
                      <ul className="space-y-1.5">
                        {job.requirements.map((req) => (
                          <li key={req} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-secondary mt-0.5 flex-shrink-0">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    to="/kontak"
                    className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-blue-700 transition-colors self-start"
                  >
                    Lamar <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Culture ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-800">Mengapa Bergabung dengan NIITS?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: "🚀", title: "Dampak Nyata", desc: "Pekerjaan Anda langsung memengaruhi ratusan ribu pengguna dan bisnis di seluruh Indonesia." },
              { emoji: "📚", title: "Belajar Terus", desc: "Budget learning, akses ke konferensi, dan budaya berbagi pengetahuan yang kuat." },
              { emoji: "🏠", title: "Kerja Fleksibel", desc: "Sistem hybrid dan remote yang mendukung work-life balance terbaik untuk Anda." },
              { emoji: "💰", title: "Kompensasi Fair", desc: "Gaji kompetitif, bonus kinerja, dan equity bagi posisi tertentu." },
              { emoji: "👥", title: "Tim Luar Biasa", desc: "Rekan kerja yang cerdas, suportif, dan selalu mau berbagi ilmu." },
              { emoji: "🌱", title: "Tumbuh Bersama", desc: "Jalur karir yang jelas dan program mentorship untuk setiap level." },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white">Tidak Menemukan Posisi yang Cocok?</h2>
          <p className="mt-3 text-blue-100">
            Kirim CV dan portofolio Anda ke kami. Kami selalu mencari talenta berbakat untuk bergabung dengan tim.
          </p>
          <Link
            to="/kontak"
            className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-primary font-bold hover:bg-blue-50 transition-colors shadow"
          >
            Kirim Lamaran Umum <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
