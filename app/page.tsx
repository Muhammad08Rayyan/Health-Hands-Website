"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    // Ensure page starts at top
    window.scrollTo(0, 0);
    // Enable smooth scrolling for the entire document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Simple Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe all elements with scroll-reveal class
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative pt-8 pb-16 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-blue-300/20 to-indigo-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute -bottom-8 -left-32 w-80 h-80 bg-gradient-to-r from-green-300/20 to-emerald-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        <div className="responsive-container">
          {/* Navigation Header */}
          <div className="flex justify-between items-center mb-8 md:mb-12">
            <div className="flex items-center space-x-3">
              <Image
                src="/Logo.png"
                alt="Health Hands Pharmacy"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <div>
                <span className="text-lg md:text-xl font-bold text-gray-900">Health Hands Pharmacy</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-blue-600 transition-all duration-300 cursor-pointer hover:scale-105">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-all duration-300 cursor-pointer hover:scale-105">About</button>
              <button onClick={() => scrollToSection('app')} className="text-gray-600 hover:text-blue-600 transition-all duration-300 cursor-pointer hover:scale-105">App</button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-blue-600 transition-all duration-300 cursor-pointer hover:scale-105">FAQ</button>
            </div>
            
            <div>
              <a 
                href="https://play.google.com/store/apps/details?id=com.healthhandspharmacy.healthhands"
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="hidden sm:inline">Download App</span>
                <span className="sm:hidden">App</span>
              </a>
            </div>
          </div>
          

          {/* Centered Hero Content */}
          <div className="relative text-center max-w-5xl mx-auto min-h-[60vh] md:min-h-[75vh] flex flex-col justify-center z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-semibold shadow-lg">
                <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Trusted Healthcare Partner Since Day One
              </div>
              
              <div className="relative">
                <h1 className="hero-title fluid-text-6xl font-black text-gray-900 leading-none mb-4">
                  <span className="block animate-reveal-left animate-delay-400 text-reveal">Health in Your</span>
                  <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-reveal-right animate-delay-600 text-reveal">
                    Hands
                  </span>
                </h1>
                {/* Decorative elements with animations */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 journey-line rounded-full opacity-60 animate-delay-800"></div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 journey-line rounded-full opacity-40 animate-delay-1000"></div>
              </div>
              
              <p className="hero-subtitle fluid-text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light animate-reveal-up animate-delay-800">
                Where <span className="font-semibold text-blue-600 animate-breathe">authentic medicines</span> meet 
                <span className="font-semibold text-indigo-600 animate-breathe animate-delay-500"> intelligent technology</span> — 
                creating the future of personalized healthcare.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mt-8 md:mt-12">
                <a 
                  href="https://www.google.com/maps/place/Health+Hands+Pharmacy/@24.9411445,67.1234564,18z/data=!3m1!4b1!4m6!3m5!1s0x3eb339c82b062d6f:0x1be0f6023e21528!8m2!3d24.9411445!4d67.1242068!16s%2Fg%2F11vz5g_snw?entry=ttu&g_ep=EgoyMDI1MDgxMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-mobile group relative inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 md:px-12 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl overflow-hidden journey-card animate-reveal-left animate-delay-1000"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Visit Our Store
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.healthhandspharmacy.healthhands"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-mobile group relative inline-flex items-center justify-center border-2 border-gray-300 hover:border-transparent bg-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 text-gray-700 hover:text-white px-8 md:px-12 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl journey-card animate-reveal-right animate-delay-1200"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Download App
                </a>
              </div>

              {/* Trust Badges - Centered */}
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 pt-8 md:pt-12 mt-8 md:mt-12 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-700">Licensed Pharmacy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-700">100% Genuine Medicines</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-700">Professional Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Experience Section - Professional Journey */}
      <section id="services" className="py-16 md:py-32 bg-white relative overflow-hidden scroll-smooth">
        <div className="responsive-container">
          {/* Elegant Header */}
          <div className="text-center mb-12 md:mb-24 scroll-reveal">
            <div className="inline-block">
              <h2 className="fluid-text-4xl font-light text-gray-900 mb-4 md:mb-6 tracking-wide">
                The Health Hands <span className="font-semibold text-blue-600">Experience</span>
              </h2>
              <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
            </div>
          </div>

          {/* Comprehensive Services Grid */}
          <div className="responsive-grid mb-12 md:mb-24">
            <div className="feature-card bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300 scroll-reveal">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <svg className="w-8 h-8 text-blue-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Prescription Medicines</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Full prescription dispensing service with quality assurance and expert consultation</p>
            </div>

            <div className="feature-card bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300 scroll-reveal">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 transition-colors duration-300">
                <svg className="w-8 h-8 text-green-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Over-the-Counter</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Wide selection of OTC medicines for common ailments and health needs</p>
            </div>

            <div className="feature-card bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300 scroll-reveal">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500 transition-colors duration-300">
                <svg className="w-8 h-8 text-purple-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Temperature-Controlled Storage</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Professional storage for sensitive medications requiring specific temperature conditions</p>
            </div>

            <div className="feature-card bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300 scroll-reveal">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-pink-500 transition-colors duration-300">
                <svg className="w-8 h-8 text-pink-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Mother & Baby Care</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Specialized maternal and child healthcare products for every stage of development</p>
            </div>

            <div className="feature-card bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300 scroll-reveal">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-500 transition-colors duration-300">
                <svg className="w-8 h-8 text-teal-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M15 5l2 2" />
                </svg>
              </div>
              <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Topical Medications</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Ointments, creams, and lotions for various skin conditions and treatments</p>
            </div>

            <div className="feature-card bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300 scroll-reveal">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                <svg className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Nutrition & Supplements</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Health and wellness products for overall well-being and nutritional support</p>
            </div>

            <div className="feature-card bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300 scroll-reveal">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-500 transition-colors duration-300">
                <svg className="w-8 h-8 text-indigo-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Medical Instruments</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Healthcare monitoring devices and medical equipment for home care</p>
            </div>

            <div className="feature-card bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300 scroll-reveal">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-cyan-500 transition-colors duration-300">
                <svg className="w-8 h-8 text-cyan-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Professional Counseling</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Expert medication guidance and pharmaceutical consultation from licensed professionals</p>
            </div>
          </div>

          {/* Three-Step Journey */}
          <div className="space-y-16 md:space-y-32">
            {/* Step 1 - Trust */}
            <div className="group scroll-reveal">
              <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
                <div className="lg:col-span-7 space-y-6 md:space-y-8">
                  <div className="flex items-center space-x-4 mb-6 md:mb-8">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">01</span>
                    </div>
                    <div className="h-px bg-gray-200 flex-1"></div>
                  </div>
                  <h3 className="fluid-text-3xl font-light text-gray-900 mb-4 md:mb-6">
                    Built on <span className="font-semibold">Trust</span>
                  </h3>
                  <p className="fluid-text-lg text-gray-600 leading-relaxed mb-6 md:mb-8">
                    Every prescription, every consultation, every interaction is grounded in decades of pharmaceutical expertise. 
                    We&apos;re not just licensed—we&apos;re trusted custodians of your health.
                  </p>
                  <div className="flex items-center justify-center lg:justify-start space-x-6 md:space-x-8">
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-semibold text-gray-900">Licensed</div>
                      <div className="text-xs md:text-sm text-gray-500">Pharmacy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-semibold text-gray-900">100%</div>
                      <div className="text-xs md:text-sm text-gray-500">Genuine</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-semibold text-gray-900">Expert</div>
                      <div className="text-xs md:text-sm text-gray-500">Care</div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 mt-8 lg:mt-0">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 md:p-8 shadow-lg border border-blue-100">
                      <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-900 text-center mb-3">Professional Standards</h4>
                      <p className="text-gray-600 text-center text-sm leading-relaxed">
                        Temperature-controlled storage, verified suppliers, and rigorous quality checks ensure every medication meets the highest standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 - Innovation */}
            <div className="group scroll-reveal">
              <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
                <div className="lg:col-span-5 lg:order-1">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-6 md:p-8 shadow-lg border border-purple-100">
                      <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-900 text-center mb-3">AI-Powered Intelligence</h4>
                      <p className="text-gray-600 text-center text-sm leading-relaxed">
                        Smart recommendations, drug interactions, and personalized health insights powered by advanced algorithms.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 lg:order-2 space-y-6 md:space-y-8">
                  <div className="flex items-center space-x-4 mb-6 md:mb-8 lg:justify-end">
                    <div className="h-px bg-gray-200 flex-1"></div>
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">02</span>
                    </div>
                  </div>
                  <h3 className="fluid-text-3xl font-light text-gray-900 mb-4 md:mb-6 lg:text-right">
                    Enhanced by <span className="font-semibold">Innovation</span>
                  </h3>
                  <p className="fluid-text-lg text-gray-600 leading-relaxed mb-6 md:mb-8 lg:text-right">
                    Technology amplifies trust, never replaces it. Our AI assistant, medicine scanner, and digital health records 
                    make healthcare more intelligent and accessible.
                  </p>
                  <div className="flex items-center justify-center lg:justify-end space-x-6 md:space-x-8">
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-semibold text-gray-900">AI</div>
                      <div className="text-xs md:text-sm text-gray-500">Assistant</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-semibold text-gray-900">Smart</div>
                      <div className="text-xs md:text-sm text-gray-500">Scanner</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-semibold text-gray-900">Digital</div>
                      <div className="text-xs md:text-sm text-gray-500">Records</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 - Care */}
            <div className="group scroll-reveal">
              <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
                <div className="lg:col-span-7 space-y-6 md:space-y-8">
                  <div className="flex items-center space-x-4 mb-6 md:mb-8">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold">03</span>
                    </div>
                    <div className="h-px bg-gray-200 flex-1"></div>
                  </div>
                  <h3 className="fluid-text-3xl font-light text-gray-900 mb-4 md:mb-6">
                    Delivered with <span className="font-semibold">Care</span>
                  </h3>
                  <p className="fluid-text-lg text-gray-600 leading-relaxed mb-6 md:mb-8">
                    From prescription counseling to 24/7 app access, every touchpoint is designed around your health and convenience. 
                    Professional care that adapts to your lifestyle.
                  </p>
                  <div className="flex items-center justify-center lg:justify-start space-x-6 md:space-x-8">
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-semibold text-gray-900">24/7</div>
                      <div className="text-xs md:text-sm text-gray-500">Access</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-semibold text-gray-900">Expert</div>
                      <div className="text-xs md:text-sm text-gray-500">Guidance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-semibold text-gray-900">Personal</div>
                      <div className="text-xs md:text-sm text-gray-500">Service</div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 mt-8 lg:mt-0">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 md:p-8 shadow-lg border border-green-100">
                      <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-900 text-center mb-3">Personalized Care</h4>
                      <p className="text-gray-600 text-center text-sm leading-relaxed">
                        Every interaction is tailored to your unique health needs, preferences, and lifestyle for optimal care outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Background Elements */}
        <div className="absolute top-1/3 -left-32 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </section>

      {/* About Us Section - Refined & Professional */}
      <section id="about" className="py-16 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="responsive-container">
          <div className="text-center mb-12 md:mb-24">
            <div className="inline-block">
              <h2 className="fluid-text-4xl font-light text-gray-900 mb-4 md:mb-6 tracking-wide">
                About <span className="font-semibold">Health Hands</span>
              </h2>
              <div className="w-16 h-0.5 bg-gray-400 mx-auto"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center mb-12 md:mb-24">
            {/* Story */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6">
                <p className="fluid-text-xl font-light text-gray-700 leading-relaxed">
                  We believe healthcare should be both 
                  <span className="font-medium text-gray-900"> trusted and intelligent</span>.
                </p>
                <p className="fluid-text-base text-gray-600 leading-relaxed">
                  Founded on decades of pharmaceutical expertise, Health Hands Pharmacy bridges traditional care 
                  with modern innovation. Every prescription, every consultation, every digital tool is designed 
                  around one simple principle: your health, enhanced by technology, never compromised by it.
                </p>
              </div>
              
              <div className="pt-8">
                <blockquote className="border-l-4 border-blue-500 pl-6">
                  <p className="text-xl font-light text-gray-700 italic mb-3">
                    &quot;To inspire hope, and contribute to health and well-being that improves quality of life.&quot;
                  </p>
                  <footer className="text-gray-500 text-sm">Our Mission</footer>
                </blockquote>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-light text-gray-900 mb-8 text-center">
                <span className="font-medium">Healthy People</span> in <span className="font-medium">Healthy Communities</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-600 leading-relaxed">
                    Combining pharmaceutical excellence with cutting-edge health technology
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-600 leading-relaxed">
                    Making healthcare more accessible through our advanced mobile application
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-600 leading-relaxed">
                    Delivering personalized care that adapts to your lifestyle and needs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid - Simplified */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <svg className="w-8 h-8 text-blue-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3">Licensed Excellence</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Fully licensed pharmacy with rigorous quality standards and professional oversight</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500 transition-colors duration-300">
                <svg className="w-8 h-8 text-purple-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3">Smart Innovation</h4>
              <p className="text-gray-600 text-sm leading-relaxed">AI-powered health tools designed by pharmacists for real-world healthcare needs</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 transition-colors duration-300">
                <svg className="w-8 h-8 text-green-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3">Personal Care</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Individualized attention and care tailored to your unique health journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Showcase Section */}
      <section id="app" className="py-32 bg-gradient-to-br from-indigo-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-wide">
                Your Health, <span className="font-semibold text-indigo-600">Intelligently Enhanced</span>
              </h2>
              <div className="w-16 h-0.5 bg-indigo-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                More than an app—it&apos;s your complete digital health companion. Built by pharmacists, 
                powered by AI, designed for your life.
              </p>
            </div>
          </div>

          {/* Main App Showcase */}
          <div className="grid lg:grid-cols-12 gap-16 items-center mb-24">
            {/* Left - App Features */}
            <div className="lg:col-span-7 space-y-12">
              {/* Feature 1 - AI Assistant */}
              <div className="group">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">AI Health Assistant</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      Get instant health guidance, drug interaction checks, and personalized recommendations. 
                      Like having a pharmacist in your pocket, 24/7.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Real-time responses</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Drug interactions</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 - Medicine Scanner */}
              <div className="group">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h-4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Smart Medicine Scanner</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      Point your camera at any medication to instantly verify authenticity and get complete information. 
                      Advanced anti-counterfeiting technology keeps you safe.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>QR & Barcode</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        <span>Authenticity check</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 3 - Health Records */}
              <div className="group">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Complete Health Records</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      Store and organize blood tests, radiology reports, and vital signs all in one secure place. 
                      Your complete health history, always accessible.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Lab results</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span>Vitals tracking</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Phone Mockup with App Screens */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                {/* Phone Frame */}
                <div className="w-80 h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-blue-100 rounded-[2.2rem] relative overflow-hidden">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 py-3 text-black text-xs">
                      <span className="font-medium">9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="flex space-x-0.5">
                          <div className="w-1 h-2 bg-black rounded-full"></div>
                          <div className="w-1 h-2 bg-black rounded-full"></div>
                          <div className="w-1 h-2 bg-black rounded-full opacity-60"></div>
                          <div className="w-1 h-2 bg-black rounded-full opacity-30"></div>
                        </div>
                        <div className="w-6 h-3 border border-black rounded-sm ml-1">
                          <div className="w-4 h-2 bg-black rounded-sm ml-0.5 mt-0.5"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* App Header */}
                    <div className="px-6 mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <Image
                            src="/Logo.png"
                            alt="Health Hands"
                            width={36}
                            height={36}
                            className="rounded-lg"
                          />
                          <div>
                            <h3 className="font-bold text-gray-900 text-sm">Health Hands</h3>
                            <p className="text-xs text-gray-600">Your Health Partner</p>
                          </div>
                        </div>
                        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5 5-5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Search Bar */}
                      <div className="bg-white rounded-2xl p-3 mb-6 shadow-sm border border-gray-100">
                        <div className="flex items-center space-x-3 text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          <span className="text-xs">Search medicines...</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Feature Cards */}
                    <div className="px-6 space-y-3">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-4 text-white shadow-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-sm mb-1">AI Assistant</h4>
                            <p className="text-xs opacity-90">Ask any health question</p>
                          </div>
                          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-4 text-white shadow-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-sm mb-1">Scan Medicine</h4>
                            <p className="text-xs opacity-90">Verify authenticity</p>
                          </div>
                          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h-4" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-4 text-white shadow-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-sm mb-1">Health Records</h4>
                            <p className="text-xs opacity-90">All your data, organized</p>
                          </div>
                          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-4 text-white shadow-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-sm mb-1">Emergency</h4>
                            <p className="text-xs opacity-90">Instant access to help</p>
                          </div>
                          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="feature-card bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300 scroll-reveal">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Prescription Upload</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Capture and submit prescriptions instantly with your camera</p>
            </div>

            <div className="feature-card bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300 scroll-reveal">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Health Education</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Disease database, health tips, and educational videos</p>
            </div>

            <div className="feature-card bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300 scroll-reveal">
              <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3">TelePharmacist</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Direct consultation with licensed pharmacists</p>
            </div>

            <div className="feature-card bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300 scroll-reveal">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Order Tracking</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Real-time updates from order to delivery</p>
            </div>
          </div>

          {/* Security & Privacy Section */}
          <div className="bg-gray-50 rounded-3xl p-12 mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Your Health Data is <span className="text-indigo-600">Secure</span>
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We employ enterprise-grade security measures to protect your personal health information and ensure complete privacy.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3">End-to-End Encryption</h4>
                <p className="text-gray-600 text-sm leading-relaxed">All health data is encrypted both in transit and at rest using industry-standard AES-256 encryption</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Healthcare Compliance</h4>
                <p className="text-gray-600 text-sm leading-relaxed">We comply with healthcare data protection standards and privacy regulations to safeguard your information</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3">User Control</h4>
                <p className="text-gray-600 text-sm leading-relaxed">You have complete control over your data - view, update, or delete your information anytime</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 mt-12 border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Privacy Commitment</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Your health records, prescriptions, and personal information are never shared with third parties without your explicit consent. 
                    We use your data solely to provide better healthcare services and personalized recommendations within our pharmacy ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* App Download CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                Download the Future of Healthcare
              </h3>
              <p className="text-indigo-100 text-xl mb-8 max-w-2xl mx-auto">
                Everything you need for better health—in one intelligent, secure, and easy-to-use app.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.healthhandspharmacy.healthhands"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer flex items-center space-x-3"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-600 leading-tight">Get it on</div>
                    <div className="text-lg font-bold leading-tight">Google Play</div>
                  </div>
                </a>
                <div className="text-indigo-200 text-sm">
                  Available now • Free download
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </section>


      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services, app, and pharmacy operations.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What are your pharmacy hours?",
                answer: "We are open Monday through Saturday from 9:00 AM to 8:00 PM. We&apos;re closed on Sundays. WhatsApp consultations are available during our operating hours."
              },
              {
                question: "Is the mobile app free to download?",
                answer: "Yes! Our Health Hands Pharmacy mobile app is completely free to download from the Google Play Store. You can order medicines, upload prescriptions, and track your health records at no cost."
              },
              {
                question: "Do you deliver medicines?",
                answer: "Yes, we offer medicine delivery services. You can place orders through our mobile app or contact us directly. Delivery times and areas may vary."
              },
              {
                question: "Can I upload my prescription through the app?",
                answer: "Absolutely! Our app has a prescription upload feature where you can take photos of your prescriptions and submit them digitally. Our pharmacists will review and process your order."
              },
              {
                question: "Are all medicines genuine?",
                answer: "Yes, we guarantee 100% genuine medicines. We source all our medications from authorized distributors and maintain strict quality control measures."
              },
              {
                question: "How can I contact you for urgent consultations?",
                answer: "You can reach us via WhatsApp at +92 310 2604501 during our pharmacy hours (9 AM - 8 PM, Mon-Sat) for urgent consultations and medication guidance."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/923102604501" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>WhatsApp Us</span>
              </a>
              <a 
                href="tel:03102604501"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid lg:grid-cols-4 gap-12">
              
              {/* Brand Section */}
              <div className="lg:col-span-1">
                <div className="flex items-center space-x-3 mb-6">
                  <Image
                    src="/Logo.png"
                    alt="Health Hands Pharmacy"
                    width={48}
                    height={48}
                    className="rounded-lg"
                  />
                  <div>
                    <span className="text-xl font-bold text-white">Health Hands</span>
                    <p className="text-gray-400 text-sm">Pharmacy</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Where authentic medicines meet intelligent technology — creating the future of personalized healthcare.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/people/Health-Hands-Pharmacy/61558525346467/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://wa.me/923102604501" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
                <ul className="space-y-4">
                  <li>
                    <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Our Services</button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">About Us</button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('app')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Mobile App</button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">FAQ</button>
                  </li>
                  <li>
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.healthhandspharmacy.healthhands"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    >
                      Download App
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-300 leading-relaxed">
                        University Medical Center<br />
                        University of Karachi<br />
                        Karachi, Pakistan
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:03102604501" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                      0310 2604501
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <a 
                      href="https://www.google.com/maps/place/Health+Hands+Pharmacy/@24.9411445,67.1234564,18z/data=!3m1!4b1!4m6!3m5!1s0x3eb339c82b062d6f:0x1be0f6023e21528!8m2!3d24.9411445!4d67.1242068!16s%2Fg%2F11vz5g_snw?entry=ttu&g_ep=EgoyMDI1MDgxMC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold text-white mb-6">Opening Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Mon - Sat</span>
                    <span className="text-white font-medium">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-red-400 font-medium">Closed</span>
                  </div>
                  <div className="pt-3 border-t border-gray-700">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Consultations available via WhatsApp during pharmacy hours
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025 Health Hands Pharmacy. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <span className="text-gray-400">Licensed Pharmacy</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">100% Genuine Medicines</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">Professional Care</span>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/5 to-purple-900/5"></div>
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>
      </footer>


    </div>
  );
}
