/**
 * 
 */

class IssueFilter extends React.Component {
  render() {
    return (
      <div>
        All issue filters
      </div>
    );
  }
}

class IssueTable extends React.Component {
  render() {
    return (
      <div>Issue Table.</div>
    );
  }
}

class IssueAdd extends React.Component {
  render() {
    return (
      <div>Add Issue component</div>
    );
  }
}

class IssueList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable />
        <hr />
        <IssueTable />
      </React.Fragment>
    );
  }
}
const element = <IssueList />;
ReactDOM.render(element, document.getElementById('contents'));

