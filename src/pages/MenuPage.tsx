import { useQuery } from '@tanstack/react-query'
import { blink } from '../lib/blink'
import { Badge, Button, Card, CardContent, Skeleton, Tabs, TabsList, TabsTrigger, TabsContent } from '@blinkdotnew/ui'
import { ShoppingCart, Star, Heart, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  image_url: string
}

export function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('Tous')

  const { data: items, isLoading } = useQuery({
    queryKey: ['menu_items'],
    queryFn: async () => {
      return await blink.db.menuItems.list() as MenuItem[]
    }
  })

  const categories = ['Tous', 'Gâteaux', 'Tradition', 'Jus']

  const filteredItems = items?.filter(item => 
    activeCategory === 'Tous' || item.category === activeCategory
  )

  return (
    <div className="pt-32 pb-32 min-h-screen">
      <div className="container mx-auto px-6 space-y-24">
        {/* Header */}
        <div className="text-center space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif"
          >
            Notre <span className="italic text-primary">Carte Gourmande</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-xl max-w-2xl mx-auto"
          >
            Succombez à nos créations pâtissières haut de gamme, élaborées avec passion au quotidien.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-4 rounded-full text-lg font-medium transition-all ${
                activeCategory === cat 
                ? 'bg-primary text-white shadow-xl scale-105' 
                : 'bg-muted/50 hover:bg-muted text-muted-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {isLoading ? (
            Array(6).fill(0).map((_, i) => (
              <div key={i} className="space-y-6">
                <Skeleton className="h-80 w-full rounded-3xl" />
                <div className="space-y-3">
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            ))
          ) : (
            <AnimatePresence mode="popLayout">
              {filteredItems?.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                  <Card className="overflow-hidden border-none elegant-shadow rounded-3xl h-full flex flex-col">
                    <div className="relative h-80 overflow-hidden">
                      <img 
                        src={item.image_url} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-6 right-6">
                        <Badge className="bg-white/80 backdrop-blur-md text-foreground px-4 py-2 text-sm rounded-full shadow-lg border-none">
                          {item.category}
                        </Badge>
                      </div>
                      <div className="absolute bottom-6 left-6">
                        <div className="bg-primary px-4 py-2 rounded-full text-white font-bold shadow-lg text-lg">
                          {item.price.toFixed(2)} DT
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                      <div className="space-y-4">
                        <h3 className="text-3xl font-serif">{item.name}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-6 border-t">
                        <div className="flex items-center gap-1 text-primary">
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                        </div>
                        <Button variant="ghost" className="rounded-full h-12 w-12 p-0 hover:bg-primary/10 hover:text-primary transition-all">
                          <Heart className="h-6 w-6" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

        {/* Note */}
        <div className="bg-muted/30 p-12 rounded-3xl text-center space-y-6 max-w-4xl mx-auto border-2 border-dashed border-primary/20">
          <h4 className="text-2xl font-serif">Commande sur mesure ?</h4>
          <p className="text-muted-foreground text-lg">
            Pour vos gâteaux d'anniversaire, de mariage ou vos commandes spéciales, nous vous invitons à nous contacter directement pour un devis personnalisé.
          </p>
          <Button variant="outline" size="lg" className="rounded-full h-14 px-10 border-primary text-primary hover:bg-primary hover:text-white transition-all">
            Nous contacter par téléphone
          </Button>
        </div>
      </div>
    </div>
  )
}
