import { profile } from '../data/portfolio';

const links = [
  { href: '#about', label: 'About' },
  { href: '#platform', label: 'Platform' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Stack' },
];

const Nav = () => (
  <nav className="nav" aria-label="Main">
    <div className="nav-inner">
      <a className="nav-logo" href="#top" aria-label="Windiarta, back to top">
        <svg className="mark" viewBox="0 0 64 64" aria-hidden="true">
          <rect width="64" height="64" rx="12" fill="#0B0B0D" stroke="#26262C" />
          <path
            d="M13 18 L23 46 L32 27 L41 46 L51 18"
            fill="none"
            stroke="#FFAE3B"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        WINDIARTA
      </a>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
        <li>
          <a className="nav-cta" href={`mailto:${profile.email}`}>
            Email me
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
