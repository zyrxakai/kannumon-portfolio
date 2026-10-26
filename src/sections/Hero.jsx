import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  const text = `Engineering responsive React dashboards,
robust Python/FastAPI microservices,
and hardware telemetry with Austrian precision`;

  return (
    <section id="home" className="relative flex flex-col justify-end min-h-screen overflow-hidden">
      {/* Main Header */}
      <AnimatedHeaderSection
        subTitle={"✨ Full Stack Developer & Mechatronics Student • Villach, AT"}
        title={"Nakshathra"}
        text={text}
        textColor={"text-[#1f101a]"}
      />

      {/* 3D Planet Scene with Dreamy Rose-Gold Luster */}
      <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          shadows
          dpr={[1, 1.5]}
          gl={{ powerPreference: "high-performance", antialias: true }}
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.65} color="#fff1f2" />
          <Float speed={0.5}>
            <Planet scale={isMobile ? 0.7 : 1} />
          </Float>
          <Environment resolution={128}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                intensity={2.8}
                color="#ffe4e6"
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2.2}
                color="#fbcfe8"
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                color="#fed7aa"
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                color="#f472b6"
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
