"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const next = require("next");
const fs = require("fs");
const path = require("path");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare()
    .then(() => {
    const server = express();
    server.get('/a', (req, res) => {
        return app.render(req, res, '/a', req.query);
    });
    server.get('/about', (req, res) => {
        const data = fs.readFileSync(path.join(__dirname, '../pages/about/index.tsx'), 'utf-8');
        console.log('about');
        return app.render(req, res, '/about', data);
    });
    server.get('*', (req, res) => {
        console.log(req.path);
        return handle(req, res);
    });
    server.listen(port, (err) => {
        if (err)
            throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
//# sourceMappingURL=index.js.map