'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-4xl sm:text-6xl font-bold mb-6"
            variants={fadeInUp}
          >
            诚之道-专注企业软件服务
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl mb-8 text-blue-100"
            variants={fadeInUp}
          >
            助力企业数字化转型，提升管理效率
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors"
            >
              立即咨询
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            >
              产品优势
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600"
            >
              为什么选择诚之道云端ERP解决方案
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '不限设备',
                description: '任意一台电脑/手机能上网就可以登录，随时随地管理企业数据',
                icon: '🤖'
              },
              {
                title: '操作简便',
                description: '比Excel表格更简单，会用微信的同事都会用',
                icon: '🔄'
              },
              {
                title: '迭代更新',
                description: '不定期迭代更新，贴合实际需求，不断优化',
                icon: '🛡️'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-xl font-bold text-black mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            >
              解决方案
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600"
            >
              针对不同行业提供专业解决方案
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '制造业解决方案',
                description: '智能制造、生产管理、供应链优化',
                image: '/solutions/manufacturing.svg'
              },
              {
                title: '零售业解决方案',
                description: '全渠道销售、库存管理、会员营销',
                image: '/solutions/retail.svg'
              },
              {
                title: '服务业解决方案',
                description: '客户管理、服务流程、绩效考核',
                image: '/solutions/service.svg'
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 relative">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <Link
                    href="/solutions"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    了解更多 →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold mb-8"
            >
              准备好开始数字化转型了吗？
            </motion.h2>
            <motion.div variants={fadeInUp}>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors"
              >
                联系我们
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
