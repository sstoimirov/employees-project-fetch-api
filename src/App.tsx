import * as React from "react";
import { observer } from "mobx-react";
import "./App.css";
import { State } from "./MainBlock/State";
import { Provider } from "./MainBlock/Provider";
import { View } from "./MainBlock/ui";

@observer
class App extends React.PureComponent<{}, {}>{
  state: State;
  constructor(props) {
    super(props)
    this.state = new State(new Provider());
  }

  render() {
    return (
      <div>This is the main page
        {<View />}
      </div>
    )
  }
}
export default App;
