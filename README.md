# MEAN-book

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
