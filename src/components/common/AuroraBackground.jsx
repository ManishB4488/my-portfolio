function AuroraBackground() {
  return (
    <>
      <div
        className="
        fixed
        top-[-250px]
        left-[-250px]
        w-[700px]
        h-[700px]
        rounded-full
        bg-cyan-500/20
        blur-[160px]
        animate-pulse
        -z-10
      "
      />

      <div
        className="
        fixed
        bottom-[-250px]
        right-[-250px]
        w-[700px]
        h-[700px]
        rounded-full
        bg-purple-600/20
        blur-[180px]
        animate-pulse
        -z-10
      "
      />

      <div
        className="
        fixed
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[500px]
        h-[500px]
        rounded-full
        bg-blue-500/10
        blur-[140px]
        -z-10
      "
      />
    </>
  );
}

export default AuroraBackground;