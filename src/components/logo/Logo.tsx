import LogoImage from "./../../assets/images/logo.svg"
import s from "./Logo.module.css"
type LogoPlace = "footer" | "header"

const Logo = ({ place }: { place: LogoPlace }) => {
  return (
    <div>
      <img src={LogoImage} alt="logo-icon" />
      <span
        className={`${s.companyName} ${place === "footer" ? s.footerName : s.headerName}`}
      >
        FromBoard Delivery
      </span>
    </div>
  )
}

export default Logo
