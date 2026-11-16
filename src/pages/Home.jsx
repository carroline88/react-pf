import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="page-section home-section">
      <h1>Welcome to My Portfolio</h1>
      <p className="lead-text">
        Hi! I&apos;m Caroline Strandberg, a front-end development student building interactive and responsive web applications.
      </p>
      <div className="home-actions">
        <Link to="/portfolio" className="primary-button">
          Explore My Projects
        </Link>
        <Link to="/about" className="secondary-button">
          About Me
        </Link>
      </div>
    </section>
  );
}

export default Home;