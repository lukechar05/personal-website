"use client";

import Image from 'next/image';
import ImageCarousel from '../../components/ImageCarousel';
import { FileText, Laptop, Package, Download, LineChart } from 'lucide-react';
import { useEffect, useState } from 'react';
import './styles.css';

export default function ProjectsPage() {
  const [activeSection, setActiveSection] = useState('rachel');
  
  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.project-section');
      let current = '';
      
      // Find the section closest to the middle of the viewport
      const viewportHeight = window.innerHeight;
      const viewportMiddle = window.scrollY + (viewportHeight / 2);
      
      let closestSection = null;
      let closestDistance = Infinity;
      
      sections.forEach((section) => {
        const sectionRect = section.getBoundingClientRect();
        const sectionMiddle = sectionRect.top + (sectionRect.height / 2);
        const sectionMiddleAbsolute = window.scrollY + sectionMiddle;
        const distance = Math.abs(viewportMiddle - sectionMiddleAbsolute);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section;
        }
      });
      
      if (closestSection) {
        current = closestSection.getAttribute('id');
      }
      
      if (current !== '' && current !== activeSection) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once immediately to set initial active section
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);
  
  // Scroll to section when nav item is clicked
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };
  const rachelImages = [
    '/assets/pc1.jpg',
    '/assets/pc2.JPG',
    '/assets/pc3.JPG',
    '/assets/pc4.JPG',
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
      <div className="sticky top-0 z-10 py-4 bg-gray-50 border-b border-gray-100 mb-8">
        <nav className="flex overflow-x-auto hide-scrollbar pb-2 justify-center">
          <ul className="flex space-x-6 mx-auto">
            <li>
              <button
                onClick={() => scrollToSection('rachel')}
                className={`text-sm font-light transition-colors whitespace-nowrap ${activeSection === 'rachel' ? 'text-[#8B5CF6]' : 'text-gray-600 hover:text-gray-900'}`}
              >
                RACHEL PC
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('videonest')}
                className={`text-sm font-light transition-colors whitespace-nowrap ${activeSection === 'videonest' ? 'text-[#8B5CF6]' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Videonest SDK
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('youtube')}
                className={`text-sm font-light transition-colors whitespace-nowrap ${activeSection === 'youtube' ? 'text-[#8B5CF6]' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Content Download
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('ml')}
                className={`text-sm font-light transition-colors whitespace-nowrap ${activeSection === 'ml' ? 'text-[#8B5CF6]' : 'text-gray-600 hover:text-gray-900'}`}
              >
                ML Corrosion
              </button>
            </li>
          </ul>
        </nav>
      </div>
      
      <div className="mb-16 space-y-16">
        <div id="rachel" className="project-section pt-4 -mt-4">
          <div className="p-6 space-y-4">

            
            <div className="my-6">
              <ImageCarousel images={rachelImages} />
            </div>
            <h2 className="text-lg md:text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Laptop size={18} className="text-gray-800 flex-shrink-0" />
              <span>RACHEL PC Prototype</span>
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                As part of my remote learning technology project, our team needed cheap and maintainable infrastructure that could host and locally serve the educational content library we had amassed. I prototyped a process for converting any donated laptop into a lightweight Linx-Mint server, utilizing a <a href="https://worldpossible.org/" target="_blank" rel="noopener noreferrer" className="font-medium text-[#8B5CF6] hover:text-[#7C3AED] transition-colors">RACHEL network layer</a> for resource distribution.
              </p>
              <p>
                We then battled Linux to optimize the OS for power consumption—to ensure our device could maintain charge for an entire classday. Ultimately 4 RACHEL PC's were deployed in SL for 2023 school year, and this project won the Mascaro Center for Sustainable Innovation Student Prototyping Grant.
              </p>
            </div>
            
            <div className="mt-6 flex justify-center">
              <a 
                href="/assets/RACHELPC.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#8B5CF6] text-[#8B5CF6] rounded-md hover:bg-[#8B5CF6] hover:text-white transition-colors"
              >
                <FileText size={18} />
                View Presentation
              </a>
            </div>
          </div>
        </div>

        <div id="videonest" className="project-section pt-4 -mt-4">
          <div className="p-6 space-y-4">
            <h2 className="text-lg md:text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Package size={18} className="text-gray-800 flex-shrink-0" />
              <span>Videonest SDK</span>
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                After attending a few events in the video space, I identified that founders of subscription web-based communities were consistently annoyed with Vimeo and Wistia's outrageous video hosting/streaming costs and sharky overage fees. Thanks to the owned and operated cloud video infrastructure we had already built at Videonest, I was able to whip up a quick SDK, so any web developer could upload a large video file and get back a simple Videonest Embed, complete with adaptive bitrate streaming for their website.
              </p>
              <p>
                As the popularity of the <a href="https://www.npmjs.com/package/videonest-sdk" target="_blank" rel="noopener noreferrer" className="font-medium text-[#8B5CF6] hover:text-[#7C3AED] transition-colors">videonest-sdk</a> grew, I added video re-encoding, subtitle generation through <span className="font-bold uppercase">Faster Whisper</span>, and ultimately an enterprise tier of the SDK with tokenized authentication.
              </p>

              
            </div>
          </div>
        </div>

        <div id="youtube" className="project-section pt-4 -mt-4">
          <div className="p-6 space-y-4">
            <div className="my-6 flex justify-center">
              <div className="relative w-full max-w-md aspect-video">
                <Image 
                  src="/assets/embeddedChip.png"
                  alt="Embedded chip for YouTube content download"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <h2 className="text-lg md:text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Download size={18} className="text-gray-800 flex-shrink-0" />
              <span>Scaled Content Download</span>
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Annoyed at Youtube's gate-keeping of creator content, I co-engineered a system designed for mass content download. I purchased and configured four <a href="https://radxa.com/products/zeros/zero3e/" target="_blank" rel="noopener noreferrer" className="font-medium text-[#8B5CF6] hover:text-[#7C3AED] transition-colors">Radxa SBC's</a> and turned them into secure proxies (aka hooked them up to all of my friend's routers). I then stood up a server that uses the <a href="https://github.com/yt-dlp/yt-dlp" target="_blank" rel="noopener noreferrer" className="font-medium text-[#8B5CF6] hover:text-[#7C3AED] transition-colors">yt-dlp</a> package for video extraction and tailscale to securely communicate with each proxy.
              </p>
              <p>
                After realizing that Youtube quickly flagged non-authenticated requests, I had to implement session rotation of cookies from a series of Google accounts. This multi-node approach enabled high-throughput processing for downloading a creator's entire video library within a matter of hours.
              </p>
            </div>
          </div>
        </div>

        <div id="ml" className="project-section pt-4 -mt-4">
          <div className="p-6 space-y-4">
            <h2 className="text-lg md:text-2xl font-bold text-gray-800 flex items-center gap-2">
              <LineChart size={18} className="text-gray-800 flex-shrink-0" />
              <span>ML to Limit Corrosion</span>
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                This was a university-sponsored project for PPG Industries, where each team was given a noisy data sample of paint corrosion simulations and asked to build a model that could predict and thereby limit corrosion over time. I conducted EDA feature analysis on a variety of provided chemical and manufacturing inputs and then tried my hand at architecting and training a neuralnet, gradient boosted tree, and random forest model.
              </p>
              <p>
                Eventually, I landed on the neuralnet model and then tuned for the highest AUC score, which ended up scoring ~93% on the test set.
              </p>
            </div>
            
            <div className="mt-6 flex justify-center">
              <a 
                href="/assets/modeling.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#8B5CF6] text-[#8B5CF6] rounded-md hover:bg-[#8B5CF6] hover:text-white transition-colors"
              >
                <FileText size={18} />
                View Presentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
