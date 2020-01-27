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
        // var res = new XMLHttpRequest();
        // var self = this;
        // const username = "hard";
        // const password = username
        // res.onreadystatechange = function (e) {
        //     if (res.readyState === 4 && res.status === 200) {
        //         self.setEmployees(JSON.parse(this.response))
        //     }
        // }

        // res.open("get", "https://cors-anywhere.herokuapp.com/http://hiring.rewardgateway.net/list")
        // res.setRequestHeader('Authorization', 'Basic ' + btoa(username + ":" + password))
        // res.send();

        var headers = new Headers();
        const username = "hard"
        const password = username
        const url = "https://cors-anywhere.herokuapp.com/http://hiring.rewardgateway.net/list"
        headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

        return fetch(url, {
            headers: headers
        })
            .then(res => res.json())
            .then(data => {
                this.setEmployees(data);
            })
            .catch(console.log)
    }
}