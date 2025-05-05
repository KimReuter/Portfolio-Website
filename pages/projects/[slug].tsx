import { useRouter } from 'next/router';

const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1 className="text-4xl text-center mt-10">Project: {slug}</h1>
      <div className="max-w-3xl mx-auto p-6">
        <p>
          Details for the project {slug} will go here. You can display images, code snippets, or anything
          relevant to the project.
        </p>
      </div>
    </div>
  );
};

export default ProjectPage;