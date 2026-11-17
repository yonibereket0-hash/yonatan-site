const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, 'dist');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.txt': 'text/plain; charset=utf-8' };

http.createServer((req, res) => {
  const requested = decodeURIComponent(req.url.split('?')[0]);
  const relative = requested === '/' ? '/index.html' : requested;
  let file = path.join(root, relative);
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!fs.existsSync(file) && path.extname(relative) === '') file = path.join(root, 'index.html');
  if (!file.startsWith(root) || !fs.existsSync(file)) {
    res.writeHead(404); res.end('Not found'); return;
  }
  res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
}).listen(4173, '127.0.0.1', () => console.log('Preview at http://127.0.0.1:4173'));
