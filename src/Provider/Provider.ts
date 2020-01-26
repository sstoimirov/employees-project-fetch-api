import { observable, action } from "mobx"

export class Provider {
    @observable employees: [];
    constructor() {
        this.employees = [];
        this.fetchData();
    }

    @action.bound setEmployees(data) {
        this.employees = data;
    }

    fetchData() {
        var headers = new Headers();
        const username = "hard"
        const password = username
        var url = "http://hiring.rewardgateway.net/list"
        headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
        return fetch(url, {
            headers: headers,
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setEmployees(data);
            })
            .catch(console.log)
    }
}