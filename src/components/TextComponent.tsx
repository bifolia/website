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
  text: { content, is_large, marginless },
}: Props) => (
  <div className={classNames('TextComponent', { large: is_large, marginless })}>
    <ReactMarkdown remarkPlugins={[gfm]}>{content}</ReactMarkdown>
  </div>
)
