import { Button, Card, CardContent } from '@blinkdotnew/ui'
import { Link } from '@tanstack/react-router'
import { ArrowRight, Star, Heart, Cake, Zap, Utensils, UtensilsCrossed, ChefHat } from 'lucide-react'
import { motion } from 'framer-motion'

export function HomePage() {
  return (
    <div className="flex flex-col gap-32 pb-32">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-background/30 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1761110657716-1eb3cb62de97?q=80&w=1920" 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-reveal"
        />
        <div className="container relative z-20 text-center px-6 space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif text-white drop-shadow-2xl leading-tight"
          >
            L'Excellence de <br />
            <span className="italic">la Pâtisserie Artisanale</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-lg font-light"
          >
            Découvrez Maison S'him à Monastir, où chaque création est une œuvre d'art alliant tradition et modernité.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-col md:flex-row gap-6 justify-center"
          >
            <Button size="lg" className="h-16 px-10 text-lg rounded-full" asChild>
              <Link to="/menu">Découvrir notre carte</Link>
            </Button>
            <Button variant="outline" size="lg" className="h-16 px-10 text-lg rounded-full bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20 transition-all" asChild>
              <Link to="/gallery">Voir la galerie</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Specialties */}
      <section className="container mx-auto px-6 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl">Nos Spécialités</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            De la finesse du cake design à l'authenticité de nos douceurs tunisiennes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: 'Cake Design',
              description: 'Des créations sur mesure pour vos mariages, anniversaires et événements d\'exception.',
              icon: <Cake className="h-10 w-10 text-primary" />,
              image: 'https://images.unsplash.com/photo-1769812343875-c40f9ec7f846?q=80&w=800'
            },
            {
              title: 'Douceurs Traditionnelles',
              description: 'Le meilleur de l\'artisanat tunisien : Kaak Warka, Zrir et pâtisseries fines.',
              icon: <UtensilsCrossed className="h-10 w-10 text-primary" />,
              image: 'https://images.unsplash.com/photo-1635847457796-c6d78fa0fbc9?q=80&w=800'
            },
            {
              title: 'Rafraîchissements',
              description: 'Nos jus signature préparés quotidiennement avec des fruits frais de saison.',
              icon: <ChefHat className="h-10 w-10 text-primary" />,
              image: 'https://images.unsplash.com/photo-1665834263149-b57fc4de3fa8?q=80&w=800'
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <Card className="overflow-hidden border-none elegant-shadow h-full rounded-2xl">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-8 space-y-6">
                  <div className="bg-primary/10 p-4 rounded-2xl w-fit">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  <Link to="/menu" className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                    En savoir plus <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-foreground py-32 text-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 transform translate-x-1/2" />
        <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-24">
          <div className="space-y-10">
            <h2 className="text-4xl md:text-7xl leading-tight">L'Art de <br /> <span className="italic text-primary">la Perfection</span></h2>
            <p className="text-xl text-muted-foreground/80 leading-relaxed font-light">
              Chez Maison S'him, nous croyons que chaque gâteau raconte une histoire. Nous utilisons uniquement des ingrédients de première qualité pour créer des expériences gustatives inoubliables.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-2">
                <span className="text-4xl font-serif text-primary">100%</span>
                <p className="text-sm uppercase tracking-widest text-muted-foreground/50">Artisanal</p>
              </div>
              <div className="space-y-2">
                <span className="text-4xl font-serif text-primary">Frais</span>
                <p className="text-sm uppercase tracking-widest text-muted-foreground/50">Chaque jour</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden elegant-shadow transform rotate-3 scale-95 border-8 border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1588914683503-9a08bd7f840b?q=80&w=1080" 
                alt="Craft" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full border-8 border-primary/20 animate-pulse" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 text-center space-y-12">
        <h2 className="text-4xl md:text-7xl">Prêt pour <span className="italic text-primary">une dégustation ?</span></h2>
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
          Venez nous rendre visite à Monastir ou commandez vos créations personnalisées en ligne.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Button size="lg" className="h-16 px-12 rounded-full text-lg gold-gradient" asChild>
            <Link to="/menu">Consulter notre menu</Link>
          </Button>
          <Button variant="outline" size="lg" className="h-16 px-12 rounded-full text-lg" asChild>
            <Link to="/gallery">Visiter notre galerie</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
