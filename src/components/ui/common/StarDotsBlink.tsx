const starPositions = [
  { top: '10%', left: '50%' },
  { top: '25%', left: '80%' },
  { top: '50%', left: '90%' },
  { top: '75%', left: '80%' },
  { top: '90%', left: '50%' },
  { top: '75%', left: '20%' },
  { top: '50%', left: '10%' },
  { top: '25%', left: '20%' },
  { top: '12%', left: '48%' },
  { top: '24%', left: '78%' },
  { top: '49%', left: '92%' },
  { top: '74%', left: '82%' },
  { top: '88%', left: '52%' },
  { top: '76%', left: '22%' },
  { top: '52%', left: '12%' },
  { top: '26%', left: '22%' },

  { top: '5%', left: '50%' },
  { top: '20%', left: '88%' },
  { top: '48%', left: '96%' },
  { top: '80%', left: '88%' },
  { top: '94%', left: '50%' },
  { top: '80%', left: '12%' },
  { top: '48%', left: '4%' },
  { top: '20%', left: '12%' },

];

const gradients = [
  'bg-gradient-to-br from-purple-400 to-pink-500',
  'bg-gradient-to-br from-blue-400 to-cyan-500',

  'bg-gradient-to-br from-indigo-400 to-blue-600',

];

const StarDotsBlink = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {starPositions.map((pos, i) => (
        <span
          key={i}
          className={`absolute rounded-full w-1.5 h-1.5 opacity-0 animate-blink ${gradients[i % gradients.length]}`}
          style={{
            top: pos.top,
            left: pos.left,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .animate-blink {
          animation: blink 2.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default StarDotsBlink; 