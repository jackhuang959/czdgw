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

const milestones = [
  {
    year: '2015',
    title: '公司成立',
    description: '诚之道软件成立于深圳，致力于为企业提供智能化ERP解决方案'
  },
  {
    year: '2017',
    title: '产品升级',
    description: '推出新一代智能ERP系统，获得多家知名企业认可'
  },
  {
    year: '2019',
    title: '技术创新',
    description: '引入AI技术，实现智能决策支持和自动化操作'
  },
  {
    year: '2021',
    title: '战略升级',
    description: '完成B轮融资，加速产品研发和市场拓展'
  },
  {
    year: '2023',
    title: '行业领先',
    description: '服务客户超过1000家，成为行业领先的ERP解决方案提供商'
  }
];

const culture = [
  {
    title: '使命',
    description: '用科技创新推动企业数字化转型',
    icon: '🎯'
  },
  {
    title: '愿景',
    description: '成为最值得信赖的企业管理解决方案提供商',
    icon: '🌟'
  },
  {
    title: '价值观',
    description: '诚信、创新、专业、共赢',
    icon: '💫'
  }
];

const team = [
  {
    name: '张志远',
    position: '创始人&CEO',
    description: '拥有20年企业管理软件行业经验，曾任某知名ERP公司技术总监',
    image: '/team/ceo.svg'
  },
  {
    name: '李明',
    position: '技术总监',
    description: '计算机博士，专注于AI和企业级软件架构设计，拥有多项技术专利',
    image: '/team/cto.svg'
  },
  {
    name: '王晓华',
    position: '产品总监',
    description: '10年产品经理经验，深谙企业管理痛点，主导多个成功项目',
    image: '/team/product.svg'
  },
  {
    name: '陈静',
    position: '市场总监',
    description: '15年B2B市场营销经验，擅长企业品牌建设和市场策略规划',
    image: '/team/marketing.svg'
  }
];

export default function About() {
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
              关于诚之道
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              用科技创新推动企业数字化转型
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            <motion.div
              variants={fadeInUp}
              className="flex-1 text-center lg:text-left"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">公司介绍</h2>
              <p className="text-xl text-gray-600 mb-6">
                诚之道软件是一家专注于企业管理软件研发的高新技术企业，致力于为企业提供智能化的ERP解决方案。
              </p>
              <p className="text-xl text-gray-600 mb-6">
                我们拥有一支经验丰富的研发团队，运用AI、云计算等前沿技术，不断创新产品和服务，帮助企业实现数字化转型。
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
                  <div className="text-gray-600">服务企业</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-gray-600">客户满意度</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex-1"
            >
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/about/company.svg"
                  alt="公司介绍"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Development History */}
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
              发展历程
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600"
            >
              见证我们的成长与创新
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200" />
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Culture */}
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
              企业文化
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600"
            >
              我们的价值观和追求
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {culture.map((item) => (
              <motion.div
                key={item.title}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Introduction */}
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
              核心团队
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600"
            >
              专业的团队是我们最宝贵的资产
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <motion.div
                key={member.name}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}