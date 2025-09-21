export type CalculatorValues = {
  name: string
  email: string
  phone: string
  area: string
  weight: string
  countryBuy: string
  cityBuy: string
  areaDelivery: string
  cityDelivery: string
}
export type CalculatorValueName = keyof CalculatorValues
export interface InputItem {
  id: number
  label: string
  valueName: CalculatorValueName
  type: string
  value: string
}
