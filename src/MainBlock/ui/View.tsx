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

    componentDidMount() {
        this.state.activate()
        window.addEventListener("scroll", this.state.updateHeaderOnScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.state.updateHeaderOnScroll);
    }

    getEmployees() {
        const currentEmployees = this.state.employees.slice(this.state.indexOfFirstEmployee, this.state.indexOfLastEmployee);
        return (
            currentEmployees.map(data => (
                <CMP.Employee
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
                    <div className="employees-wrapper">
                        {this.getEmployees()}
                    </div>
                </div>
                <CMP.Footer />
            </div>
        )
    }
}
