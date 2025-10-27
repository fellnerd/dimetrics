"use client";

import Image from "next/image";

interface HeroBackgroundProps {
  imageSrc?: string;
  imageAlt?: string;
}

export function HeroBackgroundLight({
  imageSrc = "/images/bh01.png",
  imageAlt = "Business Solutions Overview",
}: HeroBackgroundProps) {
  return (
    <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-2/5 flex items-center justify-end overflow-visible">
      <div className="relative flex items-center justify-end w-auto h-auto">
        {/* Background placeholder to prevent dark flash */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50" />
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1100}
          height={715}
          className="relative max-w-none h-auto opacity-0 hover:opacity-95 transition-opacity duration-700 [&.loaded]:opacity-85"
          style={{
            transform: "perspective(1000px) rotateY(-15deg) rotateX(8deg)",
            transformStyle: "preserve-3d",
          }}
          priority={true}
          quality={90}
          sizes="(max-width: 768px) 100vw, 55vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAQMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP8Aof8A4KS/8FMP2xP+Chkfi/8A4WF8RtR8I/D34P8Aw68O+Cvhr8H/AAfpemeDvC2keEPDmneGrDw1e6bNcXmq29q8muanJPeX10J7ycSvFNEqqiIhAAP/2Q=="
          onLoad={(e) => {
            const target = e.target as HTMLImageElement;
            target.classList.add("loaded");
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/80 lg:to-white/40"></div>
      </div>
    </div>
  );
}
