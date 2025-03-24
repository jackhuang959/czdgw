import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '诚之道 - 专注企业软件服务',
  description: '诚之道软件专注于为企业提供智能化ERP解决方案，助力企业数字化转型升级。我们提供专业的软件产品和服务，帮助企业提升管理效率和竞争力。',
  keywords: 'ERP软件,企业管理系统,数字化转型,企业解决方案,诚之道软件',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
