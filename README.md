# MEAN-book

## Chapter 9

In 'IssueDetails',
``` javascript
  async loadData() {
  ...
  const data = await graphQLFetch(query, { id });
  }
```
Need to convert id from string to number before this line.
