function Card({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_0_40px_rgba(0,255,255,.08)]
        p-6
        transition
        duration-500
        hover:border-cyan-400/40
        hover:-translate-y-2
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;