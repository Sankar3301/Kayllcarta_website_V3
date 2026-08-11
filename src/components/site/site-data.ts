import {
  Building,
  HeartPulse,
  Home,
  Rocket,
  Store,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

export const CONTACT = {
  name: "Kaycarta Accountants",
  street: "Level 1, 179 B High Street, Thomastown VIC 3074",
  postal: "PO Box 530, Thomastown VIC 3074",
  phone: "03 9464 1144",
  phoneHref: "tel:+61394641144",
  email: "info@kaycarta.com.au",
  hours: ["Monday – Friday: 9:00am – 5:30pm", "Saturday: by appointment", "Sunday: closed"],
} as const;

export const industries: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Building,
    title: "Trades & Construction",
    body: "Accounting and record-keeping support for contractors and trade businesses.",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    body: "Practical accounting and tax support for consultants and professional practices.",
  },
  {
    icon: Store,
    title: "Retail & Hospitality",
    body: "Bookkeeping, tax and reporting support for businesses managing frequent transactions.",
  },
  {
    icon: Home,
    title: "Property & Investment",
    body: "Accounting and tax support for property owners and investors, subject to the relevant engagement.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Allied Health",
    body: "Financial administration and tax support for eligible professional practices.",
  },
  {
    icon: Rocket,
    title: "Startups & Small Business",
    body: "Foundational accounting, compliance and planning support for growing businesses.",
  },
];

export const resourceCategories = [
  "Tax basics",
  "Small business",
  "Bookkeeping",
  "Business setup",
  "Superannuation",
  "ATO updates",
  "Financial planning",
] as const;

export const resourceArticles = [
  {
    title: "What records should you keep for your tax return?",
    category: "Tax basics",
    body: "A practical overview of the documents worth keeping through the year so return preparation is simpler.",
  },
  {
    title: "A simple checklist for starting a new business in Australia",
    category: "Business setup",
    body: "The accounting and registration questions worth resolving before you begin trading.",
  },
  {
    title: "What is BAS and when does a business need to lodge it?",
    category: "Small business",
    body: "An introduction to business activity statements and the reporting cycles that commonly apply.",
  },
  {
    title: "Sole trader vs company: questions to discuss with your accountant",
    category: "Business setup",
    body: "Structure affects tax, administration and flexibility. Here is what to talk through.",
  },
  {
    title: "Why monthly bookkeeping can help a small business",
    category: "Bookkeeping",
    body: "Regular reconciliation gives owners a clearer view of cash flow and performance.",
  },
  {
    title: "What should business owners review before the end of the financial year?",
    category: "Tax basics",
    body: "A short list of items commonly considered ahead of 30 June.",
  },
  {
    title: "Common bookkeeping mistakes small businesses can avoid",
    category: "Bookkeeping",
    body: "Small record-keeping habits that prevent larger reconciliation problems later.",
  },
] as const;

export const faqs = [
  {
    q: "What services does Kaycarta provide?",
    a: "Kaycarta provides accounting, taxation and related business support services. The exact services available depend on the client's circumstances and agreed engagement.",
  },
  {
    q: "Can Kaycarta help with individual tax returns?",
    a: "Yes, subject to the firm's engagement terms and the nature of the client's tax affairs.",
  },
  {
    q: "Can you help me start a business?",
    a: "Kaycarta can assist with accounting and tax considerations involved in setting up a business, subject to the services offered.",
  },
  {
    q: "Do you provide bookkeeping?",
    a: "Bookkeeping support can be provided where included in the engagement.",
  },
  {
    q: "Can you help with business tax planning?",
    a: "Kaycarta can discuss relevant tax considerations and planning options within the scope of its professional services.",
  },
  {
    q: "How do I make an appointment?",
    a: "Use the contact form or call the office on 03 9464 1144.",
  },
  {
    q: "Where is Kaycarta located?",
    a: "Kaycarta's business card lists Level 1, 179 B High Street, Thomastown, Victoria 3074, with a postal address of PO Box 530, Thomastown, Victoria 3074.",
  },
] as const;

export const values = [
  { title: "Integrity", body: "We act honestly and transparently in every engagement." },
  { title: "Clarity", body: "We explain financial matters in straightforward language." },
  { title: "Responsibility", body: "We take ownership of the work we agree to deliver." },
  { title: "Client relationships", body: "We build long-term working relationships." },
  { title: "Continuous improvement", body: "We keep refining how we work and advise." },
] as const;
