export const InfoCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-base-100 dark:bg-base-300 rounded-2xl p-8 border border-base-300 dark:border-base-100 shadow-lg dark:shadow-none">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    {children}
  </div>
);
