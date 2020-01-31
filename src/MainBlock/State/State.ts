import { observable, action, Lambda, observe } from "mobx";

import { Provider } from "../Provider";
import { PaginationType, EmployeeType } from "../types";

export class State {
    private provider: Provider;
    private disposeEmployees: Lambda;
    @observable employees: EmployeeType[];
    @observable pagination: PaginationType
    @observable currentPage: number;
    @observable employeesPerPage: number;
    @observable indexOfLastEmployee: number;
    @observable indexOfFirstEmployee: number;
    @observable inputValue: string;
    @observable optionValue: string;
    constructor(provider: Provider) {
        this.provider = provider;
        this.employees = provider.employees;
        this.currentPage = 1;
        this.employeesPerPage = 20;
        this.indexOfLastEmployee = 20;
        this.indexOfFirstEmployee = 0;
        this.inputValue = "";
        this.optionValue = "name";
        this.pagination = {
            currentPage: this.currentPage,
            employeesPerPage: this.employeesPerPage,
            totalEmployees: this.employees.length,
            isDisabledDec: this.currentPage <= 1,
            isDisabledInc: this.currentPage === this.employees.length - 1,
            updateCurrentPage: this.updateCurrentPage,
            onClickDec: this.decrementPage,
            onClickInc: this.incrementPage
        }
        this.disposeEmployees = () => { };
    }

    @action.bound updateHeaderOnScroll() {
        const headerEl = document.getElementById("header-container");
        const fixedClass = "header-container--fixed"
        if (headerEl) {
            if (window.pageYOffset > headerEl.clientHeight) {
                headerEl.classList.add(fixedClass)
            }
            else {
                headerEl.classList.remove(fixedClass)
            }
        }
    }

    @action.bound changeColor(id: string, el: React.FormEvent<HTMLSelectElement>) {
        var bgcolor = el.currentTarget.value.toLowerCase();
        const item = this.employees.find(i => i.uuid === id);
        if (item) {
            sessionStorage.setItem(item.uuid, bgcolor);
            item.colorValue = el.currentTarget.options[el.currentTarget.selectedIndex].value;
            el.currentTarget.parentElement && (el.currentTarget.parentElement.style.background = item.colorValue);
        }
    }
    @action.bound updateCurrentPage(e: React.MouseEvent<HTMLButtonElement>) {
        this.currentPage = parseFloat(e.currentTarget.innerText);

    }
    @action.bound setEmployees(employee: EmployeeType[]) {
        this.employees = JSON.parse(localStorage.getItem("1") as string);
    }
    @action.bound toggleImageCls(e: React.MouseEvent<HTMLAnchorElement>) {
        e.currentTarget.classList.toggle("active");
    }
    @action.bound updateOptionValue(el: React.ChangeEvent<HTMLSelectElement>) {
        this.optionValue = el.currentTarget.innerText.toLowerCase();
    }
    @action.bound updateInputValue(e: React.FormEvent<HTMLInputElement>) {
        this.inputValue = e.currentTarget.value.toUpperCase();
    }
    @action.bound incrementPage() {
        this.pagination.currentPage = ++this.pagination.currentPage
        this.indexOfLastEmployee = this.pagination.currentPage * this.pagination.employeesPerPage;
        this.indexOfFirstEmployee = this.indexOfLastEmployee - this.pagination.employeesPerPage;
        this.controlDisable();
    }

    @action.bound decrementPage() {
        this.pagination.currentPage = --this.pagination.currentPage;
        this.indexOfLastEmployee = this.pagination.currentPage * this.pagination.employeesPerPage;
        this.indexOfFirstEmployee = this.indexOfLastEmployee - this.pagination.employeesPerPage;
        this.controlDisable();
    }

    controlDisable() {
        this.pagination.isDisabledInc = this.pagination.currentPage === Math.ceil(this.pagination.totalEmployees / this.pagination.employeesPerPage);
        this.pagination.isDisabledDec = this.pagination.currentPage <= 1;
    }
    activate() {
        this.disposeEmployees = observe(this.provider, "employees", e => {
            this.setEmployees(e.newValue);
            this.pagination.totalEmployees = e.newValue.length
        })

    }
    deactivate() {
        this.disposeEmployees();
    }
}