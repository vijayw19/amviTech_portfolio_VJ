import Navbar from "./components/Navbar.jsx";
import Section from "./components/Section.jsx";

export default function App() {
  const skillGroups = [
    {
      title: "Cloud & Platform",
      items: [
        "Azure (Landing Zones, VNets, Private Endpoints, Azure Monitor, Key Vault)",
        "AWS (IAM, VPC, EC2, EKS/ECS, S3)",
        "Multi-cloud architecture patterns and environment standardization",
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
        "On-call automation concepts and alert hygiene",
        "Reliability and MTTR reduction through proactive monitoring",
      ],
    },
    {
      title: "Security & Governance",
      items: [
        "RBAC/IAM, workload identity patterns, secrets management",
        "Policy-as-code: Azure Policy, Checkov",
        "DevSecOps scanning integrations (where applicable)",
        "Network segmentation and zero-trust-friendly patterns",
      ],
    },
    {
      title: "Data / AI Enablement",
      items: [
        "Azure Databricks automation (workspace/cluster/Unity Catalog via Terraform)",
        "ML platform awareness: MLflow and pipeline monitoring concepts",
        "Ops chatbot enablement using enterprise sources (Jira/Confluence/GitHub/S3)",
        "Practical AI tooling integration for IT operations",
      ],
    },
  ];

  const highlights = [
    {
      label: "Platform leadership",
      value:
        "Owned landing zone, pipelines, and migration strategy for legacy services + data workloads moving to cloud.",
    },
    {
      label: "Automation first",
      value:
        "Standardized Terraform modules and CI/CD patterns across teams to reduce manual releases and speed delivery.",
    },
    {
      label: "Reliability mindset",
      value:
        "Improved visibility with full-stack observability and SRE practices (SLIs/SLOs, playbooks, alerting).",
    },
    {
      label: "Multi-cloud delivery",
      value:
        "Built secure Azure/AWS delivery foundations for Kubernetes and data platforms (AKS/EKS, Databricks).",
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
            My strength is turning “messy reality” into repeatable, secure automation: landing zones, Kubernetes
            foundations, IaC modules, and CI/CD pipelines that scale across dev, QA, and production.
            I work closely with architects and developers to standardize environments, reduce operational noise,
            and improve reliability using observability and SRE practices.
          </p>
        </Section>

        {/* HIGHLIGHTS */}
        <Section id="what-i-do" title="Quick Snapshot (Impact)">
          <div className="grid grid-2">
            {highlights.map((h) => (
              <div key={h.label} className="card lift">
                <div style={{ fontWeight: 800 }}>{h.label}</div>
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

          <div style={{ marginTop: 14 }} className="note muted">
            If you want, I can also add a “Certifications” section (Terraform Associate, AZ-400, AZ-103, Azure Data/AI Fundamentals)
            and a “Selected Projects” section matching your latest roles.
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title="Projects">
          <div className="grid grid-3">
            <div className="card lift">
              <div style={{ fontWeight: 800 }}>Cloud Landing Zone + Guardrails</div>
              <p className="muted" style={{ marginBottom: 0 }}>
                Standardized multi-env foundations with network isolation, identity, policy, and secure connectivity patterns.
              </p>
            </div>
            <div className="card lift">
              <div style={{ fontWeight: 800 }}>Kubernetes Platform Enablement</div>
              <p className="muted" style={{ marginBottom: 0 }}>
                AKS/EKS baseline with ingress, scaling, GitOps delivery, and observability ready for production operations.
              </p>
            </div>
            <div className="card lift">
              <div style={{ fontWeight: 800 }}>Automation + Observability</div>
              <p className="muted" style={{ marginBottom: 0 }}>
                Terraform modules + CI/CD patterns with dashboards, alerts, and practical incident playbooks.
              </p>
            </div>
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="Contact">
          <p className="muted" style={{ marginTop: 0 }}>
            Replace these with your real links:
          </p>
          <ul className="list">
            <li>Email: yadavvi.ca@gmail.com</li>
            <li>LinkedIn: linkedin.com/in/vijay-yadav-a58765119</li>
            <li>Location: Chicago, USA</li>
          </ul>
        </Section>

        <div className="footer">
          © {new Date().getFullYear()} Vijay Yadav.
        </div>
      </div>
    </>
  );
}
