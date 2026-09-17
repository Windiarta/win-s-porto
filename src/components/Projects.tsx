import { Link } from 'react-router-dom';
import AnimatedContent from './reactbits/AnimatedContent';
import PixelCard from './reactbits/PixelCard';
import CardCta from './CardCta';
import { projects } from '../data/portfolio';

const Projects = () => (
  <section className="projects" id="projects">
    <div className="container">
      <AnimatedContent distance={40} duration={0.8}>
        <div className="section-head">
          <span className="eyebrow">More shipped work</span>
          <h2>Five more systems in the field</h2>
          <p>Governance, knowledge search, e-learning, payments. Built end to end, running in production.</p>
        </div>
      </AnimatedContent>
      {/* Asymmetric grid: 2 wide + 3 narrow, hierarchy by size (R-14). Span classes sit on
          the AnimatedContent wrapper because that div is the grid item.
          PixelCard amber pixel-bloom on hover/focus: distinct texture from the flagship
          SpotlightCards so sections read different (RHYTHM 3, DESIGN.md).
          Whole card links to its case study via an inset overlay Link (R-26); the link is
          the tab stop, PixelCard gets noFocus so there is exactly one focus target. */}
      <div className="projects-grid">
        {projects.map((p, i) => (
          <AnimatedContent
            key={p.name}
            className={p.wide ? 'project-wide' : 'project-narrow'}
            distance={50}
            duration={0.8}
            delay={i * 0.08}
          >
            <PixelCard
              className="project-card"
              gap={7}
              speed={30}
              colors="#FFAE3B,#e0871e,#8a4d05"
              noFocus
            >
              <Link
                to={`/projects/${p.slug}`}
                className="card-link"
                aria-label={`${p.name}: open case study`}
              />
              <div className="project-inner">
                <h3 className="project-name">{p.name}</h3>
                <p className="project-desc">{p.desc}</p>
                <ul className="project-stack" aria-label={`${p.name} stack`}>
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <CardCta label="Case study" />
              </div>
            </PixelCard>
          </AnimatedContent>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
