function SkillBar({ name, level }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span>{name}</span>
        <span>{level}%</span>
      </div>

      <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-cyan-400 rounded-full"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default SkillBar;