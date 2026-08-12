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
    a: "Kaycarta provides tax and accounting, business setup, bookkeeping, ASIC and corporate compliance, SMSF administration, and tax planning and advisory services. The firm is led by a Registered Tax Agent and works with individuals, sole traders and companies from its Thomastown office.",
  },
  {
    q: "Can Kaycarta help with individual tax returns?",
    a: "Yes. Kaycarta prepares individual tax returns as part of its tax and accounting service, including reviewing deductions and lodging with the ATO. Book a consultation to discuss your specific tax position.",
  },
  {
    q: "Can you help me start a business?",
    a: "Yes. Kaycarta's business setup service covers choosing a structure (sole trader, company or trust), ABN and business registrations, and the accounting and tax considerations of launching a new business.",
  },
  {
    q: "Do you provide bookkeeping?",
    a: "Yes. Kaycarta offers ongoing bookkeeping support, including day-to-day transaction recording and keeping your accounts ready for tax time and business decisions, as part of a client engagement.",
  },
  {
    q: "Can you help with business tax planning?",
    a: "Yes. Kaycarta provides tax planning and advisory services throughout the year, not just at tax time, helping clients understand upcoming obligations and plan ahead rather than react at deadline.",
  },
  {
    q: "How do I make an appointment?",
    a: "Call 03 9464 1144, use the contact form on this site, or email info@kaycarta.com.au. Kaycarta's Thomastown office is open Monday to Friday, 9:00am–5:30pm, and Saturday by appointment.",
  },
  {
    q: "Is Kaycarta Accountants a Registered Tax Agent?",
    a: "Yes. Kaycarta Accountants is led by a Registered Tax Agent and Member of the Institute of Public Accountants (IPA), based at Level 1, 179 B High Street, Thomastown, Victoria. See the About page for full credentials.",
  },
  {
    q: "Where is Kaycarta located?",
    a: "Kaycarta Accountants is located at Level 1, 179 B High Street, Thomastown, Victoria 3074, serving clients across Thomastown and greater Melbourne. Postal address: PO Box 530, Thomastown, Victoria 3074.",
  },
] as const;

export const values = [
  { title: "Integrity", body: "We act honestly and transparently in every engagement." },
  { title: "Clarity", body: "We explain financial matters in straightforward language." },
  { title: "Responsibility", body: "We take ownership of the work we agree to deliver." },
  { title: "Client relationships", body: "We build long-term working relationships." },
  { title: "Continuous improvement", body: "We keep refining how we work and advise." },
] as const;
