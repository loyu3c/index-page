
import React from 'react';
import { ExternalLink, Tag } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 transition-all hover:shadow-2xl hover:-translate-y-1">
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className="px-2 py-1 text-xs font-semibold rounded-md bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            {project.category}
          </span>
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="inline-flex items-center text-[10px] uppercase tracking-wider font-bold text-gray-500 dark:text-gray-500">
              <Tag size={10} className="mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Absolute Overlay Link */}
      <a 
        href={project.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute inset-0 z-10 opacity-0 cursor-pointer"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
