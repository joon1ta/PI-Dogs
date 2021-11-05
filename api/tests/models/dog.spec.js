const { Dog, conn } = require('../../src/db.js');
const { expect } = require('chai');
const {breeds} = require('../routes/testData')
describe('Dog model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Dog.create({ name: 'Pug' });
      });
    });
    describe('create breeds', ()=> {
      beforeEach(()=> {
        Dog.bulkCreate(breeds)
      })
      describe('search breed', ()=> {
        it('length db', done => {
          Dog.findAll()
          .then(resp => expect(resp.length).to.be(2))
          .catch(()=> done())
        })
        it('name breed', done => {
          Dog.findAll()
          .then(resp => expect(resp[0].name).to.be.true('Castor'))
          .catch(() => done())
        })
        it('fake name breed', done => {
          Dog.findAll()
          .then(resp => expect(resp[1].name).to.be.false('Castor'))
          .catch(() => done())
        });
      })
    })
  });
});
