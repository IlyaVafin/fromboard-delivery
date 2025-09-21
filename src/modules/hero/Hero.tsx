import s from "./Hero.module.css"
import CalculatorForm from "./ui/CalculatorForm"
import HeroDescription from "./ui/HeroDescription"
const Hero = () => {
  return (
    <section className={s.hero}>
      <HeroDescription />
      <CalculatorForm />
    </section>
  )
}

export default Hero
