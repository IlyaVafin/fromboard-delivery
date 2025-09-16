import { useEffect, useState } from "react"
import { getCurrency } from "../api/getCurrency"
import { convertCurrency } from "../helpers/convertCurrency"
type Currency = "USD" | "CNY" | "EUR"
export const useExchageRate = () => {
  const [exchange, setExchange] = useState<Record<Currency, number> | null>(
    null
  )
  useEffect(() => {
    ;(async () => {
      const rates = await getCurrency()
      const exchangeResult = {
        USD: convertCurrency(1, "USD", "RUB", rates),
        EUR: convertCurrency(1, "EUR", "RUB", rates),
        CNY: convertCurrency(1, "CNY", "RUB", rates)
      }

      setExchange(exchangeResult)
    })()
  }, [])
  return exchange
}
