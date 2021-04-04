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
    source: { localFile },
  },
}: Props) => {
  const imageData = getImage(localFile)
  const image = imageData && (
    <GatsbyImage image={imageData} alt={caption || ''} />
  )

  return (
    <div className="ImageComponent">
      {url ? (
        <a href={url} target="_blank" rel="noreferrer">
          {image}
        </a>
      ) : (
        image
      )}
    </div>
  )
}
