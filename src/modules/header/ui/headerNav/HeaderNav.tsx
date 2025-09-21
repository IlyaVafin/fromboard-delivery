import ListRender from "../../../../components/listRender/ListRender"
import Button from "../../../../ui/button/Button"
import s from "./HeaderNav.module.css"
const LINKS = [
  { href: "", label: "Калькулятор" },
  { href: "", label: "О нас" },
  { href: "", label: "Гарантии" },
  { href: "", label: "Отзывы" }
]

const HeaderNav = () => {
  return (
    <div className="">
      <nav className={s.headerNav}>
        <ListRender
          className={`${s.headerList}`}
          items={LINKS}
          render={link => (
            <a
              className={`${s.headerLink} ${link.label === "Калькулятор" ? s.calculatorLink : ""}`}
              href={link.href}
            >
              {link.label}
            </a>
          )}
          getKey={link => link.label}
        />
        <Button className={s.navButton} variant="purple-active">
          Оставить заявку
        </Button>
      </nav>
    </div>
  )
}

export default HeaderNav
