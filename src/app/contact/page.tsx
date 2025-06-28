import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Layout } from '@/components/layout/Layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez-nous pour toute question ou suggestion.',
}

export default function ContactPage() {
  return (
    <Layout>
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
                Contactez-nous
              </h1>
              <p className="text-lg text-secondary-600">
                Une question ? Une suggestion ? N'hésitez pas à nous contacter.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Envoyez-nous un message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="input w-full"
                        placeholder="Votre nom"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="input w-full"
                        placeholder="votre@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                        Sujet
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="input w-full"
                        placeholder="Sujet de votre message"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="input w-full resize-none"
                        placeholder="Votre message..."
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>📧 Email</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary-600">
                      contact@votre-domaine.com
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>🐙 GitHub</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary-600">
                      github.com/votre-username
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>🐦 Twitter</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary-600">
                      @votre_twitter
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>💼 LinkedIn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary-600">
                      linkedin.com/in/votre-profil
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}