import './JournalEntryComponent.scss'
import { Body } from './Body'
import { JournalEntry } from '../types'
import React from 'react'

type Props = {
  entry: JournalEntry
}

export const JournalEntryComponent = ({
  entry: { title, date, authors, body },
}: Props) => {
  const from = authors && authors.map(({ name }) => name).join(' & ')

  return (
    <div className="JournalEntryComponent">
      <h1 className="JournalEntryComponent__title">{title}</h1>
      <p className="JournalEntryComponent__meta">
        {from && (
          <>
            von {from}
            <br />
          </>
        )}
        {date}
      </p>
      <Body components={body} />
    </div>
  )
}
