
import { MyComp } from "./MyComp";
import { CounterWithoutState } from "./Components/State/CounterWithoutState";
import { CounterWithState } from "./Components/State/CounterWithState";
import { NameForm } from "./Components/State/NameForm";

function App() {
  return (
    <div>
      {/* <CounterWithoutState />
      <CounterWithState /> */}
      <NameForm />
    </div>
  );

}

export default App;
