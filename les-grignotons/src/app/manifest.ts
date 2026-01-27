import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Les Grignotons - Élevage de lapins et cobayes',
    short_name: 'Les Grignotons',
    description: 'Élevage familial responsable de lapins et cobayes. Adoptions avec accompagnement et suivi.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F5F1E8',
    theme_color: '#6B9F6E',
    icons: [
      {
        src: '/logos/favicon.jpg',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
  }
}
