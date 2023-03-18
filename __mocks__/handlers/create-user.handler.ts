import {handler} from 'pactum'

handler.addSpecHandler('create user', (ctx) => {
  const {spec, data} = ctx
  spec
    .post('/user')
    .withJson(data.userData)
  spec.expectStatus(200)
})
