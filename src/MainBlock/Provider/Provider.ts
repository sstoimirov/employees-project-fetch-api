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

    async fetchData() {
        var headers = new Headers();
        const username = "hard"
        const password = username
        var url = "https://cors-anywhere.herokuapp.com/http://hiring.rewardgateway.net/list"
        headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
        return await fetch(url, {
            headers: headers,
        })
            .then(res => res.json())
            .then(data => {
                this.setEmployees(data);
            })
            .catch(console.log)
    }
}