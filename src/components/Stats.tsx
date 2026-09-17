import CountUp from './reactbits/CountUp';
import { stats } from '../data/portfolio';

const Stats = () => (
  <section className="stats" aria-label="Key numbers">
    <div className="container stats-grid">
      {stats.map((s) => (
        <div className="stat" key={s.label}>
          <div className="stat-value">
            {s.prefix}
            <CountUp to={s.value} duration={2.4} />
            {s.suffix}
          </div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
