function About() {
    return (
        <section className="page-section about-section">
            <h1>About Me</h1>
            <div className="about-card">
                <p>
                    My name is Caroline Strandberg and I am currently studying Front-End Development.
                    I enjoy turning ideas into clean, user-friendly interfaces using HTML, CSS, JavaScript, and React.
                </p>
                <p>
                    In my previous projects, I have built interactive browser games, responsive layouts, and structured web pages.
                    Right now, I am learning how to build multi-page React applications with component state and routing.
                </p>
                <h3>Skills &amp; Technologies</h3>
                <ul className="skills-list">
                    <li>HTML5 &amp; Semantic Markup</li>
                    <li>CSS3, Flexbox &amp; CSS Grid</li>
                    <li>JavaScript (ES6+)</li>
                    <li>React, Props &amp; Hooks (useState)</li>
                    <li>Git &amp; GitHub</li>
                </ul>
            </div>
        </section>
    );
}

export default About;