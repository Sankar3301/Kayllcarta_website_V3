import {
  BarChart3,
  BookOpen,
  Building2,
  Calculator,
  ClipboardCheck,
  FileText,
  PiggyBank,
  Users,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: typeof FileText;
  title: string;
  /** Short card blurb */
  body: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  heroCopy: string;
  mainHeading: string;
  mainCopy: string;
  includes: string[];
};

export const serviceProcess = [
  {
    title: "Initial conversation and scope",
    detail: "We talk through what you need and agree what is included.",
  },
  {
    title: "Information gathering",
    detail: "We collect the records and details relevant to your circumstances.",
  },
  {
    title: "Preparation and review",
    detail: "We prepare the work and review it for accuracy and completeness.",
  },
  {
    title: "Explanation and next steps",
    detail: "We explain the outcome in plain language and what happens next.",
  },
  {
    title: "Ongoing support where engaged",
    detail: "We stay available for questions and continuing obligations.",
  },
] as const;

export const services: Service[] = [
  {
    slug: "tax-accounting",
    icon: Calculator,
    title: "Tax & Accounting",
    body: "Tax returns, accounting and compliance support for individuals and businesses.",
    seoTitle: "Tax & Accounting | Kaycarta Accountants",
    seoDescription:
      "Kaycarta provides tax and accounting support for individuals and businesses in Thomastown and across Melbourne, tailored to client circumstances.",
    h1: "Tax & Accounting Support With Clarity",
    heroCopy:
      "Accurate accounting and tax support can make it easier to meet your obligations, understand your financial position and make informed decisions.",
    mainHeading: "Tax and Accounting, Without the Guesswork",
    mainCopy:
      "We work through the relevant information, identify the obligations that apply to you and help keep your financial records and reporting organised.",
    includes: [
      "Individual tax returns",
      "Business tax returns",
      "Company and trust tax matters",
      "BAS and GST support",
      "Financial statements and reporting",
      "ATO correspondence and compliance support",
    ],
  },
  {
    slug: "business-setup",
    icon: Building2,
    title: "Business Setup",
    body: "Guidance around business structures, registrations and financial foundations.",
    seoTitle: "Business Setup | Kaycarta Accountants",
    seoDescription:
      "Kaycarta provides business setup support for individuals and businesses in Thomastown and across Melbourne, tailored to client circumstances.",
    h1: "Start With the Right Financial Foundations",
    heroCopy:
      "The choices made when a business begins can influence administration, taxation and future flexibility. Kaycarta can help you understand the accounting side of getting started.",
    mainHeading: "Build the Foundations Before You Build the Business",
    mainCopy:
      "Starting with an appropriate structure and organised records can make future administration easier.",
    includes: [
      "Business structure discussions",
      "ABN, TFN and GST registration support where applicable",
      "Company or trust setup coordination where offered",
      "Accounting software setup",
      "Initial bookkeeping processes",
      "Ongoing compliance planning",
    ],
  },
  {
    slug: "bookkeeping",
    icon: BookOpen,
    title: "Bookkeeping",
    body: "Organised financial records and reporting support for day-to-day business needs.",
    seoTitle: "Bookkeeping | Kaycarta Accountants",
    seoDescription:
      "Kaycarta provides bookkeeping support for individuals and businesses in Thomastown and across Melbourne, tailored to client circumstances.",
    h1: "Keep Your Books Organised. Know Your Numbers.",
    heroCopy:
      "Reliable bookkeeping gives business owners a clearer view of transactions, cash flow and performance.",
    mainHeading: "Records You Can Rely On",
    mainCopy:
      "We help keep financial information organised so you can spend less time chasing records and more time running your business.",
    includes: [
      "Transaction recording",
      "Bank reconciliation",
      "Accounts payable and receivable",
      "Invoicing support",
      "Expense tracking",
      "BAS preparation support",
      "Management reports",
      "Payroll bookkeeping where offered",
    ],
  },
  {
    slug: "asic-compliance",
    icon: ClipboardCheck,
    title: "ASIC & Corporate Compliance",
    body: "Support with ongoing company administration and compliance requirements.",
    seoTitle: "ASIC & Corporate Compliance | Kaycarta Accountants",
    seoDescription:
      "Kaycarta provides ASIC and corporate compliance support for individuals and businesses in Thomastown and across Melbourne, tailored to client circumstances.",
    h1: "Stay Organised With Your Corporate Obligations",
    heroCopy:
      "Companies have ongoing administrative responsibilities. Kaycarta can provide accounting and corporate compliance support within the scope of its services.",
    mainHeading: "Keep Corporate Administration Under Control",
    mainCopy:
      "We help you keep important company information organised and identify routine compliance tasks that need attention.",
    includes: [
      "ASIC annual review support",
      "Company detail changes",
      "Director and shareholder changes",
      "Registered office updates",
      "Corporate records",
      "ASIC lodgement support",
    ],
  },
  {
    slug: "smsf",
    icon: PiggyBank,
    title: "SMSF",
    body: "Accounting and administration support for self-managed superannuation funds, where applicable.",
    seoTitle: "SMSF | Kaycarta Accountants",
    seoDescription:
      "Kaycarta provides SMSF support for individuals and businesses in Thomastown and across Melbourne, tailored to client circumstances.",
    h1: "Structured Accounting Support for Your SMSF",
    heroCopy:
      "Self-managed superannuation funds involve ongoing accounting, reporting and compliance responsibilities. Kaycarta can assist with the services it is authorised and equipped to provide.",
    mainHeading: "Keep Your Fund's Administration Organised",
    mainCopy:
      "Good records and timely reporting help trustees stay on top of their responsibilities.",
    includes: [
      "SMSF financial statements",
      "SMSF tax return preparation",
      "Member accounting",
      "Contribution and pension administration support",
      "Audit coordination",
      "Compliance administration",
    ],
  },
  {
    slug: "tax-planning",
    icon: FileText,
    title: "Tax Planning & Advisory",
    body: "Forward-looking advice to help you understand tax implications and plan appropriately.",
    seoTitle: "Tax Planning & Advisory | Kaycarta Accountants",
    seoDescription:
      "Kaycarta provides tax planning and advisory support for individuals and businesses in Thomastown and across Melbourne, tailored to client circumstances.",
    h1: "Plan Ahead, Not Just at Tax Time",
    heroCopy:
      "Tax planning is most useful when considered alongside the decisions that create the tax outcome.",
    mainHeading: "Understand the Tax Implications Before You Act",
    mainCopy:
      "We help you consider relevant tax consequences and identify questions that should be addressed before important financial decisions.",
    includes: [
      "Tax planning reviews",
      "Business structure considerations",
      "Capital gains tax considerations",
      "Investment and property tax considerations",
      "Tax-effective planning discussions",
      "ATO matters and reviews",
    ],
  },
  {
    slug: "business-advisory",
    icon: BarChart3,
    title: "Business Advisory",
    body: "Financial insight, planning and performance support for business owners.",
    seoTitle: "Business Advisory | Kaycarta Accountants",
    seoDescription:
      "Kaycarta provides business advisory support for individuals and businesses in Thomastown and across Melbourne, tailored to client circumstances.",
    h1: "Financial Insight for Better Business Decisions",
    heroCopy:
      "Business owners need more than historical reports. They need information that helps them understand performance, cash flow and future options.",
    mainHeading: "Turn Financial Information Into Action",
    mainCopy:
      "We help business owners interpret their numbers and use them as a tool for planning and decision-making.",
    includes: [
      "Budgeting",
      "Cash-flow planning",
      "Forecasting",
      "Performance reviews",
      "Profit improvement discussions",
      "Business planning",
      "Growth planning",
    ],
  },
  {
    slug: "payroll-super",
    icon: Users,
    title: "Payroll & Superannuation",
    body: "Practical payroll and superannuation administration support, where offered.",
    seoTitle: "Payroll & Superannuation | Kaycarta Accountants",
    seoDescription:
      "Kaycarta provides payroll and superannuation support for individuals and businesses in Thomastown and across Melbourne, tailored to client circumstances.",
    h1: "Payroll Support That Keeps Things Organised",
    heroCopy:
      "Payroll involves recurring calculations, reporting and superannuation obligations. Kaycarta can support the functions it provides within the agreed engagement.",
    mainHeading: "A More Reliable Payroll Process",
    mainCopy:
      "A structured payroll process can reduce administrative friction and help keep records consistent.",
    includes: [
      "Payroll processing",
      "PAYG withholding support",
      "Single Touch Payroll support",
      "Payday Super",
      "Payroll reconciliation",
      "Employee setup and record support",
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
