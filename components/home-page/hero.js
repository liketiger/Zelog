import Image from 'next/image';
import classes from './hero.module.css';
import RotatingImage from './rotating-image';

function Hero() {
  return (
    <section className={classes.hero}>
      <RotatingImage src='/images/site/logo192.png' alt='회전하는 이미지' />
    </section>
  );
}

export default Hero;