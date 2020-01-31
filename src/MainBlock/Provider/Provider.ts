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

    //Fetching data from URL
    fetchData() {
        var headers = new Headers();
        // const username = "hard"
        // const password = usernam
        // headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
        const url = "http://hiring.rewardgateway.net/list"
        headers.set('Authorization', 'Basic aGFyZDpoYXJk'); // using key instead username and password
        headers.set("Content-Type", "application.json");
        headers.set("Access-Control-Allow-Origin", "http://localhost:3000")
        let count = 1;

        return fetch(url, {
            headers: headers
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                localStorage.setItem((++count).toString(), JSON.stringify(data));
                this.setEmployees(data);
            })
    }

    // Fetching Data from local file
    // fetchData() {
    //     var headers = new Headers();
    //     const username = "hard"
    //     const password = username
    //     const localUrl = "../../../employee.json";
    //     headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
    //     headers.set("Content-Type", "application.json")

    //     return fetch(localUrl, {
    //         headers: headers
    //     })
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(data => {
    //             this.setEmployees(data);
    //         })
    // }
}