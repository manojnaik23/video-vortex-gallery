
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { useState, useRef } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  onClick?: () => void;
}

export const ProjectCard = ({ title, description, imageUrl, videoUrl, onClick }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <Card 
      className="group relative overflow-hidden rounded-lg bg-editor-dark cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-editor-blue/20"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div className="aspect-video w-full overflow-hidden">
        {videoUrl ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover transform transition-transform duration-700 scale-105 group-hover:scale-100"
            src={videoUrl}
            muted
            playsInline
            loop
            poster={imageUrl}
          />
        ) : (
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <Play className="w-16 h-16 text-white animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0" />
        </div>
      </div>
      <div className="p-6 transform transition-all duration-500 group-hover:-translate-y-2">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-editor-blue transition-colors duration-300">{title}</h3>
        <p className="text-editor-gray text-sm group-hover:text-white/80 transition-colors duration-300">{description}</p>
      </div>
    </Card>
  );
};
