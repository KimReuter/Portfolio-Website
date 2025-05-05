import Link from 'next/link';

const ProjectPreview = ({ project }: { project: { title: string, description: string, slug: string } }) => {
  return (
    <div className="project-preview-card p-6 bg-gray-100 rounded-xl shadow-md w-64">
      <h2 className="text-xl font-bold">{project.title}</h2>
      <p className="text-sm">{project.description}</p>
      <Link href={`/projects/${project.slug}`}>
        <button className="text-blue-500 mt-2">See More</button>
      </Link>
    </div>
  );
};

export default ProjectPreview;