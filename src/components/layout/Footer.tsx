import Link from 'next/link';

const footerLinks = [
  {
    title: '产品服务',
    links: [
      { name: 'ERP解决方案', href: '/products' },
      { name: '行业方案', href: '/solutions' },
      { name: '技术支持', href: '/support' },
    ],
  },
  {
    title: '关于我们',
    links: [
      { name: '公司介绍', href: '/about' },
      { name: '发展历程', href: '/about#history' },
      { name: '新闻动态', href: '/news' },
    ],
  },
  {
    title: '联系我们',
    links: [
      { name: '联系方式', href: '/contact' },
      { name: '加入我们', href: '/contact#careers' },
      { name: '服务网络', href: '/contact#network' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-blue-400">诚之道</Link>
            <p className="text-gray-400 text-sm">
              专注企业软件服务，
              助力企业数字化转型升级。
            </p>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">联系电话：13226618595</p>
              <p className="text-gray-400 text-sm">邮箱：3672606944@qq.com</p>
            </div>
          </div>
          
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} 诚之道软件. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
}