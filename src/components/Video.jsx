import React from "react";

const YoutubeEmbed = () => (
  <div className="bg-white border-b border-dark-gray">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:py-12 sm:px-6 lg:px-8 flex justify-center">
    <iframe 
    width="853" 
    height="480" 
    src="https://www.youtube.com/embed/oW-kWW5JNQ0?controls=0" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
    className="rounded-lg"
    />
    </div>
  </div>
);


export default YoutubeEmbed;