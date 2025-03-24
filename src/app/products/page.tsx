'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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

const features = [
  {
    title: '生产管理',
    description: '模拟生产、BOM清单、委外管理',
    icon: '🏭'
  },
  {
    title: '采购管理',
    description: '供应商管理、采购计划、成本分析',
    icon: '🛒'
  },
  {
    title: '销售管理',
    description: '订单处理、客户管理、销售报表',
    icon: '📊'
  },
  {
    title: '库存管理',
    description: '库存监控、出入库管理、盘点管理',
    icon: '📦'
  },
  {
    title: '财务管理',
    description: '财务核算、预算管理、资金管理',
    icon: '💰'
  },
  {
    title: '基础资料',
    description: '员工权限、客户资料、供应商资料',
    icon: '👥'
  }
];

const techFeatures = [
  {
    title: '页面字段',
    description: '可以根据企业需求，自定义字段，提高数据管理效率',
    icon: '🔄'
  },
  {
    title: '云端文件存储',
    description: '可上传图片、文件等资料，方便数据管理',
    icon: '☁️'
  },
  {
    title: '流程简化',
    description: '告别繁琐多次建单，拒绝固化流程',
    icon: '🤖'
  },
  {
    title: '收付款抹零',
    description: '避免金额误差，繁琐多次建单',
    icon: '🔒'
  }
];

const scenarios = [
  {
    title: '灯具行业',
    description: '适用于成品、半成品加工生产等企业的生产管理',
    image: '/scenarios/manufacturing.svg'
  },
  {
    title: '贸易企业',
    description: '满足批发、零售、进出口贸易等企业的业务需求',
    image: '/scenarios/trade.svg'
  },
  {
    title: '服务企业',
    description: '支持咨询、IT服务、物流等服务型企业的运营管理',
    image: '/scenarios/service.svg'
  }
];

export default function Products() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              诚之道ERP管理系统
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              一体化企业管理解决方案，助力企业数字化转型
            </motion.p>
          </motion.div>
        </div>
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
              功能模块
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600"
            >
              全面覆盖企业运营各个环节
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Architecture Section */}
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
              功能亮点
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600"
            >
              贴合生产实际，灵活好用，功能强大
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techFeatures.map((tech, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{tech.title}</h3>
                <p className="text-gray-600 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Scenarios */}
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
              应用场景
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600"
            >
              适用于各类型企业的管理需求
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scenarios.map((scenario, index) => (
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
                    src={scenario.image}
                    alt={scenario.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{scenario.title}</h3>
                  <p className="text-gray-600">{scenario.description}</p>
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
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              开启数字化转型之旅
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-blue-100 mb-8"
            >
              联系我们，获取专业解决方案
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors"
              >
                免费咨询
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}