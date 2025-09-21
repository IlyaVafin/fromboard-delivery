import Logo from "../../components/logo/Logo"
import ExchangeRate from "./ui/exchangeRate/ExchangeRate"
import s from "./Header.module.css"
import { Phone } from "./ui/phone/Phone"
import HeaderNav from "./ui/headerNav/HeaderNav"
import Container from "../../components/container/Container"
const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.headerContent}>
          <Logo place="header" />
          <div className={s.headerContact}>
            <ExchangeRate />
            <Phone />
          </div>
        </div>
        <HeaderNav />
      </Container>
    </header>
  )
}

export default Header
