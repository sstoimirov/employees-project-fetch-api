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

    fetchData() {
        var headers = new Headers();
        const username = "hard"
        const password = username
        // const url = "http://hiring.rewardgateway.net/list"
        headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
        headers.set("Content-Type", "application.json")
        return fetch("../../../employee.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.setEmployees(data);
            })
        // return fetch(url, {
        //     headers: headers,
        // })
        //     .then(res => {
        //         if (res.ok) {
        //             return res.json()
        //         } else {
        //             throw Error(`Request rejected with status: ${res.status}`)
        //         }
        //     })
        //     .then(data => {
        //         this.setEmployees(data);
        //     })
        //     .catch(()=>{
        //         console.error()
        //     })
    }
}