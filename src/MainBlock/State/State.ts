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

        this.disposeEmployees = () => { }
    }
    @action.bound changeColor(id: string, el: React.FormEvent<HTMLSelectElement>) {
        var bgcolor = el.currentTarget.value.toLowerCase()
        const item = this.employees.find(i => i.uuid === id)
        if (item) {
            localStorage.setItem(item.uuid, bgcolor);
            item.colorValue = el.currentTarget.options[el.currentTarget.selectedIndex].value;
            el.currentTarget.parentElement && (el.currentTarget.parentElement.style.background = item.colorValue)
        }
    }
    @action.bound updateCurrentPage(e: React.MouseEvent<HTMLButtonElement>) {
        this.currentPage = parseFloat(e.currentTarget.innerText)
        this.indexOfLastEmployee = this.currentPage * this.employeesPerPage;
        this.indexOfFirstEmployee = this.indexOfLastEmployee - this.employeesPerPage;
    }
    @action.bound setEmployees(employee: EmployeeType[]) {
        this.employees = employee;
    }
    @action.bound toggleImageCls(e: React.MouseEvent<HTMLAnchorElement>) {
        e.currentTarget.classList.toggle("active")
    }
    @action.bound updateOptionValue(el: React.FormEvent<HTMLSelectElement>) {
        this.optionValue = el.currentTarget.innerText.toLowerCase()
    }
    @action.bound updateInputValue(e: React.FormEvent<HTMLInputElement>) {
        this.inputValue = e.currentTarget.value.toUpperCase();
    }
    activate() {
        this.disposeEmployees = observe(this.provider, "employees", e => {
            this.setEmployees(e.newValue)
        })
    }
    deactivate() {
        this.disposeEmployees();
    }
}