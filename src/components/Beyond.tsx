import FadeContent from './reactbits/FadeContent';
import { education, leadership, languages } from '../data/portfolio';

const Beyond = () => (
  <section className="beyond" aria-label="Education, leadership, and languages">
    <div className="container">
      <div className="beyond-grid">
        <FadeContent duration={800}>
          <div className="beyond-col">
            <h3>Education</h3>
            {education.map((e) => (
              <div className="beyond-item" key={e.school + e.period}>
                <strong>{e.school}</strong>
                <span>{e.degree}</span>
                <span className="mono">
                  {e.period}
                  {e.detail ? ` / ${e.detail}` : ''}
                </span>
              </div>
            ))}
          </div>
        </FadeContent>
        <FadeContent duration={800} delay={120}>
          <div className="beyond-col">
            <h3>Leadership &amp; Community</h3>
            {leadership.map((l) => (
              <div className="beyond-item" key={l.org + l.role}>
                <strong>{l.role}</strong>
                <span>{l.org}</span>
                <span className="mono">{l.period}</span>
              </div>
            ))}
          </div>
        </FadeContent>
        <FadeContent duration={800} delay={240}>
          <div className="beyond-col">
            <h3>Languages</h3>
            {languages.map((l) => (
              <div className="beyond-item" key={l.name}>
                <strong>{l.name}</strong>
                <span>{l.level}</span>
              </div>
            ))}
          </div>
        </FadeContent>
      </div>
    </div>
  </section>
);

export default Beyond;
