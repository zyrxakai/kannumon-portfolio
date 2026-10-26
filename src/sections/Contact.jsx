import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { socials } from "../constants";
import gsap from "gsap";

const Contact = () => {
  const text = `Interested in discussing Position #7 Full Stack Development
    or an engineering internship in Austria? Let's connect!`;
  const items = [
    "🌸 React & Next.js",
    "⚡ Python & FastAPI",
    "🇦🇹 Villach, Austria",
    "✨ Mechatronics Engineer",
    "💖 Ready to Build",
  ];
  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);
  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-[#110714] text-rose-50"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"✨ Available for Full Stack Position #7 • Villach, AT"}
          title={"Contact"}
          text={text}
          textColor={"text-rose-100"}
          withScrollTrigger={true}
        />
        <div className="flex px-10 font-light text-rose-100 uppercase lg:text-[32px] text-[26px] leading-none mb-10">
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h2 className="text-rose-200/90">E-mail</h2>
              <div className="w-full h-px my-2 bg-rose-400/25" />
              <a
                href="mailto:nakshathra.tech.at@gmail.com"
                className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl text-rose-300 hover:text-white transition-colors"
              >
                nakshathra.tech.at@gmail.com
              </a>
            </div>
            <div className="social-link">
              <h2 className="text-rose-200/90">Location</h2>
              <div className="w-full h-px my-2 bg-rose-400/25" />
              <p className="text-xl tracking-wider capitalize md:text-2xl lg:text-3xl text-rose-200">
                Villach, Carinthia, Austria 🇦🇹
              </p>
            </div>
            <div className="social-link">
              <h2 className="text-rose-200/90">Social Media</h2>
              <div className="w-full h-px my-2 bg-rose-400/25" />
              <div className="flex flex-col flex-wrap md:flex-row gap-x-6">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base tracking-widest uppercase hover:text-rose-300 transition-colors duration-300 text-rose-200/80"
                  >
                    {"{ "}
                    {social.name}
                    {" }"}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee items={items} reverse={true} className="text-rose-200 bg-[#0a030c] border-t border-rose-500/20" />
    </section>
  );
};

export default Contact;
