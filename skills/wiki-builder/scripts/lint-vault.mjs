#!/usr/bin/env node
// lint-vault.mjs - mechanical vault checks: broken wikilinks, orphans, INDEX coverage.
// Usage: node lint-vault.mjs <path-to-vault>   (the folder containing INDEX.md)
// No dependencies. Read-only. Exit 1 if any issue found, 0 if clean.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, basename, extname } from 'node:path';

const vault = process.argv[2];
if (!vault) { console.error('Usage: node lint-vault.mjs <path-to-vault>'); process.exit(2); }
try { statSync(join(vault, 'INDEX.md')); }
catch { console.error(`No INDEX.md in ${vault} - is this the vault root?`); process.exit(2); }

const SKIP_DIRS = new Set(['.obsidian', '99-archive', 'raw']);
const files = [];
(function walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) { if (!SKIP_DIRS.has(e.name)) walk(join(dir, e.name)); }
    else if (extname(e.name).toLowerCase() === '.md') files.push(join(dir, e.name));
  }
})(vault);

const noteNames = new Set(files.map(f => basename(f, '.md').toLowerCase()));
const linkRe = /\[\[([^\]|#]+)(?:[|#][^\]]*)?\]\]/g;
const structural = new Set(['index', 'log', 'readme']);

const broken = [];            // [file, target]
const linkedTargets = new Set();
let indexBody = '';

for (const f of files) {
  const body = readFileSync(f, 'utf8');
  if (basename(f).toLowerCase() === 'index.md') indexBody = body.toLowerCase();
  for (const m of body.matchAll(linkRe)) {
    const target = m[1].trim().replace(/\.md$/i, '').toLowerCase();
    if (!target) continue;
    linkedTargets.add(target);
    if (!noteNames.has(target)) broken.push([basename(f), m[1].trim()]);
  }
}

const orphans = files
  .map(f => basename(f, '.md'))
  .filter(n => !structural.has(n.toLowerCase())
    && !n.toLowerCase().startsWith('moc')
    && !linkedTargets.has(n.toLowerCase()));

const unindexed = files
  .map(f => basename(f, '.md'))
  .filter(n => !structural.has(n.toLowerCase()) && !indexBody.includes(n.toLowerCase()));

let issues = 0;
const report = (title, rows, fmt) => {
  console.log(`\n${title}: ${rows.length}`);
  for (const r of rows) { console.log('  - ' + fmt(r)); issues++; }
};
report('Broken wikilinks', broken, ([f, t]) => `[[${t}]] in ${f}`);
report('Orphan notes (never linked)', orphans, n => `${n}.md`);
report('Notes missing from INDEX.md', unindexed, n => `${n}.md`);

console.log(`\nScanned ${files.length} notes. ${issues === 0 ? 'Vault clean.' : issues + ' issue(s).'}`);
process.exit(issues === 0 ? 0 : 1);
