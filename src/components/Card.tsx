interface CardProps {
    title: string;
    content: string;
    linc: string;
    color: string;
}

const Card = ({ title, content, linc, color }: CardProps) => (
    <div
        className="cartao border-gray-200 border-2 flex flex-col justify-between cursor-pointer"
        style={{ backgroundColor: color }}
        role="button"
        tabIndex={0}
        aria-label={`View ${title} on GitHub`}
        onClick={() => window.open(linc, '_blank', 'noopener,noreferrer')}
        onKeyDown={(e) => e.key === 'Enter' && window.open(linc, '_blank', 'noopener,noreferrer')}
    >
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
        <div style={{ marginTop: '1.5rem', fontSize: '0.875rem', fontWeight: '600', opacity: 0.85, display: 'flex', alignItems: 'center', gap: '4px' }}>
            View on GitHub →
        </div>
    </div>
);

export default Card;
