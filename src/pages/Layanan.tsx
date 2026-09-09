import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Monitor, Smartphone, Cloud, BarChart2, Shield, Settings } from "lucide-react";
import { services } from "../data";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Smartphone,
  Cloud,
  BarChart2,
  Shield,
  Settings,
};

export default function Layanan() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold">Layanan Kami</h1>
          <p className="mt-4 text-blue-100 max-w-xl mx-auto text-lg">
            Solusi teknologi end-to-end yang dirancang untuk membantu bisnis Anda tumbuh dan bersaing di era digital.
          </p>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon] ?? Monitor;
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-primary flex items-center justify-center mb-5 transition-colors">
                    <Icon size={26} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle size={14} className="text-secondary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-gray-800">Bagaimana Kami Bekerja</h2>
            <p className="mt-3 text-gray-500 max-w-lg mx-auto">
              Proses terstruktur kami memastikan proyek selesai tepat waktu, sesuai anggaran, dan melampaui ekspektasi.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Konsultasi", desc: "Kami memahami kebutuhan dan tujuan bisnis Anda secara mendalam." },
              { step: "02", title: "Perencanaan", desc: "Menyusun roadmap, timeline, dan estimasi biaya yang transparan." },
              { step: "03", title: "Pengembangan", desc: "Proses development dengan update berkala dan demo rutin." },
              { step: "04", title: "Peluncuran", desc: "Deployment, testing final, dan dukungan pasca-launch." },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-5xl font-extrabold text-blue-100 mb-3">{item.step}</div>
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
          <h2 className="text-3xl font-extrabold text-white">Tertarik Bekerja Sama?</h2>
          <p className="mt-3 text-blue-100">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran yang sesuai kebutuhan Anda.
          </p>
          <Link
            to="/kontak"
            className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-primary font-bold hover:bg-blue-50 transition-colors shadow"
          >
            Hubungi Kami <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
