import GlowBlob from "./GlowBlob";
import MouseGlow from "./MouseGlow";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#050816]">
      <MouseGlow />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Purple Blob */}
      <GlowBlob
        className="top-[-180px] left-[-180px] h-[550px] w-[550px]"
        color="rgba(139,92,246,.28)"
        duration={20}
      />

      {/* Cyan Blob */}
      <GlowBlob
        className="bottom-[-220px] right-[-150px] h-[500px] w-[500px]"
        color="rgba(6,182,212,.22)"
        duration={24}
      />

      {/* Pink Blob */}
      <GlowBlob
        className="top-[40%] left-[45%] h-[380px] w-[380px]"
        color="rgba(236,72,153,.15)"
        duration={18}
      />

      {/* Center Light */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,.05), transparent 60%)",
        }}
      />
    </div>
  );
};

export default Background;