"use client";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    whatsapp: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sedang mengirim...");

    try {
      const formElement = e.currentTarget;
      const formDataInstance = new FormData(formElement);
      const turnstileToken = formDataInstance.get("cf-turnstile-response");

      const response = await fetch(
        "https://hook.us2.make.com/ywqx37s1z05rq77f6w56wtfc2gh5q4ig",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            "cf-turnstile-response": turnstileToken,
          }),
        },
      );

      if (response.ok) {
        setStatus("✅ Data Sukses Terkirim Otomatis ke Make.com!");
        setFormData({ nama: "", email: "", whatsapp: "" });
      } else {
        setStatus("❌ Gagal mengirim, coba lagi.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Terjadi kesalahan jaringan.");
    }
  };

  return (
    // 🌌 BACKGROUND UTAMA: Gelombang Neon & Partikel Abstrak (Purplish-Blue Cyberpunk)
    <div className="relative min-h-screen bg-[#0b0c16] text-white font-sans overflow-x-hidden selection:bg-purple-500/30">
      {/* Ornamen Gradasi Sisi Kanan Atas (Efek Gelombang Neon) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-purple-600/20 via-cyan-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      {/* Ornamen Gradasi Sisi Kanan Bawah */}
      <div className="absolute bottom-0 right-[-100px] w-[500px] h-[700px] bg-gradient-to-tr from-fuchsia-600/15 via-blue-600/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

      {/* 🧭 NAVBAR TRANSPARENT (Glassmorphism Effect) */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0b0c16]/60 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <div className="flex items-center space-x-3">
            {/* Logo Kustom Otomasi/AI */}
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 p-[1.5px]">
              <div className="w-full h-full bg-[#0b0c16] rounded-[7px] flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
            </div>
            <span className="text-xl font-black tracking-widest bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              RENDRA
            </span>
          </div>

          {/* Menu Kanan Navbar */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
            <a
              href="#karya"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              Karya
            </a>
            <a
              href="#about"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-white border-b-2 border-purple-500 pb-1"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* 🚀 MAIN CONTENT */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        {/* Header Judul Utama */}
        <div className="text-center space-y-3 mb-10 max-w-xl">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            My Portopolio{" "}
            <span className="text-sm font-normal text-slate-400 block md:inline md:ml-2">
              (Simple Landing Page)
            </span>
          </h1>
          <p className="text-sm md:text-base text-slate-400/90 font-light leading-relaxed">
            Sebuah project website portofolio pribadi yang dibuat sesederhana
            mungkin.
          </p>
        </div>

        {/* 📦 KOTAK FORM: Glassmorphism Card */}
        <div className="w-full max-w-md p-8 bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300 hover:border-purple-500/30">
          <h2 className="text-lg font-semibold text-center text-cyan-400 tracking-wide mb-6">
            Uji Coba Form Automatis
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                required
                value={formData.nama}
                onChange={(e) =>
                  setFormData({ ...formData, nama: e.target.value })
                }
                className="w-full p-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition duration-200"
                placeholder="Contoh: yourname"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Alamat Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition duration-200"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Nomor WhatsApp
              </label>
              <input
                type="tel"
                required
                value={formData.whatsapp}
                onChange={(e) =>
                  setFormData({ ...formData, whatsapp: e.target.value })
                }
                className="w-full p-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition duration-200"
                placeholder="08123456789"
              />
            </div>

            {/* Cloudflare Turnstile */}
            <div
              className="cf-turnstile flex justify-center py-2"
              data-sitekey="0x4AAAAAADtcNccZoRU4vGGs"
            ></div>

            {/* Tombol Gradasi Cyan-Purple */}
            <button
              type="submit"
              className="w-full py-3 font-bold text-sm tracking-wide text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-xl hover:opacity-90 shadow-lg shadow-cyan-500/10 active:scale-[0.98] transition duration-150"
            >
              Submit Data
            </button>
          </form>

          {status && (
            <p className="text-center font-medium mt-5 text-xs text-cyan-300 animate-pulse">
              {status}
            </p>
          )}
        </div>

        {/* Footer Kecil Catatan Project */}
        <div className="mt-12 text-center text-xs text-slate-500 tracking-wide">
          *Dibuat oleh Rendra • Terintegrasi dengan Webhook & Make.com
        </div>
      </main>
    </div>
  );
}
