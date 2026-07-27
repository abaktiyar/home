import React, { useState, Children } from "react";
import { motion } from "framer-motion";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import "../Cards.css";
import Card from "./Card";

interface CardData {
    name: string;
    content: string;
    linc: string;
}

interface CarouselCardStyle extends React.CSSProperties {
    '--atualAtivo'?: number;
    '--compensacao'?: number;
    '--direcao'?: number;
    '--abs-compensacao'?: number;
}

const cardList: CardData[] = [
    {
        name: "Multi-Ticker Exchange Simulator",
        content: "A C++17 TCP order-book server/client (Boost.Asio, CMake) with a price-time priority matching engine that matches incoming orders against the resting book.",
        linc: "https://github.com/abaktiyar/market"
    },
    {
        name: "Leety",
        content: "A mobile application that reminds users of solving leetcode problems built with Flutter.",
        linc: "https://github.com/abaktiyar/leety"
    },
    {
        name: "Elastic Network Models",
        content: "A python module for evaluating the performance of Elastic Network Models",
        linc: "https://github.com/almacho04/ENM"
    },
    {
        name: "Course Reviewer",
        content: "A web application that allows students to review courses and professors in UNIST",
        linc: "https://github.com/abaktiyar/course-reviewer"
    },
    {
        name: "Image Generator",
        content: "A full-stack web application that generates images based on OpenAI's DALL-E model",
        linc: "https://github.com/abaktiyar/dalle-copy"
    },
    {
        name: 'Portfolio',
        content: 'This webpage based on React.js and Tailwind for styling',
        linc: 'https://github.com/abaktiyar/home'
    },
    {
        name: 'To-do List App',
        content: 'To-do list application using React.js and Bootstrap',
        linc: 'https://github.com/abaktiyar/React_todolist'
    },
    {
        name: 'APIAI Telegram-bot',
        content: 'Telegram bot with AI extension',
        linc: 'https://github.com/abaktiyar/APIAI-Telegram-Bot-NLP'
    },
]

const VISIBLE_CARDS = 3;

const cardColors = [
    '#2c7be5', // blue
    '#38b2ac', // teal
    '#d6336c', // pink
    '#4c9f70', // green
    '#7048e8', // purple
    '#9c36b5', // magenta
    '#f76707', // orange
    '#1098ad', // cyan
];

interface CarouselProps {
    children: React.ReactNode;
}

const Carrosel = ({ children }: CarouselProps) => {
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
            {Children.map(children, (element, i) => {
                const style: CarouselCardStyle = {
                    '--atualAtivo': i === currentCard ? 1 : 0,
                    '--compensacao': (currentCard - i) / 3,
                    '--direcao': Math.sign(currentCard - i),
                    '--abs-compensacao': Math.abs(currentCard - i) / 3,
                    pointerEvents: currentCard === i ? "auto" : "none",
                    opacity: Math.abs(currentCard - i) >= VISIBLE_CARDS ? "0" : "1",
                    display: Math.abs(currentCard - i) > VISIBLE_CARDS ? "none" : "block",
                };
                return (
                    <div className="conteudo-geral" key={i} style={style}>
                        {element}
                    </div>
                );
            })}
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
    <section id="projects" className="min-h-screen bg-white flex flex-col items-center justify-center py-24">
        <div className="w-5/6 mx-auto mb-16">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
            >
                <p className="text-4xl font-bold inline border-b-4 border-red-500">Projects</p>
            </motion.div>
        </div>
        <Carrosel>
            {cardList.map((card, i) => (
                <Card
                    key={i}
                    linc={card.linc}
                    title={card.name}
                    content={card.content}
                    color={cardColors[i % cardColors.length]}
                />
            ))}
        </Carrosel>
    </section>
);

export default Res;
