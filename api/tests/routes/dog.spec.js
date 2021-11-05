/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog,Temperament, conn } = require('../../src/db.js');
const { breeds, temperaments } = require("./testData");
const agent = session(app);
const dog = {
  name: 'Pug',
};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));
  describe('GET /dogs', () => {
    it('should get 200', () =>
      agent.get('/dogs').expect(200)
    );
  });
describe('POST /dogs', () => {
  it('Create Breed', ()=> {
    agent.post('/dogs').send({
      name: {},

        height: breeds[0].height,

        weight: breeds[0].weight,

        life: breeds[0].life,

        temperament: temperaments[0]
    })
  })
})
});
