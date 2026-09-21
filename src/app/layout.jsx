import "../index.css";

export const metadata = {
  metadataBase: new URL("https://ks-portfolio.vercel.app"),
  title: "Kumar Saurav | Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with 5 years experience building high-throughput, enterprise web applications at PhonePe and OLA. Expert in React, Next.js, TypeScript, Redux Toolkit, and modern Frontend Architecture.",
  keywords: [
    "Kumar Saurav",
    "Senior Frontend Engineer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "PhonePe",
    "OLA",
    "Web Architecture",
    "Portfolio",
  ],
  authors: [{ name: "Kumar Saurav", url: "https://github.com/ks-1007" }],
  creator: "Kumar Saurav",
  icons: {
    icon: "/logo-2.png",
    apple: "/logo192.png",
  },
  openGraph: {
    title: "Kumar Saurav | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 5 years experience building high-throughput web applications at PhonePe and OLA.",
    type: "website",
    images: [
      {
        url: "/profile-pic-nobg.png",
        width: 600,
        height: 600,
        alt: "Kumar Saurav",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumar Saurav | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 5 years experience at PhonePe and OLA.",
    images: ["/profile-pic-nobg.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
