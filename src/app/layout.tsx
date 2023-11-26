import Providers from "@/lib/Providers";
import "./globals.css";
import type { Metadata } from "next";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "leaflet/dist/leaflet.css";
import "react-day-picker/dist/style.css";

export const metadata: Metadata = {
  title: "Xplore",
  description: "Travel Agency Service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Providers>
  );
}
