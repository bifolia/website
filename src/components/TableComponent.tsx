import './TableComponent.scss'
import React from 'react'
import { Table } from '../types'

type Props = {
  table: Table
}

export const TableComponent = ({ table: { entries } }: Props) => (
  <div className="TableComponent">
    {entries.map(({ name, values }, i) =>
      values.map(({ value }, j) => (
        <div className="TableComponent__row" key={i * j}>
          <div className="TableComponent__row__name">{j === 0 && name}</div>
          <div className="TableComponent__row__value">{value}</div>
        </div>
      )),
    )}
  </div>
)
