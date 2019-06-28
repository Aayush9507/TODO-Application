const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const {user1id, user1, setupDatabase}  = require('./fixtures/db')



beforeEach(setupDatabase)

test('Should signup a new user', async () => {
    const response = await request(app).post('/users').send({
        name:"Itish",
        email:"itish9507@gmail.com",
        password:"itishgoyal"
    }).expect(201)

    // Assert that database was changed correctly
    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    // Assertions about the response
    expect(response.body).toMatchObject({
        user: {
            name: 'Itish'
        },
        token: user.tokens[0].token
    })
    expect(user.password).not.toBe('itishgoyal')
})

test('Should login existing user', async () => {
    

    const response = await request(app).post('/users/login').send({
        email: user1.email,
        password:user1.password
    }).expect(200)

    const user = await User.findById(user1id)
    expect(response.body.token).toBe(user.tokens[1].token)
})

test('Should not login not existent user', async() => {
    await request(app).post('/users/login').send({
        email: user1.email,
        password:"hello22"
    }).expect(400)
})

test('Should get profile for user', async() => {
    await request(app)
    .get('/users/me')
    .set('Authorization',`Bearer ${user1.tokens[0].token}`)
    .send()
    .expect(200)
})

test('Should get profile for unauthenticated user', async() => {
    await request(app)
    .get('/users/me')
    .send()
    .expect(401)
})

test('Delete authenticated user account', async() => {
    await request(app)
    .delete('/users/me')
    .set('Authorization',`Bearer ${user1.tokens[0].token}`)
    .send()
    .expect(200)
    const user = await User.findById(user1id)
    expect(user).toBeNull()

})

test('Fail delete unauthenticated user account', async() => {
    await request(app)
    .delete('/users/me')
    .send()
    .expect(401)
})

test('Should upload image', async ()=> {
    await request(app)
    .post('/users/me/avatar')
    .set('Authorization',`Bearer ${user1.tokens[0].token}`)
    .attach('avatar','tests/fixtures/profile-pic.jpg')
    .expect(200)
})

test('Should update valid user fields', async () => {
    await request(app)
    .patch('/users/me')
    .set('Authorization',`Bearer ${user1.tokens[0].token}`)
    .send({
        name: 'Jess'
    })
    .expect(200)
})