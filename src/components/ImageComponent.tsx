import './ImageComponent.scss'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Image } from '../types'
import React from 'react'

type Props = {
  image: Image
}

export const ImageComponent = ({
  image: {
    caption,
    url,
    source: { data: { attributes: { localFile } } },
  },
}: Props) => {
  const imageData = getImage(localFile)
  const image = imageData && (
    <GatsbyImage image={imageData} alt={caption || ''} />
  )

  const captionElement = caption && (
    <div className="ImageComponent__caption">{caption}</div>
  )

  return (
    <div className="ImageComponent">
      {url ? (
        <a href={url}>
          {image}
          {captionElement}
        </a>
      ) : (
        <>
          {image}
          {captionElement}
        </>
      )}
    </div>
  )
}
