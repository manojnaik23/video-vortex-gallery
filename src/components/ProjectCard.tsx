
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
      className="group relative overflow-hidden rounded-lg bg-editor-dark cursor-pointer transform transition-all duration-300 hover:scale-105"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div className="aspect-video w-full overflow-hidden">
        {videoUrl ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
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
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Play className="w-12 h-12 text-white animate-pulse" />
        </div>
      </div>
      <div className="p-4 transform transition-transform duration-300 group-hover:-translate-y-1">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-editor-gray text-sm">{description}</p>
      </div>
    </Card>
  );
};
