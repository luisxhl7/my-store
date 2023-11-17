import { AppRouter } from "../../routers/AppRouter";
import { PageLogaut } from "../templates";

function App() {

  return (
    <PageLogaut>
      <AppRouter/>
    </PageLogaut>
  );
}

export default App;
