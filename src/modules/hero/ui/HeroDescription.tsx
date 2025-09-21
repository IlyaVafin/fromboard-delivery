import HeroImage from "./../../../assets/images/hero.png"
import s from "../Hero.module.css"
const HeroDescription = () => {
  return (
    <div className={s.heroDescription}>
      <div className={s.heroDescriptionTitle}>
        <h1 className={`${s.heroTitle}`}>
          Без проблемная доставка купленных вещей из США, Европы и Азии в Россию
        </h1>
        <p>
          Сэкономьте на покупках и наслаждайтесь мировыми брендами — наш сервис
          позволяет вам легко и удобно заказывать товары со всего мира
          и получать их в России
        </p>
      </div>
      <img src={HeroImage} alt="hero-image" />
    </div>
  )
}

export default HeroDescription
