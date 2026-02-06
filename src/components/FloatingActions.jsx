import { useEffect, useState } from "react";

export default function FloatingActions({ email = "yadavvi.ca@gmail.com" }) {
  const [showTop, setShowTop] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 350);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showToast = (msg, ms = 1400) => {
    setToast(msg);
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => setToast(""), ms);
  };

  const copyWithFallback = (text) => {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    ta.style.top = "0";
    document.body.appendChild(ta);
    ta.select();
    ta.setSelectionRange(0, ta.value.length);

    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    document.body.removeChild(ta);
    return ok;
  };

  const copyEmail = async () => {
    // 1) Try modern clipboard API (works on https/localhost)
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
        showToast("Email copied");
        return;
      }
    } catch {
      // fall through to fallback
    }

    // 2) Fallback for http or restricted browsers
    const ok = copyWithFallback(email);
    if (ok) showToast("Email copied");
    else showToast("Copy failed — tap email to select", 1800);
  };

  return (
    <>
      <div className="fabWrap">

        {/* Optional: also show clickable email */}
        <a className="fab" href={`mailto:${email}`} title={email}>
          Email me
        </a>

        {showTop && (
          <button
            className="fab fabSecondary"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            type="button"
          >
            Top
          </button>
        )}
      </div>

      {toast ? <div className="toast">{toast}</div> : null}
    </>
  );
}
