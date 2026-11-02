import assert from 'node:assert/strict';
import test from 'node:test';
import { isScannable } from './component.mjs';
test('accepts a named component and rejects an empty name', () => {
  assert.equal(isScannable({name: 'demo'}), true);
  assert.equal(isScannable({name: ''}), false);
});
