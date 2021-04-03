import { Helmet } from 'react-helmet'
import React from 'react'

const LANG = 'de'

type Props = {
  description: string
  meta?: JSX.IntrinsicElements['meta'][]
  title: string
}

export const SEO = ({ description, meta = [], title }: Props) => {
  return (
    <Helmet
      htmlAttributes={{ lang: LANG }}
      title={title ? `${title} - bifolia` : 'bifolia'}
      meta={meta.concat([
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ])}
    />
  )
}
