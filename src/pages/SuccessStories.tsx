import React from 'react';
import { Star, TrendingUp, Users } from 'lucide-react';
import FloatingShapes from '../components/home/FloatingShapes';

const successStories = [
  {
    name: "Nicole",
    platform: "OF",
    niche: "Yoga Instructor",
    image: "https://i.ibb.co/tqRCWMF/Snapinsta-app-282120768-1067433484123638-8056689388366515947-n-1080-1.png?auto=format&fit=crop&q=80&w=400",
    metrics: {
      growth: "850%",
      revenue: "$10.5k",
      followers: "500"
    },
    quote: "I can’t say enough great things about BME Creators! I was completely lost when I first started – I didn’t know where to begin or how to grow my presence, and I was overwhelmed by all the moving parts. From the moment I connected with the team, everything changed. They made me feel safe and supported every step of the way. The team genuinely cared about my success, took the time to explain everything clearly, and patiently answered all my questions. They broke everything down in a way that was easy to understand and made sure I felt confident moving forward What really stood out was how personal and thoughtful their approach was. I never felt like just another number – they truly listened to my goals and helped me build a plan that worked for me. Thanks to BME Creators, I feel empowered, supported, and finally on the right path to success. I can’t recommend them enough!",
    tags: ["Yoga", "Instagram", "Education"]
  },
  {
    name: "Camila",
    platform: "OF",
    niche: "Fitness & Massage Therapist",
    image: "https://i.ibb.co/PCvnQfN/3234819755085349044-4187515849-9d9184e1-ea72-4168-a30e-ce872ef8ca7d.jpg?auto=format&fit=crop&q=80&w=400",
    metrics: {
      growth: "1200%",
      revenue: "$21K",
      followers: "600"
    },
    quote: "I can't express how grateful I am to have found BME Creators. Before working with them, I was with another agency that honestly left me in the dark. They didn’t guide me, and I felt completely lost trying to figure everything out on my own. Switching to BME Creators was the best decision I’ve ever made. From day one, they took the time to educate me and explain their entire process in detail. I finally understood what was happening behind the scenes and felt empowered to make decisions about my account. They completely revamped and remarketed my account to be more engaging and exciting for my fans, which has provided such a better experience for everyone involved. What I love most about BME Creators is how hands-on and supportive they are. They truly care about helping you grow and succeed. My engagement has skyrocketed, my fans are happier than ever, and I finally feel like I’m working with a team that understands me and my goals. If you’re looking for an agency that delivers real results and treats you like family, BME Creators is it. They’re absolutely awesome!",
    tags: ["Fitness", "Lifestyle", "Wellness"]
  },
  {
    name: "Stefenia",
    platform: "OF",
    niche: "Fitness & Beach",
    image: "https://i.ibb.co/mJ2nv5P/FF229-A70-6-FC0-4606-86-AA-38-C45906-D4-B5-Stephania.jpg?auto=format&fit=crop&q=80&w=400",
    metrics: {
      growth: "1000%",
      revenue: "$32K",
      followers: "1.6K"
    },
    quote: "As a mom, finding something that fits into my life while allowing me to spend quality time with my children has always been a challenge, but BME Creators has been a life-changing blessing. The daily Zoom calls with the team are incredibly helpful, keeping everything on track and providing clear guidance every step of the way. I love how straightforward my “homework” is—there’s no guessing, and I know exactly what type of videos will resonate with my audience, saving me so much time and stress. Thanks to their support, I’ve been able to create content that engages my fans while earning revenue that has completely transformed my life. I can focus on building a better future for my family without sacrificing precious time with my kids, and for that, I’m forever grateful to the amazing team at BME Creators.",
    tags: ["Gaming", "Entertainment", "Live Streaming"]
  }
];

export default function SuccessStories() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-primary-600 py-20">
        <FloatingShapes />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Creator Success Stories
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Real results from real creators who transformed their platforms with our help
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-600/80 to-purple-600/80 flex items-center justify-center">
                      <div className="text-white text-center p-8">
                        <h3 className="text-3xl font-bold mb-2">{story.name}</h3>
                        <p className="text-xl text-primary-100">{story.platform}</p>
                        <p className="text-lg text-primary-200">{story.niche}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <TrendingUp className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900">{story.metrics.growth}</div>
                          <div className="text-sm text-gray-600">Growth</div>
                        </div>
                        <div className="text-center">
                          <Star className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900">{story.metrics.revenue}</div>
                          <div className="text-sm text-gray-600">Revenue</div>
                        </div>
                        <div className="text-center">
                          <Users className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900">{story.metrics.followers}</div>
                          <div className="text-sm text-gray-600">Fans</div>
                        </div>
                      </div>

                      <blockquote className="text-gray-600 italic mb-6">
                        "{story.quote}"
                      </blockquote>

                      <div className="flex flex-wrap gap-2">
                        {story.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="mt-6 inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
                      Read Full Story
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}