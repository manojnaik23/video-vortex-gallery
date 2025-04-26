
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const ProjectCard = ({ title, description, imageUrl }: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden rounded-lg bg-editor-dark">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Play className="w-12 h-12 text-white" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-editor-gray text-sm">{description}</p>
      </div>
    </Card>
  );
};
