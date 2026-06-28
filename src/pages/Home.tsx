import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Recycle, Users, TrendingUp } from "lucide-react";

const Home: React.FC = () => {
  const features = [
    {
      icon: <Recycle className="h-8 w-8 text-green-600" />,
      title: "Eco-Friendly Swapping",
      desc: "Give your unused items a new life while keeping them out of landfills.",
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Community Driven",
      desc: "Connect with people who share your passion for sustainability.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: "Save & Earn",
      desc: "Save money or earn credits every time you swap an item.",
    },
  ];

  const stats = [
    { label: "Items Swapped", value: "4,820+" },
    { label: "Active Users", value: "1,250+" },
    { label: "Waste Reduced", value: "2.1 Tons" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Gradient + animated blur shapes */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 opacity-90" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />

        {/* Floating recycle icons */}
        <Recycle className="absolute text-white/20 w-[500px] h-[500px] -left-40 -top-20 animate-spin-slow" />
        <Recycle className="absolute text-white/10 w-[300px] h-[300px] bottom-10 right-10 animate-pulse" />

        {/* Hero content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
            Recycle Hub,{" "}
            <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
              Save the Planet
            </span>
          </h1>
          <p className="text-xl text-gray-100 mb-10 max-w-3xl mx-auto drop-shadow">
            Join our sustainable community where unused items find new homes.
            Reduce waste, save money, and make meaningful connections through swapping.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/items"
              className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-md text-green-700 hover:bg-gray-100 font-semibold rounded-xl transition-colors shadow-lg hover:shadow-2xl"
            >
              Browse Items
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl border-2 border-green-600 transition-colors shadow-lg hover:shadow-2xl"
            >
              Join Community
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">
            Why Choose Swap the Things?
          </h2>
          <div className="grid gap-10 sm:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow hover:shadow-lg transition"
              >
                <div className="mb-4 flex justify-center">{f.icon}</div>
                <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-20">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-3 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-5xl font-extrabold text-white mb-2">
                {s.value}
              </div>
              <p className="text-green-100 text-lg">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
            Start swapping today and join thousands of eco-friendly members saving
            the planet one item at a time.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors shadow-lg"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
