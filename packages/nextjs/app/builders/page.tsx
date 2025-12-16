import BuildersList from "~~/components/BuildersList";
import { getProcessedBuilders } from "~~/utils/builders";

const BuildersPage = async () => {
  const processedBuilders = await getProcessedBuilders();

  return (
    <div className="flex items-center flex-col grow pt-10">
      <h1 className="text-2xl font-bold mb-4">Builders List</h1>
      <BuildersList builders={processedBuilders} />
    </div>
  );
};

export default BuildersPage;
