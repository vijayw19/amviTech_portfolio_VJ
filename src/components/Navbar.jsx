export default function Navbar() {
  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Snapshot", "#what-i-do"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="nav">
      <div className="navInner">
        <div style={{ fontWeight: 900, letterSpacing: "-0.02em" }}>
          VJ <span style={{ opacity: 0.75, fontWeight: 700 }}>/ Platform</span>
        </div>
        <div className="navLinks">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>
      </div>
    </div>
  );
}
