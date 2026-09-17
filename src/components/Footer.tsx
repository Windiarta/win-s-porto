const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <span>© {new Date().getFullYear()} Windiarta. Jakarta, Indonesia.</span>
      <span>
        Built with <a href="https://rsbuild.rs" target="_blank" rel="noreferrer">Rsbuild</a> +{' '}
        <a href="https://reactbits.dev" target="_blank" rel="noreferrer">React Bits</a>. Every
        number on this site traces to real work.
      </span>
      <a href="#top">Back to top ↑</a>
    </div>
  </footer>
);

export default Footer;
