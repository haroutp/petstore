import {handler} from 'pactum'

handler.addSpecHandler('user login', (ctx) => {
  const {spec, data} = ctx
  spec
    .get('/user/login')
    .withQueryParams(data.queryParams)
  spec.expectStatus(200)
})
