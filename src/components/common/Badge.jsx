function Badge({ children }) {
  return (
    <span className="
      px-3
      py-1
      text-xs
      rounded-full
      bg-cyan-500/10
      border
      border-cyan-500/20
      text-cyan-300
      backdrop-blur-md
    ">
      {children}
    </span>
  );
}

export default Badge;