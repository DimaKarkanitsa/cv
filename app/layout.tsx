export const metadata = {
  title: 'CV Dima Karkanitsa',
  description: 'Resume of Dima Karkanitsa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
