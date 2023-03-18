module.exports = {
  baseURL: 'https://petstore.swagger.io/v2',
  reporters: ['cli'],
  reporter: {
    outputDir: './reports',
    outputName: 'pactum-report.xml',
    plugin: 'junit'
  }
};
