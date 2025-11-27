import Image from "next/image";

export const BuidlGuidlLogo = ({ className }: { className: string }) => {
  return (
    <Image
      src="/logo.svg"
      alt="Batch 22 Logo"
      width={100}
      height={100}
      className={className}
    />
  );
};
