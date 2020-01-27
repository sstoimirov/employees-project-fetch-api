import * as React from "react";
import { observer } from "mobx-react";
import { Employees } from "../components";
import { State } from "../State";
import { Provider } from "../Provider";

@observer
export class View extends React.PureComponent<{}, {}>{
    state: State;
    constructor(props) {
        super(props)
        this.state = new State(new Provider());
    }

    render() {
        return (
            <Employees dataProvider={this.state} />
        )
    }
}
