
import { Link } from "react-router-dom";
import { ArrowRight, Play, Users, Award, Globe, ChevronRight } from "lucide-react";
import { Footer } from "@/components/Footer";

const Index = () => {
  const stats = [
    { number: "100+", label: "Distinctive Projects" },
    { number: "80+", label: "Brand Collaborations" },
    { number: "5+", label: "Years of Excellence" },
    { number: "Pan-India", label: "Presence" },
  ];

  const services = [
    {
      title: "Advertising",
      description: "Meaningful storytelling that connects your brand with the right audience at the right time.",
      link: "/services/advertising",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop"
    },
    {
      title: "Brand Photography",
      description: "Artful collaboration where your brand's story meets our visual imagination.",
      link: "/services/brand-photography",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop"
    },
    {
      title: "Corporate Films",
      description: "Cinematic corporate films that inspire, inform, and engage your audience.",
      link: "/services/corporate-films",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 luxury-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="font-playfair font-bold text-5xl md:text-7xl lg:text-8xl text-luxury-charcoal mb-6 leading-tight">
              Transforming Ideas Into
              <span className="block text-luxury-gold">Visual Stories</span>
            </h1>
            <p className="font-inter text-xl md:text-2xl text-luxury-charcoal/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Dynamic, future-forward creative production house specializing in powerful visual narratives that stir emotions, spark curiosity, and drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/services"
                className="group bg-luxury-gold hover:bg-luxury-gold/90 text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-2"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <button className="group flex items-center space-x-3 text-luxury-charcoal hover:text-luxury-gold transition-colors duration-300">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-luxury-gold/20 transition-colors duration-300">
                  <Play className="w-6 h-6 ml-1" />
                </div>
                <span className="font-inter font-medium text-lg">Watch Our Story</span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-luxury-gold/10 rounded-full animate-elegant-float"></div>
        <div className="absolute bottom-32 left-10 w-32 h-32 bg-luxury-champagne/20 rounded-full animate-elegant-float" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <h3 className="font-playfair font-bold text-4xl md:text-5xl text-luxury-gold mb-2">
                    {stat.number}
                  </h3>
                  <p className="font-inter text-luxury-charcoal/70 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-luxury-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="font-playfair font-bold text-4xl md:text-5xl text-luxury-charcoal mb-6">
                Who We Are
              </h2>
              <p className="font-inter text-lg text-luxury-charcoal/80 mb-8 leading-relaxed">
                Yuj Productions is a dynamic, future-forward creative production house rooted in Jaipur, with a pan-India presence. We specialize in transforming brand ideas into powerful visual narratives.
              </p>
              <p className="font-inter text-lg text-luxury-charcoal/80 mb-8 leading-relaxed">
                Founded with a passion for storytelling and visual craftsmanship, we've become a trusted name in delivering impactful commercials, monologue films, branded content, and regional campaigns.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 text-luxury-gold hover:text-luxury-gold/80 font-inter font-semibold text-lg transition-colors duration-300 group"
              >
                <span>Learn More About Us</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop"
                alt="Creative workspace"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-luxury-gold rounded-2xl opacity-80"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-luxury-champagne rounded-2xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-luxury-charcoal mb-6">
              Our Core Services
            </h2>
            <p className="font-inter text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
              From advertising to brand consultancy, we offer comprehensive creative solutions that elevate your brand's presence and impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-luxury-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 elegant-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-luxury-charcoal/20 group-hover:bg-luxury-charcoal/10 transition-colors duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair font-semibold text-2xl text-luxury-charcoal mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-inter text-luxury-charcoal/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 bg-luxury-charcoal hover:bg-luxury-charcoal/90 text-white px-8 py-4 rounded-lg font-inter font-semibold transition-all duration-300 transform hover:scale-105 group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-luxury-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="font-playfair font-bold text-3xl text-luxury-charcoal mb-4 flex items-center space-x-3">
                  <div className="w-3 h-3 bg-luxury-gold rounded-full"></div>
                  <span>Our Vision</span>
                </h3>
                <p className="font-inter text-lg text-luxury-charcoal/80 leading-relaxed">
                  Uniting Brands with Stories That Resonate. At Yuj Productions, our vision is to turn imagination into immersive storytelling. We aim to be at the forefront of creative innovation—bridging traditional roots with modern narratives.
                </p>
              </div>
              
              <div>
                <h3 className="font-playfair font-bold text-3xl text-luxury-charcoal mb-4 flex items-center space-x-3">
                  <div className="w-3 h-3 bg-luxury-gold rounded-full"></div>
                  <span>Our Mission</span>
                </h3>
                <p className="font-inter text-lg text-luxury-charcoal/80 leading-relaxed">
                  Amplifying Regional Voices, Nationwide. Our mission is to elevate regional and emerging brands by delivering exceptional production value, storytelling precision, and strategic creative direction.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-luxury-gold to-luxury-champagne rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <div className="text-center">
                      <Globe className="w-16 h-16 text-luxury-gold mx-auto mb-4" />
                      <h4 className="font-playfair font-bold text-2xl text-luxury-charcoal">
                        Pan-India Reach
                      </h4>
                      <p className="font-inter text-luxury-charcoal/70 mt-2">
                        Local Essence
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-luxury-gold rounded-full animate-elegant-float"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-luxury-champagne rounded-full animate-elegant-float" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-luxury-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-white mb-6">
              Ready to Tell Your Story?
            </h2>
            <p className="font-inter text-xl text-white/80 mb-12 max-w-3xl mx-auto">
              Let's transform your vision into compelling visual narratives that resonate with your audience and drive meaningful results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-luxury-gold hover:bg-luxury-gold/90 text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-luxury-charcoal px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
