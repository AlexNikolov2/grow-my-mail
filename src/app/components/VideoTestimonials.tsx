"use client";

import YouTube from "react-youtube";

export function VideoTestimonials() {
  const videos = [{ videoId_1: "lOVMUSDoxuM" }];
  return (
    <section className="testimonials text-center">
      <h2 className="text-4xl">Real clients, real results.</h2>
      <h3>Video testimonials from clients</h3>
      <section className="videos md:mx-20 my-10 flex items-center justify-center">
        {videos.map((video) => (
          <YouTube
            key={video.videoId_1}
            videoId={video.videoId_1}
            className="max-w-[320px] md:max-w-auto"
          />
        ))}
      </section>
    </section>
  );
}
