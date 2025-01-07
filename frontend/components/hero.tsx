import Link from 'next/link'

interface HeroProps {
  title: string
  breadcrumbs: Array<{
    label: string
    href: string
  }>
}

export function Hero({ title, breadcrumbs }: HeroProps) {
  return (
    <div className="relative bg-gray-900 h-48">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(/placeholder.svg)',
          opacity: 0.5 
        }}
      />
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-white mb-4">{title}</h1>
        <div className="flex items-center gap-2 text-white/80">
          {breadcrumbs.map((crumb, index) => (
            <div key={crumb.href} className="flex items-center">
              <Link href={crumb.href} className="hover:text-white">
                {crumb.label}
              </Link>
              {index < breadcrumbs.length - 1 && (
                <span className="mx-2">/</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
