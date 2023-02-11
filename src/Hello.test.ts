import { expect, test } from 'vitest';
import Hello from './Hello';

test('Says hello!', () => {
  const hello = new Hello();

  expect(hello.say()).toBe('👋');
});
