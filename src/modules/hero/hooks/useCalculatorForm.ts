import { useState, type ChangeEvent } from "react"
import type { CalculatorValues, InputItem } from "../types"

export const useCalculatorForm = () => {
  const [calculatorValues, setCalculatorValues] = useState<CalculatorValues>({
    name: "",
    email: "",
    phone: "",
    area: "",
    weight: "",
    countryBuy: "",
    cityBuy: "",
    areaDelivery: "",
    cityDelivery: ""
  })

  const handleChangeFields = (
    event: ChangeEvent<HTMLInputElement>,
    input: InputItem
  ) => {
    setCalculatorValues(prev => ({
      ...prev,
      [input.valueName]: event.target.value
    }))
  }
  return { calculatorValues, handleChangeFields }
}
