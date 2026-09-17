import ShinyText from './reactbits/ShinyText';
import RotatingText from './reactbits/RotatingText';
import { now } from '../data/portfolio';

const Now = () => (
  <section className="now" aria-label="Currently learning and building">
    <div className="container now-inner">
      <ShinyText
        text="Currently deep in:"
        className="now-label"
        color="#A6A3AE"
        shineColor="#FFAE3B"
        speed={2.6}
      />
      <RotatingText
        texts={now}
        mainClassName="now-rotating"
        rotationInterval={2800}
        staggerDuration={0.015}
        splitBy="characters"
      />
    </div>
  </section>
);

export default Now;
