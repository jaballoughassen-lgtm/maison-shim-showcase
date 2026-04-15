import { Camera, Phone, MapPin, Clock } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <Link to="/" className="text-3xl font-serif font-bold tracking-tighter text-background">
            MAISON <span className="text-primary">S'HIM</span>
          </Link>
          <p className="text-muted-foreground/80 leading-relaxed max-w-sm">
            L'excellence de la pâtisserie artisanale à Monastir. Créations sur mesure et douceurs traditionnelles tunisiennes.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/maison_shim" target="_blank" className="hover:text-primary transition-colors">
              <Camera className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-xl font-serif font-bold">Nous trouver</h4>
          <ul className="space-y-4 text-muted-foreground/80">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <span>Monastir, Tunisie (Derrière Mozart)</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <span>+216 73 XXX XXX</span>
            </li>
            <li className="flex gap-3">
              <Clock className="h-5 w-5 text-primary shrink-0" />
              <span>Mar - Dim: 09h00 - 20h00</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-xl font-serif font-bold">Liens rapides</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="text-muted-foreground/80 hover:text-primary transition-colors">Accueil</Link></li>
            <li><Link to="/menu" className="text-muted-foreground/80 hover:text-primary transition-colors">Notre Carte</Link></li>
            <li><Link to="/gallery" className="text-muted-foreground/80 hover:text-primary transition-colors">Galerie Photo</Link></li>
            <li><a href="#" className="text-muted-foreground/80 hover:text-primary transition-colors">Mentions Légales</a></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground/50">
        © {new Date().getFullYear()} Maison S'him. Tous droits réservés.
      </div>
    </footer>
  )
}
