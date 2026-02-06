import useReveal from "../hooks/useReveal.js";

export default function Section({ id, title, children }) {
  const ref = useReveal();

  return (
    <section id={id} style={{ scrollMarginTop: 80, marginTop: 18 }}>
      <div ref={ref} className="card lift">
        <h2 className="sectionTitle">{title}</h2>
        {children}
      </div>
    </section>
  );
}
