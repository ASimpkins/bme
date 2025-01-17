import React from 'react';
import { Zap, Target, BarChart, Users, Shield, Rocket } from 'lucide-react';
import { Feature } from '../../types/features';

const features: Feature[] = [
  {
    icon: Target,
    title: 'Personalized Growth Strategy',
    description: 'A roadmap to elevate your earnings and expand your audience. We craft a customized plan tailored to your unique strengths and goals, helping you build a sustainable and profitable brand'
  },
  {
    icon: BarChart,
    title: 'Performance Insights & Analytics',
    description: 'Deep analysis of subscriber behavior and content performance. Our team provides actionable insights through advanced analytics to optimize your strategies, maximize engagement, and increase revenue.'
  },
  {
    icon: Users,
    title: 'Elite Creator Network',
    description: 'Collaborate with a community of successful creators. Gain access to a network of top-performing OnlyFans creators, sharing exclusive insights and tips to accelerate your growth'
  },
  {
    icon: Shield,
    title: 'Brand Safety & Privacy',
    description: 'Protecting your identity, content, and reputation. We prioritize safeguarding your intellectual property, ensuring your personal information remains secure and your brand stays protected'
  },
  {
    icon: Zap,
    title: 'Dynamic Content Optimization',
    description: 'Real-time adjustments for maximum impact. Our team uses data-driven strategies to refine your content, ensuring it resonates with your audience and drives consistent growth'
  },
  {
    icon: Rocket,
    title: 'Launch & Scaling Support',
    description: 'Comprehensive guidance for new and established creators. From onboarding to scaling your account, we provide expert support at every stage to help you achieve and exceed your goals'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-purple-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why join BME Creators?
          </h2>
          <p className="text-xl text-gray-600">Empowering your journey to financial success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}