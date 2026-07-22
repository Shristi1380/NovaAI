import "./WelcomeScreen.css";

function WelcomeScreen({ onSuggestionClick }) {
    const suggestions = [
        {
            icon: "💻",
            title: "Build a React Project",
            description: "Get started with a React app",
            message: "Help me build a React project from scratch. Include project structure, best practices, and example components."
        },
        {
            icon: "📄",
            title: "Review My Resume",
            description: "Provide feedback on my resume",
            message: "Please review my resume and suggest improvements for content, formatting, and how to make it stand out to potential employers."
        },
        {
            icon: "🧠",
            title: "Explain DSA Concepts",
            description: "Learn data structures and algorithms",
            message: "Explain important Data Structures and Algorithms concepts with clear examples and real-world applications."
        },
        {
            icon: "🎨",
            title: "Generate UI Ideas",
            description: "Creative design inspiration",
            message: "Generate modern, creative UI design ideas for my next project. Include component layouts and design trends."
        },
    ];

    return (
        <div className="welcomeScreen">
            <div className="welcomeContent">
                <div className="welcomeHeader">
                    <h1 className="welcomeTitle">✨ Welcome to NovaAI 🌌</h1>
                    <p className="welcomeSubtitle">Your personal AI assistant built by Shristi</p>
                </div>

                <div className="suggestionsContainer">
                    <p className="suggestionsLabel">Try these suggestions:</p>
                    <div className="suggestionsGrid">
                        {suggestions.map((suggestion, idx) => (
                            <button
                                key={idx}
                                className="suggestionCard"
                                onClick={() => onSuggestionClick(suggestion.message)}
                                type="button"
                                aria-label={`Suggestion: ${suggestion.title}`}
                            >
                                <div className="suggestionIcon">{suggestion.icon}</div>
                                <div className="suggestionText">
                                    <h3>{suggestion.title}</h3>
                                    <p>{suggestion.description}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomeScreen;
