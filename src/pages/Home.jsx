
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import {
  MapPin, Navigation, Heart, Star, Camera,
  Sparkles, ArrowDown, X, CalendarDays
} from "lucide-react";
import {
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaArrowUp,
  FaCode,
  FaLaptopCode,
  FaGlobe,
} from "react-icons/fa";

const photos = [
  "/WhatsApp Image 2026-11-20 at 15.06.59.jpeg",
  "/WhatsApp Image 2026-11-20 at 15.06.591.jpeg",
  "/WhatsApp Image 2026-11-20 at 15.07.003.jpeg",
  "/WhatsApp Image 2026-11-20 at 15.07.005.jpeg",
  "/WhatsApp Image 2026-11-20 at 15.07.018.jpeg",
  "/WhatsApp Image 2026-11-20 at 15.07.0189.jpeg",
];


const party = {
  name: "LIAM",
  date: "15 August 2026",
  venue: "St. Mathews Syro-Malabar Church",
  address:
    "Kottackupuram, Athirampuzha Vedagiri Rd, Athirampuzha, Keralam 686562",
  time: "11:00 AM Onwards",
  mapsLink:
    "https://maps.app.goo.gl/NKoqDn7iA7u5Vg3i6?g_st=aw",
};


const backgroundPhotos = [
  "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=1800",
  "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=1800",
  "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1800",
];

const reveal = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
  }
};

const Home = () => {
    const phone = "8129718562";
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const { scrollYProgress } = useScroll();

  const progressWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    let frame;

    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <main className="bg-[#f8f7ff] text-slate-800 overflow-hidden selection:bg-pink-200">

      <style>{`
        html { scroll-behavior: smooth; }

        body { margin: 0; }

        .serif {
          font-family: Georgia, 'Times New Roman', serif;
        }

        .glass {
          background: rgba(255,255,255,.65);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,.7);
        }

        .photo-overlay {
          background: linear-gradient(
            180deg,
            rgba(16,25,49,.10),
            rgba(16,25,49,.35)
          );
        }

        .floating {
          animation: floating 5s ease-in-out infinite;
        }

        @keyframes floating {
          0%,100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-22px) rotate(5deg); }
        }

        @keyframes pulseGlow {
          0%,100% { box-shadow: 0 0 15px rgba(255,255,255,.2); }
          50% { box-shadow: 0 0 45px rgba(255,255,255,.6); }
        }

        @keyframes spinSlow {
          to { transform: rotate(360deg); }
        }

        .spin-slow {
          animation: spinSlow 25s linear infinite;
        }

        .glow {
          animation: pulseGlow 3s ease-in-out infinite;
        }

        .gallery-img {
          transition: transform 1s cubic-bezier(.2,.8,.2,1);
        }

        .gallery-card:hover .gallery-img {
          transform: scale(1.09);
        }
      `}</style>

      {/* SCROLL PROGRESS */}
      <motion.div
        style={{ width: progressWidth }}
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400 z-[100]"
      />

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-5 md:px-12 py-4">
        <div className="max-w-7xl mx-auto glass rounded-full px-5 md:px-8 py-3 flex justify-between items-center shadow-lg">

          <a href="#home" className="text-2xl font-black tracking-widest text-sky-600 serif">
            LIAM<span className="text-pink-400">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <button onClick={() => scrollTo("home")}>Home</button>
            <button onClick={() => scrollTo("story")}>Our Story</button>
            <button onClick={() => scrollTo("gallery")}>Gallery</button>
            <button onClick={() => scrollTo("location")}>Location</button>
          </div>

          <button
            onClick={() => scrollTo("location")}
            className="bg-slate-900 text-white rounded-full px-5 py-2.5 text-xs md:text-sm font-bold hover:bg-sky-600 transition"
          >
            Celebration ♡
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center text-center text-white"
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: `url('${backgroundPhotos[0]}')`
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-indigo-950/35 to-slate-950/65" />

        {/* Decorative stars */}
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/70 pointer-events-none"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 23) % 90}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.7, 1.3, 0.7],
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            <Star size={i % 3 === 0 ? 18 : 10} fill="currentColor" />
          </motion.div>
        ))}

        <div className="relative z-10 max-w-5xl mx-auto px-5 pt-24">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center gap-3 border border-white/40 bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 text-xs md:text-sm tracking-[3px] uppercase"
          >
            <Sparkles size={16} />
            A Beautiful Little Miracle
            <Sparkles size={16} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-lg md:text-2xl tracking-[5px] uppercase text-white/80"
          >
            Introducing Our Little Prince
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.6, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.4 }}
            className="serif text-[90px] sm:text-[130px] md:text-[190px] leading-none font-bold tracking-widest drop-shadow-2xl"
          >
            LIAM
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 130 }}
            transition={{ duration: 1, delay: 1 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-pink-200 to-transparent mx-auto my-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-lg md:text-2xl font-light tracking-wide"
          >
            Small hands, big dreams, endless love.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
          >
            <button
              onClick={() => scrollTo("gallery")}
              className="rounded-full bg-white text-slate-900 px-9 py-4 font-bold hover:bg-pink-100 transition shadow-xl"
            >
              Discover Memories
            </button>

            <button
              onClick={() => scrollTo("location")}
              className="rounded-full border border-white/60 backdrop-blur-md px-9 py-4 font-bold hover:bg-white/20 transition"
            >
              Find Celebration
            </button>
          </motion.div>

          <div className="mt-16 text-sm tracking-[4px] text-white/70">
            15 · 08 · 2026
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 text-white"
        >
          <ArrowDown size={26} />
        </motion.div>
      </section>

      {/* STORY SECTION */}
      <section id="story" className="relative py-28 md:py-40 px-5">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[50%] bg-gradient-to-br from-pink-200 via-purple-200 to-sky-200 blur-3xl opacity-50" />

            <div className="relative rounded-[40px] overflow-hidden shadow-2xl rotate-[-2deg]">
              <img
                src={photos[0]}
                alt="Baby Liam"
                className="w-full h-[480px] object-cover"
              />

              <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/60 to-transparent text-white">
                <p className="serif text-4xl">Our little miracle</p>
                <p className="mt-2 text-sm tracking-widest">FOREVER IN OUR HEARTS</p>
              </div>
            </div>

            <div className="absolute -right-5 -top-8 text-6xl floating">🧸</div>
            <div className="absolute -left-8 bottom-10 text-5xl floating">💙</div>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[5px] text-pink-500 text-xs font-bold">
              A Story Filled With Love
            </p>

            <h2 className="serif text-5xl md:text-7xl text-slate-800 mt-6 leading-tight">
              The Day Our
              <span className="block text-sky-500 italic">World Changed.</span>
            </h2>

            <p className="text-slate-500 leading-8 mt-8 text-lg">
              On a beautiful day, a little star came into our lives.
              With tiny fingers and the sweetest smile, LIAM brought
              happiness beyond words and love beyond measure.
            </p>

            <p className="text-slate-500 leading-8 mt-5">
              Every moment with you is a treasure. This is the beginning
              of a lifetime of beautiful memories.
            </p>

            <div className="mt-10 flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center text-pink-500">
                <Heart fill="currentColor" />
              </div>

              <div>
                <p className="font-bold text-slate-800">Forever Loved</p>
                <p className="text-sm text-slate-400">Since 15 August 2026</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* PHOTO BACKGROUND QUOTE */}
      <section
        className="relative py-36 md:py-48 bg-fixed bg-cover bg-center text-white text-center"
        style={{ backgroundImage: `url('${backgroundPhotos[1]}')` }}
      >
        <div className="absolute inset-0 bg-indigo-950/65" />

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <Star size={35} className="mx-auto text-pink-200 mb-8" />

          <h2 className="serif text-4xl md:text-7xl leading-tight">
            "A little person,
            <br />
            a whole lot of love."
          </h2>

          <p className="mt-8 tracking-[5px] uppercase text-sm text-white/70">
            Our precious LIAM
          </p>
        </motion.div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-28 md:py-36 px-5">

        <div className="max-w-7xl mx-auto">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Camera className="mx-auto text-pink-400 mb-5" size={35} />

            <p className="uppercase tracking-[5px] text-xs font-bold text-pink-500">
              Captured With Love
            </p>

            <h2 className="serif text-5xl md:text-7xl mt-5">
              Little Moments
            </h2>

            <p className="text-slate-400 mt-5">
              Six beautiful memories, one lifetime of happiness.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">

            {photos.map((photo, index) => (
              <motion.div
                key={photo}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedPhoto(photo)}
                className={`gallery-card relative cursor-pointer group ${
                  index === 0 || index === 5 ? "md:translate-y-8" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-[25px] md:rounded-[35px] shadow-xl bg-sky-100">
                  <img
                    src={photo}
                    alt={`Liam memory ${index + 1}`}
                    loading="lazy"
                    className="gallery-img w-full aspect-[4/5] object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="absolute bottom-5 left-5 text-white opacity-0 group-hover:opacity-100 transition">
                    <p className="text-sm font-bold">LIAM ♡</p>
                    <p className="text-xs">Memory {index + 1}</p>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section
        id="location"
        className="relative py-28 md:py-36 px-5 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${backgroundPhotos[2]}')` }}
        />
        <div className="absolute inset-0 bg-sky-950/75" />

        <div className="relative z-10 max-w-6xl mx-auto">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-white mb-14"
          >
            <MapPin size={40} className="mx-auto mb-6 text-pink-200" />

            <p className="uppercase tracking-[5px] text-xs text-sky-200">
              Join Our Happiness
            </p>

            <h2 className="serif text-5xl md:text-7xl mt-5">
              Find The Celebration
            </h2>

            <p className="mt-5 text-white/70">
              We would love to celebrate this beautiful moment with you.
            </p>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass rounded-[35px] md:rounded-[45px] overflow-hidden shadow-2xl grid md:grid-cols-2"
          >

            <div className="p-8 md:p-14 text-slate-800">

              <div className="inline-flex bg-pink-100 text-pink-600 rounded-full px-4 py-2 text-xs font-bold tracking-widest">
                YOU ARE INVITED ♡
              </div>

              <h3 className="serif text-5xl mt-8">
                LIAM's
                <span className="block text-sky-500">Celebration</span>
              </h3>

              <div className="mt-10 space-y-8">

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                    <CalendarDays />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400">Date</p>
                    <p className="font-bold mt-1">{party.date}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-500 shrink-0">
                    <MapPin />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400">Venue</p>
                    <p className="font-bold mt-1">{party.venue}</p>
                    <p className="text-sm text-slate-500 mt-1">{party.address}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-500 shrink-0">
                    <Star />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400">Time</p>
                    <p className="font-bold mt-1">{party.time}</p>
                  </div>
                </div>

              </div>

              <a
                href={party.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 flex items-center justify-center gap-3 bg-slate-900 text-white rounded-full px-7 py-4 font-bold hover:bg-sky-600 transition shadow-xl"
              >
                <Navigation size={19} />
                Get Directions
              </a>

            </div>

            {/* Map Preview */}
            <div className="min-h-[350px] md:min-h-full relative bg-sky-100 flex flex-col items-center justify-center text-center p-8">
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,#7dd3fc_1px,transparent_2px)] [background-size:25px_25px]" />

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="relative"
              >
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl glow">
                  <MapPin size={45} className="text-pink-500" />
                </div>
              </motion.div>

              <h4 className="relative serif text-3xl text-slate-800 mt-8">
                We Are Waiting!
              </h4>

              <p className="relative text-slate-500 text-sm mt-3 max-w-xs">
                Your presence will make this special day even more memorable.
              </p>

              <a
                href={party.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-8 bg-white rounded-full px-7 py-3 text-sky-600 text-sm font-bold shadow-lg hover:scale-105 transition"
              >
                Open Google Maps ↗
              </a>

            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL MESSAGE */}
      <section className="relative py-32 px-5 text-center bg-gradient-to-br from-[#fff0f5] via-[#f1efff] to-[#e5f7ff]">

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-5xl mb-8 floating">🧸</div>

          <p className="text-xs uppercase tracking-[5px] text-pink-500 font-bold">
            A Lifetime Of Happiness
          </p>

          <h2 className="serif text-6xl md:text-9xl text-slate-800 mt-8">
            LIAM
          </h2>

          <p className="text-lg md:text-xl text-slate-500 mt-8">
            Loved beyond words. Blessed beyond measure.
          </p>

          <div className="flex justify-center gap-5 mt-10 text-pink-400">
            <Heart fill="currentColor" />
            <Star fill="currentColor" />
            <Heart fill="currentColor" />
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#151a32] text-white text-center py-12 px-5">
        <p className="serif text-4xl">LIAM ♡</p>
        <p className="text-white/50 text-sm mt-4">
          A little star born on 15 August 2026.
        </p>
        <p className="text-white/30 text-xs mt-8 tracking-widest">
          MADE WITH LOVE · FOREVER MEMORIES
        </p>
      </footer>

      {/* PHOTO LIGHTBOX */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-[110] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-5"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 text-white p-3"
            >
              <X size={32} />
            </button>

            <motion.img
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8 }}
              src={selectedPhoto}
              alt="Liam"
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-[85vh] object-contain rounded-3xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
 <footer className="relative overflow-hidden bg-[#080b14] text-white">

      {/* Background Effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                <FaCode className="text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-black tracking-tight">
                  AJITH<span className="text-purple-400">.</span>
                </h2>
                <p className="text-xs tracking-[3px] text-gray-400 uppercase">
                  Freelance Web Creator
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-7 max-w-md text-sm">
              Hi, I'm Ajith Balan. I create modern, responsive and
              professional websites that help businesses grow online.
              Let's build something amazing together.
            </p>

            <div className="flex gap-3 mt-7">
              <a
                href="https://www.instagram.com/ajith____b?jplx=d2lwZHg1Y2hqeHl4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:border-transparent transition-all duration-300"
              >
                <FaInstagram className="text-lg" />
              </a>

              <a
                href={`https://wa.me/91${phone}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition-all duration-300"
              >
                <FaWhatsapp className="text-lg" />
              </a>

              <a
                href={`tel:${phone}`}
                aria-label="Call Ajith"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition-all duration-300"
              >
                <FaPhoneAlt className="text-sm" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
              My Services
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3 hover:text-purple-400 transition">
                <FaGlobe className="text-purple-400" />
                Business Websites
              </li>
              <li className="flex items-center gap-3 hover:text-purple-400 transition">
                <FaLaptopCode className="text-purple-400" />
                Web Applications
              </li>
              <li className="flex items-center gap-3 hover:text-purple-400 transition">
                <FaCode className="text-purple-400" />
                Custom Web Development
              </li>
              <li className="flex items-center gap-3 hover:text-purple-400 transition">
                <FaLaptopCode className="text-purple-400" />
                Responsive Website Design
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
              Get In Touch
            </h3>

            <p className="text-sm text-gray-400 mb-5">
              Have a project in mind? Let's discuss your ideas.
            </p>

            <a
              href={`tel:${phone}`}
              className="flex items-center gap-3 text-white font-semibold hover:text-purple-400 transition"
            >
              <FaPhoneAlt className="text-purple-400" />
              +91 81297 18562
            </a>

            <a
              href="https://www.instagram.com/ajith____b?jplx=d2lwZHg1Y2hqeHl4"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-5 text-sm text-gray-400 hover:text-pink-400 transition break-all"
            >
              @ajith____b
            </a>

            <a
              href={`https://wa.me/91${phone}?text=${encodeURIComponent(
                "Hi Ajith, I'm interested in creating a website."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-7 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-sm font-bold shadow-lg shadow-purple-500/20 hover:scale-105 transition-transform"
            >
              Let's Talk <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-5">

          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} Ajith Balan. All Rights Reserved.
          </p>

          <p className="text-xs text-gray-500">
            Designed & Developed with <span className="text-red-500">♥</span> by
            <span className="text-purple-400 font-semibold ml-1">
              Ajith Balan
            </span>
          </p>

          <a
            href="#top"
            aria-label="Back to top"
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-600 transition"
          >
            <FaArrowUp />
          </a>
        </div>

      </div>
    </footer>
    </main>
  );
};

export default Home;
