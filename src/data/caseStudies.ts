// Long-form detail pages. Every fact traces to the windiarta_info vault
// (sections/projects, sections/use_cases, sections/experience) or CV_Windiarta_ATS.md.

export type Block =
  | { heading?: string; kind: 'para'; text: string }
  | { heading?: string; kind: 'list'; items: string[] };

export type PipelineStep = { stage: string; note: string };

export type RelatedLink = { label: string; to: string };

export type Study = {
  eyebrow: string;
  title: string;
  full?: string;
  heroImg?: string;
  meta: { label: string; value: string }[];
  intro: string;
  pipeline?: PipelineStep[];
  blocks: Block[];
  related?: RelatedLink[];
  backTo: { label: string; to: string };
};

const agentLink = (label: string, slug: string): RelatedLink => ({
  label,
  to: `/agents/${slug}`,
});

// Shared closing block for every agent page: what the platform contributes.
const platformBlock: Block = {
  heading: 'The platform underneath',
  kind: 'para',
  text: 'Runs on PINTER: FastAPI drives a Google ADK engine, LiteLLM routes each task to the right model, every execution step streams over SSE, Human-in-the-Loop gates keep people in control, and budget enforcement plus audit logging run per unit and per agent.',
};

export const projectStudies: Record<string, Study> = {
  pinter: {
    eyebrow: 'Case study',
    title: 'PINTER',
    heroImg: '/img/pinter.jpg',
    full: 'Pupuk Intelligence Center',
    meta: [
      { label: 'Role', value: 'Backend & platform engineering' },
      { label: 'Scale', value: '9 agents, 7 business units' },
      { label: 'Stack', value: 'FastAPI, Google ADK, LiteLLM, Ollama, Qdrant, React 19' },
      { label: 'Deployment', value: 'GCP Cloud Run' },
    ],
    intro:
      'The enterprise multi-agent AI platform at PT Pupuk Indonesia: one orchestration gateway, one execution engine, nine specialized agents. I led the migration evaluation from CrewAI to Google ADK and engineered the backend end to end.',
    pipeline: [
      { stage: 'Raw', note: 'Files, APIs, database sources' },
      { stage: 'Bronze', note: 'Append-only history, ELT via zero-copy clone' },
      { stage: 'Silver', note: 'Data Vault 2.0: Hubs, Links, Satellites' },
      { stage: 'Gold', note: 'Dimensional star schema, PIT and Bridge tables' },
      { stage: 'Semantic & RAG', note: 'Feeds PINTER agents and enterprise search' },
    ],
    blocks: [
      {
        heading: 'Execution engine',
        kind: 'list',
        items: [
          'Enterprise orchestration gateway and execution engine (ExecutorV2) on Google ADK',
          'Multi-model LLM routing via LiteLLM plus company-hosted Ollama models',
          'SSE streaming of every execution step at 98%+ uptime',
          'Human-in-the-Loop approval gates where decisions need a person',
          'Sandboxed Python code execution',
          'Budget enforcement per business unit and per agent',
        ],
      },
      {
        heading: 'Enterprise RAG',
        kind: 'list',
        items: [
          '400+ scanned PDFs under Qdrant vector search',
          'Role-based document access: users retrieve what their role permits',
          'User feedback capture feeding self-improving agent workflows',
        ],
      },
      {
        heading: 'Cost and security',
        kind: 'list',
        items: [
          'LLM inference cost down 90%+ vs Claude-only, via task-specific model routing and self-hosted Ollama',
          'SSO, JWT, MFA, RBAC, encrypted API key access',
          'Usage tracking and audit logging on Cloud Run with Cloud Logging',
        ],
      },
      {
        heading: 'From CrewAI to Google ADK',
        kind: 'para',
        text: 'The framework choice was an evaluation, not a default. I led the migration assessment from CrewAI to Google ADK before the orchestration layer was built. ADK became the engine underneath ExecutorV2, paired with a FastAPI gateway that handles auth, streaming, and budget control in one place.',
      },
      {
        heading: 'Nine agents, seven business units',
        kind: 'list',
        items: [
          'AEGIS AI (Marketing): geospatial intelligence via MCP, fertilizer demand and stock as live maps and graphs',
          'Sentra AI (SMTI): RAG document search with role-based access control',
          'PAC Agent (Production): analytics across 5 subsidiaries, a week of consolidation answered in under 2 minutes',
          'AYU (Marketing): field assistant for the agronomists who support farmers',
          'KITA Apps (Corporate Performance): KPI analysis and executive report writing',
          'RAMA (Data Management): spreadsheet data requests automated into Linear tickets and Slack',
          'SINTA (Data Management): data request ticket status, monitored in Slack',
          'Travel Expense (Human Resources): reimbursement extraction and rule-based validation',
          'RISK AI Agent (Risk Management): company-wide risk analysis with live price lookups',
        ],
      },
      {
        heading: 'Measured outcomes',
        kind: 'list',
        items: [
          '9 agents live across 7 business units of a Fortune-500 state-owned enterprise',
          'LLM inference cost down 90%+ vs a Claude-only setup',
          'Production data queries: 1 week down to under 2 minutes',
          'SSE agent execution streaming at 98%+ uptime',
          '400+ scanned PDFs under enterprise RAG with role-based access',
          'A 7-person engineering team coordinated across AI delivery, stakeholders, and production support',
        ],
      },
    ],
    related: [
      agentLink('AEGIS AI', 'aegis-ai'),
      agentLink('Sentra AI', 'sentra-ai'),
      agentLink('PAC Agent', 'pac-agent'),
      agentLink('AYU', 'ayu'),
      agentLink('KITA Apps', 'kita-apps'),
      agentLink('RAMA', 'rama'),
      agentLink('SINTA', 'sinta'),
      agentLink('Travel Expense', 'travel-expense'),
      agentLink('RISK AI Agent', 'risk-ai-agent'),
    ],
    backTo: { label: 'Back to the platform', to: '/#platform' },
  },
  'snow-keeper': {
    eyebrow: 'Case study',
    title: 'Snow Keeper',
    heroImg: '/img/snowkeeper.jpg',
    full: 'Snowflake governance, automated',
    meta: [
      { label: 'Stack', value: 'Snowflake, FastAPI, FlutterFlow' },
      { label: 'Scope', value: 'All subsidiary environments' },
      { label: 'Companion', value: 'SnowMi monitoring dashboard' },
    ],
    intro:
      'Automated resource and access governance for Snowflake. Role, access, and user requests from every subsidiary flow through one controlled pipeline instead of scattered manual admin.',
    blocks: [
      {
        heading: 'Two tools, one governance layer',
        kind: 'para',
        text: 'SnowKeeper automates resource and access management; SnowMi watches budget, pipeline health, data quality, and PII. Together they cover every subsidiary environment, so governance is a system instead of a person with admin rights.',
      },
      {
        heading: 'What flows through it',
        kind: 'list',
        items: [
          'Role requests from every subsidiary',
          'Access grants and revocations',
          'User provisioning',
          'Naming conventions enforced with Bronze-layer metadata audits',
        ],
      },
      {
        heading: 'SnowMi: the monitoring companion',
        kind: 'list',
        items: [
          'Budget watch per environment',
          'Pipeline health monitoring',
          'Data quality tracking',
          'PII monitoring',
        ],
      },
      {
        heading: 'Governance underneath',
        kind: 'list',
        items: [
          'Unified metadata governance with standardized naming conventions and Bronze-layer metadata audits',
          'Automated PII detection via custom Data Metric Functions (DMFs)',
          'Data Vault 2.0 PIT and Bridge tables for SAP material groups: sub-second historical queries with full version lineage',
          'Led migration from Airbyte2 to Airbyte1, coordinated DPCS connection whitelisting',
          'Task-based scheduler for dbt Sodo',
        ],
      },
    ],
    related: [
      { label: 'PINTER case study', to: '/projects/pinter' },
      { label: 'PT Pupuk Indonesia', to: '/experience/pupuk-indonesia' },
    ],
    backTo: { label: 'Back to projects', to: '/#projects' },
  },
  'ds-ai-service': {
    eyebrow: 'Case study',
    title: 'DS AI Service',
    heroImg: '/img/dsai.jpg',
    full: 'Internal knowledge, searchable by meaning',
    meta: [
      { label: 'Stack', value: 'FastAPI, Gemini, RAG' },
      { label: 'Users', value: 'Data science team, PT Pupuk Indonesia' },
    ],
    intro:
      'Internal knowledge management for company work instructions and guidelines. RAG-based semantic search finds documents by meaning, not keywords.',
    blocks: [
      {
        heading: 'What it does',
        kind: 'list',
        items: [
          'Semantic search across company work instructions and guidelines',
          'Retrieval by meaning instead of exact keywords',
          'FastAPI service for the internal data science team',
          'Gemini models on the generation side',
        ],
      },
      {
        heading: 'Where it led',
        kind: 'para',
        text: 'The idea grew into Sentra AI inside PINTER: agentic RAG for context-aware semantic search across unstructured enterprise documents, with personalized, role-based access for SMTI.',
      },
    ],
    related: [
      { label: 'Sentra AI agent', to: '/agents/sentra-ai' },
      { label: 'PINTER case study', to: '/projects/pinter' },
    ],
    backTo: { label: 'Back to projects', to: '/#projects' },
  },
  'nura-academy': {
    eyebrow: 'Case study',
    title: 'Nura Academy',
    heroImg: '/img/nura.jpg',
    full: 'End-to-end e-learning platform',
    meta: [
      { label: 'Role', value: 'Full-Stack Developer' },
      { label: 'Year', value: '2025' },
      { label: 'Stack', value: 'Next.js, Prisma, PostgreSQL' },
    ],
    intro:
      'Full-stack e-learning build: student lifecycle automated end to end, with a test suite behind it.',
    blocks: [
      {
        heading: 'What it does',
        kind: 'list',
        items: [
          'Automated student notifications across the learning lifecycle',
          'Assignment workflows for teachers and students',
          'Next.js frontend with Prisma ORM on PostgreSQL',
          'Comprehensive unit-test suite across the stack',
        ],
      },
      {
        kind: 'para',
        text: 'Owned full-stack in 2025: schema, API, UI, notifications, and the tests that keep them honest.',
      },
    ],
    backTo: { label: 'Back to projects', to: '/#projects' },
  },
  'gts-parking': {
    eyebrow: 'Case study',
    title: 'GTS Parking',
    heroImg: '/img/gts.jpg',
    full: 'Smart parking monitoring, Pekanbaru',
    meta: [
      { label: 'Company', value: 'PT Ghraha Trimitra Selaras' },
      { label: 'Stack', value: 'React, Laravel' },
    ],
    intro:
      'Real-time smart parking dashboards: volume, utilization, and pattern analysis, live.',
    blocks: [
      {
        heading: 'What the dashboards track',
        kind: 'list',
        items: [
          'Live parking volume',
          'Utilization per location',
          'Pattern analysis over time',
        ],
      },
      {
        kind: 'para',
        text: 'Built at PT Ghraha Trimitra Selaras: React on the front, Laravel behind it. Part of an operations suite covering a parking and vending fleet of ~250 machines across Pekanbaru, alongside the Jetinno Vending dashboard.',
      },
    ],
    related: [
      { label: 'Jetinno Vending', to: '/projects/jetinno-vending' },
      { label: 'PT Ghraha Trimitra Selaras', to: '/experience/ghraha-trimitra' },
    ],
    backTo: { label: 'Back to projects', to: '/#projects' },
  },
  'jetinno-vending': {
    eyebrow: 'Case study',
    title: 'Jetinno Vending',
    heroImg: '/img/jetinno.jpg',
    full: 'Vending operations and payments',
    meta: [
      { label: 'Company', value: 'PT Ghraha Trimitra Selaras' },
      { label: 'Stack', value: 'Next.js, QRIS/EDC, OCBC' },
      { label: 'Fleet', value: '~250 machines (parking + vending)' },
    ],
    intro:
      'Vending machine management: live transactions, QRIS payment integration to OCBC Bank, and remote device control from one dashboard.',
    blocks: [
      {
        heading: 'What it covers',
        kind: 'list',
        items: [
          'Live transaction monitoring',
          'QRIS payment integration to OCBC Bank',
          'EDC payment device support',
          'Remote device control from the dashboard',
        ],
      },
      {
        heading: 'Adjacent work',
        kind: 'list',
        items: [
          'KB Bank Mini ATM monitoring on Aisino machines',
          'Secure user-management dashboard for ATM operations',
        ],
      },
    ],
    related: [
      { label: 'GTS Parking', to: '/projects/gts-parking' },
      { label: 'PT Ghraha Trimitra Selaras', to: '/experience/ghraha-trimitra' },
    ],
    backTo: { label: 'Back to projects', to: '/#projects' },
  },
  'smart-door-lock': {
    eyebrow: 'System design',
    title: 'Smart Door Lock',
    heroImg: '/img/doorlock.jpg',
    full: 'Detachable add-on for traditional lever-action doors',
    meta: [
      { label: 'Program', value: 'Computer Engineering, Universitas Indonesia' },
      { label: 'Role', value: 'System Requirements & Architecture' },
      { label: 'Deliverable', value: 'System Requirements Specification (SRS)' },
      { label: 'Year', value: '2023' },
    ],
    intro:
      'A detachable add-on that turns a traditional lever-action door lock into a connected one without replacing existing hardware. The device grips the key already in the cylinder and turns it on command from an Android app, with timed access sharing for family and guests.',
    blocks: [
      {
        heading: 'The everyday problems it targets',
        kind: 'list',
        items: [
          'Entering the house with both hands full: turning a physical key becomes the hardest step.',
          'Lending a physical key for temporary access is risky and difficult to revoke.',
          'Existing smart locks demand replacing the entire lock mechanism, locking out renters and traditional door owners.',
        ],
      },
      {
        heading: 'How the physical integration works',
        kind: 'list',
        items: [
          'The detachable unit mounts onto the existing lock without replacing the lock cylinder or handle.',
          'The device holds the key already inserted into the keyhole and rotates it when triggered.',
          'An optional handle-pulling mechanism was designed to pull the lever handle down, conditional on motor torque.',
          'Users control the lock over an encrypted wireless link through a smartphone app.',
        ],
      },
      {
        heading: 'Specified functional requirements',
        kind: 'list',
        items: [
          'Remote access: lock and unlock remotely via an Android application over an encrypted wireless connection.',
          'Manual override: mechanical override ensures the door remains operable when a phone is lost or battery is depleted.',
          'Voice command: integration for locking and unlocking via voice input inside the mobile app.',
          'Access sharing: grant temporary or permanent access to guests, family, or service workers, backed by an access event log.',
          'Security and encryption: end-to-end encrypted communication between lock and phone, with strict password enforcement.',
        ],
      },
      {
        heading: 'Risks, assumptions, and constraints',
        kind: 'list',
        items: [
          'Motor torque risk: servo motors require significantly more torque to pull a door handle than to turn a key. The team scoped the guaranteed mechanism to turning the key, keeping handle-pulling conditional.',
          'Model constraint: designed specifically for lever-action door locks where the handle and key cylinder are separated.',
          'Power and weight: battery-powered with easily replaceable cells; lightweight enough to mount without degrading lock performance.',
          'Operating environment: indoor installation assumed, sheltered from high humidity and extreme heat.',
        ],
      },
      {
        heading: 'Engineering team',
        kind: 'para',
        text: 'Collaborative engineering project developed at Universitas Indonesia by Muhammad Naufal Faza, Michael Harditya, Windiarta, Imam Azka Ramadhan Aditia, and Mochammad Shaffa Prawiranegara. Authored as a formal System Requirements Specification covering mechanical actuation, secure wireless protocol design, and mobile client integration.',
      },
    ],
    backTo: { label: 'Back to projects', to: '/#projects' },
  },
};

const platformRelated: RelatedLink[] = [
  { label: 'PINTER case study', to: '/projects/pinter' },
];

export const agentStudies: Record<string, Study> = {
  'aegis-ai': {
    eyebrow: 'Agent',
    title: 'AEGIS AI',
    heroImg: '/img/aegis.jpg',
    meta: [
      { label: 'Business unit', value: 'Marketing' },
      { label: 'Runs on', value: 'PINTER' },
      { label: 'Capabilities', value: 'MCP, geospatial rendering, maps & graphs' },
    ],
    intro:
      'Geospatial intelligence agent connected via MCP. Renders fertilizer demand and stock information as interactive maps and graphs for marketing decisions.',
    blocks: [
      {
        heading: 'What it does',
        kind: 'list',
        items: [
          'Fertilizer demand and stock information on request',
          'Interactive maps and graphs rendered from live data',
          'MCP (Model Context Protocol) connection to geospatial sources',
        ],
      },
      platformBlock,
    ],
    related: [...platformRelated, agentLink('AYU', 'ayu')],
    backTo: { label: 'Back to the platform', to: '/#platform' },
  },
  'sentra-ai': {
    eyebrow: 'Agent',
    title: 'Sentra AI',
    heroImg: '/img/sentra.jpg',
    meta: [
      { label: 'Business unit', value: 'SMTI' },
      { label: 'Runs on', value: 'PINTER' },
      { label: 'Capabilities', value: 'Enterprise RAG, role-based access control' },
    ],
    intro:
      'RAG-based document search with personalized access control: every user retrieves only what their role permits.',
    blocks: [
      {
        heading: 'What it does',
        kind: 'list',
        items: [
          'Document search by meaning across enterprise files',
          'Personalized, role-based access per user',
          'Agentic RAG for context-aware answers over unstructured documents',
        ],
      },
      platformBlock,
    ],
    related: [...platformRelated, { label: 'DS AI Service', to: '/projects/ds-ai-service' }],
    backTo: { label: 'Back to the platform', to: '/#platform' },
  },
  'pac-agent': {
    eyebrow: 'Agent',
    title: 'PAC Agent',
    heroImg: '/img/pac.jpg',
    full: 'Production Analytics Center',
    meta: [
      { label: 'Business unit', value: 'Production' },
      { label: 'Runs on', value: 'PINTER' },
      { label: 'Capabilities', value: 'Production analytics across 5 subsidiaries' },
    ],
    intro:
      'Analyzes production data across 5 subsidiaries for rapid insights. Consolidation and querying that took one week now answers in under 2 minutes.',
    blocks: [
      {
        heading: 'What it does',
        kind: 'list',
        items: [
          'Production data analysis across 5 subsidiaries',
          'Data consolidation and query time cut from 1 week to under 2 minutes',
          'Rapid production insights for the Production unit',
        ],
      },
      platformBlock,
    ],
    related: platformRelated,
    backTo: { label: 'Back to the platform', to: '/#platform' },
  },
  ayu: {
    eyebrow: 'Agent',
    title: 'AYU',
    heroImg: '/img/ayu.jpg',
    full: 'Agronomis yang Unggul',
    meta: [
      { label: 'Business unit', value: 'Marketing' },
      { label: 'Runs on', value: 'PINTER' },
      { label: 'Capabilities', value: 'Conversational assistant, agronomist support' },
    ],
    intro:
      'Chatbot assistant for agronomists, supporting the people who support farmers in the field.',
    blocks: [
      {
        heading: 'What it does',
        kind: 'list',
        items: [
          'Conversational assistant for agronomists',
          'Support for the field staff who support farmers',
          'Part of the Marketing unit toolkit alongside AEGIS AI',
        ],
      },
      platformBlock,
    ],
    related: [...platformRelated, agentLink('AEGIS AI', 'aegis-ai')],
    backTo: { label: 'Back to the platform', to: '/#platform' },
  },
  'kita-apps': {
    eyebrow: 'Agent',
    title: 'KITA Apps',
    heroImg: '/img/kita.jpg',
    full: 'Legal Assistant',
    meta: [
      { label: 'Business unit', value: 'Corporate Performance' },
      { label: 'Runs on', value: 'PINTER' },
      { label: 'Capabilities', value: 'KPI analysis, report writing, typo prevention' },
    ],
    intro:
      'Analyzes KPI achievement, prevents typos, and accelerates executive report writing for corporate performance.',
    blocks: [
      {
        heading: 'What it does',
        kind: 'list',
        items: [
          'KPI achievement analysis',
          'Typo prevention in executive documents',
          'Accelerated executive report writing',
          'Legal assistant support for the Corporate Performance unit',
        ],
      },
      platformBlock,
    ],
    related: platformRelated,
    backTo: { label: 'Back to the platform', to: '/#platform' },
  },
  rama: {
    eyebrow: 'Agent',
    title: 'RAMA',
    heroImg: '/img/rama.jpg',
    full: 'Request and Data Management',
    meta: [
      { label: 'Business unit', value: 'Data Management' },
      { label: 'Runs on', value: 'PINTER' },
      { label: 'Capabilities', value: 'Workflow automation, Linear tickets, Slack' },
    ],
    intro:
      'Automates spreadsheet data requests end to end: assessment, Linear ticket creation, and Slack integration.',
    blocks: [
      {
        heading: 'What it does',
        kind: 'list',
        items: [
          'Spreadsheet data requests handled end to end',
          'Automated assessment of each incoming request',
          'Linear ticket creation',
          'Slack integration so the team sees every step',
        ],
      },
      platformBlock,
    ],
    related: [...platformRelated, agentLink('SINTA', 'sinta')],
    backTo: { label: 'Back to the platform', to: '/#platform' },
  },
  sinta: {
    eyebrow: 'Agent',
    title: 'SINTA',
    heroImg: '/img/sinta.jpg',
    meta: [
      { label: 'Business unit', value: 'Data Management' },
      { label: 'Runs on', value: 'PINTER' },
      { label: 'Capabilities', value: 'Ticket monitoring, Slack delivery' },
    ],
    intro:
      'Monitors data request ticket status and delivers updates in Slack, where the team already works.',
    blocks: [
      {
        heading: 'What it does',
        kind: 'list',
        items: [
          'Data request ticket status monitoring',
          'Updates delivered in Slack, where the team already works',
        ],
      },
      platformBlock,
    ],
    related: [...platformRelated, agentLink('RAMA', 'rama')],
    backTo: { label: 'Back to the platform', to: '/#platform' },
  },
  'travel-expense': {
    eyebrow: 'Agent',
    title: 'Travel Expense',
    heroImg: '/img/travel.jpg',
    meta: [
      { label: 'Business unit', value: 'Human Resources' },
      { label: 'Runs on', value: 'PINTER' },
      { label: 'Capabilities', value: 'Document extraction, rule-based validation' },
    ],
    intro:
      'Extracts information from travel reimbursement documents and validates authenticity against custom rules: 100% accuracy on provided rule sets.',
    blocks: [
      {
        heading: 'What it does',
        kind: 'list',
        items: [
          'Extraction of data from travel reimbursement documents',
          'Authenticity validation against custom rules',
          '100% accuracy on the provided rule sets',
        ],
      },
      platformBlock,
    ],
    related: platformRelated,
    backTo: { label: 'Back to the platform', to: '/#platform' },
  },
  'risk-ai-agent': {
    eyebrow: 'Agent',
    title: 'RISK AI Agent',
    heroImg: '/img/risk.jpg',
    meta: [
      { label: 'Business unit', value: 'Risk Management' },
      { label: 'Runs on', value: 'PINTER' },
      { label: 'Capabilities', value: 'Risk analysis, live internet price lookup' },
    ],
    intro:
      'Analyzes company-wide risk and accesses live product prices from the internet for grounded decisions.',
    blocks: [
      {
        heading: 'What it does',
        kind: 'list',
        items: [
          'Company-wide risk analysis',
          'Live product price lookups from the internet',
        ],
      },
      platformBlock,
    ],
    related: platformRelated,
    backTo: { label: 'Back to the platform', to: '/#platform' },
  },
};

export const experienceStudies: Record<string, Study> = {
  'pupuk-indonesia': {
    eyebrow: 'Company',
    title: 'PT Pupuk Indonesia (Persero)',
    heroImg: '/img/pupuk.jpg',
    meta: [
      { label: 'Role', value: 'Software & AI Engineer, SnowPoint Team' },
      { label: 'Period', value: 'Sept 2024 - Present' },
      { label: 'Location', value: 'Jakarta, Indonesia' },
      { label: 'Earlier', value: 'Data Engineer Intern, Sept - Dec 2023' },
    ],
    intro:
      'Enterprise AI and data governance at a Fortune-500 state-owned enterprise. Two tracks, one team: the PINTER agent platform and the SnowPoint governance layer.',
    blocks: [
      {
        heading: 'AI platform engineering (PINTER)',
        kind: 'list',
        items: [
          'Engineered the PINTER multi-agent platform backend on FastAPI + Google ADK: 9 agents orchestrated across 7 business units',
          'SSE streaming of agent execution at 98%+ uptime, LiteLLM multi-model routing, Qdrant vector search, budget enforcement, HITL approval gates, sandboxed Python execution',
          'Cut LLM inference cost 90%+ vs Claude-only through task-specific model routing and company-hosted Ollama',
          'Built enterprise RAG over 400+ scanned PDFs with role-based access, feedback capture, and self-improving workflows',
          'Delivered PAC Agent: production queries across 5 subsidiaries, 1 week down to under 2 minutes',
          'Shipped SSO, JWT, MFA, RBAC, encrypted API keys, usage tracking, and audit logging on Cloud Run / Cloud Logging',
          'Coordinated a 7-person engineering team across AI development, stakeholder delivery, and production support',
        ],
      },
      {
        heading: 'Data engineering & governance (SnowPoint)',
        kind: 'list',
        items: [
          'Led SnowKeeper (automated Snowflake resource and access management) and SnowMi (budget, pipeline, data quality, PII monitoring) across all subsidiary environments',
          'Unified metadata governance, automated PII detection via custom Data Metric Functions, standardized naming conventions with Bronze-layer metadata audits',
          'Data Vault 2.0 PIT and Bridge tables for SAP material groups: sub-second historical queries, full version lineage',
          'Led migration from Airbyte2 to Airbyte1, coordinated DPCS connection whitelisting, introduced task-based scheduler for dbt Sodo',
          'Delivered technical presentation on ELT flows (Raw to Bronze via zero-copy clone) and Data Quality Monitoring, April 2026',
        ],
      },
      {
        heading: 'Data engineer intern (2023)',
        kind: 'list',
        items: [
          'Benchmarked leading ETL tools and conducted Snowflake clustering research that informed the data platform architecture',
        ],
      },
      {
        heading: 'Impact in numbers',
        kind: 'list',
        items: [
          '9 AI agents in production across 7 business units',
          '90%+ LLM inference cost cut vs Claude-only',
          'Production queries: 1 week down to under 2 minutes',
          '98%+ uptime on streaming agent execution',
          '400+ scanned PDFs under enterprise RAG',
          '7-person team coordinated across delivery and support',
        ],
      },
    ],
    related: [
      { label: 'PINTER case study', to: '/projects/pinter' },
      { label: 'Snow Keeper', to: '/projects/snow-keeper' },
      { label: 'DS AI Service', to: '/projects/ds-ai-service' },
    ],
    backTo: { label: 'Back to track record', to: '/#experience' },
  },
  'ghraha-trimitra': {
    eyebrow: 'Company',
    title: 'PT Ghraha Trimitra Selaras',
    heroImg: '/img/ghraha.jpg',
    meta: [
      { label: 'Role', value: 'Lead Full-Stack Programmer (Part-Time)' },
      { label: 'Period', value: 'Jan 2024 - Jul 2026' },
      { label: 'Location', value: 'Jakarta, Indonesia' },
    ],
    intro:
      'Full-stack operations dashboards for parking and vending fleets, with bank-grade payment integration.',
    blocks: [
      {
        kind: 'para',
        text: 'A part-time lead role alongside the Pupuk Indonesia work: two operations dashboards and an ATM monitoring suite, from bank payment integration to secure user management.',
      },
      {
        heading: 'What I built',
        kind: 'list',
        items: [
          'Designed and built full-stack dashboards (Next.js, Laravel) for parking and vending operations with EDC/QRIS integration to OCBC Bank, supporting ~250 machines across Pekanbaru',
          'Engineered real-time monitoring and secure user-management dashboard for KB Bank Mini ATMs on Aisino machines',
        ],
      },
    ],
    related: [
      { label: 'GTS Parking', to: '/projects/gts-parking' },
      { label: 'Jetinno Vending', to: '/projects/jetinno-vending' },
    ],
    backTo: { label: 'Back to track record', to: '/#experience' },
  },
  'bangkit-academy': {
    eyebrow: 'Company',
    title: 'Bangkit Academy',
    heroImg: '/img/bangkit.jpg',
    meta: [
      { label: 'Role', value: 'Mobile Development Class Mentor' },
      { label: 'Period', value: '2024 - 2025' },
      { label: 'Location', value: 'Indonesia' },
    ],
    intro: 'Mentored the Mobile Development cohort through their capstone builds.',
    blocks: [
      {
        kind: 'para',
        text: 'Alumnus first: Bangkit Academy Mobile Development cohort, 2023. Mentor next: guiding the following cohorts through their capstone projects, with Android native development as the focus.',
      },
      {
        heading: 'What mentoring covered',
        kind: 'list',
        items: [
          'Mobile Development class mentorship',
          'Capstone project guidance for the cohort',
          'Android native toolchain',
        ],
      },
    ],
    backTo: { label: 'Back to track record', to: '/#experience' },
  },
};

export const studyByKind = {
  project: projectStudies,
  agent: agentStudies,
  experience: experienceStudies,
} as const;

export type StudyKind = keyof typeof studyByKind;
