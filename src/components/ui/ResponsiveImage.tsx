import Image from 'next/image';
export default function ResponsiveImage({
    src = "",
    alt = "",
    width = 100,
    height = 100,
}) {

    return (
        <picture>
            <Image
                src={`${src}.png`}
                width={width}
                height={height}
                alt={alt}
                priority={true}
            />
        </picture>
    );
}
