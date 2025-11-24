export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero */}
      <div className="bg-gradient-to-r from-red-700 to-red-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">The Kop Stories</h1>
          <p className="text-xl md:text-2xl mb-8 text-red-100">
            Where Liverpool Fans Share Their Passion
          </p>

          <p className="text-lg mb-8 text-red-50">
            Join our community and share your thoughts about the Reds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="bg-white text-red-700 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105"
            >
              Start Writing
            </a>

            <a
              href="/feed"
              className="bg-red-800 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-red-900 transition transform hover:scale-105"
            >
              Read Stories
            </a>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          You'll Never Walk Alone
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Feature icon="✍️" title="Share Your Voice" text="Write about your favorite Liverpool moments." />
          <Feature icon="👥" title="Join the Community" text="Connect with passionate Reds fans globally." />
          <Feature icon="⚽" title="All Things LFC" text="Match reviews, player analysis, and more." />
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
      <div className="text-red-700 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}
