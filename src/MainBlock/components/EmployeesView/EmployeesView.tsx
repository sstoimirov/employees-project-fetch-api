import * as React from 'react';
import { observer } from "mobx-react";
import { Employee } from '../Employee';
import { State } from '../../State';
import { Pagination } from '../Pagination';

@observer
export class EmployeesView extends React.PureComponent<{ dataProvider: State }, State>{
    constructor(props) {
        super(props)
        this.state = this.props.dataProvider

    }
    render() {
        return (
            <div>
                <div>{this.state.employees.slice(this.state.indexOfFirstEmployee, this.state.indexOfLastEmployee).map(data => (
                    <Employee
                        key={`${data.uuid}__${data.name}`}
                        uuid={data.uuid}
                        name={data.name}
                        title={data.title}
                        company={data.company}
                        avatar={data.avatar}
                        bio={data.bio}
                    />
                ))}</div>
                <Pagination employeesPerPage={this.state.employeesPerPage} totalEmployees={this.state.employees.length} paginate={this.state.updateCurrentPage} />
            </div>
        )
    }
}