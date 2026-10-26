import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Mechatronics student based in Villach, Austria
    Bridging physical sensors & automation
    with modern Full-Stack web ecosystems`;

  const aboutText = `I am a Mechatronics student in Villach, Austria specializing in modern Full Stack Web Development. From high-speed asynchronous FastAPI services and optimized SQL queries to interactive React dashboards, I understand data flow from hardware registers up to the browser viewport.

What I bring to engineering teams:
⚡️ FastAPI & Python async microservices with strict Pydantic validation
📊 Responsive React dashboards & real-time telemetry streaming
🗄️ Relational database design & PostgreSQL query optimization
🦾 Mechatronics foundation (sensors, test automation & HIL validation)
🇦🇹 Based in Villach, Austria — available for 12+ month part-time / internship tracks`;

  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-[#110714] rounded-b-4xl text-rose-50">
      <AnimatedHeaderSection
        subTitle={"✨ Hardware Precision, Engineered to Scale"}
        title={"About"}
        text={text}
        textColor={"text-rose-100"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-rose-200/70">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-tr from-pink-400/40 via-rose-300/30 to-purple-400/40 rounded-[2.2rem] blur-xl opacity-60" />
          <img
            ref={imgRef}
            src="images/port-img.png"
            alt="Nakshathra - Full Stack Developer & Mechatronics Student"
            className="relative w-md rounded-3xl object-cover shadow-2xl border-2 border-rose-300/40 bg-slate-900"
          />
        </div>
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
