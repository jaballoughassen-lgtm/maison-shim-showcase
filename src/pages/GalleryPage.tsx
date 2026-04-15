import { useQuery } from '@tanstack/react-query'
import { blink } from '../lib/blink'
import { Card, CardContent, Skeleton } from '@blinkdotnew/ui'
import { Camera, Heart, MessageCircle, Share2 } from 'lucide-react'
import { motion } from 'framer-motion'

interface GalleryItem {
  id: string
  caption: string
  image_url: string
  created_at: string
}

export function GalleryPage() {
  const { data: items, isLoading } = useQuery({
    queryKey: ['gallery_items'],
    queryFn: async () => {
      return await blink.db.galleryItems.list() as GalleryItem[]
    }
  })

  return (
    <div className="pt-32 pb-32 min-h-screen">
      <div className="container mx-auto px-6 space-y-24">
        {/* Header */}
        <div className="text-center space-y-6">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-primary/10 p-4 rounded-3xl w-fit mx-auto"
          >
            <Camera className="h-10 w-10 text-primary" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif"
          >
            Instantanés de <br /> <span className="italic text-primary">Douceur</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-xl max-w-2xl mx-auto"
          >
            Suivez notre voyage culinaire et découvrez les coulisses de nos plus belles créations.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
          {isLoading ? (
            Array(6).fill(0).map((_, i) => (
              <Skeleton key={i} className="h-96 w-full rounded-3xl mb-12" />
            ))
          ) : (
            items?.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative inline-block w-full break-inside-avoid"
              >
                <Card className="overflow-hidden border-none elegant-shadow rounded-3xl h-full relative">
                  <img 
                    src={item.image_url} 
                    alt={item.caption} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-6 text-white backdrop-blur-sm">
                    <div className="flex gap-8">
                      <div className="flex items-center gap-2">
                        <Heart className="h-8 w-8 fill-current" />
                        <span className="text-2xl font-bold">1.2k</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="h-8 w-8 fill-current" />
                        <span className="text-2xl font-bold">48</span>
                      </div>
                    </div>
                    <div className="px-8 text-center text-lg font-light max-w-xs drop-shadow-md">
                      "{item.caption}"
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))
          )}
        </div>

        {/* Follow CTA */}
        <div className="bg-foreground text-background p-16 rounded-3xl text-center space-y-10 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/10 rounded-full animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/10 rounded-full animate-pulse" />
          
          <h4 className="text-3xl md:text-5xl font-serif leading-tight">Envie de plus de douceurs ? <br /> Rejoignez-nous sur Instagram</h4>
          <p className="text-muted-foreground/80 text-xl font-light">
            Découvrez nos créations quotidiennes et ne manquez aucune nouveauté.
          </p>
          <a 
            href="https://www.instagram.com/maison_shim" 
            target="_blank" 
            className="inline-flex items-center gap-4 px-12 py-5 bg-primary text-white rounded-full text-xl font-bold gold-gradient hover:scale-105 active:scale-95 transition-all shadow-xl"
          >
            <Camera className="h-8 w-8" />
            Suivre @maison_shim
          </a>
        </div>
      </div>
    </div>
  )
}
