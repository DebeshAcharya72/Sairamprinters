import React, { useState } from 'react';
import { Eye, ArrowRight, ExternalLink, Filter } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ProjectLightbox from './ProjectLightbox';
import { projectsData, projectCategories } from '../data/projects';

export default function Projects({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex]);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  };

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="OUR WORK"
          heading="Projects Across Major Industrial Sites"
          description="Explore examples of safety signage, directional boards and industrial installations."
          alignment="center"
        />

        {/* Minimalist Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 sm:mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? 'bg-safety-orange text-white shadow-md shadow-orange-500/20'
                  : 'bg-light-grey text-industrial-grey hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl overflow-hidden bg-charcoal shadow-sm hover:shadow-xl border border-gray-200/80 hover:border-safety-orange/50 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col justify-end min-h-[320px] sm:min-h-[340px]"
            >
              {/* Image with smooth hover zoom */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Lower gradient scrim for ultra-clear readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/65 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Category tag on top */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider border border-white/20">
                  {project.category}
                </span>
              </div>

              {/* View Lightbox Quick Trigger Icon */}
              <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-safety-orange text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 shadow-md">
                <Eye className="w-4 h-4" />
              </div>

              {/* Content Panel */}
              <div className="relative z-10 p-6 text-white">
                <h3 className="text-lg sm:text-xl font-bold font-heading mb-2 group-hover:text-safety-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-white/15 text-xs text-safety-light font-semibold">
                  <span>View Project Specs</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 sm:mt-16 text-center">
          <button
            type="button"
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-charcoal hover:bg-black text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <span>Have a Similar Project Requirement? Get a Custom Quote</span>
            <ArrowRight className="w-4 h-4 text-safety-orange" />
          </button>
        </div>

      </div>

      {/* Accessible Gallery Lightbox Modal */}
      {selectedProject && (
        <ProjectLightbox
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onPrev={handlePrevProject}
          onNext={handleNextProject}
        />
      )}
    </section>
  );
}
