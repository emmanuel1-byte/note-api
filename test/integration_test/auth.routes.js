const app = require('../../app');
const request = require('supertest');

//Authentication
describe('Base', ()=>{
    describe('Base path of the application', ()=>{
    it('respond with json', (done)=>{
       return request(app)
        .get('/')
        .expect(200, done())
        
    })
})
})

describe("POST /signup ", ()=>{ //Account creation Test
    describe("User signUp",()=>{
        it("create account for a user that meets all criteraias", ()=>{
           return  request(app)
            .post('/api/v1/auth/signup')
            .set('Accept', 'application/json')
            .send({username:"cooker", email : "black10@gmail.com", password:"blackberry090" })
            .expect(201)

        })
    })
})

let accessToken;
let refreshToken;
describe('POST /signin', ()=>{
    describe("User Login",()=>{
        it("should log the user in if account details are correct and return an Access and refresh token upon succcesfull login", (done)=>{
            request(app)
            .post('/api/v1/auth/login')
            .send({ username:"cooker", password:"blackberry090"})
            .auth( 'username', 'password')
            .set('Accept', 'application/json')
            .expect(200, done())
            .end((err, res)=>{
                accessToken = res.body.acessToken
                refreshToken = res.body.refreshToken
                done();
            })
        })
    })
})

describe('POST /sigout', ()=>{
    describe("User Logout",()=>{
        it("log out user and revoke tokens", (done)=>{
            request(app)
            .post('/api/v1/auth/logout')
            .send({ refreshToken: `${refreshToken}`, accesToken: `${accessToken}`})
            .set('Accept', 'application/json')
            .expect(200, done())
        })
    })
})

describe('POST /refreshToken', ()=>{
    describe("new  accessToken",()=>{
        it("user shoud get a new AccesToken as response", (done)=>{
            request(app)
            .post('/api/v1/auth/logout')
            .send({ refreshToken:""})
            .set('Accept', 'application/json')
            .expect(200, done())
        })
    })
})

