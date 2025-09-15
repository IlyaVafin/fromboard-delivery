import type { ExchangeRate } from "../types/types"

export const getCurrency = async (): Promise<ExchangeRate | undefined> => {
  try {
    const response = await fetch(
      "https://openexchangerates.org/api/latest.json?app_id=17ac866a0a0c4851afc17e7b3254a965",
    )
    const rates = await response.json()
    return rates
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(
        `Cannot get exchange rate :(. Error message: ${error.message}`,
      )
    }
  }
}
