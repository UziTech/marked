import validate from 'sourcemap-validator';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { doesNotThrow } from 'node:assert';
const min = readFileSync(resolve(import.meta.dirname, '../lib/marked.esm.js'), 'utf-8');
const map = readFileSync(resolve(import.meta.dirname, '../lib/marked.esm.js.map'), 'utf-8');

doesNotThrow(function() {
  validate(min, map);
}, 'The sourcemap is not valid');
