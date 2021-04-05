import './TextComponent.scss'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Text } from '../types'
import classNames from 'classnames'
import gfm from 'remark-gfm'

type Props = {
  text: Text
}

export const TextComponent = ({
  text: { title, content, is_large },
}: Props) => (
  <div className={classNames('TextComponent', { large: is_large })}>
    {title && <h1>{title}</h1>}
    <ReactMarkdown plugins={[gfm]}>{content}</ReactMarkdown>
  </div>
)
