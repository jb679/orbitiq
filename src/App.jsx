import './App.css'
import { useState } from 'react'

const TopicCard = ({ title, description, icon, difficulty, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`topic-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="topic-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className={`difficulty ${difficulty}`}>{difficulty}</span>
    </div>
  )
}

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    {
      id: 1,
      title: "Biology",
      description: "Learn about life, cells, and living organisms",
      icon: "🧬",
      difficulty: "beginner"
    },
    {
      id: 2,
      title: "Astronomy",
      description: "Journey through space, stars, and galaxies",
      icon: "🌌",
      difficulty: "beginner"
    },
    {
      id: 3,
      title: "Earth Science",
      description: "Understand our planet, climate, and geology",
      icon: "🌍",
      difficulty: "beginner"
    },
    {
      id: 4,
      title: "Physics",
      description: "Explore the laws of motion, energy, and the universe",
      icon: "⚛️",
      difficulty: "intermediate"
    },
    {
      id: 5,
      title: "Chemistry",
      description: "Discover elements, compounds, and chemical reactions",
      icon: "🧪",
      difficulty: "intermediate"
    },
    {
      id: 6,
      title: "Quantum Physics",
      description: "Dive into the mysterious world of quantum mechanics",
      icon: "🔬",
      difficulty: "advanced"
    }
  ];

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🚀 OrbitIQ</h1>
        <p className="tagline">Your Journey to Scientific Discovery</p>
      </header>

      <main className="main-content">
        {!selectedTopic ? (
          <>
            <section className="intro-section">
              <h2>Choose Your Science Adventure</h2>
              <p>Start exploring the fascinating world of science, one topic at a time.</p>
            </section>

            <div className="topics-grid">
              {topics.map(topic => (
                <TopicCard 
                  key={topic.id}
                  {...topic}
                  onClick={() => handleTopicClick(topic)}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="topic-detail">
            <button className="back-button" onClick={() => setSelectedTopic(null)}>
              ← Back to Topics
            </button>
            <div className="topic-header">
              <span className="detail-icon">{selectedTopic.icon}</span>
              <h2>{selectedTopic.title}</h2>
            </div>
            <p className="detail-description">{selectedTopic.description}</p>
            <div className="lessons-placeholder">
              <p>🎓 Lessons coming soon for {selectedTopic.title}!</p>
              <p>Stay tuned for interactive content, quizzes, and experiments.</p>
            </div>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>Made with 💜 for curious minds</p>
      </footer>
    </div>
  )
}

export default App
