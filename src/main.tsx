import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { client } from "./utils/connectors";
import { WagmiConfig } from "wagmi";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <WagmiConfig client={client}>
    <App />
  </WagmiConfig>
);
