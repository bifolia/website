import './ProjectPeekComponent.scss'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { ProjectPeek } from '../types'
import React from 'react'
import { urlSafe } from '../utils'

type Props = {
  project: ProjectPeek
}

export const ProjectPeekComponent = ({
  project: {
    name,
    place,
    cover: {
      localFile,
    },
  },
}: Props) => {
  const imageData = getImage(localFile)
  const image = imageData && <GatsbyImage image={imageData} alt={name} />

  return (
    <Link to={`/projekte/${urlSafe(name)}`} className="ProjectPeekComponent">
      {image}
      <p>
        {name} | {place}
      </p>
    </Link>
  )
}
