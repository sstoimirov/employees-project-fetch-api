import * as React from "react";
import { EmployeeType } from "../../types";
import { ColorPicker } from "../ColorPicker";
export class Employee extends React.PureComponent<EmployeeType, {}>{
    render() {
        return (
            <div className="employee">
                <div className="employee-content" style={{ background: this.props.colorValue }}>
                    <a className="employee-avatar" href="#0" onClick={this.props.onClick}><img className="image-holder" src={this.props.avatar} alt="" /></a>
                    <div className="employee-name">Name: {this.props.name}</div>
                    <div className="employee-title">Title: {this.props.title}</div>
                    <div className="employee-company">Company: {this.props.company}</div>
                    {this.props.bio && <div className="employee-bio">Bio: {this.props.bio}</div>}
                    <ColorPicker onChange={this.props.onColorChanged} choosenValue={this.props.colorValue} />
                </div>
            </div>
        )
    }
}