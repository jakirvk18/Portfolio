import React from 'react'
import "../css/projects.css";
import Navbar from "./navbar"
const ProjectsDisplay = () => {
  return (
    <div id="main-div">
        <Navbar />
            <h1 style={{fontSize : "100px" , marginBottom : "30px"  , fontWeight: "900", fontFamily : "Lucida Console"}}>
            My Projects</h1>
            <div className="projects">
                <div className="project-card">
                    <div id="bg-image1" className="bg-image"></div>
                    <div class="card-content">
                        <h2>Tic Tac Toe with Q-Learning AI</h2>
                        <br />
                        <p>
                            This project implements a classic Tic Tac Toe game with an AI opponent trained using the Q-learning reinforcement learning algorithm. The game features a web interface built with Flask, allowing users to play against the AI in their browser.
                        </p>
                        <a href="https://github.com/jakirvk18/TicTacToe.git" target="_blank" rel="noopener noreferrer">
                            <button>See Details</button>
                        </a>
                    </div>

                </div>
                <div className="project-card">
                    <div id="bg-image2" className="bg-image"></div>
                    <div className="card-content">
                        <h2>Movie Recommendation System</h2>
                        <br />
                        <p>
                            This project implements a movie recommendation system using collaborative filtering and content-based filtering techniques. The system analyzes user preferences and movie attributes to suggest relevant films.
                        </p>
                        <a href="https://github.com/jakirvk18/Movie_Recommendation_System.git" target="_blank" rel="noopener noreferrer">
                            <button>See Details</button>
                        </a>
                    </div>

                </div>
                <div className="project-card">
                    <div id="bg-image3" className="bg-image"></div>
                    <div className="card-content">
                        <h2>Multi-Disease Prediction System with AI Insights</h2>
                        <br />
                        <p>
                            This project implements a multi-disease prediction system using machine learning algorithms. It analyzes patient data and provides insights into potential health risks, enabling early intervention and personalized treatment plans.
                        </p>
                        <a href="https://github.com/jakirvk18/Multiple-Disease-Prediction-Model.git" target="_blank" rel="noopener noreferrer">
                            <button>See Details</button>
                        </a>
                    </div>

                </div>
                <div className="project-card">
                    <div id="bg-image4" className="bg-image"></div>
                    <div className="card-content">
                        <h2>Neural Network from Scratch</h2>
                        <br />
                        <p>
                            This project implements a neural network from scratch using Python and NumPy. It covers the fundamentals of neural networks, including forward propagation, backpropagation, and training techniques.
                        </p>
                        <a href="https://github.com/jakirvk18/neuralNetworkFromScratchDigitPrediction.git" target="_blank" rel="noopener noreferrer">
                            <button>See Details</button>
                        </a>
                    </div>

                </div>



            </div>
            <br />
            
            <div className="project-card" style={{ marginLeft: "26%", marginRight: "33%" , marginTop: "10%" ,  animation:"beats 1.5s infinite" }}>
                <div id="bg-image5" className="bg-image"></div>
                <div className="card-content">
                    <h2>For More Projects</h2>
                    <br />
                    <p>
                        Visit my GitHub profile to explore more projects and contributions in the field of machine learning, AI, and web development.
                        <br />
                    </p>
                    <a href="https://github.com/jakirvk18" target="_blank" rel="noopener noreferrer">
                        <button>Visit</button>
                    </a>
                </div>

            </div>
      
    </div>
  )
}

export default ProjectsDisplay;
