import s from "./Phone.module.css"
export const Phone = () => {
  return (
    <div className={s.phoneContainer}>
      <p className={s.phoneNumber}>+7 (800) 123 45-67</p>
      <p className={s.phoneDescription}>Звонки по России бесплатны</p>
    </div>
  )
}
