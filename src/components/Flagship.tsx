import { Link } from 'react-router-dom';
import { useReducedMotion } from 'motion/react';
import { webglSupported } from '../lib/webgl';
import LightRays from './reactbits/LightRays';
import GradientText from './reactbits/GradientText';
import TrueFocus from './reactbits/TrueFocus';
import SpotlightCard from './reactbits/SpotlightCard';
import FadeContent from './reactbits/FadeContent';
import CardCta from './CardCta';
import { pinter } from '../data/portfolio';

const Flagship = () => {
  const reduced = useReducedMotion();
  return (
    <section className="flagship" id="platform">
      <div className="flagship-bg" aria-hidden="true">
        {/* LightRays: the flagship section gets the light, others stay matte (DESIGN.md) */}
        {!reduced && webglSupported() && (
          <LightRays
            raysOrigin="top-center"
            raysColor="#FFAE3B"
            raysSpeed={0.8}
            lightSpread={1.2}
            rayLength={2}
            fadeDistance={0.6}
            saturation={0.9}
            followMouse
            mouseInfluence={0.08}
            noiseAmount={0.05}
          />
        )}
      </div>
      <div className="container">
        <FadeContent duration={800}>
          <span className="eyebrow">Flagship platform</span>
          <h2 className="flagship-title">
            {/* GradientText amber: hierarchy mark for the flagship only (R-01, DESIGN.md) */}
            <GradientText colors={['#FFAE3B', '#ffe1b0', '#e0871e']} animationSpeed={10} yoyo>
              {pinter.name}
            </GradientText>
          </h2>
          <p className="flagship-full">{pinter.full}</p>
        </FadeContent>
        <div className="flagship-grid">
          <FadeContent duration={800} delay={100}>
            <div className="flagship-copy-col">
              <p className="flagship-copy">{pinter.copy}</p>
              <Link className="text-link" to="/projects/pinter">
                Read the full PINTER case study
              </Link>
            </div>
          </FadeContent>
          <FadeContent duration={800} delay={200}>
            <ul className="feature-list">
              {pinter.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </FadeContent>
        </div>
        <div className="flagship-subhead">
          {/* TrueFocus: camera focus walks the sentence, one motif used once */}
          <TrueFocus
            sentence={pinter.subhead}
            manualMode={false}
            blurAmount={4}
            borderColor="#FFAE3B"
            glowColor="rgba(255, 174, 59, 0.55)"
            animationDuration={0.45}
            pauseBetweenAnimations={0.7}
          />
        </div>
        <p className="agents-heading">The nine agents, unit by unit</p>
        {/* Each agent card opens its detail page via an inset overlay Link (R-26) */}
        <div className="agents-grid">
          {pinter.agents.map((a) => (
            <SpotlightCard key={a.name} className="agent-card" spotlightColor="rgba(255, 174, 59, 0.16)">
              <Link
                to={`/agents/${a.slug}`}
                className="card-link"
                aria-label={`${a.name}: open agent detail`}
              />
              <div className="card-img-wrap">
                <img className="card-img" src={a.img} alt="" loading="lazy" width="1280" height="854" />
              </div>
              <div className="agent-name">{a.name}</div>
              <div className="agent-unit">{a.unit}</div>
              <p className="agent-desc">{a.desc}</p>
              <CardCta label="Agent detail" />
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flagship;
