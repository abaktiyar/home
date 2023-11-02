const Card = ({ title, content, linc, photo }) => (


    <div className={`cartao border-gray-200 border-2`}
        onClick={() => {
            window.open(linc)
        }}
    >
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
);
export default Card;