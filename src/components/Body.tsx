import './Body.scss'
import { Component, ComponentKind } from '../types'
import { ImageComponent } from './ImageComponent'
import React from 'react'
import { TableComponent } from './TableComponent'
import { TextComponent } from './TextComponent'
import classNames from 'classnames'
import { useInView } from 'react-intersection-observer'

type Props = {
  components: Component[]
}

export const Body = ({ components }: Props) => (
  <div className="Body">
    {components.map((component, i) => {
      const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
      })

      return (
        <div
          className={classNames('Body__component', component.layout.layout, {
            show: inView,
          })}
          key={i}
          ref={ref}
        >
          {component.strapi_component === ComponentKind.Image ? (
            <ImageComponent image={component} />
          ) : component.strapi_component === ComponentKind.Table ? (
            <TableComponent table={component} />
          ) : component.strapi_component === ComponentKind.Text ? (
            <TextComponent text={component} />
          ) : null}
        </div>
      )
    })}
  </div>
)
