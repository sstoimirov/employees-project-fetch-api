import { observable, action } from "mobx"
import { EmployeeType } from "../types";
// import axios from "axios";
export class Provider {
    @observable employees: EmployeeType[];
    constructor() {
        this.employees = [];
        this.fetchData();
    }

    @action.bound setEmployees(data: EmployeeType[]) {
        this.employees = data;
    }

    // fetchData() {
    //     var headers = new Headers();
    //     const username = "hard"
    //     const password = username
    //     const url = "https://cors-anywhere.herokuapp.com/http://hiring.rewardgateway.net/list"
    //     // const localUrl = "../../../employee.json";
    //     headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
    //     headers.set("Content-Type", "application.json")
    //     // {
    //     //     'Content-Type': 'application/json',
    //     //     'Accept': 'application/json'
    //     // }
    //     return fetch(url, {
    //         headers: headers
    //     })
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(data => {
    //             this.setEmployees(data);
    //         })
    // }

    fetchData() {
        var headers = new Headers();
        const username = "hard"
        const password = username
        const localUrl = "../../../employee.json";
        headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
        headers.set("Content-Type", "application.json")

        return fetch(localUrl, {
            headers: headers
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.setEmployees(data);
            })
    }
}