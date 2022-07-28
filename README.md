# xss-purge

[![Issues](	https://img.shields.io/github/issues/samuelhenshaw2020/xss-purge)](https://github.com/samuelhenshaw2020/xss-purge/issues)
[![Forks](	https://img.shields.io/github/forks/samuelhenshaw2020/xss-purge)](https://github.com/samuelhenshaw2020/xss-purge/network/members)
[![Stars](	https://img.shields.io/github/stars/samuelhenshaw2020/xss-purge)](https://github.com/samuelhenshaw2020/xss-purge/stargazers)
[![Pull Request](https://img.shields.io/github/issues-pr/samuelhenshaw2020/xss-purge)](https://github.com/samuelhenshaw2020/xss-purge/stargazers)
[![Stats](https://img.shields.io/github/watchers/samuelhenshaw2020/xss-purge)](https://github.com/samuelhenshaw2020/xss-purge/stargazers)


Node.js Connect middleware to sanitize user input coming from POST body, GET queries, and url params.

# Usage
```shell
npm install xss-purge
```

### With Express (JS)
```js
const express = require('express');
const xssPurge = require('xss-purge');

const app = express();

app.use(xssPurge());

app.listen(5000)

```

This will sanitize any data in req.body, req.query, and req.params. You can also access the API directly if you don't want to use as middleware.