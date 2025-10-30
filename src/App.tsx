import './App.css'

function App() {
  const services = [
    {
      title: 'Schwangerenvorsorge',
      description:
        'Individuelle Termine, die sich nach deinem Rhythmus richten – mit Zeit für alle Fragen, Untersuchungen und dein Bauchgefühl.',
      highlights: [
        'CTG und Blutdruckkontrolle in vertrauter Atmosphäre',
        'Hilfreiche Impulse zu Ernährung, Bewegung & mentale Vorbereitung',
        'Dokumentation zur Vorlage bei Ärztin oder Arzt',
      ],
    },
    {
      title: 'Wochenbettbetreuung',
      description:
        'Ich begleite euch zu Hause in den ersten Wochen nach der Geburt und sorge dafür, dass ihr euch sicher und getragen fühlt.',
      highlights: [
        'Still- und Flaschenberatung ohne Druck',
        'Begleitung bei der Rückbildung des Körpers',
        'Individuelle Unterstützung bei Schlaf- und Tragefragen',
      ],
    },
    {
      title: 'Kurse & Beratung',
      description:
        'Sanfte Rückbildungskurse in kleinen Gruppen sowie Workshops rund um Geburt, Bindung und Elternsein.',
      highlights: [
        'Kompakte Wochenend-Workshops für werdende Eltern',
        'Online-Coachings für flexible Planung',
        'Handouts & Übungen für zu Hause',
      ],
    },
  ]

  const testimonials = [
    {
      quote:
        'Anna hat uns mit so viel Ruhe und Herzlichkeit begleitet – wir haben uns in jeder Situation verstanden gefühlt.',
      name: 'Laura & Jonas',
      detail: 'Erstlingseltern, Betreuung 2023',
    },
    {
      quote:
        'Besonders im Wochenbett war es Gold wert, jemand Erfahrenes an der Seite zu haben. Danke für die klaren Worte!',
      name: 'Miriam',
      detail: 'Zweifach-Mama, Hausgeburt in Berlin',
    },
  ]

  const steps = [
    {
      title: 'Kennenlernen',
      text: 'Wir sprechen unverbindlich über deine Situation, Wünsche und möglichen Betreuungszeiträume.',
    },
    {
      title: 'Individuelle Planung',
      text: 'Gemeinsam legen wir Termine fest und stimmen Vorsorge, Kurse und Wochenbettbesuche auf euch ab.',
    },
    {
      title: 'Verlässliche Begleitung',
      text: 'Ich bleibe an eurer Seite – mit einer Mischung aus Fachwissen, Humor und viel Herz.',
    },
  ]

  const contactOptions = [
    {
      label: 'Telefon',
      value: '+49 170 1234567',
      href: 'tel:+491701234567',
    },
    {
      label: 'E-Mail',
      value: 'hallo@hebamme-anna.de',
      href: 'mailto:hallo@hebamme-anna.de',
    },
    {
      label: 'Praxis',
      value: 'Prenzlauer Allee 42 · 10405 Berlin',
    },
  ]

  return (
    <div className="page">
      <header className="hero">
        <nav className="top-nav">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true" />
            <div>
              <p className="brand-name">Hebamme Anna Müller</p>
              <p className="brand-sub">Berlin · Prenzlauer Berg</p>
            </div>
          </div>
          <a className="nav-contact" href="#kontakt">
            Kontakt
          </a>
        </nav>

        <div className="hero-inner">
          <div className="hero-text">
            <p className="eyebrow">Ganzheitliche Hebammenbetreuung in Berlin</p>
            <h1>Begleitung mit Herz & Fachwissen für deine Schwangerschaft</h1>
            <p className="hero-description">
              Ich schenke dir Raum, Sicherheit und Klarheit – von der ersten
              Vorsorge bis zum liebevollen Ankommen im Wochenbett. Gemeinsam
              finden wir deinen Weg in ein entspanntes Elternsein.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#kontakt">
                Kostenloses Kennenlernen
              </a>
              <a className="btn secondary" href="#leistungen">
                Leistungen ansehen
              </a>
            </div>
            <ul className="hero-highlights">
              <li>Individuelle Vorsorge in vertrauter Atmosphäre</li>
              <li>Wochenbettbesuche mit 24/7-Notfalltelefon</li>
              <li>Kurse & Workshops für mehr Gelassenheit</li>
            </ul>
          </div>

          <div className="hero-card" role="figure">
            <div className="hero-badge">Seit 2014</div>
            <h2>Für dich da in jeder Phase</h2>
            <p>
              Ich begleite Familien mit viel Empathie, klaren Antworten und
              einem Netzwerk aus Ärztinnen, Doulas & Therapeutinnen.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">180+</span>
                <span className="stat-label">begleitete Familien</span>
              </div>
              <div className="stat">
                <span className="stat-number">12</span>
                <span className="stat-label">Jahre Berufserfahrung</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Erreichbarkeit im Wochenbett</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="leistungen" className="section services">
          <div className="section-header">
            <p className="eyebrow">Leistungen</p>
            <h2>Ganzheitliche Betreuung für dich und dein Baby</h2>
            <p>
              Von der Vorsorge über Geburtsvorbereitung und Wochenbett bis hin
              zur Rückbildung – du erhältst eine Begleitung, die zu dir passt.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section steps">
          <div className="section-header">
            <p className="eyebrow">Ablauf</p>
            <h2>So arbeiten wir zusammen</h2>
            <p>
              Transparente Schritte geben dir Sicherheit. Wir gestalten deine
              Betreuung so, dass sie in euren Alltag passt.
            </p>
          </div>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={step.title} className="step-card">
                <span className="step-number">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section testimonials">
          <div className="section-header">
            <p className="eyebrow">Feedback</p>
            <h2>Worte von Familien, die ich begleiten durfte</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="testimonial-card">
                <blockquote>{testimonial.quote}</blockquote>
                <figcaption>
                  <span className="testimonial-name">{testimonial.name}</span>
                  <span className="testimonial-detail">
                    {testimonial.detail}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="kontakt" className="section contact">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Kontakt</p>
              <h2>Lass uns kennenlernen</h2>
              <p>
                Erzähle mir von dir und deinem Baby – gemeinsam finden wir
                heraus, wie ich euch begleiten kann. Melde dich gerne, auch wenn
                dein errechneter Termin schon bald ansteht.
              </p>
            </div>
            <div className="contact-options">
              {contactOptions.map((option) => (
                <div key={option.label} className="contact-option">
                  <span className="contact-label">{option.label}</span>
                  {option.href ? (
                    <a href={option.href}>{option.value}</a>
                  ) : (
                    <span>{option.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Hebamme Anna Müller · Impressum ·
          Datenschutz
        </p>
      </footer>
    </div>
  )
}

export default App
