import * as React from "react";
import { EmployeeType } from "../../types";
import { ColorPicker } from "../ColorPicker";
// import { FormControl, Select, MenuItem } from "@material-ui/core";
// import LazyLoad from "react-lazy-load";
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';

export class Employee extends React.PureComponent<EmployeeType, {}>{
    render() {
        return (
            <div className="employee">
                <div className="employee-content" style={{ background: this.props.colorValue }}>
                    <a className="employee-avatar" href="!#" onClick={this.props.onClick}><img data-src={this.props.avatar} alt="" /></a>
                    <div className="employee-name">Name: {this.props.name}</div>
                    <div className="employee-company">Company: {this.props.company}</div>
                    {this.props.bio && <div className="employee-bio">Bio: {this.props.bio}</div>}
                    {/* <FormControl variant="outlined">
                        <Select onChange={this.props.onChange} id="color-selection">
                            <MenuItem value="white" selected={true}>white</MenuItem>
                            <MenuItem value="red">red</MenuItem>
                            <MenuItem value="green">green</MenuItem>
                            <MenuItem value="blue">blue</MenuItem>
                        </Select>
                    </FormControl> */}
                    <ColorPicker onChange={this.props.onColorChanged} />
                </div>
            </div>
        )
    }
}