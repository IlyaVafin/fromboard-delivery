import Logo from "../../components/logo/Logo"
import ExchangeRate from "./ui/exchangeRate/ExchangeRate"
import s from "./Header.module.css"
import { Phone } from "./ui/phone/Phone"
const Header = () => {
  return (
    <header>
      <div className={s.headerContent}>
        <Logo place="header" />
        <div className={s.headerContact}>
          <ExchangeRate />
          <Phone />
        </div>
      </div>
    </header>
  )
}

export default Header
