import { useRef } from 'react';
import { useReducedMotion } from 'motion/react';
import { webglSupported } from '../lib/webgl';
import Particles from './reactbits/Particles';
import VariableProximity from './reactbits/VariableProximity';
import StarBorder from './reactbits/StarBorder';
import ClickSpark from './reactbits/ClickSpark';
import { profile } from '../data/portfolio';

const Contact = () => {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact-bg" aria-hidden="true">
        {!reduced && webglSupported() && (
          <Particles
            particleCount={130}
            particleSpread={12}
            speed={0.08}
            particleColors={['#FFAE3B', '#e0871e']}
            moveParticlesOnHover
            particleHoverFactor={1.4}
            particleBaseSize={110}
          />
        )}
      </div>
      <div className="container">
        <VariableProximity
          label={"Let's build something that ships."}
          fromFontVariationSettings="'wght 400'"
          toFontVariationSettings="'wght 800'"
          containerRef={sectionRef}
          radius={220}
          falloff="linear"
          className="contact-title"
        />
        <p className="contact-sub">
          Hiring for an AI platform, a data program, or anything that must pass enterprise
          security review? Shipped all three. Inbox open.
        </p>
        <div className="contact-actions">
          <ClickSpark sparkColor="#FFAE3B" sparkSize={12} sparkRadius={20} sparkCount={8} duration={420}>
            <StarBorder
              as="a"
              href={`mailto:${profile.email}`}
              color="#FFAE3B"
              speed="7s"
              backgroundColor="#16161a"
              textColor="#F2EFE9"
              borderColor="#3a3a42"
            >
              Email me directly
            </StarBorder>
          </ClickSpark>
          <a className="btn-ghost" href={profile.resume} download>
            Download resume (PDF)
          </a>
        </div>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            linkedin.com/in/windiarta
          </a>
          <a href={profile.website} target="_blank" rel="noreferrer">
            windiarta.my.id
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
