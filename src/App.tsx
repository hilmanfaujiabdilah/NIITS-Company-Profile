import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Beranda from "./pages/Beranda";
import Layanan from "./pages/Layanan";
import Bootcamp from "./pages/Bootcamp";
import Artikel from "./pages/Artikel";
import Tentang from "./pages/Tentang";
import Lowongan from "./pages/Lowongan";
import Kontak from "./pages/Kontak";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/bootcamp" element={<Bootcamp />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/lowongan" element={<Lowongan />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="*" element={<Beranda />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
