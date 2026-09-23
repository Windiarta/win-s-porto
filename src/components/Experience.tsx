import { Link } from 'react-router-dom';
import FadeContent from './reactbits/FadeContent';
import CardCta from './CardCta';
import { experience } from '../data/portfolio';

const Experience = () => (
  <section className="experience" id="experience">
    <div className="container">
      <FadeContent duration={800}>
        <div className="section-head">
          <span className="eyebrow">Track record</span>
          <h2>Where the work happened</h2>
        </div>
      </FadeContent>
      <div className="timeline">
        {experience.map((job, i) => (
          <FadeContent key={`${job.company}-${job.period}`} duration={800} delay={i * 100}>
            <article className="job-entry">
              {/* Whole entry opens the company page (R-26); overlay link = single tab stop */}
              <Link
                to={`/experience/${job.studySlug}`}
                className="card-link"
                aria-label={`${job.company}, ${job.role}: open full detail`}
              />
              <div className="card-img-wrap">
                <img className="card-img" src={job.img} alt="" loading="lazy" width="1280" height="854" />
              </div>
              <div className="job-head">
                <h3 className="job-company">{job.company}</h3>
                <span className="job-period">{job.period}</span>
              </div>
              <div className="job-role">
                {job.role} / {job.location}
              </div>
              <ul className="job-points">
                {job.points.map((pt) => (
                  <li key={pt.slice(0, 40)}>{pt}</li>
                ))}
              </ul>
              <CardCta label="Full detail" />
            </article>
          </FadeContent>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
