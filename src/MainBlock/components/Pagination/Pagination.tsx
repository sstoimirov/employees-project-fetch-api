import * as React from "react";
import { observer } from "mobx-react";
import { Button, Fab } from "@material-ui/core";
import { PaginationType } from "../../types";

@observer
export class Pagination extends React.PureComponent<PaginationType, {}>{
    render() {
        const pageNumbers: number[] = [];
        for (let i = 1; i <= Math.ceil(this.props.totalEmployees / this.props.employeesPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <div className="pagination-wrapper">
                <Fab disabled={this.props.isDisabledDec} onClick={this.props.onClickDec} color="primary">{"<"}</Fab>
                <Button className="pagination-info" variant="contained">{`${this.props.currentPage}/${pageNumbers.length}`}</Button>
                <Fab disabled={this.props.isDisabledInc} onClick={this.props.onClickInc} color="primary">{">"}</Fab>
            </div>
        )
    }
}