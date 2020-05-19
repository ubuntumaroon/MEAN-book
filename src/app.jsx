/**
 * 
 */
const initialIssues = [
  {
    id: 1, status: 'New', owner: 'Ravan', effort: 5,
    created: new Date('2018-08-15'), due: undefined,
    title: 'Error in console when clicking Add',
  },
  {
    id: 2, status: 'Assigned', owner: 'Eddie', effort: 14,
    created: new Date('2018-08-16'), due: new Date('2018-08-30'),
    title: 'Missing bottom border on panel',
  },
];

const sampleIssue = {
  status: 'New', owner: 'SF', 
  title: 'Optional date',
}

class IssueFilter extends React.Component {
  render() {
    return (
      <div>
        All issue filters
      </div>
    );
  }
}

const counter = (function() {
  let count = 0;
  return {
    increase: function() {
      count++;
    }, 
    log: function(str) {
      str = str || '';
      console.log(count);
    },
    clear: function() {
      count = 0;
    }
  }
})();

class IssueRow extends React.Component {
  render() {
    counter.increase();
    counter.log('IssueRendering: ');
    const issue = this.props.issue;
    return (
      <tr>
        <td>{issue.id}</td>
        <td>{issue.status}</td>
        <td>{issue.owner}</td>
        <td>{issue.created.toDateString()}</td>
        <td>{issue.effort}</td>
        <td>{issue.due ? issue.due.toDateString() : ''}</td>
        <td>{issue.title}</td>
      </tr>
    )
  }
}

class IssueTable extends React.Component {
  constructor() {
    super();
    this.state = {issues: []};
    setTimeout(() => {
      this.createIssue(sampleIssue);
    }, 2000);
  }

  componentDidMount() {
    this.loadData();
  }

  createIssue(issue) {
    issue = Object.assign({}, issue);
    issue.id = this.state.issues.length + 1;
    issue.created = new Date();
    const newIssueList = this.state.issues.slice();
    newIssueList.push(issue);
    this.setState({issues: newIssueList});
  }

  loadData() {
    setTimeout(() => {
      this.setState({issues: initialIssues});
    }, 500);
  }

  render() {
    const issueRows = this.state.issues.map(issue => <IssueRow key={issue.id} issue={issue}/>);
    return (
      <table style={{borderCollapse: "collapse"}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Effort</th>
            <th>Due Date</th>
            <th>Title</th>
          </tr>
        </thead>

        <tbody>
          {issueRows}
        </tbody>
      </table>
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
        <IssueAdd />
      </React.Fragment>
    );
  }
}


const element = <IssueList />;
ReactDOM.render(element, document.getElementById('contents'));

