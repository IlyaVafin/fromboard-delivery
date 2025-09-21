import type { InputHTMLAttributes } from "react"
import s from "./Input.module.css"

type InputVariant = "transparent" | "none"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string
  id: string
  className: string
  name: string
  disableLabel: boolean
  variant: InputVariant
}

const Input = ({
  labelText,
  id,
  className,
  name,
  variant,
  disableLabel,
  ...rest
}: InputProps) => {
  return (
    <>
      <label className={disableLabel ? s.hide : ""} htmlFor={id}>
        {labelText}
      </label>
      <input
        name={name}
        className={`${variant === "transparent" && s.transparent} ${className ?? ""}`}
        {...rest}
        id={id}
        type="text"
      />
    </>
  )
}

export default Input
