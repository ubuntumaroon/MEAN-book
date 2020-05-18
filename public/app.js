"use strict";

/**
 * 
 */
class IssueFilter extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "All issue filters");
  }

}

class IssueTable extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "Issue Table.");
  }

}

class IssueAdd extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "Add Issue component");
  }

}

class IssueList extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Issue Tracker"), /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, null));
  }

}

var element = /*#__PURE__*/React.createElement(IssueList, null);
ReactDOM.render(element, document.getElementById('contents'));