import Menu from "./components/Menu";
import { nav } from "./utils/navData";

export default function Home() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <Menu orientation="vertical" navData={nav} />
    </div>
  );
}
