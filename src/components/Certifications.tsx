import FadeContent from './reactbits/FadeContent';
import { certifications } from '../data/portfolio';

const Certifications = () => (
  <section className="certs" id="credentials">
    <div className="container">
      <FadeContent duration={800}>
        <div className="section-head">
          <span className="eyebrow">Credentials</span>
          <h2>Certified, and still shipping</h2>
        </div>
      </FadeContent>
      <FadeContent duration={900} delay={120}>
        <div>
          {certifications.map((c) => (
            <div className="cert-row" key={c.name}>
              <span className="cert-name">{c.name}</span>
              <span className="cert-issuer">{c.issuer}</span>
              <span className="cert-year">{c.year}</span>
            </div>
          ))}
        </div>
      </FadeContent>
    </div>
  </section>
);

export default Certifications;
