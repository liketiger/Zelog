import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/BlogPic.jpeg'
          alt='An image showing Zeze'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Zeze</h1>
      <p>
        I blog about web development - especially frontend frameworks such as React and Next.
        Welcome to Zeze's blog - Zelog.
      </p>
    </section>
  );
}

export default Hero;