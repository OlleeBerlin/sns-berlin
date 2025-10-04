import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung - SNS Berlin',
  description: 'Datenschutzerklärung von SNS Berlin - Informationen zum Umgang mit personenbezogenen Daten.',
  robots: { index: false, follow: false },
}

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-gray-500">
                <li><Link href="/" className="hover:text-digital-blue">Home</Link></li>
                <li className="mx-2">/</li>
                <li className="text-digital-blue">Datenschutz</li>
              </ol>
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-bold text-digital-blue mb-8">
              Datenschutzerklärung
            </h1>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-digital-blue mb-4">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-xl font-bold text-digital-blue mb-3">Allgemeine Hinweise</h3>
              <p className="mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                persönlich identifiziert werden können.
              </p>

              <h3 className="text-xl font-bold text-digital-blue mb-3">Datenerfassung auf dieser Website</h3>
              <p className="mb-4">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                können Sie dem Impressum dieser Website entnehmen.
              </p>
              <p className="mb-4">
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. 
                um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>

              <h2 className="text-2xl font-bold text-digital-blue mb-4 mt-8">2. Hosting</h2>
              <p className="mb-4">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              
              <h3 className="text-xl font-bold text-digital-blue mb-3">Vercel</h3>
              <p className="mb-4">
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, 
                werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen, 
                Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe 
                und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>

              <h2 className="text-2xl font-bold text-digital-blue mb-4 mt-8">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-xl font-bold text-digital-blue mb-3">Datenschutz</h3>
              <p className="mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
                personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie 
                dieser Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-bold text-digital-blue mb-3">Hinweis zur verantwortlichen Stelle</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="mb-2"><strong>SNS Berlin GmbH</strong></p>
                <p className="mb-2">Musterstraße 123</p>
                <p className="mb-2">10115 Berlin</p>
                <p className="mb-2">Deutschland</p>
                <p className="mb-2">Telefon: +49 (30) 123 456 789</p>
                <p>E-Mail: datenschutz@sns-berlin.de</p>
              </div>

              <h3 className="text-xl font-bold text-digital-blue mb-3">Speicherdauer</h3>
              <p className="mb-4">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben 
                Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein 
                berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, 
                werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung 
                Ihrer personenbezogenen Daten haben.
              </p>

              <h2 className="text-2xl font-bold text-digital-blue mb-4 mt-8">4. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-xl font-bold text-digital-blue mb-3">Server-Log-Dateien</h3>
              <p className="mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="mb-4 list-disc list-inside">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>

              <h3 className="text-xl font-bold text-digital-blue mb-3">Kontaktformular</h3>
              <p className="mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
                von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>

              <h2 className="text-2xl font-bold text-digital-blue mb-4 mt-8">5. Ihre Rechte</h2>
              <p className="mb-4">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
                oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt 
                haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.
              </p>

              <h3 className="text-xl font-bold text-digital-blue mb-3">Auskunft, Löschung und Berichtigung</h3>
              <p className="mb-4">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche 
                Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck 
                der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.
              </p>

              <h3 className="text-xl font-bold text-digital-blue mb-3">Recht auf Einschränkung der Verarbeitung</h3>
              <p className="mb-4">
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. 
                Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht 
                in folgenden Fällen:
              </p>
              <ul className="mb-6 list-disc list-inside">
                <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten</li>
                <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht</li>
                <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen</li>
                <li>Wenn Sie Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben</li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <p className="text-sm text-gray-600">
                  <strong>Hinweis:</strong> Dies ist eine Muster-Datenschutzerklärung. Bitte passen Sie alle Angaben 
                  entsprechend Ihrer tatsächlichen Datenverarbeitung an und lassen Sie die Datenschutzerklärung von 
                  einem Rechtsanwalt oder Datenschutzexperten prüfen.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
