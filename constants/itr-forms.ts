export interface ITRForm {
    id: string;
    name: string;
    category: string;
    details: string[];
}


export const ITR_FORMS : ITRForm[] = [
    {
      id: "ITR-1",
      name: "Sahaj",
      category: "For Salaried Individuals",
      details: [
        "Income up to ₹50 lakh",
        "Salary/Pension income",
        "One house property",
        "No capital gains",
        "Not applicable for business income",
      ],
    },
    {
      id: "ITR-2",
      name: "For Individuals and HUFs",
      category: "Without Business Income",
      details: [
        "Income from salary, house property, and other sources",
        "Capital gains income",
        "Foreign income/assets",
        "Multiple house properties",
        "Not applicable for business income",
      ],
    },
    {
      id: "ITR-3",
      name: "For Individuals and HUFs",
      category: "With Business Income",
      details: [
        "Income from business or profession",
        "Income from salary, house property, and capital gains",
        "Applicable for freelancers and consultants",
        "Income from partnerships",
        "Income from speculative businesses",
      ],
    },
    {
      id: "ITR-4",
      name: "Sugam",
      category: "Presumptive Income",
      details: [
        "For individuals, HUFs, and firms (excluding LLPs)",
        "Presumptive income under Sections 44AD, 44ADA, and 44AE",
        "Business turnover up to ₹2 crore",
        "Professional gross receipts up to ₹50 lakh",
        "Not applicable for capital gains or foreign income",
      ],
    },
    {
      id: "ITR-5",
      name: "For Firms, LLPs, and AOPs",
      category: "Partnerships and Associations",
      details: [
        "Applicable for partnership firms and LLPs",
        "For Association of Persons (AOPs) and Body of Individuals (BOIs)",
        "Not applicable for individual taxpayers",
        "Includes income from business, profession, and other sources",
        "Mandatory for entities with business income",
      ],
    },
    {
      id: "ITR-6",
      name: "For Companies",
      category: "Other than Section 11 Exemptions",
      details: [
        "For companies not claiming tax exemption under Section 11",
        "Mandatory electronic filing",
        "Includes income from business, capital gains, and other sources",
        "Applicable for private and public companies",
        "Excludes charitable and religious institutions",
      ],
    },
    {
      id: "ITR-7",
      name: "For Trusts and Institutions",
      category: "Exempt Organizations",
      details: [
        "For trusts, political parties, and charitable institutions",
        "Entities claiming exemptions under Sections 139(4A) to 139(4F)",
        "Includes income from property held for charitable purposes",
        "Applicable for religious and educational institutions",
        "Mandatory for entities with tax-exempt income",
      ],
    },
  ];
