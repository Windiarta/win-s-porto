export const profile = {
  name: 'Windiarta',
  role: 'Software & AI Engineer',
  location: 'Jakarta, Indonesia',
  email: 'windiarta.widjaja@gmail.com',
  website: 'https://windiarta.my.id',
  linkedin: 'https://linkedin.com/in/windiarta',
  resume: '/resume.pdf',
};

export const heroTagline =
  'Enterprise AI that survives production. Nine agents across seven business units of a Fortune-500 state-owned enterprise, with the governance, streaming, and cost controls to keep them alive.';

// Every value sourced from CV_Windiarta_ATS.md / windiarta_info vault
export const stats = [
  { value: 9, prefix: '', suffix: '', label: 'AI agents in production' },
  { value: 7, prefix: '', suffix: '', label: 'business units served' },
  { value: 90, prefix: '%+', suffix: '', label: 'LLM cost cut via model routing' },
  { value: 2, prefix: '<', suffix: ' min', label: 'query time, down from 1 week' },
  { value: 250, prefix: '~', suffix: '', label: 'parking & vending machines monitored' },
  { value: 400, prefix: '', suffix: '+', label: 'scanned PDFs under enterprise RAG' },
];

export const aboutStatement = 'Data goes in. Decisions come out.';

export const aboutParas = [
  'Two years as the engine room behind enterprise AI at PT Pupuk Indonesia: a multi-agent platform on FastAPI and Google ADK, RAG over hundreds of scanned documents, and a Snowflake governance layer that keeps every subsidiary honest on cost, quality, and PII.',
  'I work the whole stack: SSE-streamed orchestration with human-in-the-loop gates, Medallion and Data Vault 2.0 architecture, React 19 and Next.js frontends executives actually use, and the unglamorous parts that decide whether AI survives an enterprise: SSO, MFA, RBAC, budget enforcement, audit logs.',
  'Measured, not promised: LLM costs down 90%+, production queries from one week to under two minutes, governance live across all subsidiaries.',
];

export const pinter = {
  name: 'PINTER',
  full: 'Pupuk Intelligence Center',
  subhead: 'Nine agents. Seven business units. One platform.',
  copy: 'The multi-agent platform I engineered at PT Pupuk Indonesia. FastAPI drives a Google ADK engine that routes each task to the right model, streams every step over SSE at 98%+ uptime, and keeps humans in control where it matters.',
  // Home shows six headline features; the case study page carries the rest
  features: [
    'Google ADK multi-agent orchestration (ExecutorV2)',
    'Multi-model LLM routing via LiteLLM + self-hosted Ollama',
    'SSE streaming of every execution step',
    'Enterprise RAG over 400+ scanned PDFs (Qdrant)',
    'Human-in-the-Loop gates + per-agent budget enforcement',
    'SSO, MFA, RBAC, audit logging on GCP Cloud Run',
  ],
  agents: [
    { name: 'AEGIS AI', slug: 'aegis-ai', unit: 'Marketing', img: '/img/aegis.jpg', desc: 'Geospatial intelligence via MCP: demand and stock as live maps.' },
    { name: 'Sentra AI', slug: 'sentra-ai', unit: 'SMTI', img: '/img/sentra.jpg', desc: 'RAG document search with role-based access.' },
    { name: 'PAC Agent', slug: 'pac-agent', unit: 'Production', img: '/img/pac.jpg', desc: 'Five subsidiaries of production data: a week of work, under 2 minutes.' },
    { name: 'AYU', slug: 'ayu', unit: 'Marketing', img: '/img/ayu.jpg', desc: 'Field assistant for the agronomists who help farmers.' },
    { name: 'KITA Apps', slug: 'kita-apps', unit: 'Corporate Performance', img: '/img/kita.jpg', desc: 'KPI analysis and executive reports, typo-proofed.' },
    { name: 'RAMA', slug: 'rama', unit: 'Data Management', img: '/img/rama.jpg', desc: 'Data requests automated: assessment, Linear tickets, Slack.' },
    { name: 'SINTA', slug: 'sinta', unit: 'Data Management', img: '/img/sinta.jpg', desc: 'Request tickets monitored in Slack.' },
    { name: 'Travel Expense', slug: 'travel-expense', unit: 'Human Resources', img: '/img/travel.jpg', desc: 'Reimbursement validation against custom rules: 100% accuracy.' },
    { name: 'RISK AI Agent', slug: 'risk-ai-agent', unit: 'Risk Management', img: '/img/risk.jpg', desc: 'Company-wide risk analysis with live price lookups.' },
  ],
};

export const projects = [
  {
    name: 'Snow Keeper',
    slug: 'snow-keeper',
    wide: true,
    img: '/img/snowkeeper.jpg',
    stack: ['Snowflake', 'FastAPI', 'FlutterFlow'],
    desc: 'Snowflake governance on autopilot: roles, access, and user requests from every subsidiary in one controlled pipeline.',
  },
  {
    name: 'DS AI Service',
    slug: 'ds-ai-service',
    wide: true,
    img: '/img/dsai.jpg',
    stack: ['FastAPI', 'RAG', 'Gemini'],
    desc: 'Internal knowledge search by meaning, not keywords.',
  },
  {
    name: 'Nura Academy',
    slug: 'nura-academy',
    wide: false,
    img: '/img/nura.jpg',
    stack: ['Next.js', 'Prisma', 'PostgreSQL'],
    desc: 'End-to-end e-learning: notifications, assignment workflows, full test suite.',
  },
  {
    name: 'GTS Parking',
    slug: 'gts-parking',
    wide: false,
    img: '/img/gts.jpg',
    stack: ['React', 'Laravel'],
    desc: 'Real-time smart parking for Pekanbaru: volume, utilization, and patterns on live dashboards.',
  },
  {
    name: 'Jetinno Vending',
    slug: 'jetinno-vending',
    wide: false,
    img: '/img/jetinno.jpg',
    stack: ['Next.js', 'QRIS/EDC', 'OCBC'],
    desc: 'Operations for ~250 machines: live transactions, QRIS payments to OCBC, remote device control.',
  },
  {
    name: 'Smart Door Lock',
    slug: 'smart-door-lock',
    wide: false,
    img: '/img/doorlock.jpg',
    stack: ['IoT', 'Servo Actuation', 'Android'],
    desc: 'Detachable add-on for traditional lever locks: key-gripping servo motor, encrypted wireless access, and timed visitor permissions.',
  },
];

export const experience = [
  {
    company: 'PT Pupuk Indonesia (Persero)',
    studySlug: 'pupuk-indonesia',
    location: 'Jakarta, Indonesia',
    img: '/img/pupuk.jpg',
    role: 'Software & AI Engineer, SnowPoint Team',
    period: 'Sept 2024 - Present',
    // Home keeps the three headline points; the company page carries all seven
    points: [
      'Engineered PINTER (FastAPI + Google ADK): 9 agents across 7 business units, SSE streaming at 98%+ uptime.',
      'Cut LLM cost 90%+ via task-specific model routing and self-hosted Ollama.',
      'Led SnowKeeper/SnowMi governance across all subsidiaries: automated PII detection, Data Vault 2.0, sub-second historical queries.',
    ],
  },
  {
    company: 'PT Ghraha Trimitra Selaras',
    studySlug: 'ghraha-trimitra',
    location: 'Jakarta, Indonesia',
    img: '/img/ghraha.jpg',
    role: 'Lead Full-Stack Programmer (Part-Time)',
    period: 'Jan 2024 - Jul 2026',
    points: [
      'Built full-stack dashboards (Next.js, Laravel) for parking and vending ops: EDC/QRIS integration to OCBC Bank, ~250 machines in Pekanbaru.',
      'Real-time monitoring and secure user management for KB Bank Mini ATMs on Aisino hardware.',
    ],
  },
  {
    company: 'PT Pupuk Indonesia (Persero)',
    studySlug: 'pupuk-indonesia',
    location: 'Jakarta, Indonesia',
    img: '/img/pupuk.jpg',
    role: 'Data Engineer Intern',
    period: 'Sept 2023 - Dec 2023',
    points: [
      'Benchmarked ETL tools; Snowflake clustering research that shaped the org data platform architecture.',
    ],
  },
  {
    company: 'Bangkit Academy',
    studySlug: 'bangkit-academy',
    location: 'Indonesia',
    img: '/img/bangkit.jpg',
    role: 'Mobile Development Class Mentor',
    period: '2024 - 2025',
    points: ['Mentored the Mobile Development cohort through their capstone builds.'],
  },
];

export const skillGroups = [
  { group: 'Backend', items: ['Python', 'FastAPI', 'SQLAlchemy', 'Pytest', 'Node.js', 'REST APIs', 'SSE Streaming', 'LiteLLM'] },
  { group: 'Frontend', items: ['TypeScript', 'JavaScript', 'Next.js', 'React 19', 'Zustand', 'React Query', 'Laravel'] },
  { group: 'AI & Agents', items: ['Google ADK', 'CrewAI', 'LangChain', 'RAG (Qdrant)', 'Gemini API', 'Ollama', 'MCP'] },
  { group: 'Data Engineering', items: ['Snowflake (DMF, Dynamic Tables, Cortex)', 'Medallion Architecture', 'Data Vault 2.0', 'Airbyte', 'dbt', 'Vector Search'] },
  { group: 'Cloud & Infra', items: ['GCP (Cloud Run, Cloud Logging)', 'AWS', 'Docker', 'GitLab CI/CD', 'On-Premise'] },
  { group: 'Security & Governance', items: ['SSO', 'JWT', 'MFA', 'RBAC', 'API Gateway', 'Audit Logging', 'PII Compliance (UU PDP)'] },
  { group: 'Mobile', items: ['Android Native', 'Jetpack Compose'] },
];

export const ticker = [
  'FastAPI', 'Google ADK', 'Next.js', 'React 19', 'TypeScript', 'Python', 'Snowflake',
  'Data Vault 2.0', 'Qdrant', 'LiteLLM', 'LangChain', 'CrewAI', 'Gemini', 'Ollama', 'MCP',
  'Cloud Run', 'AWS', 'Docker', 'GitLab CI/CD', 'Airbyte', 'dbt', 'SQLAlchemy', 'Laravel',
  'Jetpack Compose', 'PostgreSQL',
];

export const now = [
  'Google ADK multi-agent orchestration',
  'Agentic RAG patterns',
  'Self-hosted LLM economics',
  'Data Vault 2.0 modeling',
  'Enterprise AI governance',
];

export const certifications = [
  { name: 'Google Cloud AI Live + Labs', issuer: 'Google Cloud', year: '2026' },
  { name: 'Northstar - Agentic AI', issuer: 'Snowflake', year: '2025' },
  { name: 'Dataiku Core Designer', issuer: 'Dataiku', year: '2025' },
  { name: 'Dataiku Advanced Designer', issuer: 'Dataiku', year: '2025' },
  { name: 'Enhance Gemini Model Capabilities', issuer: 'Google', year: '2025' },
  { name: 'Inspect Rich Documents with Gemini Multimodality & Multimodal RAG', issuer: 'Google', year: '2025' },
  { name: 'Architecting on AWS', issuer: 'ICS Compute', year: '2024' },
  { name: 'Machine Learning with Python (Level 1)', issuer: 'IBM', year: '2023' },
];

export const education = [
  { school: 'Universitas Indonesia', degree: 'Bachelor of Computer Engineering', period: '2020 - 2024', detail: 'GPA 3.63 / 4.00' },
  { school: 'Bangkit Academy', degree: 'Cohort Mobile Development', period: '2023', detail: '' },
];

export const leadership = [
  { org: 'Bangkit Academy', role: 'Class Mentor', period: '2024 - 2025' },
  { org: 'Universitas Indonesia', role: 'Digital Laboratory Teaching Assistant', period: '2022 - 2024' },
  { org: 'Keluarga Mahasiswa Buddhis UI', role: 'Head of Research & Development', period: '2023' },
  { org: 'Dataiku Indonesia User Community', role: 'Ground Support, Hands-on Workshop', period: '2025' },
  { org: 'Google ADK Workshop', role: 'Participant, Google Office Jakarta', period: '2025' },
];

export const languages = [
  { name: 'Indonesian', level: 'Native' },
  { name: 'English', level: 'Professional' },
];

// Photography credits (CC-BY / CC-BY-SA require attribution, R-38/C-5).
export const imageCredits = [
  { file: '/img/pinter.jpg', title: 'NOC-Architel', artist: 'Mike Reyher', license: 'CC BY 2.0', url: 'https://commons.wikimedia.org/wiki/File:NOC-Architel.jpg' },
  { file: '/img/snowkeeper.jpg', title: 'BalticServers data center', artist: 'BalticServers.com', license: 'CC BY-SA 3.0', url: 'https://commons.wikimedia.org/wiki/File:BalticServers_data_center.jpg' },
  { file: '/img/aegis.jpg', title: 'ISS041-E-55745 - View of Java', artist: 'NASA Earth Science and Remote Sensing Unit', license: 'Public domain', url: 'https://commons.wikimedia.org/wiki/File:ISS041-E-55745_-_View_of_Java.jpg' },
  { file: '/img/sentra.jpg', title: 'European style folders dossiers', artist: 'unspecified', license: 'CC0', url: 'https://commons.wikimedia.org/wiki/File:European_style_folders_dossiers.jpg' },
  { file: '/img/pac.jpg', title: 'BASF Ludwigshafen Werk bei Nacht', artist: 'Zavijava2', license: 'CC BY-SA 3.0', url: 'https://commons.wikimedia.org/wiki/File:BASF_24082014.png' },
  { file: '/img/ayu.jpg', title: 'Farmer harvesting rice, Kampung Rawa', artist: 'Crisco 1492', license: 'CC BY-SA 3.0', url: 'https://commons.wikimedia.org/wiki/File:Farmer_harvesting_rice,_Kampung_Rawa_2014-06-20.jpg' },
  { file: '/img/kita.jpg', title: 'Infruid\'s Self-Service BI Tool Dashboard', artist: 'Growthlakes', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Infruid%27s_Self-Service_BI_Tool_Dashboard.jpg' },
  { file: '/img/rama.jpg', title: 'Simple-kanban-board', artist: 'Jeff.lasovski', license: 'CC BY-SA 3.0', url: 'https://commons.wikimedia.org/wiki/File:Simple-kanban-board-.jpg' },
  { file: '/img/sinta.jpg', title: 'Rocket.Chat Screenshot', artist: 'Gabriel engel', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Rocket.Chat_Screenshot.png' },
  { file: '/img/travel.jpg', title: 'Mobile boarding pass KLM', artist: 'Mtcv', license: 'CC BY-SA 3.0', url: 'https://commons.wikimedia.org/wiki/File:Mobile_boarding_pass_KLM.JPG' },
  { file: '/img/risk.jpg', title: 'Qtstalker candlestick chart', artist: 'user:yndesai', license: 'CC0', url: 'https://commons.wikimedia.org/wiki/File:Qtstalker_candlestick_chart.png' },
  { file: '/img/dsai.jpg', title: 'Artificial Neural Network with Chip', artist: 'mikemacmarketing', license: 'CC BY 2.0', url: 'https://commons.wikimedia.org/wiki/File:Artificial_Neural_Network_with_Chip.jpg' },
  { file: '/img/nura.jpg', title: 'Digital Literacy Program', artist: 'Sathya Narayanan Subramanian', license: 'CC BY-SA 3.0', url: 'https://commons.wikimedia.org/wiki/File:Digital_Literacy_Program.jpg' },
  { file: '/img/gts.jpg', title: 'Components of parking guidance and information system', artist: 'Z22', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Components_of_parking_guidance_and_information_system.jpg' },
  { file: '/img/jetinno.jpg', title: 'Coffee vending machine', artist: 'shankar s.', license: 'CC BY 2.0', url: 'https://commons.wikimedia.org/wiki/File:I_had_a_terrific_strong_coffee_from_this_vending_machine_(48624680187).jpg' },
  { file: '/img/pupuk.jpg', title: 'Kantor Utama PT Pupuk Kaltim Bontang', artist: 'Ezagren', license: 'CC BY-SA 3.0', url: 'https://commons.wikimedia.org/wiki/File:Kantor_Utama_PT_Pupuk_Kaltim_Bontang.jpg' },
  { file: '/img/ghraha.jpg', title: 'Pekanbaru City 3 (HR Soebrantas Road)', artist: 'Wagino 20100516', license: 'CC BY-SA 3.0', url: 'https://commons.wikimedia.org/wiki/File:Pekanbaru_City_3.jpg' },
  { file: '/img/bangkit.jpg', title: 'Participants at Wikemedia Hackathon at Rebase Code Camp', artist: 'Ewi Josepha', license: 'CC0', url: 'https://commons.wikimedia.org/wiki/File:Participants_at_Wikemedia_Hackathon_2024_at_Rebase_Code_Camp.jpg' },
];
