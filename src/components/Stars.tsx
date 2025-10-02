// components/Stars.tsx
import StarLayer from "./StarLayer";

export default function Stars() {
    return (
        <div className="absolute inset-0">
            {/* Far layer: faint, slow warp */}
            <StarLayer
                count={100}
                sizeRange={[0.5, 1.2]}
                durationRange={[8, 12]}
                opacityRange={[0, 0.4]}
            />

            {/* Mid layer: medium warp */}
            <StarLayer
                count={80}
                sizeRange={[1, 2]}
                durationRange={[5, 8]}
                opacityRange={[0.2, 0.7]}
            />

            {/* Near layer: bright, fast zoom */}
            <StarLayer
                count={60}
                sizeRange={[2, 3]}
                durationRange={[3, 5]}
                opacityRange={[0.3, 1]}
            />
        </div>
    );
}
