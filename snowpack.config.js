export default {
  mount: {
      './src': '/',
  },
  devOptions: {
      port: 8080,
  },
  buildOptions: {
      out: './dist',
  },
  routes : [
      {"match": "routes", "src": ".*", "dest": "/index.html"}
  ]
}
