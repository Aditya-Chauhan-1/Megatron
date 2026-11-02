export default function CybertronLogo({ size = 'sm' }) {
  const className = size === 'lg' ? 'logo-img logo-img--lg' : 'logo-img logo-img--sm'

  if (size === 'lg') {
    return <img src="/logo.png" alt="Cybertron" className={className} />
  }

  return <span className={className} role="img" aria-label="Cybertron" />
}
