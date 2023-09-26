import { expect, test } from 'vitest';
import Hello from '../src/Hello';

test('Says hello!', () => {
  const hello = new Hello();

  expect(hello.say()).toBe('👋');
});
