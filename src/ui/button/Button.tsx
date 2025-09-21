import type { ButtonHTMLAttributes, ReactNode } from "react"
import s from "./Button.module.css"
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant: "purple-active"
  className?: string
}

const Button = ({ children, variant, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={`${variant === "purple-active" ? s.purpleActive : ""} ${className ?? ""}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
