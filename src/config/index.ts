import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "VS Vidyasagar - DE",
  author: "VS Vidyasagar",
  description:
    "Associate Data Engineer in Bangalore building scalable ETL pipelines, Azure data platforms, and high-quality analytics-ready datasets with PySpark, SQL, and Medallion Architecture.",
  lang: "en",
  siteLogo: "/images/round.png",
  brandText: "VS Vidyasagar",
  navLinks: [
    { text: "Home", href: "#hero" },
    { text: "About", href: "#about" },
    { text: "Education", href: "#education" },
    { text: "Skills", href: "#skills" },
    { text: "Projects", href: "#projects" },
    { text: "Experience", href: "#experience" },
    { text: "Certificates", href: "#highlights" },
    { text: "Contact", href: "#contact" },
  ],
  resumeHref: "/docs/VS_Vidyasagar_Resume_2026.pdf",
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/vs-vidyasagar-9b1158190/" },
    { text: "Github", href: "https://github.com/Sagar2354" },
    {
      text: "Resume",
      href: "/docs/VS_Vidyasagar_Resume_2026.pdf",
    },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://vsvidyasagar-portfolio.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "VS Vidyasagar",
    specialty: "Associate Data Engineer",
    summary:
      "Data Engineer with 2+ years of experience designing scalable ETL pipelines and cloud-based data solutions on Azure. Skilled in PySpark, SQL, and Medallion Architecture with proven impact in improving data quality, optimizing performance, and enabling real-time analytics.",
    email: "vidyasagar2354@gmail.com",
    location: "Bangalore, India",
    resumeHref: "/docs/VS_Vidyasagar_Resume_2026.pdf",
    profileImage: "/images/vsvidyasagar-profilepicture.jpg",
    linkedin: "https://www.linkedin.com/in/vs-vidyasagar-9b1158190/",
    github: "https://github.com/Sagar2354",
  },
  skills: [
    {
      title: "Languages",
      items: ["Python", "SQL (CTEs, Window Functions)", "Scala (Basic)"],
    },
    {
      title: "Big Data & Processing",
      items: [
        "Apache Spark",
        "PySpark",
        "Spark SQL",
        "Delta Lake",
        "Spark Structured Streaming (Working Knowledge)",
      ],
    },
    {
      title: "Cloud (Azure)",
      items: [
        "Azure Data Factory",
        "Azure Databricks",
        "ADLS Gen2",
        "Azure Synapse",
        "Familiar with AWS & GCP ecosystems",
      ],
    },
    {
      title: "Data Engineering",
      items: [
        "ETL / ELT Pipelines",
        "Data Modeling",
        "Medallion Architecture",
        "Data Quality",
        "dbt (Working Knowledge)",
      ],
    },
    {
      title: "Orchestration",
      items: ["Airflow", "ADF Pipelines"],
    },
    {
      title: "Tools & Databases",
      items: ["Git", "SQL Server", "PostgreSQL", "Hive", "Hadoop", "Power BI"],
    },
  ],
  experience: [
    {
      company: "KPIT Technologies",
      position: "Associate Data Engineer",
      startDate: "Apr 2024",
      endDate: "Present",
      summary: [
        "Built scalable batch pipelines on Azure Databricks processing 1-2M automotive telemetry records per day.",
        "Implemented incremental ingestion with metadata-driven tracking.",
        "Designed Medallion architecture across Bronze, Silver, and Gold layers.",
        "Built a data quality framework improving reliability from 80% to 99%.",
        "Developed predictive maintenance features including anomaly detection and RPM spike logic.",
        "Added pipeline observability and audit logging.",
        "Optimized PySpark jobs with up to 9x performance improvement.",
      ],
    },
    {
      company: "KPIT Technologies",
      position: "Software Engineer Trainee",
      startDate: "Nov 2023",
      endDate: "Apr 2024",
      summary: [
        "Developed GUI-based tools for internal workflows.",
        "Automated configuration updates using GenAI scripts.",
        "Wrote optimized SQL queries for reporting.",
        "Performed data validation and consistency checks.",
      ],
    },
    {
      company: "Honeywell",
      position: "Data Engineering Intern",
      startDate: "Jan 2023",
      endDate: "Jun 2023",
      summary: [
        "Transformed legacy datasets into structured formats.",
        "Supported migration from Dremio to Databricks SQL.",
        "Optimized SQL transformations contributing to $200K annual savings.",
        "Assisted in data cleaning for BI dashboards.",
      ],
    },
  ],
  projects: [
    {
      name: "FinTech Fraud Detection Pipeline",
      summary:
        "This project simulates a real-world fraud detection system by processing over 100,000+ financial transactions. It applies rule-based risk scoring, transforms raw data into analytics-ready datasets, and delivers insights through a Power BI dashboard.\n\nThe pipeline is fully automated using Azure Data Factory, with transformations handled in Azure Databricks (PySpark) and storage managed via Azure Data Lake Storage Gen2.",
      image: "/fintech-fraud-detection-platform/fintech_ADF Pipeline.jpeg",
      linkSource: "https://github.com/Sagar2354/fintech-fraud-detection-platform",
      techStack: [
        "Azure Data Factory",
        "Azure Databricks",
        "PySpark",
        "Delta Lake",
        "Power BI",
      ],
      impact: ["Built a reusable analytics pipeline for fraud scoring and reporting."],
    },
    {
      name: "IoT Data Pipeline on Azure Databricks",
      summary:
        "This project implements an end-to-end IoT data pipeline to process and analyze large-scale sensor data using Azure Databricks and Delta Lake.\n\nIt follows the Medallion Architecture (Bronze -> Silver -> Gold) to transform messy, real-world IoT data into high-quality, analytics-ready datasets.",
      image: "/iot_data_platform/architecture_iot.jpeg",
      linkSource: "https://github.com/Sagar2354/iot-data-platform",
      techStack: ["Azure Databricks", "PySpark", "Delta Lake", "ADLS", "SQL"],
      impact: [
        "Improved data quality by 25%.",
        "Reduced duplicate records by 15%.",
        "Reduced pipeline reprocessing time by 60%.",
      ],
    },
  ],
  about: {
    description:
      "I build data pipelines that turn raw, messy operational data into reliable, analytics-ready datasets people can actually use. My work involves tools like Databricks, Data Factory, Delta Lake, and PySpark, with a strong focus on data quality, performance, and making sure everything runs smoothly in production - ideally without any \"why did this break at 2 AM?\" moments.",
    stats: [
      { value: "2+", label: "Years Experience" },
      { value: "2", label: "Projects Featured" },
      { value: "6", label: "Tool Groups" },
      { value: "2", label: "Companies Worked With" },
    ],
  },
  education: [
    {
      degree: "M.S. Data Science and Management",
      institution: "Indian Institute of Management Indore",
      year: "2025",
      cgpa: "CGPA: 7.8",
    },
    {
      degree: "B.Tech Computer Science",
      institution: "SRM Institute of Science and Technology",
      year: "2023",
      cgpa: "CGPA: 9.41",
    },
  ],
  certifications: [
    {
      title: "Databricks Lakehouse Fundamentals",
      href: "https://drive.google.com/file/d/1W8N2If4YEK9O_NO1yVdSR2PDwUOU9ldP/view",
    },
    {
      title: "Azure Databricks & Spark SQL",
      href: "https://drive.google.com/file/d/1Jf0Q_RiylorV2h5U1ooQcBgU0wvcr0ZQ/view",
    },
    {
      title: "Jenkins: Automating Your Delivery Pipeline",
      href: "https://drive.google.com/file/d/13yiEsCh984CNp9NioGzQ2rKy79sJxthz/view",
    },
  ],
  achievements: [
    "High Flyer Award at KPIT for 9x pipeline efficiency improvement.",
    "High CSAT Award at KPIT for client satisfaction.",
    "Contributed to $200K annual cost savings at Honeywell.",
  ],
  contact: {
    email: "vidyasagar2354@gmail.com",
    phone: "+91 8531950172",
    location: "Bangalore, India",
    linkedin: "https://www.linkedin.com/in/vs-vidyasagar-9b1158190/",
    github: "https://github.com/Sagar2354",
    resumeHref: "/docs/VS_Vidyasagar_Resume_2026.pdf",
  },
};
