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

const solutions = [
  {
    industry: '制造业',
    title: '智能制造解决方案',
    description: '通过ERP系统实现生产计划、物料管理、质量控制等全流程数字化管理，提升生产效率和产品质量。',
    features: [
      '生产计划智能排程',
      '物料需求自动计算',
      '质量管理全程追溯',
      '设备管理预测维护',
      '成本核算精准管控'
    ],
    benefits: [
      '生产效率提升30%',
      '库存成本降低20%',
      '产品质量提升15%',
      '设备利用率提升25%'
    ]
  },
  {
    industry: '零售业',
    title: '全渠道零售解决方案',
    description: '整合线上线下销售渠道，实现商品、会员、订单等统一管理，打造无缝购物体验。',
    features: [
      '全渠道库存管理',
      '会员积分营销',
      '订单统一处理',
      'POS快速收银',
      '数据分析决策'
    ],
    benefits: [
      '销售额提升25%',
      '运营成本降低15%',
      '客户满意度提升20%',
      '库存周转率提升30%'
    ]
  },
  {
    industry: '服务业',
    title: '服务管理解决方案',
    description: '提供客户服务、项目管理、人力资源等一体化解决方案，提升服务质量和运营效率。',
    features: [
      '客户关系管理',
      '项目进度管理',
      '人力资源管理',
      '财务管理系统',
      '绩效考核分析'
    ],
    benefits: [
      '服务效率提升35%',
      '项目交付率提升25%',
      '客户续约率提升20%',
      '人力成本优化15%'
    ]
  }
];

const implementationSteps = [
  {
    title: '需求分析',
    description: '深入了解企业业务流程，制定个性化解决方案',
    icon: '📋'
  },
  {
    title: '方案设计',
    description: '根据需求设计系统架构和功能模块',
    icon: '✏️'
  },
  {
    title: '系统实施',
    description: '专业团队进行系统部署和数据迁移',
    icon: '🔧'
  },
  {
    title: '培训支持',
    description: '提供全面的用户培训和技术支持',
    icon: '👥'
  },
  {
    title: '持续优化',
    description: '定期进行系统维护和功能升级',
    icon: '🔄'
  }
];

export default function Solutions() {
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
              行业解决方案
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              基于多年行业经验，我们为不同领域的企业提供专业的ERP解决方案
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.industry}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className={`flex flex-col lg:flex-row gap-12 items-center ${index !== 0 ? 'mt-20' : ''}`}
            >
              <motion.div
                variants={fadeInUp}
                className="flex-1 text-center lg:text-left"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{solution.title}</h2>
                <p className="text-xl text-gray-600 mb-8">{solution.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">核心功能</h3>
                    <ul className="space-y-2">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-700">
                          <span className="mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">实施效果</h3>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center text-gray-700">
                          <span className="mr-2">📈</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="flex-1"
              >
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={`/solutions/${solution.industry.toLowerCase()}.svg`}
                    alt={solution.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Implementation Process */}
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
              实施流程
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600"
            >
              专业的实施团队，确保项目顺利落地
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {implementationSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < implementationSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-blue-200 transform translate-y-[-50%]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}