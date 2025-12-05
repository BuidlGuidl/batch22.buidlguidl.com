import fs from "fs";
import { gql, request } from "graphql-request";
import path from "path";

const GRAPHQL_QUERY = gql`
  {
    checkedIns {
      builder
    }
  }
`;

const GRAPHQL_URL = "https://api.studio.thegraph.com/query/1717360/batch-22-buidlguidl/version/latest";

export type ProcessedBuilder = {
  builder: string;
  index: number;
  hasPage: boolean;
  checksummedAddress: string | null;
};

/**
 * Fetches builders data from GraphQL, removes duplicates, reads builder pages from filesystem,
 * and enriches each builder with page information.
 * @returns Array of processed builders with page information
 */
export async function getProcessedBuilders(): Promise<ProcessedBuilder[]> {
  // Fetch data from GraphQL
  const data = await request(GRAPHQL_URL, GRAPHQL_QUERY, {});
  const checkedIns = (data?.checkedIns || []) as Array<{ builder: string }>;

  // Remove duplicates
  const uniqueBuilders = Array.from(
    new Map(checkedIns.map((item, index) => [item.builder, { ...item, index }])).values(),
  ) as Array<{ builder: string; index: number }>;

  // Read folders from filesystem
  const buildersDir = path.join(process.cwd(), "app/builders");
  const folders = fs
    .readdirSync(buildersDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  // Create folder map (lowercase -> checksummed address)
  const folderMap = new Map<string, string>();
  folders.forEach(folder => {
    folderMap.set(folder.toLowerCase(), folder);
  });

  // Enrich builders with page information
  return uniqueBuilders.map(builder => {
    const checksummedAddress = folderMap.get(builder.builder.toLowerCase());
    return {
      builder: builder.builder,
      index: builder.index,
      hasPage: !!checksummedAddress,
      checksummedAddress: checksummedAddress || null,
    };
  });
}
