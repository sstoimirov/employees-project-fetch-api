import * as React from 'react';
import { observer } from "mobx-react";
import { State } from '../../State';
import * as CMP from '../../components';
import { EmployeeType } from '../../types';

@observer
export class EmployeesView extends React.PureComponent<{ dataProvider: State }, State>{

    constructor(props) {
        super(props)
        this.state = this.props.dataProvider
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
                />

            )).filter((x, index) => currentEmployees[index][this.state.optionValue].toUpperCase().indexOf(this.state.inputValue) > -1)

        )
    }

    // getEmployees() {
    //     const currentEmployees = this.state.employees.slice(this.state.indexOfFirstEmployee, this.state.indexOfLastEmployee);

    //     return (
    //         currentEmployees.map(data => (
    //             Object.keys(currentEmployees)
    //                 .filter(x => data[this.state.optionValue].toUpperCase().indexOf(this.state.inputValue) > -1)
    //                 .map(key => (
    //                     <CMP.Employee
    //                         key={key}
    //                         uuid={data.uuid}
    //                         name={data.name}
    //                         title={data.title}
    //                         company={data.company}
    //                         avatar={data.avatar}
    //                         bio={data.bio}
    //                         onClick={this.state.toggleImageCls}
    //                     />
    //                 ))
    //         ))
    //     )
    // }
    render() {
        const selectMenuProps = {
            onChange: this.state.updateOptionValue,
            employeeProps: {
                name: "Name",
                uuid: "Id",
                company: "Company",
                title: "Title",
                bio: "Bio"
            } as EmployeeType
        }
        return (
            <div>
                <CMP.Search text={`Search items by ${this.state.optionValue}`} onChange={this.state.updateInputValue} />
                <CMP.SelectDropdown {...selectMenuProps} />
                {this.getEmployees()}
                {/* <Employees/> */}
                <CMP.Pagination employeesPerPage={this.state.employeesPerPage} totalEmployees={this.state.employees.length} onClick={this.state.updateCurrentPage} />
            </div>
        )
    }
}