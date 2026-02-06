export default function Section({ id, title, children }) {
  return (
    <section id={id} style={{ scrollMarginTop: 80, marginTop: 18 }}>
      <div className="card">
        <h2 className="sectionTitle">{title}</h2>
        {children}
      </div>
    </section>
  );
}

