export const metadata = {
  title: 'PixVault | Login',
  description: 'Login page for PixVault',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
