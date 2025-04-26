
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { Camera, Film, Video, Layers, Music } from "lucide-react";

const Index = () => {
  const projects = [
    {
      title: "Commercial: Brand Story",
      description: "A cinematic commercial showcasing brand values through storytelling",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    },
    {
      title: "Music Video: Rhythm & Beats",
      description: "Dynamic music video with synchronized visual effects",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      title: "Short Film: Urban Tales",
      description: "A compelling narrative about city life and connections",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    },
  ];

  const services = [
    { icon: Film, title: "Commercial Editing", description: "Professional commercial and advertising edits" },
    { icon: Video, title: "Music Videos", description: "Dynamic and rhythmic music video editing" },
    { icon: Camera, title: "Film Post-Production", description: "Comprehensive film post-production services" },
    { icon: Music, title: "Sound Design", description: "Professional audio mixing and sound design" },
    { icon: Layers, title: "Color Grading", description: "Expert color correction and grading" },
  ];

  return (
    <div className="min-h-screen bg-editor-dark text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover opacity-50"
            poster="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
          >
            <source src="your-demo-reel.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container relative z-10 text-center animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Creative Video Editor
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-editor-gray max-w-2xl mx-auto">
            Transforming raw footage into compelling visual stories
          </p>
          <Button className="bg-editor-blue hover:bg-editor-skyblue text-white">
            View My Work
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-[#1A1F2C]/95">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-editor-dark/90">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 rounded-lg bg-editor-dark/50 backdrop-blur-sm border border-editor-blue/10 hover:border-editor-blue/30 transition-colors">
                <service.icon className="w-12 h-12 text-editor-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-editor-gray">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-editor-dark to-black">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Create Together</h2>
          <p className="text-editor-gray text-xl mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'd love to help bring your vision to life.
          </p>
          <Button className="bg-editor-blue hover:bg-editor-skyblue text-white">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
