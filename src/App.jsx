import Navbar from "./components/Navbar.jsx";
import Section from "./components/Section.jsx";
import FloatingActions from "./components/FloatingActions.jsx";


export default function App() {
  const skillGroups = [
    {
      title: "Cloud & Platform",
      items: [
        "Azure (Landing Zones, VNets, Private Endpoints, Azure Monitor, Key Vault)",
        "AWS (IAM, VPC, EC2, EKS/ECS, S3)",
        "Multi-cloud patterns and environment standardization (dev/qa/prod)",
        "Platform enablement for app + data workloads",
      ],
    },
    {
      title: "Kubernetes & Delivery",
      items: [
        "Kubernetes: AKS / EKS (clusters, node pools, scaling, ingress, policies)",
        "Helm, Argo CD, GitOps delivery models",
        "Progressive delivery: blue-green and canary strategies",
        "Release automation and deployment reliability improvements",
      ],
    },
    {
      title: "IaC & Automation",
      items: [
        "Terraform (reusable modules, multi-env patterns, drift prevention mindset)",
        "CI/CD: Azure DevOps, GitHub Actions, Jenkins",
        "Scripting: Bash/Shell, Python (automation and tooling)",
        "Standardized pipelines for infra + app delivery",
      ],
    },
    {
      title: "Observability & SRE",
      items: [
        "Prometheus, Grafana, Datadog, Azure Monitor",
        "SLIs/SLOs, error budgets, incident response playbooks",
        "Alert tuning and reducing noise (actionable alerts)",
        "Reliability and MTTR reduction through proactive monitoring",
      ],
    },
    {
      title: "Security & Governance",
      items: [
        "RBAC/IAM, workload identity patterns, secrets management",
        "Policy-as-code: Azure Policy, Checkov",
        "DevSecOps scanning integration patterns (Snyk/Fortify/Black Duck)",
        "Network segmentation and zero-trust friendly designs",
      ],
    },
    {
      title: "Data / AI Enablement",
      items: [
        "Azure Databricks automation (workspace/cluster/Unity Catalog via Terraform)",
        "ML platform awareness: pipeline monitoring concepts (MLflow-style)",
        "AI ops enablement: integrating Jira/Confluence/GitHub/S3 as knowledge sources",
        "Practical AI tooling for IT operations (chatops-style workflows)",
      ],
    },
  ];

  const highlights = [
    {
      label: "Platform leadership",
      value:
        "Owned landing zone foundations, pipelines, and migration strategy for legacy services and data workloads moving to cloud.",
    },
    {
      label: "Automation first",
      value:
        "Standardized Terraform modules and CI/CD patterns across teams to reduce manual work and speed up delivery safely.",
    },
    {
      label: "Reliability mindset",
      value:
        "Improved operational visibility with observability + SRE practices (SLIs/SLOs, playbooks, alerting hygiene).",
    },
    {
      label: "Multi-cloud delivery",
      value:
        "Built secure Azure/AWS delivery foundations for Kubernetes and data platforms (AKS/EKS, Databricks).",
    },
  ];

  const certifications = [
    { name: "HashiCorp Certified: Terraform Associate", status: "Terraform Associate" },
    { name: "Microsoft Azure DevOps Engineer Expert", status: "AZ-400" },
    { name: "Microsoft Azure Administrator", status: "AZ-103 / AZ-104" },
    { name: "Microsoft Azure Fundamentals", status: "AZ-900 (optional)" },
    { name: "AWS (Associate level)", status: "Optional" },
  ];
  
  const topTools = [
  {
    name: "Terraform",
    desc: "Primary IaC tool for multi-environment cloud foundations, reusable modules, and drift control.",
  },
  {
    name: "Azure Kubernetes Service (AKS)",
    desc: "Production Kubernetes for microservices and data workloads with secure networking and GitOps delivery.",
  },
  {
    name: "Amazon EKS",
    desc: "Managed Kubernetes on AWS with standardized node groups, IAM roles, and CI/CD integration.",
  },
  {
    name: "Azure Databricks",
    desc: "Automated data and AI platform using Terraform, Unity Catalog, and secure DataOps pipelines.",
  },
  {
    name: "Azure DevOps (ADO)",
    desc: "Enterprise CI/CD pipelines for infra and application delivery with policy and approval gates.",
  },
  {
    name: "GitHub Actions",
    desc: "Lightweight CI/CD for application builds, Terraform automation, and cloud-native workflows.",
  },
  {
    name: "Prometheus + Grafana",
    desc: "Metrics-driven observability stack for Kubernetes, SLIs/SLOs, alerting, and reliability insights.",
  },
];


  // Projects section as exact-style summaries from your resume bullets (role-based projects)
  const projects = [
    {
      title: "Technical Lead – Platform Engineer",
      org: "Coforge",
      period: "11/2025 – Present | Chicago, USA",
      bullets: [
        "Owned the cloud landing zone, deployment pipelines, and migration strategy for legacy Java services and data workloads transitioning to the cloud.",
        "Collaborated with architects and developers to standardize environments, introduce Infrastructure as Code (IaC), and streamline release workflows.",
      ],
    },
    {
      title: "Lead Cloud / Platform Engineer",
      org: "GlobalLogic – A Hitachi Group Company",
      period: "02/2024 – 10/2025 | Toronto → Chicago | Canada → USA",
      bullets: [
        "Spearheaded the architecture and implementation of multi-cloud platform infrastructure across Azure and AWS, enabling secure CI/CD automation for data, AI/ML, and microservice workloads.",
        "Engineered and deployed Azure Databricks environments—automating workspace, cluster, and Unity Catalog creation via Terraform, while integrating Checkov, Azure Policy, and Defender for Cloud for compliance and governance.",
        "Delivered an internal AI-driven chatbot platform for IT operations, integrating Jira, Confluence, GitHub, and S3 data sources through Amazon Q Business, AWS Bedrock, and Azure AI Foundry, improving support query resolution time by 50%.",
        "Standardized IaC modules and CI/CD patterns across Azure and AWS platforms, enabling unified delivery pipelines for Databricks, AKS/EKS, and data applications.",
        "Formulated reusable Terraform modules for AKS, EKS, ADLS, and API Management, ensuring secure networking through VNets, Private Endpoints, and NSGs.",
        "Optimized full-stack observability and ML pipeline monitoring with Azure Monitor, Prometheus, and Grafana, enhancing system reliability and visibility.",
      ],
    },
    {
      title: "Senior Platform Engineer",
      org: "Accenture",
      period: "01/2021 – 01/2024 | Toronto, Canada",
      bullets: [
        "Directed Azure and AWS platform design and automation, provisioning networks, compute, and data services through Terraform and GitOps workflows.",
        "Automated Azure Databricks provisioning (workspaces, clusters, Unity Catalog, secret scopes) using Terraform, enabling secure DataOps workflows and continuous integration of notebooks and libraries.",
        "Established CI/CD pipelines in Azure DevOps and GitHub Actions with SonarQube, Snyk, and Fortify, reducing manual release effort by 30%.",
        "Architected secure Azure Databricks platforms—automating workspace, cluster, and Unity Catalog deployment with Terraform, enabling scalable DataOps pipelines.",
        "Created CI/CD pipelines in Azure DevOps and GitHub Actions, integrating SonarQube, Checkov, and Defender for Cloud for policy enforcement and continuous compliance.",
        "Engineered VNet and subnet isolation, Private Endpoints, and RBAC policies for Databricks, AKS, and ADF to enforce network segmentation and secure data connectivity.",
        "Integrated Azure AD, Key Vault, and IAM roles for application identity and credential management, enhancing platform security posture and compliance readiness.",
        "Managed Kubernetes workloads for both data and application services—configuring ingress, scaling policies, secrets, and monitoring with Datadog, Prometheus, and Grafana.",
        "Enforced policy-as-code and zero-trust controls using Azure Policy, Key Vault, and Defender for Cloud to ensure data security, compliance, and environmental integrity.",
      ],
    },
    {
      title: "DevOps / Cloud Engineer (DevSecOps)",
      org: "Capgemini Technology",
      period: "08/2018 – 12/2020 | Toronto, Canada",
      bullets: [
        "Devised and implemented CI/CD pipelines in Jenkins using Groovy and Shell scripting, automating build, test, and deployment workflows for Java, Node.js, React, and Python applications.",
        "Integrated Fortify, Black Duck, and Snyk into pipelines to enable shift-left security, vulnerability scanning, and license compliance validation.",
        "Oversaw the migration from Pivotal Cloud Foundry (PCF) to Azure, re-platforming APIs and web applications using Azure Kubernetes Service (AKS) with containerized microservices architecture.",
        "Formulated infrastructure automation using Terraform and Azure CLI to standardize environment provisioning and configuration management.",
        "Implemented blue-green deployment strategies for production releases, minimizing downtime and enhancing release reliability.",
        "Configured Datadog monitoring for performance metrics, log analytics, and alerting across containerized and cloud-native applications.",
      ],
    },
    {
      title: "Build and Release Engineer",
      org: "Capgemini Technology",
      period: "03/2014 – 08/2018 | Pune, India",
      bullets: [
        "Engineered and implemented end-to-end CI/CD pipelines in Jenkins for multiple Java-based enterprise applications, integrating Maven, SonarQube, and JFrog Artifactory for build, code quality, and artifact management.",
        "Served as administrator for Jenkins, SonarQube, and Artifactory, managing plugin configurations, upgrades, and user access to ensure continuous integration stability and security.",
        "Directed the SVN-to-Git migration initiative across multiple codebases; developed migration strategy, automated repository creation, and trained teams on Git workflows and branching standards.",
        "Developed shell scripts and Jenkins pipelines to automate build, test, and deployment processes, reducing manual effort and improving delivery cycle time.",
        "Collaborated with development and QA teams to standardize release processes, implement quality gates, and enforce version control best practices.",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container">
        {/* HERO */}
        <div id="home" className="hero">
          <div className="heroCard">
            <div className="heroTop">
              <div>
                <div className="kicker">Senior DevOps / Platform Engineer</div>
                <h1 className="h1">Vijay Yadav (VJ)</h1>
                <p className="muted" style={{ marginTop: 10, lineHeight: 1.55 }}>
                  I build cloud platforms that teams can trust: secure by default, automated end-to-end,
                  and designed for reliable production operations. I’ve spent 12+ years across DevOps,
                  platform engineering, and SRE, delivering Azure and AWS foundations, Kubernetes platforms,
                  and CI/CD systems that reduce manual effort and improve resilience.
                </p>

                <div className="pillRow">
                  <span className="pill">Azure + AWS</span>
                  <span className="pill">Terraform</span>
                  <span className="pill">AKS / EKS</span>
                  <span className="pill">CI/CD + GitOps</span>
                  <span className="pill">Observability</span>
                </div>

                <div className="btnRow">
                  <a className="btn" href="#contact">Contact</a>
                  <a className="btn secondary" href="#skills">View Skills</a>

                  {/* Download Resume (place PDF in /public) */}
                  <a
                    className="btn ghost"
                    href="/Vijay_Y_PlatformDevops.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download Resume
                  </a>
                </div>
              </div>

              <div className="heroSide">
                <div className="miniCard">
                  <div className="miniTitle">Quick snapshot</div>
                  <ul className="list">
                    <li>12+ years across Platform Engineering, DevOps, and SRE</li>
                    <li>Cloud foundations: landing zones, IAM/RBAC, network isolation, secrets</li>
                    <li>Kubernetes delivery: AKS/EKS, Helm, Argo CD, GitOps</li>
                    <li>Observability: Prometheus/Grafana/Datadog/Azure Monitor</li>
                    <li>Automation: Terraform modules + CI/CD standards across environments</li>
                  </ul>
                </div>

                <div className="miniCard" style={{ marginTop: 14 }}>
                  <div className="miniTitle">What teams get from me</div>
                  <div className="miniText muted">
                    Clear patterns, reliable pipelines, strong guardrails, and practical runbooks so delivery is fast
                    without compromising security or uptime.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ABOUT */}
        <Section id="about" title="About">
          <p className="muted" style={{ margin: 0, lineHeight: 1.65 }}>
            I’m a technical lead focused on building dependable platforms for application and data teams.
            My strength is turning messy reality into repeatable, secure automation: landing zones, Kubernetes
            foundations, IaC modules, and CI/CD pipelines that scale across dev, QA, and production.
            I work closely with architects and developers to standardize environments, reduce operational noise,
            and improve reliability using observability and SRE practices.
          </p>
        </Section>

        {/* QUICK SNAPSHOT (IMPACT) */}
        <Section id="what-i-do" title="Quick Snapshot (Impact)">
          <div className="grid grid-2">
            {highlights.map((h) => (
              <div key={h.label} className="card lift">
                <div style={{ fontWeight: 900 }}>{h.label}</div>
                <p className="muted" style={{ marginBottom: 0, lineHeight: 1.55 }}>
                  {h.value}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Skills">
          <div className="grid grid-2">
            {skillGroups.map((g) => (
              <div key={g.title} className="card lift">
                <div className="skillTitle">{g.title}</div>
                <ul className="list">
                  {g.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
		
		{/* TOP TOOLS */}
		<Section id="top-tools" title="Top Tools I Use Daily">
		  <div className="grid grid-3">
			{topTools.map((tool) => (
			  <div key={tool.name} className="card lift toolCard">
				<div className="toolName">{tool.name}</div>
				<p className="toolDesc muted">{tool.desc}</p>
			  </div>
			))}
		  </div>

		  <div style={{ marginTop: 14 }} className="note muted">
			These tools form my core delivery stack and are used together to build secure, observable,
			and repeatable cloud platforms across environments.
		  </div>
		</Section>

		

        {/* CERTIFICATIONS */}
        <Section id="certifications" title="Certifications">
          <div className="grid grid-2">
            {certifications.map((c) => (
              <div key={c.name} className="card lift certCard">
                <div className="certName">{c.name}</div>
                <div className="certStatus muted">{c.status}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* PROJECTS (ROLE-BASED FROM RESUME BULLETS) */}
        <Section id="projects" title="Projects (Work Experience Highlights)">
          <div className="grid">
            {projects.map((p) => (
              <div key={p.title + p.org} className="card lift">
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "baseline" }}>
                  <div style={{ fontWeight: 900, fontSize: 16 }}>{p.title}</div>
                  <div className="muted" style={{ fontWeight: 800 }}>• {p.org}</div>
                </div>

                <div className="muted" style={{ marginTop: 6, fontSize: 14 }}>
                  {p.period}
                </div>

                <ul className="list" style={{ marginTop: 10 }}>
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="Contact">
          <ul className="list">
            <li>Email: yadavvi.ca@gmail.com</li>
            <li>LinkedIn: linkedin.com/in/vijay-yadav-a58765119</li>
            <li>Location: Chicago, USA</li>
          </ul>
        </Section>
        <FloatingActions email="yadavvi.ca@gmail.com" />

        <div className="footer">
          © {new Date().getFullYear()} Vijay Yadav.
        </div>
      </div>
    </>
  );
}
