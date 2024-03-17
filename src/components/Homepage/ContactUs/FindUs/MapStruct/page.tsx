"use client";

export default function MapStruct() {
  return (
    <>
      <iframe
        className="h-[248px] w-[248px] border-none sm:h-[448px] sm:w-[448px]"
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ2eWshbo7WpMRyW_XzFV-Glc&key=${process.env.NEXT_PUBLIC_MAP_API_KEY}`}
      ></iframe>
    </>
  );
}
