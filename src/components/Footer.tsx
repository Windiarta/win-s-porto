import { useState } from 'react';
import { imageCredits } from '../data/portfolio';

// CC-BY / CC-BY-SA require visible attribution (C-5, R-38). Collapsed by
// default so the footer stays quiet; the list is real data, no fabrication.
const Footer = () => {
  const [showCredits, setShowCredits] = useState(false);
  return (
    <footer className="footer">
      {showCredits && (
        <div className="container credits-panel">
          <h2 className="credits-title">Image credits</h2>
          <ul className="credits-list">
            {imageCredits.map((c) => (
              <li key={c.file}>
                <a href={c.url} target="_blank" rel="noreferrer">
                  {c.title}
                </a>{' '}
                by {c.artist}, {c.license}, via Wikimedia Commons
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Windiarta. Jakarta, Indonesia.</span>
        <span>
          Built with <a href="https://rsbuild.rs" target="_blank" rel="noreferrer">Rsbuild</a> +{' '}
          <a href="https://reactbits.dev" target="_blank" rel="noreferrer">React Bits</a>. Every
          number on this site traces to real work.
        </span>
        <span className="footer-links">
          <button type="button" className="credits-toggle" onClick={() => setShowCredits((v) => !v)} aria-expanded={showCredits}>
            Image credits
          </button>
          <a href="#top">Back to top ↑</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
