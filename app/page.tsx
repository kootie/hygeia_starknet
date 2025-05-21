'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [text, setText] = useState('');
  const fullText = 'Hygeia-Kenya';
  const typingSpeed = 150; // milliseconds per character
  const router = useRouter();
  
  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);
    
    return () => clearInterval(timer);
  }, []);

  
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <header className="bg-pink-100 dark:bg-pink-950 py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-pink-700 dark:text-pink-300 mb-2">
            Welcome to
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold text-pink-700 dark:text-pink-300 mb-4 min-h-16">
            <span className="typewriter-text relative">
              {text}
              <span className="absolute -right-1 top-0 animate-blink"></span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-pink-900 dark:text-pink-200 max-w-2xl mx-auto">
            Empowering girls through accessible menstrual products. Buy with your blockchain wallet today.
          </p>
          <div className="mt-8">
            <button className="bg-pink-700 dark:bg-pink-600 text-white px-6 py-3 rounded-full text-lg hover:bg-pink-800 dark:hover:bg-pink-500 transition" onClick={()=> router.push('/sign-up')}>
              Shop Now
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-pink-200 dark:border-pink-800 rounded-lg shadow-sm bg-white dark:bg-zinc-900">
            <h3 className="text-xl font-semibold text-pink-700 dark:text-pink-300 mb-2">Secure Payments</h3>
            <p className="text-pink-900 dark:text-pink-200">
              Use your blockchain wallet for fast, transparent, and secure transactions.
            </p>
          </div>
          <div className="p-6 border border-pink-200 dark:border-pink-800 rounded-lg shadow-sm bg-white dark:bg-zinc-900">
            <h3 className="text-xl font-semibold text-pink-700 dark:text-pink-300 mb-2">Quality Products</h3>
            <p className="text-pink-900 dark:text-pink-200">
              Access a variety of reliable and hygienic menstrual care items curated for your needs.
            </p>
          </div>
          <div className="p-6 border border-pink-200 dark:border-pink-800 rounded-lg shadow-sm bg-white dark:bg-zinc-900">
            <h3 className="text-xl font-semibold text-pink-700 dark:text-pink-300 mb-2">Support a Cause</h3>
            <p className="text-pink-900 dark:text-pink-200">
              Every purchase helps support menstrual health initiatives for girls in underserved areas.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-pink-100 dark:bg-pink-950 py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-700 dark:text-pink-300 mb-4">Join the Movement</h2>
          <p className="text-lg text-pink-900 dark:text-pink-200 mb-6 max-w-2xl mx-auto">
            Your support makes a difference. Shop with purpose and help make menstrual care accessible to all.
          </p>
          <button className="bg-pink-700 dark:bg-pink-600 text-white px-6 py-3 rounded-full text-lg hover:bg-pink-800 dark:hover:bg-pink-500 transition" onClick={()=> router.push('/sign-up')}>
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}