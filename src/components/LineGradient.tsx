interface LineGradientProps {
    width?: string;
}

const LineGradient = ({ width = "w-full" }: LineGradientProps) => {
    return <div className={`h-0.5 ${width} bg-red-500`} />;
}

export default LineGradient;
