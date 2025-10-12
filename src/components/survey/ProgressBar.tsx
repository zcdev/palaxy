type ProgressBarProps = {
    progress: number;
};

export default function ProgressBar({ progress }: ProgressBarProps) {
    return (
        <div className="w-full h-3 bg-white/60 rounded-full overflow-hidden" >
            <div
                className="h-full bg-purple-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}