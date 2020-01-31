import { observable, action } from "mobx"
import { EmployeeType } from "../types";
export class Provider {
    @observable employees: EmployeeType[];
    constructor() {
        this.employees = [];
        this.fetchData();
    }

    @action.bound setEmployees(data: EmployeeType[]) {
        this.employees = data;
    }

    //Fetching data from URL
    // fetchData() {
    //     let count = 0
    //     const headers = new Headers();
    //     // const username = "hard"
    //     // const password = usernam
    //     // headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
    //     const url = "https://cors-anywhere.herokuapp.com/http://hiring.rewardgateway.net/list"
    //     headers.set('Authorization', 'Basic aGFyZDpoYXJk'); // using key instead username and password
    //     headers.set("Content-Type", "application.json");

    //     return fetch(url, {
    //         headers: headers
    //     })
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(data => {
    //             this.setEmployees(data);
    //             localStorage.setItem((++count).toString(), JSON.stringify(data));
    //         })
    // }

    // Fetching Data from local file
    fetchData() {
        const headers = new Headers();
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