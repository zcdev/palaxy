'use client';

import Stars from '../../components/background/Stars';

export default function Background() {
    return (
        <div className="fixed h-full inset-0 bg-gradient-to-b from-indigo-950 via-purple-900 to-black bg-fixed">
            <Stars />
        </div>
    );
}
