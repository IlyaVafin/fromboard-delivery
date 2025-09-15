import type { ExchangeRate } from "../types/types"

type Currency = "USD" | "EUR" | "CNY" | "RUB"

export function convertCurrency(
  amount: number,
  from: Currency,
  to: Currency,
  rates: ExchangeRate | undefined
): number {
  if (from === to) return amount
  if (!rates?.rates[from] || !rates?.rates[to])
    throw new Error("Arguments 'from' or 'to' not provide!")

  const amountInUSD = amount / rates?.rates[from]

  return Number((amountInUSD * rates?.rates[to]).toFixed(0))
}
