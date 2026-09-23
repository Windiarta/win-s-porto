import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useReducedMotion } from 'motion/react';
import { webglSupported } from '../lib/webgl';
import LightRays from './reactbits/LightRays';
import SplitText from './reactbits/SplitText';
import FadeContent from './reactbits/FadeContent';
import AnimatedContent from './reactbits/AnimatedContent';
import SpotlightCard from './reactbits/SpotlightCard';
import ClickSpark from './reactbits/ClickSpark';
import { studyByKind, type StudyKind } from '../data/caseStudies';
import { profile } from '../data/portfolio';

// Reading pages stay calmer than the home page (MOTION 2 vs 3, DESIGN.md):
// LightRays at low intensity, SplitText title (hero motif), alternating
// horizontal drift on blocks, spotlight on related chips, one ClickSpark CTA.
const CaseStudy = ({ kind }: { kind: StudyKind }) => {
  const { slug } = useParams();
  const study = slug ? studyByKind[kind][slug] : undefined;
  const reduced = useReducedMotion();

  useEffect(() => {
    document.title = study ? `${study.title} · Windiarta` : 'Page not found · Windiarta';
  }, [study]);

  if (!study) return <NotFound />;

  return (
    <div className="case-page">
      <header className="case-top">
        <Link className="nav-logo" to="/" aria-label="Windiarta, back to home">
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
        </Link>
        <Link className="case-back" to={study.backTo.to}>
          {study.backTo.label}
        </Link>
      </header>

      <main id="main">
        <div className="case-hero">
          <div className="case-hero-bg" aria-hidden="true">
            {!reduced && webglSupported() && (
              <LightRays
                raysOrigin="top-center"
                raysColor="#FFAE3B"
                raysSpeed={0.6}
                lightSpread={1}
                rayLength={2}
                fadeDistance={0.5}
                saturation={0.7}
                followMouse={false}
                mouseInfluence={0}
                noiseAmount={0.03}
              />
            )}
          </div>
          <div className="container case-hero-inner">
            <FadeContent duration={600}>
              <span className="eyebrow">{study.eyebrow}</span>
            </FadeContent>
            <SplitText
              text={study.title}
              className="case-title"
              tag="h1"
              textAlign="left"
              delay={24}
              duration={0.9}
              from={{ opacity: 0, y: 34 }}
              to={{ opacity: 1, y: 0 }}
            />
            <FadeContent duration={600} delay={120}>
              {study.full && <p className="case-full">{study.full}</p>}
              <dl className="case-meta">
                {study.meta.map((m) => (
                  <div className="case-meta-row" key={m.label}>
                    <dt>{m.label}</dt>
                    <dd>{m.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="case-intro">{study.intro}</p>
            </FadeContent>
          </div>
        </div>

        {study.heroImg && (
          <FadeContent duration={700} className="container">
            <figure className="case-banner">
              <img src={study.heroImg} alt="" width="1280" height="854" loading="eager" />
            </figure>
          </FadeContent>
        )}

        <div className="container case-body">
          {study.pipeline && (
            <AnimatedContent distance={24} duration={0.7}>
              <section className="case-block" aria-label="Data platform pipeline">
                <h2>The data platform underneath</h2>
                <ol className="pipeline">
                  {study.pipeline.map((s) => (
                    <li key={s.stage}>
                      <strong>{s.stage}</strong>
                      <span>{s.note}</span>
                    </li>
                  ))}
                </ol>
              </section>
            </AnimatedContent>
          )}

          {study.blocks.map((b, i) => (
            <AnimatedContent
              key={i}
              distance={28}
              direction="horizontal"
              reverse={i % 2 === 1}
              duration={0.7}
            >
              <section className="case-block">
                {b.heading && <h2>{b.heading}</h2>}
                {b.kind === 'para' ? (
                  <p>{b.text}</p>
                ) : (
                  <ul className="case-list">
                    {b.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                )}
              </section>
            </AnimatedContent>
          ))}

          {study.related && study.related.length > 0 && (
            <FadeContent duration={600}>
              <nav className="case-related" aria-label="Related pages">
                {study.related.map((r) => (
                  <SpotlightCard
                    key={r.to + r.label}
                    className="rel-card"
                    spotlightColor="rgba(255, 174, 59, 0.14)"
                  >
                    <Link to={r.to}>{r.label}</Link>
                  </SpotlightCard>
                ))}
              </nav>
            </FadeContent>
          )}

          <div className="case-bottom">
            <ClickSpark
              sparkColor="#FFAE3B"
              sparkSize={10}
              sparkRadius={16}
              sparkCount={6}
              duration={400}
            >
              <a className="btn-ghost" href={`mailto:${profile.email}`}>
                Email me about this work
              </a>
            </ClickSpark>
            <Link className="case-back" to="/">
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export const NotFound = () => (
  <div className="case-page">
    <main id="main">
      <div className="container case-body notfound">
        <span className="eyebrow">404</span>
        <h1 className="case-title">Page not found</h1>
        <p className="case-intro">This route does not exist. The home page does.</p>
        <Link className="btn-ghost" to="/">
          Back to home
        </Link>
      </div>
    </main>
  </div>
);

export default CaseStudy;
