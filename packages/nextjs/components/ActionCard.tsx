import { ReactNode } from "react";
import Link from "next/link";

type ActionCardProps = {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
};

export function ActionCard({ href, icon, title, description }: ActionCardProps) {
  return (
    <Link href={href} className="group">
      <div
        className="
          flex flex-col items-center justify-center text-center gap-3
          w-64 h-40 rounded-2xl
          bg-base-200
          border border-base-300
          shadow-[0_10px_30px_rgba(0,0,0,0.35)]
          backdrop-blur-sm
          transition-all duration-300
          hover:-translate-y-1
        "
      >
        <div className="action-card-icon">{icon}</div>

        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm opacity-70">{description}</p>
        </div>
      </div>
    </Link>
  );
}
