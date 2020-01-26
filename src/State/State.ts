import { Provider } from "../Provider";
import { observable, action, Lambda, observe } from "mobx";
import { EmployeeType } from "../EmployeeType";

export class State {
    private provider: Provider;
    @observable employees: EmployeeType[];

    private disposeEmployees: Lambda;
    constructor(provider: Provider) {
        this.provider = provider;
        this.employees = provider.employees;

        this.disposeEmployees = observe(this.provider, "employees", e => {
            this.setEmployees(e.newValue)
        })
    }

    @action.bound setEmployees(u) {
        this.employees = u;
    }

    deactivate() {
        this.disposeEmployees();
    }
}