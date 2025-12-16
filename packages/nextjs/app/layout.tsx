import QueryClientProviderWrapper from "./QueryClientProvider";
import "@rainbow-me/rainbowkit/styles.css";
import "@scaffold-ui/components/styles.css";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Batch #22 | BuidlGuidl",
  description:
    "Join Batch 22 of BuidlGuidl - Building the future of web3 together. Connect, learn, and build with our community.",
});

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <QueryClientProviderWrapper>
          <ThemeProvider enableSystem>
            <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
          </ThemeProvider>
        </QueryClientProviderWrapper>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
