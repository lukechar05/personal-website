import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-6xl md:text-6xl font-bold mb-8 text-gray-800 font-audiowide">Hi 👋</h1>
      
      <div className="space-y-6 text-lg text-gray-700">
        <p>
          I'm Luke Charlesworth, a recent CS and history graduate from the University of Pittsburgh.
        </p>
        
        <p>
          I currently live in Manhattan where I am a founding engineer for <a href="https://www.videonest.co/" target="_blank" rel="noopener noreferrer" className="font-medium text-[#8B5CF6] hover:text-[#7C3AED] transition-colors">Videonest</a>— building infrastructure to improve how media companies manage and monetize their video libraries.
        </p>
        
        <p>
          Outside of the startup sphere, I pioneered an ongoing Ed-tech initiative to deliver academic resources and teacher training materials off-grid Sierra Leonean primary schools. My partner and I designed a solar charging system and process for converting donated laptops into remote learning servers, before making 2 trips to <a href="https://www.sci.pitt.edu/news/sierra-leone-continued" target="_blank" rel="noopener noreferrer" className="font-medium text-[#8B5CF6] hover:text-[#7C3AED] transition-colors">Sierra Leone</a> to deploy this technology in the villages of Kabala, Fadugu and Senekedugu. 
          Currently, 300 sixth grade students across the Koinadugu district utilize these "Virtual Learning Centers" to strengthen their foundational Math skills. 
        </p>
        
        <p>
          When I'm not locked in at work, you can find me playing soccer in the city, browsing the CUNY library, or practicing my French and Spanish——because they need <span className="italic">a lot</span> of practice.
        </p>
        
        <p className="pt-4 pb-8">
          Shoot me an email at <a href="mailto:lukecharops@gmail.com" className="font-medium text-[#9333EA] hover:text-[#7C3AED] transition-colors">lukecharops@gmail.com</a> if you're building something cool or need help shipping some code ;)
        </p>
        
        <div className="flex justify-center mt-8">
          <div className="relative rounded-md overflow-hidden border border-gray-200 shadow-sm">
            <Image 
              src="/assets/pfp.PNG" 
              alt="Luke Charlesworth" 
              width={300} 
              height={300}
              className="object-cover" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
