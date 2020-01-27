import * as React from "react";
import { EmployeeType } from "../../types";

export class Employee extends React.PureComponent<EmployeeType, {}>{
    render() {
        return (
            <div className="employee">
                <div className="employee-id">ID: {this.props.uuid}</div>
                <div className="employee-name">Name: {this.props.name}</div>
                <div className="employee-title">Title: {this.props.title}</div>
                <div className="employee-company">Company: {this.props.company}</div>
                <a className="employee-avatar" onClick={this.props.onClick}><img src={this.props.avatar} /></a>
                <div className="employee-bio">Bio: {this.props.bio}</div>
            </div>
        )
    }
}