export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-10">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8">
        <h1 className="text-3xl font-bold mb-4">Portfolio Website</h1>
        <p className="text-gray-600 mb-4">
          Website portfolio pribadi yang dibuat menggunakan Next.js dan Tailwind CSS.
          Website ini menampilkan profil, project, serta form kontak sederhana.
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Framework: Next.js</li>
          <li>Styling: Tailwind CSS</li>
          <li>Deployment: Vercel</li>
        </ul>

        <a
          href="/"
          className="text-blue-600 hover:underline"
        >
          ← Kembali ke Beranda
        </a>
      </div>
    </main>
  );
}
