import { useReducedMotion } from 'motion/react';
import { webglSupported } from '../lib/webgl';
import Aurora from './reactbits/Aurora';
import SplitText from './reactbits/SplitText';
import DecryptedText from './reactbits/DecryptedText';
import StarBorder from './reactbits/StarBorder';
import ClickSpark from './reactbits/ClickSpark';
import { profile, heroTagline } from '../data/portfolio';

const Hero = () => {
  const reduced = useReducedMotion();
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        {/* Aurora: amber "intelligence field" behind the name (DESIGN.md, R-19).
            No WebGL: CSS radial fallback in .hero-bg stays visible. */}
        {!reduced && webglSupported() && (
          <Aurora
            colorStops={['#7a3d00', '#FFAE3B', '#a35c00']}
            amplitude={1.0}
            blend={0.6}
            speed={0.7}
          />
        )}
      </div>
      <div className="hero-inner container">
        <DecryptedText
          text={profile.role}
          parentClassName="hero-role"
          animateOn="view"
          speed={30}
          maxIterations={14}
          sequential
          revealDirection="start"
        />
        <SplitText
          text="WINDIARTA"
          className="hero-name"
          tag="h1"
          textAlign="left"
          delay={45}
          duration={1.1}
          from={{ opacity: 0, y: 60 }}
          to={{ opacity: 1, y: 0 }}
        />
        <div className="hero-rule" aria-hidden="true" />
        <p className="hero-tagline">{heroTagline}</p>
        <div className="hero-meta">
          <span>{profile.location}</span>
          <span aria-hidden="true">/</span>
          <a href={profile.website} target="_blank" rel="noreferrer">
            windiarta.my.id
          </a>
          <span aria-hidden="true">/</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            linkedin.com/in/windiarta
          </a>
        </div>
        <div className="hero-actions">
          {/* StarBorder + ClickSpark: the page's one focal CTA (DESIGN.md, R-13) */}
          <ClickSpark sparkColor="#FFAE3B" sparkSize={12} sparkRadius={20} sparkCount={8} duration={420}>
            <StarBorder
              as="a"
              href="#platform"
              color="#FFAE3B"
              speed="7s"
              backgroundColor="#16161a"
              textColor="#F2EFE9"
              borderColor="#3a3a42"
            >
              See the platform work
            </StarBorder>
          </ClickSpark>
          <a className="btn-ghost" href={profile.resume} download>
            Download resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
