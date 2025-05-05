import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
}

const ProjectCard = ({ title, description, slug, imageUrl }: ProjectCardProps) => {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="min-w-[300px] max-w-[300px] snap-start bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
