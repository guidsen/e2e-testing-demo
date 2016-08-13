const test = require('tape');
const server = require('./server');

test('show user output', assert => {
  server.inject('/users/1', res => {
    assert.equal(res.result.name, 'Guido');
    assert.end();
  });
});

test('user not found', assert => {
  server.inject('/users/99', res => {
    assert.equal(res.result, 'Not found.');
    assert.end();
  });
});
