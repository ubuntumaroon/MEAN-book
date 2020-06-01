# MEAN-book

## Chapter 10
Installed jquery popper.js as peer dependence for bootstrap@4

installed react-icons

## Chapter 9

In 'IssueDetails',
``` javascript
  async loadData() {
  ...
  const data = await graphQLFetch(query, { id });
  }
```
Need to convert id from string to number before this line.
