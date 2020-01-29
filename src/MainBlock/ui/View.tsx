import * as React from "react";
import { observer } from "mobx-react";
import { State } from "../State";
import { Provider } from "../Provider";
import * as CMP from "../components";
import { SelectDropdownType, EmployeeType } from "../types";

@observer
export class View extends React.PureComponent<{}, {}>{
    state: State;
    constructor(props) {
        super(props)
        this.state = new State(new Provider());
    }

    render() {
        const selectMenuProps: SelectDropdownType = {
            onChange: this.state.updateOptionValue,
            optionValue: this.state.optionValue,
            employeeProps: {
                name: "Name",
                company: "Company",
                bio: "Bio"
            } as EmployeeType
        }
        return (
            <div>
                <CMP.Header />
                <div className="main-content">
                    <div className="filter-section-wrapper">
                        <div className="filter-section">
                            <CMP.Search text={`Filter items by ${this.state.optionValue}`} onChange={this.state.updateInputValue} />
                            <CMP.SelectDropdown {...selectMenuProps} />
                        </div>
                        <CMP.Pagination {...this.state.pagination} />
                    </div>
                    <CMP.Employees dataProvider={this.state} />
                </div>
                <CMP.Footer />
            </div>
        )
    }
}
