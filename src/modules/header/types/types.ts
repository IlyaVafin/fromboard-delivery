export interface ExchangeRate {
  disclaimer: string
  license: string
  timestamp: number
  base: string
  rates: Record<string, number>
}
