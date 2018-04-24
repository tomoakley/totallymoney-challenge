import React from 'react';
import List from "../components/List";
import Form from "../components/Form";
import fetchIssueList from "../github";

export default class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      items: [],
      queryParams: {}
    };
    this.getQueryParams = this.getQueryParams.bind(this);
  }

  componentDidMount() {
    this.getIssues();
  }

  async getIssues(params) {
    const issues = await fetchIssueList(params);
    this.setState({ items: issues });
  }

  getQueryParams(params) {
    this.setState({ queryParams: params }, () => {
      this.getIssues(this.state.queryParams);
    });
  }

  render() {
    return (
      <div className="home">
        <Form setQueryParams={this.getQueryParams}/>
        <List items={this.state.items} />
      </div>
    )
  }

}