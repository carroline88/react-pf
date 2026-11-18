function Popup({
  name,
  screenshot,
  githubRepo,
  techUsed,
  whatItDoes,
  whatYouLearned,
  role,
  challenges,
  onClose,
}) {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-window" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close-btn" onClick={onClose} aria-label="Close popup">
          &times;
        </button>

        <img src={screenshot} alt={`${name} screenshot`} className="popup-image" />

        <div className="popup-body">
          <h2>{name}</h2>
          <p className="project-tech">
            <strong>Tech used:</strong> {techUsed}
          </p>

          <div className="popup-details">
            <p>
              <strong>What the project does:</strong> {whatItDoes}
            </p>
            <p>
              <strong>What I learned:</strong> {whatYouLearned}
            </p>
            <p>
              <strong>Role:</strong> {role}
            </p>
            <p>
              <strong>Challenges solved:</strong> {challenges}
            </p>
          </div>

          <div className="popup-actions">
            <a
              href={githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
            >
              View GitHub Repo
            </a>
            <button onClick={onClose} className="secondary-button">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;