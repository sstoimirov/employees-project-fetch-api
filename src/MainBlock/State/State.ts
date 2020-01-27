import { Provider } from "../Provider";
import { observable, action, Lambda, observe } from "mobx";
import { EmployeeType } from "../types/EmployeeType";

export class State {
    private provider: Provider;
    @observable employees: EmployeeType[];
    @observable currentPage: number;
    @observable currentPosts: EmployeeType[];
    @observable employeesPerPage: number;
    @observable indexOfLastEmployee: number;
    @observable indexOfFirstEmployee: number;
    @observable inputValue: string;
    @observable optionValue: string;

    private disposeEmployees: Lambda;
    constructor(provider: Provider) {
        this.provider = provider;
        this.employees = provider.employees;
        this.currentPage = 1
        this.employeesPerPage = 20;
        this.indexOfLastEmployee = 20;
        this.indexOfFirstEmployee = 0;
        this.currentPosts = [];
        this.inputValue = "";
        this.optionValue = "name";

        this.disposeEmployees = observe(this.provider, "employees", e => {
            this.setEmployees(e.newValue)

        })
    }
    @action.bound updateCurrentPage(e: React.MouseEvent<HTMLButtonElement>) {
        this.currentPage = parseFloat(e.currentTarget.innerText)

        this.indexOfLastEmployee = this.currentPage * this.employeesPerPage;
        this.indexOfFirstEmployee = this.indexOfLastEmployee - this.employeesPerPage;
    }
    @action.bound setEmployees(u) {
        this.employees = u;
    }
    @action.bound toggleImageCls(e: React.MouseEvent<HTMLAnchorElement>) {
        e.currentTarget.classList.toggle("active")
    }
    @action.bound updateOptionValue(el: React.FormEvent<HTMLSelectElement>) {
        this.optionValue = el.currentTarget.value
    }
    @action.bound updateInputValue(e: React.FormEvent<HTMLInputElement>) {
        this.inputValue = e.currentTarget.value.toUpperCase();
    }

    deactivate() {
        this.disposeEmployees();
    }
}