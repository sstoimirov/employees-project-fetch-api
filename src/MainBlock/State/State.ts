import { Provider } from "../Provider";
import { observable, action, Lambda, observe } from "mobx";
import { EmployeeType } from "../types/EmployeeType";

export class State {
    private provider: Provider;
    @observable employees: EmployeeType[];
    @observable currentPage: number;
    @observable setCurrentPage: number;
    @observable employeesPerPage: number;
    @observable indexOfLastEmployee: number;
    @observable indexOfFirstEmployee: number;
    private disposeEmployees: Lambda;
    constructor(provider: Provider) {
        this.provider = provider;
        this.employees = provider.employees;
        this.currentPage = 1
        this.employeesPerPage = 20;
        this.setCurrentPage = 1

        this.indexOfLastEmployee = this.currentPage * this.employeesPerPage;
        this.indexOfFirstEmployee = this.indexOfLastEmployee - this.employeesPerPage;

        this.disposeEmployees = observe(this.provider, "employees", e => {
            this.setEmployees(e.newValue)
        })
    }
    @action.bound updateCurrentPage(pageNumber: number) {
        return this.setCurrentPage = pageNumber
    }
    @action.bound setEmployees(u) {
        this.employees = u;
    }

    deactivate() {
        this.disposeEmployees();
    }
}