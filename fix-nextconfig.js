const fs = require('fs');
const f = 'C:/Users/User/Documents/Caja menor/micaja/next.config.mjs';
let c = fs.readFileSync(f, 'utf8');
c = c.replace('const nextConfig = {', 'const nextConfig = {\n  experimental: {\n    serverActions: { bodySizeLimit: "10mb" },\n  },\n  maxDuration: 90,');
fs.writeFileSync(f, c, 'utf8');
console.log('Listo');
