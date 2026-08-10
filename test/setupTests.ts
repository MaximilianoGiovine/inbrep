import '@testing-library/jest-dom'

// Mock next/link to render a plain anchor for tests
vi.mock('next/link', async () => {
  const actual = await vi.importActual('react')
  return {
    default: ({ href, children, ...props }: any) => {
      return actual.createElement('a', { href, ...props }, children)
    },
  }
})
