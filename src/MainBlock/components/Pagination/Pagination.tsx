import * as React from "react";

export class Pagination extends React.PureComponent<{ employeesPerPage: number, totalEmployees: number, paginate }, {}>{
    render() {
        const pageNumbers: number[] = [];
        for (let i = 1; i <= Math.ceil(this.props.totalEmployees / this.props.employeesPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => this.props.paginate} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        )
    }
}