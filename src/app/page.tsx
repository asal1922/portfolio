'use client';
import React, {useEffect } from 'react';
import images from '@/assets/images';
import Skills from './homePage/skills';
import Projects from './homePage/projects';
import Cantact from './cantact';
import Dotted from './homePage/dotted';
import Profile from './homePage/profile';
import ResponsiveMenu from './homePage/responsiveMenu';
import Scroller from './homePage/scroller';
import Header from './homePage/header';
import { useMainStore } from '../../store/zustand/main';
import Loading from './homePage/loading';

const Home: React.FC = () => {
  const {setCurrentImage,setFadeOut, showMainContent, setShowMainContent, cameraConfig, setCameraConfig } = useMainStore();

  useEffect(() => {
    const updateCamera = () => {
      if (window.innerWidth <= 1024) {
        setCameraConfig({
          position: [0, 4, 6],
          fov: 5,
        });
      } else {
        setCameraConfig({
          position: [0, 10, 8],
          fov: 35,
        });
      }
    };

    updateCamera();
    window.addEventListener('resize', updateCamera);
    return () => window.removeEventListener('resize', updateCamera);
  }, []);


  useEffect(() => {
    const handleLoad = () => {
      setCurrentImage(images.wellcome);
      setTimeout(() => setFadeOut(true), 3000);
      setTimeout(() => setShowMainContent(true), 6000);
    };

    const handleResize = () => {
      setShowMainContent(false);
      setFadeOut(false);
      setCurrentImage(images.loading);
      setTimeout(() => setFadeOut(true), 2500);
      setTimeout(() => setShowMainContent(true), 3500);
    };
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.onload = handleLoad;
    }
    window.addEventListener("load", handleLoad);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div style={{ width: '100vw', height: '100vh', background: '#01061C', margin: 0 }}>
      {!showMainContent ? (
       <Loading/>
      ) : (
        <>
          <style jsx>{`
  @media (min-width: 762px) and (max-width: 768px) {
    .top-text {
      top: -25vh !important;
      font-size: 8px !important;
    }
    .top-picture {
      top: -90vh !important;
    }
  }

  @media (min-width: 1023px) and (max-width: 1026px) {
    .top-text-cumputer {
      top: -95vh !important;
    }
      .laptop-hidden{
      display:none !important;
      }
      .laptop-show{
      display:block;}

  }
`}</style>

          <ResponsiveMenu />
          <Scroller />
          <Header />
          <Dotted cameraConfig={cameraConfig} />
          <Profile />
          <section id="skills">
            <Skills />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="contact">
            <Cantact />
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
