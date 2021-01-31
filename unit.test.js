const axios = require('axios');

// toBe
test('addition still works - toBe', () => {
    expect(2+2).toBe(4);
});

// not toBe
test('addition still works - not toBe', () => {
    expect(2+2).not.toBe(5);
});

// toBeFalsy
test('still null - toBeFalsy', () => {
    expect(returnNull = () => null).not.toBeFalsy();
});

createUser = () => {
    const user = { firstName: 'Wayne' };
    user['lastName'] = 'Greeley';
    return user;
}

// toEqual
test('create user me - toEqual', () => {
    expect(createUser()).toEqual({
        firstName: 'Wayne',
        lastName: 'Greeley'
    });
});

// toBeLessThan
test('addition still works - toBeLessThan', () => {
    expect(2+2).toBeLessThan(5);
});

// Regex toMatch
test('there is no i in team', () => {
    expect('team').not.toMatch(/I/);
});

// array toContain
test('array contains joe', () => {
    username = ['jim','joe','bob'];
    expect(username).toContain('bob');
})

fetchUser = () => axios.get('https://jsonplaceholder.typicode.com/users/7')
    .then(res => res.data)
    .catch(err => 'error')

// promise - fetch "username": "Elwyn.Skiles"
test('fetching username', () => {
    expect.assertions(1);
    return fetchUser().then(data => {
            expect(data.username).toEqual('Elwyn.Skiles');
    });
});

// async await - fetch "website": "elvis.io"
test('fetching website', async () => {
    expect.assertions(1);
    const data = await fetchUser()
    expect(data.website).toEqual('elvis.io');
});

