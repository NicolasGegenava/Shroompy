import React, { useEffect, useState } from 'react';
import '../styles/about.css';

const About = () => {
    const [output, setOutput] = useState([]);
    const [currentLine, setCurrentLine] = useState('');
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const script = [
    "> What is Shroompy?",
    "- Shroompy is an open-source project, helping community identify, observe and locate mushrooms.",
    "> Why was this project created?",
    "- This project was created to help the community research mushrooms, while we developers master our skills",
    "> Who created this website?",
    "- Two young developers, Niko and Nika",
    "> sudo observe Niko and Nika",
    "- Observing Niko and Nika",
    "- Checking Databases...",
    "- Finalizing...",
    "> Nico: https://github.com/NikoMolecule",
    "> Nika: https://github.com/NicolasGegenava",
  ];

  useEffect(() => {
    const typingInterval = 50;
    const lineInterval = 1000; 

    if (lineIndex < script.length) {
      if (charIndex < script[lineIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentLine((prev) => prev + script[lineIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, typingInterval);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setOutput((prevOutput) => [...prevOutput, currentLine]);
          setCurrentLine('');
          setCharIndex(0);
          setLineIndex((prevIndex) => prevIndex + 1);
        }, lineInterval);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, lineIndex, currentLine, script]);

  return (
    <div className='aboutdiv'>
    <div className="terminal">
      {output.map((line, i) => (
        <div key={i} className="terminal-line">{line}</div>
      ))}
      {lineIndex < script.length && (
        <div className="terminal-line">
          {currentLine}
          <span className="cursor">|</span>
        </div>
      )}
    </div>
    </div>
  )
};

export default About;