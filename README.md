# MEAN-book

## Deploy to Heroku
  ### MongoDB
    White list Heroku:
    Heroku ips are distributed in many areas, so whtielist all ips:
    add: 0.0.0.0/0 to whitelist all IPs

  ### React-select
  Latest version "react-select", "async" should be lower case:
  ``` javascript
    import AsyncSelect from 'react-select/async';
  ```

## Chapter 12
Page 399. React.render did not generate warnings, but React.hydrate creates 
warning when loading pages other than /about from server. Add following code 
can fix the problem.
``` javascript
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
  renderMethod(element, document.getElementById('contents'));
```

## Chapter 11

On page 332:
``` javascript
  <LinkContainer to={`/edit/${issue.id}`}>
    <OverlayTrigger delayShow={1000} overlay={editTooltip}>
       ...
    </OverlayTrigger>
  </LinkContainer>
```
Should be:
``` javascript
  <OverlayTrigger delayShow={1000} overlay={editTooltip}>
    <LinkContainer to={`/edit/${issue.id}`}>
      <Button> ...</Button>
    </LinkContainer>
  </OverlayTrigger>
```
Button should be the direct child of <LinkContainer>

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
