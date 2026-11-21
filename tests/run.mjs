import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';

test('localStorage emulation', () => {
  const data = JSON.stringify([{id:1,title:'Task',done:false}]);
  fs.writeFileSync(path.join(process.cwd(),'tmp.json'),data);
  const content = fs.readFileSync(path.join(process.cwd(),'tmp.json'),'utf8');
  const parsed = JSON.parse(content);
  assert.deepStrictEqual(parsed, [{id:1,title:'Task',done:false}]);
});