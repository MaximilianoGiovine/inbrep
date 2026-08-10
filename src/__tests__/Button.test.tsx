import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '@/components/Button'

describe('Button', () => {
  it('renders with correct href and children', () => {
    render(<Button href="/test">Click me</Button>)
    const link = screen.getByRole('link', { name: /click me/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/test')
    expect(link).toHaveClass('inline-flex')
  })

  it('applies variant classes', () => {
    render(
      <Button href="/ghost" variant="ghost">
        Ghost
      </Button>
    )
    const link = screen.getByRole('link', { name: /ghost/i })
    expect(link).toHaveClass('bg-transparent')
  })
})
