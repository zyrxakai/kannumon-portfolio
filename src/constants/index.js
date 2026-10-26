// constants/index.js
export const servicesData = [
  {
    title: "FullStack Web Architecture",
    description:
      "Modern full-stack web applications engineered for speed, clean modularity, and high-load reliability. Specializing in responsive React & Next.js user interfaces backed by async Python/FastAPI microservices.",
    items: [
      {
        title: "FastAPI & Python Microservices",
        description: "(Asynchronous event loops, Pydantic v2 schemas, REST/WebSockets)",
      },
      {
        title: "React & Next.js Frontends",
        description: "(TypeScript, Tailwind CSS, interactive high-performance UI/UX)",
      },
      {
        title: "SQL & TimeSeries Databases",
        description: "(PostgreSQL, TimescaleDB, indexed query optimization, SQLAlchemy)",
      },
    ],
  },
  {
    title: "Real-Time Telemetry Dashboards",
    description:
      "Transforming high-frequency sensor feeds and machine telemetry into zero-latency visual insights. Real-time data visualization with virtualized downsampling and automated anomaly alerts.",
    items: [
      {
        title: "High-Throughput Streaming",
        description: "(Live WebSocket ingestion, backpressure control, 50k+ events/min)",
      },
      {
        title: "Canvas & SVG Data Viz",
        description: "(60 FPS interactive graphs, custom gauges, threshold alarms)",
      },
      {
        title: "Parametric KPI Analytics",
        description: "(Aggregation rollups, statistical summaries, export pipelines)",
      },
    ],
  },
  {
    title: "Test Engineering & Automation",
    description:
      "Hardware-in-the-loop (HIL) automation and continuous software validation. Turning repetitive test sequences into automated regression suites with rich diagnostic web reporting.",
    items: [
      {
        title: "Automated Test Suites",
        description: "(PyTest, test execution orchestration, regression matrices)",
      },
      {
        title: "Hardware-in-the-Loop (HIL)",
        description: "(Automated signal generation, sensor mocking, fault injection)",
      },
      {
        title: "Quality Analytics & Reports",
        description: "(Pass/fail trending, latency profiling, automated PDF/web logs)",
      },
    ],
  },
  {
    title: "Mechatronics & Embedded Bridge",
    description:
      "Bridging the physical and digital domains. Connecting microcontrollers and industrial sensor registers directly to cloud microservices and browser dashboards.",
    items: [
      {
        title: "Microcontroller Communication",
        description: "(ESP32, STM32, Arduino, UART, SPI, I2C protocols)",
      },
      {
        title: "IoT & Industrial Protocols",
        description: "(MQTT brokers, serial bridges, deterministic packet parsing)",
      },
      {
        title: "Actuator & Closed-Loop Control",
        description: "(PID loop calibration, motor diagnostic web controllers)",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "PulseGrid: Mechatronic Telemetry Hub",
    description:
      "A mission-critical telemetry visualizer ingesting and rendering 50,000+ sensor metrics per minute from mechatronic testbenches with zero client stutter.",
    href: "https://github.com/nakshathra-dev/pulsegrid-telemetry",
    image: "/assets/projects/mobile-accessories-store.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "FastAPI" },
      { id: 3, name: "Python" },
      { id: 4, name: "WebSockets" },
      { id: 5, name: "TimescaleDB" },
      { id: 6, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "AlpineStream: Industrial IoT Gateway",
    description:
      "Distributed asynchronous Python worker system processing sensor payloads from automated industrial actuators in Villach, Austria.",
    href: "https://github.com/nakshathra-dev/alpinestream-gateway",
    image: "/assets/projects/plant-shop.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "FastAPI" },
      { id: 3, name: "MQTT" },
      { id: 4, name: "PostgreSQL" },
      { id: 5, name: "Docker" },
    ],
  },
  {
    id: 3,
    name: "AlpineGrid: Automated Testbench UI",
    description:
      "Precision calibration interface and live signal waveform generator built for mechatronic hardware validation and regression tracking.",
    href: "https://github.com/nakshathra-dev/alpinegrid-testbench",
    image: "/assets/projects/apple-tech-store.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Canvas API" },
      { id: 4, name: "PyTest" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 4,
    name: "RoboTrack: HIL Kinematics Monitor",
    description:
      "Multi-axis motor diagnostics portal calculating and rendering PID errors, temperature deviations, and torque curves in real-time.",
    href: "https://github.com/nakshathra-dev/robotrack-hil",
    image: "/assets/projects/electronics-store.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Python" },
      { id: 3, name: "WebSockets" },
      { id: 4, name: "Three.js" },
      { id: 5, name: "SQLAlchemy" },
    ],
  },
  {
    id: 5,
    name: "NexusSQL: Analytics Pipeline",
    description:
      "High-throughput relational ingestion pipeline aggregating manufacturing metrics and generating automated executive quality reports.",
    href: "https://github.com/nakshathra-dev/nexussql-analytics",
    image: "/assets/projects/home-decor-store.jpg",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "FastAPI" },
      { id: 2, name: "PostgreSQL" },
      { id: 3, name: "React" },
      { id: 4, name: "Tailwind CSS" },
      { id: 5, name: "Redis" },
    ],
  },
  {
    id: 6,
    name: "OmniFlow: Workflow Automation Hub",
    description:
      "Cloud-connected event dispatcher synchronizing laboratory sensor alerts with modern browser notifications and Slack webhooks.",
    href: "https://github.com/nakshathra-dev/omniflow-hub",
    image: "/assets/projects/game-store.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "TypeScript" },
      { id: 2, name: "React" },
      { id: 3, name: "FastAPI" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
];

export const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nakshathra-dev" },
  { name: "GitHub", href: "https://github.com/nakshathra-dev" },
  { name: "Email", href: "mailto:nakshathra.tech.at@gmail.com" },
];
