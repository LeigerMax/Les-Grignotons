import Link from 'next/link'

interface ButtonProps {
  readonly children: React.ReactNode
  readonly href?: string
  readonly onClick?: () => void
  readonly variant?: 'primary' | 'secondary' | 'outline'
  readonly className?: string
  readonly type?: 'button' | 'submit' | 'reset'
  readonly target?: '_blank' | '_self' | '_parent' | '_top'
  readonly rel?: string
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button',
  target,
  rel
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold transition-all duration-200 shadow-md hover:shadow-lg'
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark border-2 border-primary hover:border-primary-dark',
    secondary: 'bg-accent text-white hover:bg-earth border-2 border-accent hover:border-earth',
    outline: 'border-2 border-primary text-primary bg-white hover:bg-primary hover:text-white font-bold'
  }

  const classes = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    // Si target="_blank", ajouter rel="noopener noreferrer" pour la sécurité
    const linkRel = target === '_blank' ? rel || 'noopener noreferrer' : rel
    
    return (
      <Link 
        href={href} 
        className={classes}
        target={target}
        rel={linkRel}
      >
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
