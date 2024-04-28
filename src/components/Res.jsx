import React, { useState, Children } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import "../Cards.css";
import Card from "./Card";

const cardList = [
    {
        name: "Elastic Network Models",
        content: "A python module for evaluating the performance of Elastic Network Models",
        linc: "https://github.com/almacho04/ENM"
    },

    {
        name: "Course Reviewer",
        content: "A web application that allows students to review courses and professors in UNIST",
        linc: "https://github.com/assylzhanb/course-reviewer"
    },
    {
        name: "Image Generator",
        content: "A full-stack web application that generates images based on OpenAI's DALL-E model",
        linc: "https://github.com/assylzhanb/dalle-copy"
    },
    {
        name: 'Portfolio',
        content: 'This webpage based on React.js and Tailwind for styling',
        linc: 'https://github.com/assylzhanb/portfolio'
    },
    {
        name: 'To-do List App',
        content: 'To-do list application using React.js and Bootstrap',
        linc: 'https://github.com/assylzhanb/todo-list'
    },
    {
        name: 'APIAI Telegram-bot',
        content: 'Telegram bot with AI extension'
    },
]


const VISIBLE_CARDS = 3;

const Carrosel = ({ children }) => {
    const [currentCard, setCurrentCard] = useState(0);
    const TOTAL_CARDS = cardList.length;

    return (
        <div className="carrosel-geral">
            {currentCard > 0 && (
                <button
                    className="navegacao esquerda"
                    onClick={() => setCurrentCard((i) => i - 1)}
                >
                    <TiChevronLeftOutline />
                </button>
            )}
            {Children.map(children, (element, i) => (
                <div
                    className="conteudo-geral"
                    key={i}
                    style={{
                        "--atualAtivo": i === currentCard ? 1 : 0,
                        "--compensacao": (currentCard - i) / 3,
                        "--direcao": Math.sign(currentCard - i),
                        "--abs-compensacao": Math.abs(currentCard - i) / 3,
                        pointerEvents: currentCard === i ? "auto" : "none",
                        opacity:
                            Math.abs(currentCard - i) >= VISIBLE_CARDS ? "0" : "1",
                        display:
                            Math.abs(currentCard - i) > VISIBLE_CARDS ? "none" : "block",
                    }}
                >
                    {element}
                </div>
            ))}
            {currentCard < TOTAL_CARDS - 1 && (
                <button
                    className="navegacao direita"
                    onClick={() => setCurrentCard((i) => i + 1)}
                >
                    <TiChevronRightOutline />
                </button>
            )}
        </div>
    );
};


const Res = () => (
    <section id="projects">
        <div className="app pt-48 pb-48 ">
            <Carrosel>
                {cardList.map((_, i) => (
                    <Card
                        key={i}
                        linc={cardList[i].linc}
                        title={cardList[i].name}
                        content={cardList[i].content}
                    />
                ))}
            </Carrosel>
        </div>
    </section>
);

export default Res;

// Res component is not working, why?
// A: Because I have not imported it in App.jsx
