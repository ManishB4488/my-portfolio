function TechBadge({ children }) {
  return (
    <div className="px-4 py-2 rounded-full bg-zinc-900 border border-cyan-500/30 shadow-lg">
      {children}
    </div>
  );
}

export default TechBadge;