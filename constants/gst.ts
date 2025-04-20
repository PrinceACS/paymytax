import { ReactElement } from "react";
import { FileText, Scale, Percent, Globe } from "lucide-react";

export interface GSTReturn {
    form: string;
    frequency: string;
    purpose: string;
}

export const GST_RETURNS = [
    {
      form: "GSTR-1",
      frequency: "Monthly/Quarterly",
      purpose: "Details of outward supplies of goods or services",
    },
    {
      form: "GSTR-3B",
      frequency: "Monthly",
      purpose: "Summary return for tax payment and input tax credit claims",
    },
    {
      form: "GSTR-4",
      frequency: "Annual",
      purpose: "Return for composition taxpayers",
    },
    {
      form: "GSTR-5",
      frequency: "Monthly",
      purpose: "Return for non-resident foreign taxpayers",
    },
    {
      form: "GSTR-6",
      frequency: "Monthly",
      purpose: "Return for Input Service Distributors (ISD)",
    },
    {
      form: "GSTR-7",
      frequency: "Monthly",
      purpose: "Return for businesses deducting TDS under GST",
    },
    {
      form: "GSTR-9",
      frequency: "Annual",
      purpose: "Annual return for regular taxpayers",
    },
    {
      form: "GSTR-9C",
      frequency: "Annual",
      purpose:
        "Reconciliation statement for taxpayers with turnover above ₹5 crore",
    },
  ];

export interface GSTService {
    title: string;
    description: string;
    icon: ReactElement;
}

const GST_SERVICES  = [
    {
      title: "Registration & Compliance",
      description: "End-to-end GST registration and monthly filing support",
      icon: FileText,
    },
    {
      title: "Audit & Reconciliation",
      description: "Comprehensive GST audit support and credit reconciliation",
      icon: Scale,
    },
    {
      title: "Input Tax Credit Management",
      description:
        "Maximize your input tax credit claims with accurate tracking and reconciliation",
      icon: Percent,
    },
    {
      title: "E-Invoicing Implementation",
      description:
        "Seamless integration of e-invoicing systems for GST compliance",
      icon: FileText,
    },
    {
      title: "GST Advisory & Consulting",
      description: "Expert guidance on GST implications for business decisions",
      icon: Scale,
    },
    {
      title: "International GST Services",
      description:
        "Support for cross-border transactions and import/export compliance",
      icon: Globe,
    },
  ];
  