'use client'
import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function LottiePage() {
  const router = useRouter()
  const [animationData, setAnimationData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch('/pageloader.json')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setAnimationData(data)
        setIsLoading(false)
      } catch (error) {
        console.error('Error loading Lottie animation:', error)
        setIsLoading(false)
      }
    }
    loadAnimation()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl border-primary/30 shadow-large bg-gradient-to-br from-card via-card to-accent/5">
        <CardHeader className="text-center space-y-4">
          <div className="flex items-center justify-between">
            <Button
              onClick={() => router.back()}
              variant="ghost"
              size="icon"
              className="hover:bg-primary/10"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <CardTitle className="text-3xl font-bold text-primary flex-1 text-center">
              Lottie Animation
            </CardTitle>
            <div className="w-10" /> {/* Spacer for alignment */}
          </div>
          <CardDescription className="text-base">
            Interactive animation showcase
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {isLoading ? (
            <div className="flex items-center justify-center h-96">
              <div className="text-muted-foreground">Loading animation...</div>
            </div>
          ) : animationData ? (
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="w-full max-w-md h-96 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 flex items-center justify-center border border-primary/20">
                <Lottie
                  animationData={animationData}
                  loop={true}
                  autoplay={true}
                  className="w-full h-full"
                />
              </div>
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">
                  This animation is loaded from{' '}
                  <code className="px-2 py-1 bg-accent/30 rounded text-primary font-mono text-xs">
                    /pageloader.json
                  </code>
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-96">
              <div className="text-destructive">Failed to load animation</div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
