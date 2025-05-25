
import { Users, Award, Globe, Heart, Target, Lightbulb } from "lucide-react";
import { Footer } from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Storytelling",
      description: "Every project begins with understanding the heart of your story and translating it into compelling visual narratives."
    },
    {
      icon: Target,
      title: "Results-Driven Approach",
      description: "We create content that doesn't just look beautiful but delivers measurable impact for your brand."
    },
    {
      icon: Users,
      title: "Collaborative Partnership",
      description: "Great stories are co-created. We work hand-in-hand with our clients to bring their vision to life."
    },
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      description: "Bridging traditional storytelling with modern techniques to create content that stands out."
    }
  ];

  const team = [
    {
      role: "Directors",
      description: "Visionary leaders who shape the creative direction of every project."
    },
    {
      role: "Writers",
      description: "Storytellers who craft compelling narratives that resonate with audiences."
    },
    {
      role: "DOPs",
      description: "Technical masters who bring visual excellence to every frame."
    },
    {
      role: "Editors",
      description: "Post-production experts who polish content to perfection."
    },
    {
      role: "Voice Artists",
      description: "Talented performers who give voice to your brand's message."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 luxury-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="font-playfair font-bold text-5xl md:text-6xl text-luxury-charcoal mb-6">
              About Yuj Productions
            </h1>
            <p className="font-inter text-xl text-luxury-charcoal/80 max-w-4xl mx-auto leading-relaxed">
              A dynamic, future-forward creative production house rooted in Jaipur, with a pan-India presence, specializing in transforming brand ideas into powerful visual narratives.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fade-in">
              <h2 className="font-playfair font-bold text-4xl text-luxury-charcoal mb-6">
                Who We Are
              </h2>
              <div className="space-y-6 font-inter text-lg text-luxury-charcoal/80 leading-relaxed">
                <p>
                  Yuj Productions is a dynamic, future-forward creative production house rooted in Jaipur, with a pan-India presence. We specialize in transforming brand ideas into powerful visual narratives that stir emotions, spark curiosity, and drive results.
                </p>
                <p>
                  Founded with a passion for storytelling and visual craftsmanship, Yuj Productions has become a trusted name in delivering impactful commercials, monologue films, branded content, and regional campaigns. We speak the language of your audience—be it Hindi, English, or regional dialects—and craft content that feels authentic, engaging, and deeply relatable.
                </p>
                <p>
                  With over 100+ distinctive projects and 80+ successful brand collaborations, our work reflects not only creative brilliance but also a strong foundation of trust, consistency, and partnership.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=500&fit=crop"
                alt="About Yuj Productions"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-luxury-gold/20 rounded-2xl"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-luxury-champagne/30 rounded-2xl"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=500&fit=crop"
                alt="Our approach"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-luxury-pearl rounded-2xl"></div>
            </div>
            <div className="order-1 lg:order-2 animate-fade-in">
              <h2 className="font-playfair font-bold text-4xl text-luxury-charcoal mb-6">
                Our Approach
              </h2>
              <div className="space-y-6 font-inter text-lg text-luxury-charcoal/80 leading-relaxed">
                <p>
                  Our approach is hands-on, collaborative, and rooted in deep client relationships—because we believe great stories are co-created. Our strength lies in our team—a powerhouse of directors, writers, DOPs, editors, and voice artists—each bringing their flair and finesse to the table.
                </p>
                <p>
                  Together, we mold your ideas into content that connects and compels. We don't just produce content—we build lasting impressions through emotionally rich and culturally resonant storytelling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-luxury-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-white rounded-3xl p-8 shadow-xl animate-fade-in">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-luxury-gold" />
                </div>
                <h3 className="font-playfair font-bold text-3xl text-luxury-charcoal">Our Vision</h3>
              </div>
              <h4 className="font-playfair font-semibold text-xl text-luxury-gold mb-4">
                Uniting Brands with Stories That Resonate
              </h4>
              <p className="font-inter text-lg text-luxury-charcoal/80 leading-relaxed">
                At Yuj Productions, our vision is to turn imagination into immersive storytelling. We aim to be at the forefront of creative innovation—bridging traditional roots with modern narratives, and empowering brands to find their authentic voice amidst a crowded market.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl animate-fade-in">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-2xl flex items-center justify-center">
                  <Globe className="w-8 h-8 text-luxury-gold" />
                </div>
                <h3 className="font-playfair font-bold text-3xl text-luxury-charcoal">Our Mission</h3>
              </div>
              <h4 className="font-playfair font-semibold text-xl text-luxury-gold mb-4">
                Amplifying Regional Voices, Nationwide
              </h4>
              <p className="font-inter text-lg text-luxury-charcoal/80 leading-relaxed">
                Our mission is to elevate regional and emerging brands by delivering exceptional production value, storytelling precision, and strategic creative direction. We are committed to becoming the go-to creative partner for brands that want to make a national mark—without losing their local essence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-luxury-charcoal mb-6">
              Our Values
            </h2>
            <p className="font-inter text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
              The principles that guide everything we do and every story we tell.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-luxury-cream rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-luxury-gold/10 rounded-xl flex items-center justify-center group-hover:bg-luxury-gold/20 transition-colors duration-300">
                    <value.icon className="w-7 h-7 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-2xl text-luxury-charcoal mb-3">
                      {value.title}
                    </h3>
                    <p className="font-inter text-luxury-charcoal/80 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-luxury-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-luxury-charcoal mb-6">
              Our Team
            </h2>
            <p className="font-inter text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">
              A powerhouse of creative professionals, each bringing their unique flair and finesse to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 elegant-hover text-center">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-luxury-gold" />
                </div>
                <h3 className="font-playfair font-semibold text-2xl text-luxury-charcoal mb-3">
                  {member.role}
                </h3>
                <p className="font-inter text-luxury-charcoal/70 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-luxury-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-white mb-6">
              Our Journey in Numbers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-24 h-24 bg-luxury-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-gold/30 transition-colors duration-300">
                <Award className="w-12 h-12 text-luxury-gold" />
              </div>
              <h3 className="font-playfair font-bold text-4xl text-luxury-gold mb-2">100+</h3>
              <p className="font-inter text-white/80">Distinctive Projects</p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-luxury-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-gold/30 transition-colors duration-300">
                <Users className="w-12 h-12 text-luxury-gold" />
              </div>
              <h3 className="font-playfair font-bold text-4xl text-luxury-gold mb-2">80+</h3>
              <p className="font-inter text-white/80">Brand Collaborations</p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-luxury-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-gold/30 transition-colors duration-300">
                <Globe className="w-12 h-12 text-luxury-gold" />
              </div>
              <h3 className="font-playfair font-bold text-4xl text-luxury-gold mb-2">Pan-India</h3>
              <p className="font-inter text-white/80">Presence</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
