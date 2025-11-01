interface FeatureCardProps {
  illustration: string
  text: string
}

const FeatureCard = ({ illustration, text }: FeatureCardProps) => {
  // Split text at em dash (–) to separate title from description
  const parts = text.split(' – ')
  const title = parts[0]
  const description = parts[1] || ''

  return (
    <div className="bg-card rounded-xl p-4 border border-border shadow-sm">
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="w-48 h-48 flex items-center justify-center">
          <img
            src={illustration}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text-card-foreground leading-relaxed">
          <p className="font-bold">{title}</p>
          {description && (
            <p className="text-muted-foreground mt-2">{description}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
