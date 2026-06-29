import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Sibani Resort | Premium Luxury Nature Retreat in Kharagpur, West Bengal",
  description: "Immerse yourself in peaceful elegance at Sibani Resort, Kharagpur. Discover luxury garden cottages, authentic heritage dining, open-air big screen theater, and wedding venues.",
  keywords: "Sibani Resort, Hotel Sibani Kharagpur, luxury resort West Bengal, hotels in Kharagpur, best restaurant in Kharagpur, wedding venue Kharagpur, resort in Kharagpur",
  metadataBase: new URL("https://sibaniresort.com"),
  openGraph: {
    title: "Sibani Resort | Premium Luxury Nature Retreat in Kharagpur",
    description: "Experience serene nature-focused hospitality, terracotta-styled garden cottages, and gourmet dining at Sibani Resort, West Bengal.",
    images: [{ url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&h=630&q=80" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F2EBE7] text-[#262626] font-sans selection:bg-[#CF3147] selection:text-white">
        {children}
      </body>
    </html>
  );
}
