import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Pacifico } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
})

export const metadata: Metadata = {
  title: "Bella Cleaners | Same-Day Dry Cleaning in Sammamish, WA",
  description:
    "Premium dry cleaning services in Sammamish, WA. Same-day service available - drop off by 10am, pick up by 4pm. Specializing in rugs, draperies, wedding gowns, alterations, and shirt laundering.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${playfairDisplay.variable} ${pacifico.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
