import { Link } from "react-router-dom";
import { ArrowRight, Zap, Heart, Users, Target } from "lucide-react";
import { company, team, values } from "../data";

const iconMap: Record<string, React.ElementType> = { Zap, Heart, Users, Target };

export default function Tentang() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold">Tentang NIITS</h1>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto text-lg">
            Kami adalah perusahaan teknologi yang didirikan dengan misi sederhana: membantu setiap bisnis memanfaatkan teknologi secara maksimal.
          </p>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-800 mb-5">
                Cerita Kami
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  NIITS didirikan pada tahun {company.founded} oleh sekelompok engineer dan entrepreneur yang percaya bahwa teknologi seharusnya dapat diakses dan dimanfaatkan oleh semua jenis bisnis, bukan hanya perusahaan besar.
                </p>
                <p>
                  Dimulai dari sebuah ruang kerja kecil di Jakarta, kami telah tumbuh menjadi tim {company.employees} profesional yang telah menyelesaikan lebih dari {company.projects} proyek untuk klien dari berbagai industri.
                </p>
                <p>
                  Hari ini, NIITS tidak hanya dikenal sebagai perusahaan pengembang software, tapi juga sebagai ekosistem teknologi yang mencakup layanan konsultasi, pengembangan produk, dan program pendidikan melalui NIITS Bootcamp.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: company.founded, label: "Tahun Berdiri" },
                { value: company.employees, label: "Anggota Tim" },
                { value: company.projects, label: "Proyek Selesai" },
                { value: company.clients, label: "Klien Aktif" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100"
                >
                  <p className="text-3xl font-extrabold text-primary">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-800">Nilai-Nilai Kami</h2>
            <p className="mt-3 text-gray-500">
              Prinsip-prinsip yang memandu setiap keputusan dan tindakan kami.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = iconMap[value.icon] ?? Zap;
              return (
                <div key={value.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm text-center">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-800">Tim Kami</h2>
            <p className="mt-3 text-gray-500">
              Orang-orang berpengalaman di balik solusi-solusi NIITS.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="text-center bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="font-extrabold text-gray-800">{member.name}</h3>
                <p className="text-sm text-secondary font-medium mt-0.5">{member.role}</p>
                <p className="text-sm text-gray-500 mt-3 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white">Bergabunglah Bersama Kami</h2>
          <p className="mt-3 text-blue-100">
            Baik sebagai klien maupun bagian dari tim, kami selalu terbuka untuk kolaborasi yang bermakna.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link
              to="/kontak"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-primary font-bold hover:bg-blue-50 transition-colors"
            >
              Hubungi Kami <ArrowRight size={16} />
            </Link>
            <Link
              to="/lowongan"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white text-white font-bold hover:bg-white/10 transition-colors"
            >
              Lihat Lowongan
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
