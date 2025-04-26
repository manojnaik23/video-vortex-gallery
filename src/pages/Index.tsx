
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { Film, Video, Camera, Music, Layers } from "lucide-react";

const Index = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveVideoIndex((prev) => (prev + 1) % projects.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: "Commercial: Brand Story",
      description: "A cinematic commercial showcasing brand values through storytelling",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      videoUrl: "https://static.videezy.com/system/resources/previews/000/021/751/original/P1033783.mp4",
    },
    {
      title: "Music Video: Rhythm & Beats",
      description: "Dynamic music video with synchronized visual effects",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      videoUrl: "https://static.videezy.com/system/resources/previews/000/021/749/original/P1033781.mp4",
    },
    {
      title: "Short Film: Urban Tales",
      description: "A compelling narrative about city life and connections",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      videoUrl: "https://static.videezy.com/system/resources/previews/000/021/750/original/P1033782.mp4",
    },
  ];

  const services = [
    { icon: Film, title: "Commercial Editing", description: "Professional commercial and advertising edits" },
    { icon: Video, title: "Music Videos", description: "Dynamic and rhythmic music video editing" },
    { icon: Camera, title: "Film Post-Production", description: "Comprehensive film post-production services" },
    { icon: Music, title: "Sound Design", description: "Professional audio mixing and sound design" },
    { icon: Layers, title: "Color Grading", description: "Expert color correction and grading" },
  ];

  const handleProjectClick = (index: number) => {
    setActiveVideoIndex(index);
    setIsFullscreen(true);
  };

  const handleFullscreenClose = () => {
    setIsFullscreen(false);
  };

  return (
    <div className="min-h-screen bg-editor-dark text-white">
      {/* Hero Section with Auto-playing Videos */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              isVisible ? 'opacity-50' : 'opacity-0'
            }`}
            key={projects[activeVideoIndex].videoUrl}
          >
            <source src={projects[activeVideoIndex].videoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-editor-dark/80 via-transparent to-editor-dark" />
        </div>
        <div className={`container relative z-10 text-center transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white bg-gradient-to-r from-editor-blue to-editor-skyblue bg-clip-text text-transparent">
            Creative Video Editor
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-editor-gray max-w-2xl mx-auto">
            Transforming raw footage into compelling visual stories
          </p>
          <Button className="bg-editor-blue hover:bg-editor-skyblue text-white transform transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-editor-blue/50">
            View My Work
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-b from-editor-dark via-editor-dark/95 to-editor-dark">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-editor-gray bg-clip-text text-transparent">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div className="transform transition-all duration-500 hover:translate-y-[-10px]" 
                   key={index}>
                <ProjectCard 
                  {...project} 
                  onClick={() => handleProjectClick(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Video Modal */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-300"
          onClick={handleFullscreenClose}
        >
          <div className="relative w-full h-full">
            <video
              autoPlay
              controls
              className="w-full h-full object-contain"
              src={projects[activeVideoIndex].videoUrl}
            />
            <Button 
              className="absolute top-4 right-4 bg-editor-blue/80 hover:bg-editor-blue text-white"
              onClick={handleFullscreenClose}
            >
              Close
            </Button>
          </div>
        </div>
      )}

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-t from-editor-dark/90 to-editor-dark">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-editor-gray bg-clip-text text-transparent">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-lg bg-editor-dark/50 backdrop-blur-sm border border-editor-blue/10 hover:border-editor-blue/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-editor-blue/20"
              >
                <service.icon className="w-12 h-12 text-editor-blue mb-4 transform transition-transform duration-500 group-hover:scale-110 group-hover:text-editor-skyblue" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-editor-blue transition-colors duration-300">{service.title}</h3>
                <p className="text-editor-gray group-hover:text-white/80 transition-colors duration-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-editor-dark to-black">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-editor-blue to-editor-skyblue bg-clip-text text-transparent">Let's Create Together</h2>
          <p className="text-editor-gray text-xl mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'd love to help bring your vision to life.
          </p>
          <Button className="bg-editor-blue hover:bg-editor-skyblue text-white transform transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-editor-blue/50">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
