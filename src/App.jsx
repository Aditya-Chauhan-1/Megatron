import Home from './Home.jsx'
import Banner from './Banner.jsx'
import LabsHero from './components/labs-hero/LabsHero.jsx'
import CybertronLogo from './components/CybertronLogo.jsx'

const navItems = [
  'Features',
  'Products',
  'Business',
  'Developers',
  'Pricing',
  'API',
  'Explore',
]

const dropdownItems = new Set(['Features', 'Products', 'Business', 'Developers', 'Explore'])

function ChevronIcon() {
  return (
    <svg className="h-3 w-3 opacity-60" viewBox="0 0 12 12" fill="none">
      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
      <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function App() {
  return (
    <div className="bg-white font-sans text-black">
      <header className="sticky top-0 z-20 grid grid-cols-[1fr_auto_1fr] items-center border-b border-[#ECECEC] bg-white px-12 py-5 max-lg:grid-cols-[1fr_auto] max-lg:px-6">
        <a href="#" className="flex items-center gap-2.5 justify-self-start no-underline text-inherit">
          <CybertronLogo size="sm" />
          <span className="text-lg font-bold tracking-tight">Cybertron</span>
        </a>

        <nav className="flex items-center gap-6 justify-self-center max-lg:hidden">
          {navItems.map((item) => (
            <a key={item} href="#create" className="inline-flex items-center gap-0.5 text-sm text-[#1a1a1a] no-underline whitespace-nowrap hover:text-[#555]">
              {item}
              {dropdownItems.has(item) && <ChevronIcon />}
            </a>
          ))}
        </nav>

        <a href="#create" className="inline-flex items-center gap-2 justify-self-end rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white no-underline hover:bg-[#222]">
          Try Cybertron
          <ArrowIcon />
        </a>
      </header>

      <Home />
      <Banner />
      <LabsHero />
    </div>
  )
}
