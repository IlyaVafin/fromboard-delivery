import type { ReactNode } from "react"
import s from "./Container.module.css"
const Container = ({ children }: { children: ReactNode }) => {
  return <div className={s.contentContainer}>{children}</div>
}

export default Container
