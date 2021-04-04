import { Component, ComponentKind } from '../types'
import { ImageComponent } from './ImageComponent'
import React from 'react'
import { TableComponent } from './TableComponent'
import { TextComponent } from './TextComponent'
import classNames from 'classnames'

type Props = {
  components: Component[]
}

export const Body = ({ components }: Props) => (
  <div className="Body">
    {components.map((component, i) => (
      <div
        className={classNames('Body__component', component.layout.layout)}
        key={i}
      >
        {component.strapi_component === ComponentKind.Image ? (
          <ImageComponent image={component} />
        ) : component.strapi_component === ComponentKind.Table ? (
          <TableComponent />
        ) : component.strapi_component === ComponentKind.Text ? (
          <TextComponent text={component} />
        ) : null}
      </div>
    ))}
  </div>
)
