import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks'

export enum Page {
  Raumgestaltung,
  Pflanzplanung,
  Gartenentwicklung,
  Wir,
  Projekte,
  Journal,
}

export enum LayoutKind {
  Full = 'full',
  Left = 'left',
  Right = 'right',
  Center = 'center',
}

export enum ComponentKind {
  Image = 'base.image',
  Table = 'base.table',
  Text = 'base.text',
}

type Layout = {
  layout: LayoutKind
}

export type Image = {
  strapi_component: ComponentKind.Image
  source: {
    localFile: FileNode
  }
  caption: string | null
  url: string | null
  layout: Layout
}

type TableValue = {
  value: string
}

type TableEntry = {
  name: string
  values: TableValue[]
}

export type Table = {
  strapi_component: ComponentKind.Table
  entries: TableEntry[]
  layout: Layout
}

export type Text = {
  strapi_component: ComponentKind.Text
  content: string
  is_large: boolean
  layout: Layout
}

export type Component = Image | Table | Text

export type JournalEntry = {
  title: string
  date: string
  authors: { name: string }[] | null
  body: Component[]
}

export type Entries<T> = {
  edges: { node: T }[]
}

export type Project = {
  description: string
  name: string
  body: Component[]
}

export type ProjectPeek = {
  name: string
  cover: {
    localFile: FileNode
  }
  place: string
  year: string
}
