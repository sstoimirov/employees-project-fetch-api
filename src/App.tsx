import * as React from 'react';
import { observer } from "mobx-react";

// import data from "./data.json";
import './App.css';
import { Block } from './Block';
import { State } from './State';
import { Provider } from './Provider';

@observer
class App extends React.PureComponent<{}, {}>{
  state: State;
  constructor(props) {
    super(props)
    this.state = new State(new Provider());
    // this.fetchData();
  }


  // fetchData() {
  //   var headers = new Headers();
  //   const username = "hard"
  //   const password = username
  //   var url = "http://hiring.rewardgateway.net/list"
  //   headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
  //   return fetch(url, {
  //     headers: headers,
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //     })
  //     .catch(console.log)
  // }
  render() {
    return (
      <div>This is the main page
        {<Block dataProvider={this.state} />}
        {/* <div>{data.map(data => <div className="person" key={data.uuid}>{Object.keys(data).map(x => <div key={`${data.uuid}_${x}`}>{x + ": " + data[x]}</div>)}</div>)}</div> */}
      </div>
    )
  }
}
export default App;
