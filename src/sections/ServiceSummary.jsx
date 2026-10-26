import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const ServiceSummary = () => {
  useGSAP(() => {
    gsap.to("#title-service-1", {
      xPercent: 20,
      scrollTrigger: {
        target: "#title-service-1",
        scrub: true,
      },
    });
    gsap.to("#title-service-2", {
      xPercent: -30,
      scrollTrigger: {
        target: "#title-service-2",
        scrub: true,
      },
    });
    gsap.to("#title-service-3", {
      xPercent: 100,
      scrollTrigger: {
        target: "#title-service-3",
        scrub: true,
      },
    });
    gsap.to("#title-service-4", {
      xPercent: -100,
      scrollTrigger: {
        target: "#title-service-4",
        scrub: true,
      },
    });
  });
  return (
    <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive text-[#2a1421]">
      <div id="title-service-1">
        <p>✨ Architecture</p>
      </div>
      <div
        id="title-service-2"
        className="flex items-center justify-center gap-3 translate-x-16"
      >
        <p className="font-normal">FastAPI ⚡</p>
        <div className="w-10 h-1.5 md:w-32 bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 rounded-full shadow-sm shadow-rose-300" />
        <p>React Dashboards 🌸</p>
      </div>
      <div
        id="title-service-3"
        className="flex items-center justify-center gap-3 -translate-x-48"
      >
        <p>Telemetry</p>
        <div className="w-10 h-1.5 md:w-32 bg-gradient-to-r from-rose-400 to-pink-300 rounded-full shadow-sm shadow-rose-300" />
        <p className="italic">Mechatronics 💫</p>
        <div className="w-10 h-1.5 md:w-32 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full shadow-sm shadow-rose-300" />
        <p>SQL &amp; Analytics</p>
      </div>
      <div id="title-service-4" className="translate-x-48">
        <p>Villach, Austria 🇦🇹 🌸</p>
      </div>
    </section>
  );
};

export default ServiceSummary;
