export const VideoBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <iframe
        src="https://www.youtube.com/embed/e0O9bMkV3KU?autoplay=1&mute=1&loop=1&playlist=e0O9bMkV3KU&controls=0&showinfo=0&playsinline=1"
        allow="autoplay; encrypted-media"
        className="absolute w-[300%] h-[300%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ border: 'none' }}
      />
    </div>
  );
};