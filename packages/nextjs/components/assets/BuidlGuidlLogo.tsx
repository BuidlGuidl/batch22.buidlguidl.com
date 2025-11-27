export const BuidlGuidlLogo = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle */}
      <circle cx="50" cy="50" r="45" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2" />
      {/* Number 22 */}
      <text
        x="50"
        y="60"
        fontSize="48"
        fontWeight="bold"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        22
      </text>
      {/* Batch label */}
      <text
        x="50"
        y="28"
        fontSize="10"
        fontWeight="600"
        textAnchor="middle"
        fill="currentColor"
        opacity="0.7"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        BATCH
      </text>
      {/* Decorative elements */}
      <circle cx="25" cy="35" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="75" cy="35" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="20" cy="75" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="80" cy="75" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  );
};
