import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const routeSEO: Record<string, { title: string; description: string }> = {
  "/": {
    title: "PT NIITS INOVASI TEKNOLOGI — Solusi Teknologi & Digital Agency",
    description:
      "NIITS (PT NIITS INOVASI TEKNOLOGI) adalah perusahaan teknologi terkemuka penyedia solusi pengembangan web, aplikasi mobile, cloud DevOps, dan analitik data.",
  },
  "/layanan": {
    title: "Layanan IT & Software Development — PT NIITS INOVASI TEKNOLOGI",
    description:
      "Jasa pengembangan website, aplikasi Android & iOS, Cloud DevOps, Analitik Data, Keamanan Siber, dan Konsultasi IT dari PT NIITS INOVASI TEKNOLOGI.",
  },
  "/bootcamp": {
    title: "Bootcamp IT & Pelatihan Software Engineering — NIITS",
    description:
      "Program pelatihan intensif Full-Stack Web Development, UI/UX Design, Data Science, dan Digital Marketing dari NIITS.",
  },
  "/artikel": {
    title: "Artikel & Trend Teknologi Terbaru — PT NIITS INOVASI TEKNOLOGI",
    description:
      "Wawasan, artikel teknis, dan panduan seputar pengembangan software, teknologi AI, bisnis digital, dan IT dari tim ahli NIITS.",
  },
  "/tentang": {
    title: "Tentang Kami — PT NIITS INOVASI TEKNOLOGI",
    description:
      "Mengenal lebih dekat PT NIITS INOVASI TEKNOLOGI, visi & misi, nilai-nilai perusahaan, serta tim profesional di balik NIITS.",
  },
  "/lowongan": {
    title: "Karir & Lowongan Kerja IT — PT NIITS INOVASI TEKNOLOGI",
    description:
      "Bergabunglah dengan tim PT NIITS INOVASI TEKNOLOGI. Temukan peluang karir sebagai Frontend Developer, Backend Engineer, UI/UX Designer, dan lainnya.",
  },
  "/kontak": {
    title: "Hubungi Kami — PT NIITS INOVASI TEKNOLOGI",
    description:
      "Hubungi tim PT NIITS INOVASI TEKNOLOGI via email admin@niits.id atau telepon +62 821-3098-6139 untuk konsultasi proyek IT dan kerjasama bisnis.",
  },
};

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    // Dynamic SEO Title and Meta Description
    const seo = routeSEO[pathname] || routeSEO["/"];
    document.title = seo.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", seo.description);
    }
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
