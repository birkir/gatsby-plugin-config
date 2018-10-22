// tslint:disable:no-expression-statement no-object-mutation no-var-requires
import test from 'ava';
const requireNew = require('require-new');

test('NODE_ENV', t => {
  const config = requireNew('./config').default;
  t.is(config.NODE_ENV, process.env.NODE_ENV);
});

test('normal behaviour', t => {
  process.env.GATSBY_TEST = 'asdf';
  const config = requireNew('./config').default;
  t.is(config.GATSBY_TEST, 'asdf');
  t.is(config.TEST, 'asdf');
});

test('change environment variable dynamically', t => {
  process.env.GATSBY_TEST = 'erty';
  const config = requireNew('./config').default;
  t.is(config.GATSBY_TEST, 'erty');
  t.is(config.TEST, 'erty');
});

test('non existing variables', t => {
  const config = requireNew('./config').default;
  t.falsy(config.NON_EXIST);
});
