import type { ReactNode } from "react"

interface ListRenderProps<T> {
  items: T[]
  // eslint-disable-next-line no-unused-vars
  render: (item: T) => ReactNode
  // eslint-disable-next-line no-unused-vars
  getKey: (item: T) => string | number
  className: string
}

const ListRender = <T,>({
  items,
  render,
  getKey,
  className
}: ListRenderProps<T>) => {
  return (
    <ul className={className}>
      {items.map(item => (
        <li key={getKey(item)}>{render(item)}</li>
      ))}
    </ul>
  )
}

export default ListRender
