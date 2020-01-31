import * as React from "react";
import { SelectDropdownType } from "../../types";
import { FormControl, Select, MenuItem } from "@material-ui/core";
export class SelectDropdown extends React.PureComponent<SelectDropdownType, {}>{

    render() {
        const { employeeProps, onChange, optionValue } = this.props;
        return (
            <>
                <FormControl className="filter-section-search-category" variant="outlined">
                    <Select onChange={onChange} value={optionValue}>
                        <MenuItem value="name">{employeeProps.name}</MenuItem>
                        <MenuItem value="company">{employeeProps.company}</MenuItem>
                        <MenuItem value="bio">{employeeProps.bio}</MenuItem>
                    </Select>
                </FormControl>
            </>
        )
    }
}