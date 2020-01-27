import * as React from "react";
import { EmployeeType } from "../../types";
export class SelectDropdown extends React.PureComponent<{
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    employeeProps: EmployeeType
}, {}>{

    render() {
        const { employeeProps } = this.props;
        return (
            <select className="select-options" onChange={this.props.onChange} >
                <option value="name">{employeeProps.name}</option>
                <option value="title">{employeeProps.title}</option>
                <option value="uuid">{employeeProps.uuid}</option>
                <option value="bio">{employeeProps.bio}</option>
                <option value="company">{employeeProps.company}</option>
            </select>
        )
    }
}