import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = [
    "✨ Innovation",
    "🌸 Precision",
    "💫 Full-Stack",
    "💖 Telemetry",
    "⚡️ Excellence",
  ];
  const items2 = [
    "let's connect 🌸",
    "villach austria 🇦🇹",
    "full-stack track #7 ✨",
    "hire nakshathra 💖",
    "get in touch ⚡️",
  ];

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        markers: false,
      },
    });
  }, []);
  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16 text-[#2a1421]"
    >
      <Marquee items={items} />
      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          “ Let’s build a <br />
          <span className="font-normal text-rose-900">memorable</span> &amp;{" "}
          <span className="italic text-rose-500">inspiring</span> <br />
          web platform <span className="text-rose-500 font-semibold">together</span> “
        </p>
      </div>
      <Marquee
        items={items2}
        reverse={true}
        className="text-[#2a1421] bg-transparent border-y-2 border-rose-300/50"
        iconClassName="stroke-pink-400 stroke-2 text-rose-300"
        icon="material-symbols-light:sparkles"
      />
    </section>
  );
};

export default ContactSummary;
