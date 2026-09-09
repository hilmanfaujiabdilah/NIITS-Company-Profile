import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { company, services, testimonials, bootcamps } from "../data";

export default function Beranda() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-primary to-secondary overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full" />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-white/5 rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-5">
              🚀 Solusi Digital Terpercaya
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              {company.tagline}
            </h1>
            <p className="mt-5 text-lg text-blue-100 max-w-xl leading-relaxed">
              {company.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/layanan"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-primary font-semibold hover:bg-blue-50 transition-colors shadow-lg"
              >
                Lihat Layanan <ArrowRight size={18} />
              </Link>
              <Link
                to="/kontak"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: company.founded, label: "Didirikan" },
              { value: company.employees, label: "Tim Profesional" },
              { value: company.projects, label: "Proyek Selesai" },
              { value: company.clients, label: "Klien Puas" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold text-primary">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Layanan ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
              Layanan Kami
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Kami menyediakan berbagai solusi teknologi end-to-end untuk membantu bisnis Anda berkembang di era digital.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-lg">
                    {service.title.charAt(0)}
                  </span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/layanan"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Lihat semua layanan <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Bootcamp CTA ── */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-xl">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Tingkatkan Skill dengan Bootcamp NIITS
              </h2>
              <p className="mt-3 text-blue-100">
                Program intensif yang dirancang bersama industri, dengan mentor berpengalaman dan kurikulum yang selalu diperbarui.
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                {bootcamps.slice(0, 3).map((b) => (
                  <div key={b.id} className="flex items-center gap-2 text-blue-100 text-sm">
                    <CheckCircle size={14} className="text-white flex-shrink-0" />
                    {b.title}
                  </div>
                ))}
              </div>
            </div>
            <Link
              to="/bootcamp"
              className="flex-shrink-0 px-8 py-3.5 rounded-xl bg-white text-primary font-bold hover:bg-blue-50 transition-colors shadow-lg"
            >
              Daftar Bootcamp
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
              Yang Mereka Katakan
            </h2>
            <p className="mt-3 text-gray-500">
              Kepercayaan klien adalah prioritas utama kami.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">"{t.quote}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Siap Transformasi Digital?
          </h2>
          <p className="mt-4 text-gray-500">
            Konsultasikan kebutuhan teknologi bisnis Anda dengan tim ahli kami. Gratis, tanpa komitmen.
          </p>
          <Link
            to="/kontak"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Mulai Konsultasi Gratis <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
