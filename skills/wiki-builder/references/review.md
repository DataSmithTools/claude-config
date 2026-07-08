# Review mode - audit the vault

Goal: find and fix rot before it compounds. Karpathy: the lint pass is not optional.
Cadence: after every ~10 ingests, or on request.

## 0. Snapshot first (reversibility)

Git repo: commit everything (`review: pre-audit snapshot`). No git: copy wiki/vault/ to
wiki/exports/backup-YYYY-MM-DD/. Never run a batch pass without this.

## 1. Mechanical checks

Preferred: `node <skill>/scripts/lint-vault.mjs <path-to-vault>` - reports broken wikilinks,
orphan notes, and INDEX.md coverage gaps.

No Node available - same checks with your own tools (report identical categories):

- Inventory: Glob `**/*.md` under the vault.
- Broken links: Grep pattern `\[\[([^\]|#]+)` with -o across the vault; flag targets with no
  matching filename (Obsidian links match by basename, extension optional).
- Orphans: notes (excluding INDEX, LOG, MOCs) whose basename never appears inside `[[...]]`
  anywhere else.
- Index coverage: every note basename appears in INDEX.md; INDEX has no dead entries.

## 2. Semantic checks (sample, don't sweep)

Read INDEX.md plus the 10-15 most recently updated notes and any note the mechanical pass
flagged. Look for:

- **Contradictions**: apply the schema.md policy (recency + authority + confidence, or record
  both). List unresolved ones for the user.
- **Staleness**: notes whose topic has newer sources in the vault but an old `updated` stamp.
- **Compression failures**: notes longer than their sources, near-duplicate concepts, MOCs
  mirroring INDEX. Merge or archive (99-archive/, links redirected).
- **Drift from mission**: clusters of notes outside MISSION.md scope -> flag; recommend
  re-grill or pruning, do not silently delete.
- **Coverage gaps**: mission areas with no or thin notes -> new 05-questions/ entries.
- **Glossary drift**: notes using avoided aliases.

## 3. Fix, file, report

- Fix mechanically safe items now (links, index entries, glossary substitutions, archiving
  agreed duplicates).
- Judgement calls (contradiction resolution, pruning, merges of substantive notes) -> present a
  short list with recommendations; act on approval.
- File remaining work as 05-questions/ notes.
- LOG.md: `## [date] review | N issues: X fixed, Y filed, Z awaiting user`.
- Report to the user: vault health in 3-5 lines (counts, worst finding, next recommended pass).

## Schema co-evolution

Recurring friction (a folder nobody uses, a frontmatter field never queried, a convention the
domain fights) is a schema bug. Propose the smallest wiki/SCHEMA.md edit that removes it, get a
yes, record the change with a date line at the bottom of SCHEMA.md.
