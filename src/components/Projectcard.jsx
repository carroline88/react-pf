function ProjectCard({
    name,
    screenshot,
    githubRepo,
    techUsed,
    whatItDoes,
    whatYouLearned,
    role,
    challenges
}) {
    return (
        <article className="project-card">
            <div className="card-image-container">
                <img src={screenshot} alt={`${name} screenshot`} className="project-image" />
            </div>

            <div className="card-content">
                <h2 className="project-title">{name}</h2>

                <p className="project-tech">
                    <strong>Tech used:</strong> {techUsed}
                </p>

                <div className="project-details">
                    <p><strong>What the project does:</strong> {whatItDoes}</p>
                    <p><strong>What I learned:</strong> {whatYouLearned}</p>
                    <p><strong>Role:</strong> {role}</p>
                    <p><strong>Challenges solved:</strong> {challenges}</p>
                </div>

                <a
                    href={githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-button"
                >
                    View GitHub Repo
                </a>
            </div>
        </article>
    );
}

export default ProjectCard;