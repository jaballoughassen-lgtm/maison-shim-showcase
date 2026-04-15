import { Link } from '@tanstack/react-router'
import { Button } from '@blinkdotnew/ui'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif font-bold tracking-tighter">
          MAISON <span className="text-primary">S'HIM</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Accueil</Link>
          <Link to="/menu" className="text-sm font-medium hover:text-primary transition-colors">Carte</Link>
          <Link to="/gallery" className="text-sm font-medium hover:text-primary transition-colors">Galerie</Link>
          <Button asChild>
            <Link to="/menu">Commander</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b animate-fade-in px-6 py-8 flex flex-col gap-6">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-medium">Accueil</Link>
          <Link to="/menu" onClick={() => setIsOpen(false)} className="text-lg font-medium">Carte</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className="text-lg font-medium">Galerie</Link>
          <Button asChild onClick={() => setIsOpen(false)}>
            <Link to="/menu">Commander</Link>
          </Button>
        </div>
      )}
    </nav>
  )
}
