import { useExchageRate } from "../../hooks/useExchageRate"
import s from "./ExchangeRate.module.css"

const ExchangeRate = () => {
  const exchange = useExchageRate()
  return (
    <div className={s.exchangeContainer}>
      <p>Доставляем товары из заграницы в Россию</p>
      <p>Стоимость от 550 рублей за заказ</p>
      {exchange ? (
        <p>
          1 $ = {exchange.USD} | 1 € = {exchange.EUR} | 1 ¥ = {exchange.CNY}
        </p>
      ) : (
        <span>Loading exchange...</span>
      )}
    </div>
  )
}

export default ExchangeRate
