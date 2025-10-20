export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50 text-gray-800 p-10">
      
      {/* === Section Profil === */}
      <section className="text-center max-w-2xl mt-10">
        <img
          src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-6 shadow-md"
        />
        <h1 className="text-4xl font-bold mb-2">Jeremias Devano</h1>
        <h2 className="text-xl text-gray-500 mb-4">Web Developer | UI Designer</h2>
        <p className="text-gray-600 mb-6">
          Halo! Saya seorang pengembang web yang fokus pada frontend menggunakan Next.js, React, dan Tailwind CSS. 
          Saya suka membuat tampilan yang modern dan responsif untuk pengalaman pengguna yang lebih baik.
        </p>
        <a
          href="https://github.com/jdevano"
          target="_blank"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Kunjungi GitHub Saya
        </a>
      </section>

      {/* === Section Project / Portfolio === */}
      <section className="mt-16 w-full max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6">Project Portofolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* --- Project 1: Aplikasi Restoran --- */}
          <div className="p-5 bg-white shadow rounded-lg hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">Aplikasi Restoran</h3>
            <p className="text-gray-500 mb-3">
              Aplikasi pemesanan makanan berbasis Flutter untuk project kuliah.
            </p>
            <a href="/restoran" className="text-blue-600 hover:underline">
              Lihat Detail →
            </a>
          </div>

          {/* --- Project 2: Website Portofolio --- */}
          <div className="p-5 bg-white shadow rounded-lg hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">Portofolio Website</h3>
            <p className="text-gray-500 mb-3">
              Website portofolio pribadi menggunakan Next.js dan Tailwind CSS.
            </p>
            <a href="/portfolio" className="text-blue-600 hover:underline">
              Lihat Detail →
            </a>
          </div>
        </div>
      </section>

      {/* === Section Contact Me === */}
      <section className="mt-20 w-full max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-600 mb-8">
          Tertarik bekerja sama atau ingin berdiskusi? Silakan hubungi saya melalui form di bawah ini!
        </p>

        <form className="bg-white shadow rounded-lg p-6 text-left">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Nama</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Masukkan nama Anda"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Masukkan email Anda"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Pesan</label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Tulis pesan Anda di sini..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Kirim Pesan
          </button>
        </form>
      </section>

      {/* === Footer === */}
      <footer className="mt-16 text-gray-500 text-sm">
        © {new Date().getFullYear()} Jeremias Devano. All rights reserved.
      </footer>
    </main>
  );
}
