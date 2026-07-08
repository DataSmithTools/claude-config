---
description: Audit vault health - links, orphans, contradictions, staleness, drift
---

Audit the vault. If the wiki-builder skill is available, follow its references/review.md;
otherwise:

1. Snapshot first: git commit, or copy wiki/vault to wiki/exports/backup-YYYY-MM-DD.
   Batch passes must be reversible.
2. Mechanical: broken [[wikilinks]] (Grep `\[\[([^\]|#]+)` targets vs filenames), orphan notes
   (basename never linked anywhere), INDEX.md coverage both directions. Node available: run the
   wiki-builder skill's scripts/lint-vault.mjs instead.
3. Semantic (sample - INDEX plus ~15 recently updated notes, don't sweep): contradictions
   (resolve by recency+authority+confidence or record both, list unresolved for me), stale notes
   (newer sources, old `updated`), compression failures (notes longer than their sources,
   near-duplicates - merge, archive to 99-archive), drift outside MISSION.md (flag, never
   silently delete), coverage gaps -> 05-questions, glossary alias violations.
4. Fix safe items now; present judgement calls with recommendations; file the rest as question
   notes. LOG.md line: `review | N issues: X fixed, Y filed, Z awaiting user`.
5. Report vault health in 3-5 lines and recommend the next pass.
