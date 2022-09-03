interface Meta {
  route: string
  title: string
  description: string
}

export const meta: Meta[] = [
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
