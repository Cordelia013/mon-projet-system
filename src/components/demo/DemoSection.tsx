import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'

interface DemoSectionProps {
  title: string
  description: string
  children: React.ReactNode
  id: string
  className?: string
}

export function DemoSection({ title, description, children, id, className }: DemoSectionProps) {
  return (
    <section id={id} className={cn('py-20', className)}>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        {children}
      </Container>
    </section>
  )
}