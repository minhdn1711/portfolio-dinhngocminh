import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Đinh Ngọc Minh | Backend Developer PHP Laravel",
  description: "Backend Developer với 3+ năm kinh nghiệm xây dựng RESTful API, hệ thống nghiệp vụ doanh nghiệp sử dụng PHP Laravel, MySQL, Redis, RabbitMQ.",
  keywords: ["Backend Developer", "PHP Laravel", "RESTful API", "MySQL", "Redis", "RabbitMQ", "Developer Vietnam"],
  authors: [{ name: "Đinh Ngọc Minh" }],
  openGraph: {
    title: "Đinh Ngọc Minh | Backend Developer PHP Laravel",
    description: "Backend Developer với 3+ năm kinh nghiệm xây dựng RESTful API và hệ thống nghiệp vụ doanh nghiệp.",
    type: "website",
    locale: "vi_VN",
    alternateLocale: "en_US",
    // images: [
    //   {
    //     url: "/images/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Đinh Ngọc Minh - Backend Developer"
    //   }
    // ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Đinh Ngọc Minh | Backend Developer",
    description: "Backend Developer với 3+ năm kinh nghiệm PHP Laravel",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
