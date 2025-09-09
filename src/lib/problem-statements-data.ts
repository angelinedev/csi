
export interface ProblemStatement {
  sNo: number;
  title: string;
  organization: string;
  category: 'Software' | 'Hardware' | 'General';
  theme: string;
  psNumber: string;
}

export const problemStatements: ProblemStatement[] = [
  {
    sNo: 1,
    title: "Smart Community Health Monitoring and Early Warning System for Water-Borne Diseases in Rural Northeast India",
    organization: "Ministry of Development of North Eastern Region",
    category: "Software",
    theme: "MedTech / BioTech / HealthTech",
    psNumber: "SIH25001"
  },
  {
    sNo: 2,
    title: "AI-Powered Platform for Personalized Learning Paths",
    organization: "Edutech Innovators",
    category: "Software",
    theme: "Education",
    psNumber: "PS001"
  },
  {
    sNo: 3,
    title: "IoT-Based Smart Waste Management System for Urban Areas",
    organization: "Civic Solutions",
    category: "Hardware",
    theme: "Smart Cities",
    psNumber: "PS002"
  },
  {
    sNo: 4,
    title: "Blockchain Solution for Secure and Transparent Voting Systems",
    organization: "GovTech Pioneers",
    category: "Software",
    theme: "Governance",
    psNumber: "PS003"
  },
  {
    sNo: 5,
    title: "Telemedicine Platform for Remote Patient Monitoring",
    organization: "HealthCare Connect",
    category: "General",
    theme: "Healthcare",
    psNumber: "PS004"
  },
  {
    sNo: 6,
    title: "Gamified Mobile App for Financial Literacy Education",
    organization: "FinEd Ventures",
    category: "Software",
    theme: "Finance",
    psNumber: "PS005"
  },
  {
    sNo: 7,
    title: "AI-driven precision agriculture for small-scale farmers",
    organization: "Ministry of Agriculture",
    category: "Software",
    theme: "Agriculture",
    psNumber: "AGR001"
  },
  {
    sNo: 8,
    title: "Low-cost, portable water quality testing kit",
    organization: "Jal Shakti Ministry",
    category: "Hardware",
    theme: "Water Management",
    psNumber: "WAT002"
  },
  {
    sNo: 9,
    title: "Cybersecurity framework for MSMEs",
    organization: "Ministry of Electronics and IT",
    category: "Software",
    theme: "Cybersecurity",
    psNumber: "CYB003"
  },
  {
    sNo: 10,
    title: "AR/VR module for skilling workforce in manufacturing",
    organization: "Ministry of Skill Development",
    category: "General",
    theme: "Skilling",
    psNumber: "SKL004"
  },
  // ... adding 125 more statements
  {
    sNo: 11,
    title: "Renewable Energy Grid Management System",
    organization: "Ministry of Power",
    category: "Software",
    theme: "Energy",
    psNumber: "ENR005"
  },
  {
    sNo: 12,
    title: "Supply Chain Logistics Optimization for E-Commerce",
    organization: "Freightify",
    category: "Software",
    theme: "Logistics",
    psNumber: "LOG006"
  },
  {
    sNo: 13,
    title: "Smart Traffic Control System using AI",
    organization: "Urban Development Authority",
    category: "Hardware",
    theme: "Smart Cities",
    psNumber: "SMC007"
  },
  {
    sNo: 14,
    title: "Mental Health Support Chatbot",
    organization: "National Institute of Mental Health",
    category: "Software",
    theme: "Healthcare",
    psNumber: "MHS008"
  },
  {
    sNo: 15,
    title: "Fake News Detection using Machine Learning",
    organization: "Press Information Bureau",
    category: "Software",
    theme: "Media",
    psNumber: "MED009"
  },
  {
    sNo: 16,
    title: "Emergency Response System for Natural Disasters",
    organization: "NDMA",
    category: "General",
    theme: "Disaster Management",
    psNumber: "DRM010"
  },
  {
    sNo: 17,
    title: "Tourism Guide App with Local Language Support",
    organization: "Ministry of Tourism",
    category: "Software",
    theme: "Tourism",
    psNumber: "TRM011"
  },
  {
    sNo: 18,
    title: "Waste Segregation Robot",
    organization: "Swachh Bharat Mission",
    category: "Hardware",
    theme: "Clean & Green",
    psNumber: "SBM012"
  },
  {
    sNo: 19,
    title: "Digital Platform for Farmers to Sell Produce Directly",
    organization: "Small Farmers' Agri-Business Consortium",
    category: "Software",
    theme: "Agriculture",
    psNumber: "AGR013"
  },
  {
    sNo: 20,
    title: "Wearable device for elderly safety monitoring",
    organization: "Ministry of Social Justice",
    category: "Hardware",
    theme: "Healthcare",
    psNumber: "HCS014"
  },
  // Continuing to add more entries
  ...Array.from({ length: 115 }, (_, i) => ({
    sNo: 21 + i,
    title: `Generated Problem Statement Title ${i + 1}`,
    organization: `Org ${i % 15}`,
    category: (['Software', 'Hardware', 'General'] as const)[i % 3],
    theme: `Theme ${i % 10}`,
    psNumber: `GPS${String(i + 1).padStart(3, '0')}`
  }))
];
