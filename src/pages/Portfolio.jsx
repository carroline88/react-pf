import { useState } from 'react';
import ProjectCard from '../components/Projectcard';
import typingGameImg from '../assets/typinggame.png';
import cyberGameImg from '../assets/cybergame.png';
import cvImg from '../assets/cv.png';

function Portfolio() {
    // State to control whether projects are visible (false = blank by default)
    const [showProjects, setShowProjects] = useState(false);

    const projects = [
        {
            id: 1,
            name: "Typing Game",
            screenshot: typingGameImg,
            githubRepo: "https://github.com/carroline88/javascript-typing-game",
            techUsed: "JavaScript (ES6), HTML5, CSS3",
            whatItDoes: "An interactive speed-typing game where users type displayed words against a countdown timer, featuring selectable difficulty levels (Easy, Medium, Hard) and live score updates.",
            whatYouLearned: "Handling real-time keyboard input events, managing JavaScript interval timers, and updating DOM elements dynamically.",
            role: "Solo developer",
            challenges: "Synchronizing the countdown timer with dynamic time bonuses for correct words and cleanly resetting the game state upon restart."
        },
        {
            id: 2,
            name: "Cyber Pulse",
            screenshot: cyberGameImg,
            githubRepo: "https://github.com/carroline88/Cyber-game",
            techUsed: "JavaScript (ES6), CSS Grid, HTML5",
            whatItDoes: "A fast-paced reaction game where players click glowing nodes on a 3x3 grid before the timer runs out, tracking current score, active streaks, and personal best records.",
            whatYouLearned: "Creating responsive interactive grids with CSS Grid, randomizing active target states in JavaScript, and persisting high scores.",
            role: "Solo developer",
            challenges: "Preventing duplicate clicks on the same node, scaling timer difficulty as streaks grow, and designing a cohesive dark-mode UI."
        },
        {
            id: 3,
            name: "Personal CV & Profile Page",
            screenshot: cvImg,
            githubRepo: "https://github.com/carroline88/new-cv",
            techUsed: "HTML5, CSS3, Flexbox",
            whatItDoes: "A structured digital resume and personal profile showcasing an introduction, contact information, and a visual timeline of work experience.",
            whatYouLearned: "Writing semantic HTML, building modern card layouts using Flexbox, and styling custom vertical timeline components in CSS.",
            role: "Solo developer",
            challenges: "Aligning timeline markers accurately alongside the experience cards and maintaining strong visual contrast in a dark theme."
        }
    ];

    const handleToggleProjects = () => {
        setShowProjects((prevState) => !prevState);
    };

    return (
        <section className="page-section">
            <header className="portfolio-header">
                <h1>My Projects</h1>
                <p>Click the button below to preview my front-end development work.</p>

                <button onClick={handleToggleProjects} className="preview-button">
                    {showProjects ? 'Hide Projects' : 'Preview Projects'}
                </button>
            </header>

            {showProjects && (
                <main className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            name={project.name}
                            screenshot={project.screenshot}
                            githubRepo={project.githubRepo}
                            techUsed={project.techUsed}
                            whatItDoes={project.whatItDoes}
                            whatYouLearned={project.whatYouLearned}
                            role={project.role}
                            challenges={project.challenges}
                        />
                    ))}
                </main>
            )}
        </section>
    );
}

export default Portfolio;