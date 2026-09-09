import { Clock, User, ArrowRight } from "lucide-react";
import { articles } from "../data";
import { useState } from "react";

const categories = ["Semua", ...Array.from(new Set(articles.map((a) => a.category)))];

export default function Artikel() {
  const [active, setActive] = useState("Semua");

  const filtered = active === "Semua" ? articles : articles.filter((a) => a.category === active);

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold">Artikel & Insight</h1>
          <p className="mt-4 text-blue-100 max-w-xl mx-auto text-lg">
            Temukan wawasan terbaru seputar teknologi, bisnis digital, dan tips praktis dari para ahli NIITS.
          </p>
        </div>
      </section>

      {/* ── Filter Categories ── */}
      <section className="bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  active === cat
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Articles Grid ── */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 py-20">Tidak ada artikel ditemukan.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="font-extrabold text-gray-800 mb-2 leading-snug hover:text-primary transition-colors cursor-pointer">
                      {article.title}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1">{article.excerpt}</p>
                    <div className="flex items-center justify-between mt-5 text-xs text-gray-400">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <User size={11} /> {article.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={11} /> {article.readTime}
                        </span>
                      </div>
                      <span>{article.date}</span>
                    </div>
                    <button className="mt-4 flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline self-start">
                      Baca Selengkapnya <ArrowRight size={14} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
