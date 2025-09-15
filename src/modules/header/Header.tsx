import Logo from "../../components/logo/Logo"
import ExchangeRate from "./ui/exchangeRate/ExchangeRate"

const Header = () => {
  return (
    <header>
      <div className="">
        <Logo place="header" />
        <ExchangeRate />
      </div>
    </header>
  )
}

export default Header
