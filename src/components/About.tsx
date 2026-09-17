import ScrollReveal from './reactbits/ScrollReveal';
import AnimatedContent from './reactbits/AnimatedContent';
import { aboutStatement, aboutParas, profile } from '../data/portfolio';

const About = () => (
  <section className="about" id="about">
    <div className="container">
      <ScrollReveal containerClassName="about-statement">{aboutStatement}</ScrollReveal>
      <div className="about-cols">
        <AnimatedContent distance={50} duration={0.9} direction="vertical">
          <div className="about-side">
            <h3>{profile.name}</h3>
            <p>
              {profile.role}, based in {profile.location}. SnowPoint team at PT Pupuk Indonesia: AI
              platforms, data engineering, governance.
            </p>
          </div>
        </AnimatedContent>
        <AnimatedContent distance={50} duration={0.9} delay={0.12} direction="vertical">
          <div className="about-body">
            {aboutParas.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </AnimatedContent>
      </div>
    </div>
  </section>
);

export default About;
