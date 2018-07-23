const path = require('path')

const containers = path.resolve(`${__dirname}/pages`)

module.exports = {
  getRoutes: ({ siteProps }) => {
    return [
      {
        path: '/',
        title: 'Home',
        component: `${containers}/Home`
			},
      {
        is404: true,
        path: '',
        component: `${containers}/404`
      }
    ]
  }
}
