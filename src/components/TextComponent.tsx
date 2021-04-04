import React from 'react'
import { Text } from '../types'
import classNames from 'classnames'

type Props = {
  text: Text
}

export const TextComponent = ({
  text: { title, content, is_large },
}: Props) => (
  <div className={classNames('TextComponent', { large: is_large })}>
    {title && <h1>{title}</h1>}
    {content}
  </div>
)
