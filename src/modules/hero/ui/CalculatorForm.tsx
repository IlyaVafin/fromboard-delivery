import ListRender from "../../../components/listRender/ListRender"
import Button from "../../../ui/button/Button"
import Input from "../../../ui/input/Input"
import { useCalculatorForm } from "../hooks/useCalculatorForm"
import { inputs } from "../store/input"
import s from "./../Hero.module.css"

const CalculatorForm = () => {
  const { calculatorValues, handleChangeFields } = useCalculatorForm()

  return (
    <form className={s.calculatorForm}>
      <div className={s.calculatorFormTitle}>
        <h2 className="text-3xl">Калькулятор доставки</h2>
        <p>Посчитайте, сколько будет стоить перевозка покупки из зарубежа</p>
      </div>
      <ListRender
        items={inputs}
        className={s.calculatorFormInputs}
        getKey={input => input.id}
        render={input => (
          <>
            <Input
              value={calculatorValues[input.valueName]}
              onChange={event => handleChangeFields(event, input)}
              disableLabel
              className={s.calculatorInput}
              id={input.label}
              labelText={input.label}
              name={input.label}
              placeholder={input.label}
              variant="transparent"
            />
          </>
        )}
      />
      <Button variant="purple-active" className={s.calculatorFormButton}>
        Заказать расчёт
      </Button>
    </form>
  )
}

export default CalculatorForm
