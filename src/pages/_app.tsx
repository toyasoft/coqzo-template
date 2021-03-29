import "public/styles.css";
import { ReactRelayContext, RelayEnvironmentProvider } from "react-relay";
import { useEnvironment } from "src/lib/relay";

export default function App({ Component, pageProps }) {
  const environment = useEnvironment(pageProps.initialRecords);
  return (
    <ReactRelayContext.Provider value={{ environment, variables: {} }}>
      <Component {...pageProps} />
    </ReactRelayContext.Provider>
  );
}
