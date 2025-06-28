import { Container } from '@/components/ui/Container'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Layout } from '@/components/layout/Layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À propos',
  description: 'En savoir plus sur ce boilerplate Next.js.',
}

export default function AboutPage() {
  return (
    <Layout>
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-8 text-center">
              À propos de ce boilerplate
            </h1>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-secondary-600 text-center mb-12">
                Ce boilerplate a été conçu pour vous faire gagner du temps et vous permettre 
                de vous concentrer sur ce qui compte vraiment : votre application.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>🚀 Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Optimisé pour les performances avec Next.js 15, React Server Components 
                    et les meilleures pratiques de développement web moderne.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>🛠️ Développement</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Configuration TypeScript stricte, ESLint, et structure de projet 
                    organisée pour une expérience de développement optimale.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>🎨 Design System</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Système de design cohérent avec Tailwind CSS, configuration 
                    centralisée des couleurs, typographie et composants réutilisables.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>📱 Responsive</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Design responsive par défaut avec des breakpoints configurables 
                    et des composants adaptatifs pour tous les appareils.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                Technologies utilisées
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Next.js 15',
                  'React 19',
                  'TypeScript',
                  'Tailwind CSS',
                  'ESLint',
                  'PostCSS',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}