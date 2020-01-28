import * as React from "react";
import { SelectDropdownType } from "../../types";
import { FormControl, Select, MenuItem } from "@material-ui/core";
export class SelectDropdown extends React.PureComponent<SelectDropdownType, {}>{

    render() {
        const { employeeProps, onChange, optionValue } = this.props;
        return (
            <>
                <FormControl variant="outlined">
                    <Select onChange={onChange} value={optionValue}>
                        <MenuItem value="name">{employeeProps.name}</MenuItem>
                        <MenuItem value="company">{employeeProps.company}</MenuItem>
                        <MenuItem value="bio">{employeeProps.bio}</MenuItem>
                    </Select>
                </FormControl>

                {/* <select className="select-options" onChange={onChange}>
                    <option value="name">{employeeProps.name}</option>
                    <option value="company" selected>{employeeProps.company}</option>
                    <option value="bio">{employeeProps.bio}</option>
                </select> */}
            </>
        )
    }
}