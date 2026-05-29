import { useState } from 'react';

import artstationImg from '../assets/images/artstation.png';
import Header from '../assets/images/Through Ash Header.png'; 
import Environment from '../assets/images/hugo-mazariegos-martin-full-table-screeshot.jpg'; 
import Radar from '../assets/images/radarimage.png';
import RatGif from '../assets/images/ratGIF.gif';
import ScrollReveal from '../components/ScrollReveal';

const Projects = () => {
  const [bgImage] = useState(null);

  return (
    <section
      className="max-container py-24 flex flex-col items-center"
      style={{
        backgroundImage: bgImage
          ? `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})`
          : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      {/* TITLE */}
      <ScrollReveal>
        <div>
          <h1 className="head-text mb-12">
            My <span className="blue-gradient_text">Projects</span>
          </h1>

          <p className="text-white-500 max-w-3xl text-center mb-20">
            A selection of my work across game development and 3D art, focusing on gameplay systems, technical art, and visual storytelling.
          </p>
        </div>
      </ScrollReveal>

      {/* FEATURED PROJECT */}
      <div className="w-full max-w-5xl bg-gray-900/80 backdrop-blur rounded-2xl p-10 mb-20 shadow-xl">

        <h2 className="text-2xl text-white mb-2">Featured Project</h2>
        <h3 className="text-xl text-blue-400 mb-6">Through Ash</h3>

        <img
          src={Header}
          alt="Through Ash"
          className="w-full h-85 object-contain rounded-xl mb-8"
        />

        <div className="space-y-5 text-gray-300 leading-relaxed">

          <p>
            Through Ash is a short first-person tragedy game where you remotely control a logistics rover across a nuclear wasteland from inside a degrading bunker.
          </p>

          <p>
            I acted as <strong>lead director</strong>, defining concept, gameplay direction, and emotional tone while collaborating with a programmer on systems implementation.
          </p>

          <p>
            I redesigned core mechanics such as the oxygen system into a reactive timing-based survival loop and built all UI systems including terminals and menus.
          </p>

        </div>

        {/* ENVIRONMENT */}
        <div className="flex flex-col md:flex-row gap-6 items-center mt-10">

          <img
            src={Environment}
            alt="Environment work"
            className="w-full md:w-1/2 h-64 object-cover rounded-xl"
          />

          <p className="text-gray-300 md:w-1/2 leading-relaxed">
            Built environments in Blender and developed a heavy atmospheric nuclear wasteland style using volumetric fog and stylised shaders.
          </p>

        </div>

        {/* RADAR */}
        <div className="flex flex-col md:flex-row-reverse gap-6 items-center mt-10">

          <img
            src={Radar}
            alt="Radar system"
            className="w-full md:w-1/2 h-64 object-cover rounded-xl"
          />

          <p className="text-gray-300 md:w-1/2 leading-relaxed">
            Developed a radar navigation system using a pulse-based reveal shader combined with a top-down guidance system.
          </p>

        </div>

        {/* TRAILER */}
        <div className="mt-10">
          <h4 className="text-white mb-3">Trailer</h4>

          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/WNklYZR8uKM"
            title="Through Ash Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl"
          />
        </div>

        {/* DOCUMENTARY */}
        <div className="mt-10">
          <h4 className="text-white mb-3">Development Documentary</h4>

          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/P7KfL-BtSQs"
            title="Through Ash Documentary"
            frameBorder="0"
            allowFullScreen
            className="rounded-xl"
          />
        </div>

        {/* STEAM */}
        <div className="mt-12 p-6 bg-black/40 rounded-xl">

          <h4 className="text-2xl text-white mb-2">
            Available on Steam
          </h4>

          <p className="text-gray-400 mb-4">
            Through Ash is fully released and playable on Steam.
          </p>

          <a
            href="https://store.steampowered.com/app/4742780/Through_Ash/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-lg"
          >
            View on Steam
          </a>

        </div>

        {/* ITCH */}
        <div className="mt-6">

          <a
            href="https://hugo-maza.itch.io/through-ash"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            itch.io version
          </a>

        </div>
        </div>

        {/* PROJECT 1 */}
        <ScrollReveal>
          <div className="w-full max-w-5xl bg-gray-900/80 backdrop-blur rounded-2xl p-10 mb-20 shadow-xl">

            <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-2">
              Project 1
            </h2>

            <h3 className="text-xl text-blue-400 mb-6">
              Oh Rats! Game (Vertical Slice)
            </h3>

            {/* TEXT + IMAGE LAYOUT */}
            <div className="flex flex-col md:flex-row gap-8 items-start">

              {/* LEFT TEXT */}
              <div className="md:w-1/2 space-y-5 text-gray-300 leading-relaxed">

                <p>
                  Developed in a 3-person university team as a vertical slice focusing on movement, interaction, and environmental gameplay.
                </p>

                <p>
                  I worked as 3D Character Artist, modelling, hand-texturing, animating the rat, and implementing it into Unity with input-driven animation control.
                </p>

                <p>
                  Supported environment work through level design and texturing contributions.
                </p>

                <p>
                  Designed a customization system allowing players to equip hats and outfits on a central table system.
                </p>

              </div>

              {/* RIGHT IMAGE */}
              <div className="md:w-1/2">
                <img
                  src={RatGif}
                  alt="Oh Rats! Gameplay GIF"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>

            </div>

            {/* YOUTUBE VIDEO */}
            <div className="mt-10">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/k0l9mo2hZtc"
                title="Oh Rats Gameplay Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              />
            </div>

            {/* ITCH LINK */}
            <div className="mt-6">
              <a
                href="https://hugo-maza.itch.io/oh-rats?password=rat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline inline-block"
              >
                View on itch.io
              </a>
            </div>

          </div>
        </ScrollReveal>

            {/* GAME JAMS */}
      <ScrollReveal>
      <div className="w-full max-w-5xl bg-gray-900/80 backdrop-blur rounded-2xl p-10 mb-20 shadow-xl">

        <h2 className="text-xl text-white mb-6">Game Jams / Small Projects</h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          I’ve also developed multiple small experimental games during 2–7 day game jams, focusing on rapid prototyping, mechanics exploration, and creative constraints. These are available on my itch.io page.
        </p>

        {/* ITCH LINK */}
        <a
          href="https://hugo-maza.itch.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          View all game jam projects on itch.io
        </a>

      </div>
      </ScrollReveal>

      {/* ARTSTATION */}
      <ScrollReveal>  
      <div className="w-full max-w-5xl bg-gray-900/80 backdrop-blur rounded-2xl p-10 shadow-xl">

        <h2 className="text-2xl text-white mb-4">3D Art</h2>

        <p className="text-gray-300 mb-6">
          I focus on real-time game-ready assets, lighting, and environment composition.
        </p>

        <img
          src={artstationImg}
          alt="3D Art"
          className="w-full h-64 object-cover rounded-xl mb-6"
        />

        <a
          href="https://hugo_maza.artstation.com/"
          target="_blank"
          className="text-blue-400 hover:underline"
          rel="noopener noreferrer"
        >
          View ArtStation
        </a>

      </div>
      </ScrollReveal>

    </section>
  );
};

export default Projects;