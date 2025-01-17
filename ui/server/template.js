
import serialize from 'serialize-javascript';

export default function template(body, initialData, userData) {
  return `<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>MERN Stack</title>
    <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://apis.google.com/js/api:client.js"></script>
    <!--
    <script src="https://unpkg.com/react/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/prop-types@15/prop-types.js" crossorigin></script>
    
    <script src="https://unpkg.com/@babel/polyfill@7/dist/polyfill.min.js" crossorigin></script>
    <script src="https://unpkg.com/whatwg-fetch@3.0.0/dist/fetch.umd.js" crossorigin></script>
    -->
    
    <style>
        .header {
            color: red;
        }
        table.bordered-table th, td {border: 1px solid silver; padding: 4px;}
        table.bordered-table {border-collapse: collapse;}
        a.active {
            background-color: #D9D9F5;
        }
        
        table.table-hover tr {cursor: pointer;}
        
    </style>
</head>

<body>
    <!-- Page generated from template. -->
    <div id="contents">${body}</div>

    <script>
        window.__INITIAL_DATA__ = ${serialize(initialData)}
        window.__USER_DATA__ = ${serialize(userData)}
    </script>

    <script src="/env.js"></script>
    <script src="/vendor.bundle.js"></script>
    <script src="/app.bundle.js"></script>
</body>

</html>`;
}
