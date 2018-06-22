const routers = module.exports = require('next-routes')()

routers
.add('index', '/', 'index')
.add('post', '/p/:id', 'post')