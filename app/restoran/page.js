export default function RestoranPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-10">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8">
        <h1 className="text-3xl font-bold mb-4">Aplikasi Restoran</h1>
        <p className="text-gray-600 mb-4">
          Aplikasi pemesanan makanan berbasis Flutter yang dibuat untuk project kuliah.
          Fitur utama meliputi pemesanan makanan, keranjang belanja, dan konfirmasi pembayaran.
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Frontend: Flutter</li>
          <li>Backend: Firebase</li>
          <li>Database: Firestore</li>
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
