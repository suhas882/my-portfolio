export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-neon-blue/20 blur-[120px] animate-blob" />
      <div
        className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-neon-purple/20 blur-[120px] animate-blob"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px] animate-blob"
        style={{ animationDelay: "8s" }}
      />
      {/* particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white/60 animate-particle"
          style={{
            top: `${(i * 53) % 100}%`,
            left: `${(i * 37) % 100}%`,
            animationDelay: `${(i % 6) * 1.2}s`,
            animationDuration: `${6 + (i % 5)}s`,
          }}
        />
      ))}
    </div>
  );
}
