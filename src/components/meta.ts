interface Meta {
  route: string
  title: string
  description: string
}

export const meta: Meta[] = [
  // export const meta: Array<Meta> = [
  {
    route: '/',
    title: 'TOP',
    description: 'TOP description',
  },
  {
    route: '/test',
    title: 'TEST',
    description: 'pathname description',
  },
]
