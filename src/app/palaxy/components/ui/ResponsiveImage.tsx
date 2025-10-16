import Image from 'next/image';
export default function ResponsiveImage({
    src = "",
    alt = "",
    width = 100,
    height = 100,
    className = ""
}) {

    return (
        <picture>
            <Image
                src={src}
                width={width}
                height={height}
                alt={alt}
                priority={true}
                className={className}
            />
        </picture>
    );
}
