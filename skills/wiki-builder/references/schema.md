# Vault schema - note types, frontmatter, linking, provenance

Load this whenever creating or editing vault notes. Project-specific overrides live in
wiki/SCHEMA.md and win over this file.

## Folder semantics

| Folder | Holds |
|---|---|
| 00-inbox/ | Unprocessed drops: clipped articles, pasted text, PDFs awaiting ingestion |
| 01-sources/ | One metadata note per source; raw files in 01-sources/raw/ (immutable) |
| 02-literature-notes/ | One factual summary note per source - no interpretation |
| 03-concept-notes/ | Atomic notes, one concept or entity each; cross-source synthesis |
| 04-maps-of-content/ | MOCs, GLOSSARY.md, learning pathways |
| 05-questions/ | Open questions, known gaps, review findings |
| 06-outputs/ | Answers, briefs, essays filed back into the wiki |
| 99-archive/ | Superseded notes - moved here, never deleted |

INDEX.md and LOG.md sit at the vault root. LOG.md entries are append-only:
`## [YYYY-MM-DD] ingest|research|map|review|output | Title`.

## Frontmatter

Every note:

```yaml
---
type: source | literature | concept | entity | moc | question | output
created: YYYY-MM-DD
updated: YYYY-MM-DD        # bump on every edit
tags: [wiki/<type>, plus topic tags]
---
```

Concept, entity, and output notes add:

```yaml
confidence: high | medium | low
sources: ["[[src-2026-example]]"]   # every source the note draws on
```

Source metadata notes add: `url`, `author`, `published`, `retrieved`, `kind`
(paper/article/video/book/post/dataset/private), `credibility` (1-5, rationale in body),
`licence` (one-line note), and `private: true` for user-supplied confidential material.

## Naming

- Source notes: `src-<year>-<slug>.md` (e.g. src-2026-karpathy-llm-wiki.md)
- Literature notes: `lit-<same slug>.md`
- Concept/entity/moc/question/output notes: plain kebab-case topic name, no prefix.
- One idea per concept note; the filename states the idea.

## Linking

- `[[wikilinks]]` everywhere; link the first mention of any note-worthy term.
- Every concept/entity note links to at least one MOC and to its sources. No orphans.
- Create a new note only for a distinct thing you would link to from elsewhere; otherwise edit
  the existing note in place (write-back, not accumulation).

## Provenance (non-negotiable)

- Register the source (metadata note) before summarising it.
- Claims in concept notes carry their source: inline `[[src-x]]` or a Sources section.
- Direct quotes are quoted and attributed; paraphrase by default.
- Preserve original URLs and retrieval dates - they outlive link rot debates.
- `private: true` sources are never exported, published, or quoted outside the vault.

## Contradictions and staleness

When sources disagree: record both claims in the concept note under `## Contradiction`, each with
source and date. Resolve only when recency + authority + confidence clearly favour one side; keep
the losing claim with one line on why it lost. Never silently overwrite.

At ingest time, recheck existing notes the new source touches; bump `updated` only after the
recheck, so `updated` is a trust marker.

## Compression rule

Before saving any note: is it shorter and denser than what it draws from? If a concept note would
merely mirror one small source, leave the content in the literature note and skip the concept
note. Merge near-duplicate concept notes on sight (archive the loser, redirect its links).

## AI-first note shape (concept/entity body order)

Self-contained: a fresh agent reading only this note gets the idea, its status, and where to look
next. Order: 1-2 sentence definition -> key points -> relationships (links) -> contradictions and
open questions -> sources.
