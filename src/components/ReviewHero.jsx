import React from 'react';

const featuredStories = [
    {
    href: "/anact-review",
    imgSrc: "/images/anact.webp",
    category: "Lifestyle",
    title: "Anact Reviews: Best Hemp-Based Towel And Face Masks",
    desc: "Anact is known to offer branded quality leggings that are super comfortable and extremely resistant. The fabric is fantastic that allows you to wear them on any occasion.",
    date: "September 12, 2025"
  }, 
 
  {
    href: "/fitphyt-discount-code",
    imgSrc: "https://scoopreview.com/wp-content/uploads/2019/09/Fitphyt-Coupons.jpg",
    category: "Lifestyle",
    title: "Fitphyt Discount: Branded Activewear Built Comfortably",
    desc: "Fitphyt is known to offer branded quality leggings that are super comfortable and extremely resistant. The fabric is fantastic that allows you to wear them on any occasion.",
    date: "January 10, 2024"
  },
  {
    href: "/fruit-bouquets-review",
    imgSrc: "https://scoopreview.com/wp-content/uploads/2022/04/Fluttering-Fruit-Arrangement-Review.jpg",
    category: "Food & Drinks",
    title: "Fruit Bouquets: Curated Floral and Gourmet Treats",
    desc: "Fruit Bouquets is a brand that offers an endless collection of beautifully presented fruits and flowers perfect for any landmark occasion.",
    date: "March 10, 2024"
  }
];

const latestFinds = [
 
   {
    href: "/clinique-review",
    imgSrc: "https://scoopreview.com/images/review-logo/ikaria-beauty-review.webp",
   
    title: "Clinique Review: Scientific Backing, Real Results",

    date: "January 22, 2024"
  },
  {
    href: "/affirmicious-review",
    imgSrc: "/images/affirmicious.webp",
    title: "Affirmicious Reviews | Best Astrology And Zodiac Positive Affirmations",
    date: "October 14, 2025"
  },
  {
    href: "/indochino-review",
    imgSrc: "/images/indochino.avif",
    title: "Indochino Review | Best Custom Suits, Shirts, Chinos, And More",
    date: "September 14, 2025"
  },
  {
    href: "/vellen-hair-review",
    imgSrc: "/images/vellen-hair.webp",
    title: "Vellen-Hair Reviews | Best Hair Highlighting Comb Set",
    date: "November 14, 2025"
  }
];

export default function ReviewHero() {
  const mainStory = featuredStories[0];
  const subStories = featuredStories.slice(1);

  return (
    <section className="bg-white text-gray-900 py-10 px-4 sm:px-6 lg:px-8 font-sans antialiased selection:bg-[#247e6a]/10 selection:text-[#247e6a]">
      {/* Container carefully bound to exactly 1050px max width */}
      <div className="max-w-[1050px] mx-auto w-full">
        
        {/* Modern Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* LEFT: Premium Spotlight Section (7/12 Width) */}
          <div className="lg:col-span-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-200 pb-8 lg:pb-0 lg:pr-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-[#247e6a]">
                  Featured Spotlight
                </span>
                <div className="h-[1px] flex-grow bg-gray-100"></div>
              </div>

              {/* Reset link defaults clearly to block Bootstrap blue styles */}
              <a href={mainStory.href} className="group block mb-6 text-gray-900 no-underline hover:text-[#247e6a] hover:no-underline transition-colors duration-200">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-50 mb-4 rounded-sm border border-gray-100/60">
                  <img
                    src={mainStory.imgSrc}
                    alt={mainStory.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-101"
                  />
                </div>
                
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#247e6a]/90">
                  {mainStory.category}
                </span>
                
                <h3 className="font-serif text-xl sm:text-2xl font-black tracking-tight text-gray-900 mt-1 mb-2 leading-tight group-hover:text-[#247e6a] transition-colors duration-200">
                  {mainStory.title}
                </h3>
                
                <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2 font-normal">
                  {mainStory.desc}
                </p>
                
                <span className="text-[10px] font-medium tracking-wider text-gray-400 uppercase">
                  {mainStory.date}
                </span>
              </a>
            </div>

            {/* Sub-features Secondary Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5 border-t border-gray-100">
              {subStories.map((story, idx) => (
                <a href={story.href} key={idx} className="group block text-gray-900 no-underline hover:text-[#247e6a] hover:no-underline transition-colors duration-200">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-50 mb-2.5 rounded-sm">
                    <img
                      src={story.imgSrc}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#247e6a]">
                    {story.category}
                  </span>
                  <h4 className="font-serif text-sm font-bold text-gray-900 mt-0.5 mb-1.5 leading-snug line-clamp-2 group-hover:text-[#247e6a] transition-colors duration-200">
                    {story.title}
                  </h4>
                  <span className="text-[10px] text-gray-400">{story.date}</span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: High-Density "Latest Finds" Stream (5/12 Width) */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="flex items-center gap-3 mb-5">
              <h2 className="font-serif text-sm font-black uppercase tracking-[0.15em] text-gray-900 whitespace-nowrap">
                Latest Finds
              </h2>
              <div className="h-[1px] w-full bg-gray-900/10"></div>
            </div>

            {/* Dense Feed List */}
            <div className="divide-y divide-gray-100 flex-grow">
              {latestFinds.map((find, idx) => (
                <a 
                  href={find.href} 
                  key={idx} 
                  className="group flex gap-3.5 py-3.5 first:pt-0 last:pb-0 items-center text-gray-900 no-underline hover:text-[#247e6a] hover:no-underline transition-colors duration-200"
                >
                  {/* Precise Thumbnail */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 bg-gray-50 overflow-hidden rounded-sm border border-gray-100">
                    <img
                      src={find.imgSrc}
                      alt={find.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Compact Feed Text */}
                  <div className="flex flex-col justify-center min-w-0">
                    <h3 className="font-sans font-bold text-xs sm:text-[13px] text-gray-900 tracking-tight group-hover:text-[#247e6a] transition-colors duration-200 leading-snug line-clamp-2 mb-1">
                      {find.title}
                    </h3>
                    <span className="text-[10px] text-gray-400 tracking-wide">
                      {find.date}
                    </span>
                  </div>
                </a>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}