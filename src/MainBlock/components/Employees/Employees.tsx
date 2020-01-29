import * as React from "react";
import { observer } from "mobx-react";
import { State } from "../../State";
import { Employee } from "../Employee";

@observer
export class Employees extends React.PureComponent<{ dataProvider: State }, State>{
    constructor(props) {
        super(props)
        this.state = this.props.dataProvider
    }
    componentDidMount() {
        this.state.activate();
    }

    getEmployees() {
        const currentEmployees = this.state.employees.slice(this.state.indexOfFirstEmployee, this.state.indexOfLastEmployee);
        return (
            currentEmployees.map(data => (
                <Employee
                    key={data.uuid}
                    uuid={data.uuid}
                    name={data.name}
                    title={data.title}
                    company={data.company}
                    avatar={data.avatar}
                    bio={data.bio}
                    onClick={this.state.toggleImageCls}
                    onColorChanged={this.state.changeColor.bind(this, data.uuid)}
                    colorValue={sessionStorage.getItem(data.uuid) as string}
                    />
            ))
            .filter((x, index) => currentEmployees[index][this.state.optionValue].toUpperCase().indexOf(this.state.inputValue) > -1)
        )
    }
    render() {

        return (
            <div className="employees-wrapper">
                {this.getEmployees()}
            </div>
        )
    }
}