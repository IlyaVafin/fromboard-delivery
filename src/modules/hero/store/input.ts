import type { InputItem } from "../types"

export const inputs: InputItem[] = [
  {
    value: "",
    id: 1,
    label: "Имя",
    type: "text",
    valueName: "name"
  },
  {
    value: "",
    id: 2,
    label: "Почта",
    type: "email",
    valueName: "email"
  },
  {
    value: "",
    id: 3,
    label: "Телефон",
    type: "tel",
    valueName: "phone"
  },
  {
    value: "",
    id: 4,
    label: "Общая площадь, м²",
    type: "text",
    valueName: "area"
  },
  {
    value: "",
    id: 5,
    label: "Вес, кг",
    type: "text",
    valueName: "weight"
  },
  {
    value: "",
    id: 6,
    label: "Страна покупки",
    type: "text",
    valueName: "countryBuy"
  },
  {
    value: "",
    id: 7,
    label: "Город покупки",
    type: "text",
    valueName: "cityBuy"
  },
  {
    value: "",
    id: 8,
    label: "Область доставки",
    type: "text",
    valueName: "areaDelivery"
  },
  {
    value: "",
    id: 9,
    label: "Город доставки",
    type: "text",
    valueName: "cityDelivery"
  }
]
