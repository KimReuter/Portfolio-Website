'use client';

import CapsuleNav from '../components/CapsuleNav';
import ContactButton from '../components/ContactButton';
import AboutSection from '../components/AboutSection';
import ProjectCard from '../components/ProjectCard';
import ContactSection from '../components/ContactSection';
import SkillsSection from '../components/SkillsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FirstParallaxSection from '../components/FirstParallaxSection';
import CTASection from '../components/CTASection';

const projects = [
  {
    title: 'Greenly',
    description: 'Your sustainable cosmetics app with smart DIY recipes, shopping list, and inventory feature.',
    slug: 'greenly',
    imageUrl: '/Greenly/GreenlyMockup.jpg'
  },
  /*
  {
    title: 'Code Snippets',
    description: 'A web app where users can create and save small code snippets. Users can log in and view all their created snippets.',
    slug: 'codeSnippets',
    imageUrl: '/code-baerlauch.jpg'
  },
  */
  {
    title: 'BoulderHall App',
    description: 'A digital app for the local climbing gym, enabling smooth entry processing, progress tracking, route searching, and member networking.',
    slug: 'boulderHallProject',
    imageUrl: '/BoulderhallePlauen/BoulderhalleMockup.jpg' 
  },
  {
    title: 'Social Media App',
    description: 'A modular Kotlin app built with Jetpack Compose to explore UI components, state management, modals, animations, and navigation between screens.',
    slug: 'socialMediaApp',
    imageUrl: '/BoulderhallePlauen/BoulderhalleMockup.jpg'
  },
  {
    title: 'Chat Bot App',
    description: 'A beginner-friendly chatbot app built with Jetpack Compose to explore fundamental concepts like Composables, layouting, previews, and theming.',
    slug: 'chatBot',
    imageUrl: '/ChatBot/Robot.jpg'
  },
  {
    title: 'DogLike App',
    description: 'A playful Swift app built in just one week – featuring animations, notifications, and first test implementations.',
    slug: 'dogLike',
    imageUrl: '/DogLike/PreviewDog.jpg'
  },
  {
    title: 'Sylando App',
    description: 'A minimal shopping app to explore ViewModel and Repository patterns in Swift – design was not the focus.',
    slug: 'sylando',
    imageUrl: '/Sylando/SylandoPreview.jpg'
  }
];

export default function Page() {
  return (
    <div>
      <CapsuleNav />
      <FirstParallaxSection />

      <div id="projects" className="py-24 bg-white px-6">
        <h2 className="text-3xl text-center mb-8 font-semibold">My Projects</h2>
        <div className="overflow-x-auto scrollbar-hide px-4 sm:px-8">
          <div className="flex gap-6 w-max snap-x snap-mandatory scroll-smooth pr-4">
            {projects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </div>
      </div>

      <AboutSection />
      <CTASection />
      <SkillsSection />
      <TestimonialsSection />
      <ContactButton />
      <ContactSection />
    </div>
  );
} 