import {
  Bot,
  Users,
  ShieldAlert,
  Sparkles,
  Network,
  Layers,
  Terminal,
  UserCheck,
  ShieldCheck,
  Zap,
  BarChart3,
  Building2,
  Lock,
  Gamepad2,
  Landmark,
  Vote,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

export interface CardItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const problems: CardItem[] = [
  { icon: Bot, title: "Bots", desc: "Automated accounts that manipulate platforms." },
  { icon: Users, title: "Fake Accounts", desc: "Millions of identities created without accountability." },
  { icon: ShieldAlert, title: "Spam", desc: "Low-quality interactions that reduce user trust." },
  { icon: Sparkles, title: "AI Abuse", desc: "Automated systems pretending to be real users." },
  { icon: Network, title: "Sybil Attacks", desc: "Multiple fake identities controlling online systems." },
  { icon: Layers, title: "Account Farming", desc: "Mass-created accounts used for fraud and manipulation." },
];

export const solutions: CardItem[] = [
  { icon: Terminal, title: "Developer-Friendly API", desc: "Simple integration with clear documentation." },
  { icon: UserCheck, title: "Verification Flow", desc: "A streamlined verification experience designed for users." },
  {
    icon: ShieldCheck,
    title: "Verification Result",
    desc: "Receive a verification result your application can use in its own workflows.",
  },
];

export interface Step {
  n: string;
  title: string;
  desc: string;
}

export const steps: Step[] = [
  { n: "01", title: "Integrate HumanodeID", desc: "Add the API to your signup or key flows in minutes." },
  { n: "02", title: "User completes verification", desc: "A short, guided flow confirms a real human is present." },
  { n: "03", title: "HumanodeID processes the verification", desc: "The result is evaluated against our verification model." },
  { n: "04", title: "Your application receives the verification result", desc: "Use the outcome however your workflow needs it." },
];

export const features: CardItem[] = [
  { icon: Terminal, title: "Developer-first API", desc: "Built around clear, predictable calls." },
  { icon: Zap, title: "Easy integration", desc: "Drop it into existing signup or key flows." },
  { icon: Network, title: "REST architecture", desc: "Familiar, well-documented request patterns." },
  { icon: Layers, title: "Future SDK support", desc: "Native SDKs planned for popular frameworks." },
  { icon: Sparkles, title: "Fast verification flow", desc: "Designed to respect your users' time." },
  { icon: BarChart3, title: "Analytics ready", desc: "Structured results built for reporting." },
  { icon: Building2, title: "Scalable infrastructure", desc: "Built to grow with your application." },
  { icon: Lock, title: "Privacy-aware design", desc: "Verification without unnecessary data collection." },
  { icon: ShieldCheck, title: "Secure verification sessions", desc: "Every session isolated and protected." },
];

export const useCases: CardItem[] = [
  { icon: Sparkles, title: "AI Applications", desc: "Keep automated abuse out of AI-native products." },
  { icon: Building2, title: "Marketplaces", desc: "Protect buyers and sellers from fake listings." },
  { icon: Landmark, title: "Fintech", desc: "Add a human layer to sensitive financial flows." },
  { icon: Gamepad2, title: "Gaming", desc: "Reduce smurfing, farming, and bot economies." },
  { icon: Users, title: "Communities", desc: "Keep discussions grounded in real people." },
  { icon: Network, title: "Social Platforms", desc: "Cut down on inauthentic engagement." },
  { icon: Briefcase, title: "Hiring Platforms", desc: "Verify real candidates and real employers." },
  { icon: Vote, title: "Voting Systems", desc: "Support one-person, one-vote integrity." },
  { icon: Terminal, title: "Developer Platforms", desc: "Protect API keys and usage from abuse." },
];

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "What is HumanodeID?",
    a: "HumanodeID is a developer-first infrastructure platform that helps applications verify a real human is behind an account or action, through a simple verification API.",
  },
  {
    q: "Who is HumanodeID for?",
    a: "Developers and teams building applications where bots, fake accounts, or automated abuse threaten trust — including AI products, marketplaces, fintech, gaming, and community platforms.",
  },
  {
    q: "How does HumanodeID help reduce bots?",
    a: "By adding a verification step to key flows, so accounts and actions are tied to a confirmed human rather than an automated script.",
  },
  {
    q: "How long will integration take?",
    a: "The API is designed for a small, well-documented integration — most teams can wire it into an existing flow quickly.",
  },
  {
    q: "Will mobile SDKs be available?",
    a: "Native SDKs are planned. REST access is the current path while SDK support is developed.",
  },
  {
    q: "How can I join early access?",
    a: "Join the waitlist above. We'll reach out as spots in early access open up.",
  },
];

export const companies = ["NORTHWIND", "VERTEX AI", "PARALLAX", "FORGEBASE", "ORBITAL", "CIVIC LOOP"];
