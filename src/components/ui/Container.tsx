import { cn } from '@/lib/utils'
import { type ContainerSize } from '@/config/spacing'

interface ContainerProps {
  children: React.ReactNode
  size?: ContainerSize | 'full'
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function Container({ 
  children, 
  size = 'xl', 
  className,
  as: Component = 'div'
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        size === 'full' ? 'w-full' : 'container',
        size !== 'full' && {
          'max-w-sm': size === 'sm',
          'max-w-md': size === 'md',
          'max-w-4xl': size === 'lg',
          'max-w-6xl': size === 'xl',
          'max-w-7xl': size === '2xl',
        },
        className
      )}
    >
      {children}
    </Component>
  )
}