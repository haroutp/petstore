import {request, spec} from 'pactum'
import '@../../../__mocks__/handlers/create-user.handler';
// __test__/api/users/all-endpoints.spec.ts
import '@../../../__mocks__/handlers/user-login.handler.ts'
// const { Matchers } = require('@pactumjs/matchers');
request.setBaseUrl('https://petstore.swagger.io/v2')

describe('Petstore API Tests', () => {
  const mainUser = {
    id: 1,
    username: 'testuser',
    firstname: 'Test',
    lastname: 'User',
    email: 'testuser@example.com',
    password: 'password123',
    phone: '123-456-7890',
    userStatus: 1,
  };

  it('should create a new user', async () => {
    await spec()
      .post('/user')
      .withJson(mainUser)
      .expectStatus(200);
  });

  it('should log in the user', async () => {
    const queryParams = {
      username: 'testuser',
      password: 'password123',
    };

    await spec()
      .get('/user/login')
      .withQueryParams(queryParams)
      .expectStatus(200);
  });

  it('should log out the user', async () => {
    await spec()
      .get('/user/logout')
      .expectStatus(200);
  });

  it('should delete user if user is logged in', async () => {
    const userData = {
      id: 1,
      username: 'testUserToDelete',
      firstname: 'Test',
      lastname: 'UserToDelete',
      email: 'testusertodelete@example.com',
      password: 'password123',
      phone: '123-456-7890',
      userStatus: 1,
    };

    const queryParams = {
      username: userData.username,
      password: userData.password,
    };
    
    await spec('create user', {
      userData,
    })
    // await spec('user login', {
    //   queryParams,
    // })

    await spec()
      .delete(`/user/${userData.username}`)
      .expectStatus(200)
      .inspect()
  })

  it('should return 404 for an invalid endpoint', async () => {
    await spec()
      .get('/invalid')
      .expectStatus(404);
  });

  it('should return 400 for a bad request', async () => {
    const mainUser = {
      invalid_field: 'invalid_value',
    };

    await spec()
      .post('/user')
      .withJson(mainUser)
      .expectStatus(400);
  });

  it('should return 405 for a request not allowed', async () => {
    await spec()
      .get('/user')
      .withJson(mainUser)
      .expectStatus(405);
  });

  it('should return 404 for user not found request', async () => {
    await spec()
      .delete('/user/1')
      .expectStatus(404);
  });

  it('should return 404 for a client error', async () => {
    await spec()
      .get('/client_error')
      .expectStatus(404);
  });
});
