# Ingestion mode - source to structured notes

Goal: one source becomes a literature note plus updated concept notes, index, and log.
Load references/schema.md first. Work one source at a time; confirm direction with the user on
the first source of a session, then batch the rest if they say so.

## 0. Pick the source

From the user's hand (file/URL/pasted text) or the oldest 00-inbox item. If it has no metadata
note yet, create one now (research.md step 5) - provenance before processing.

## 1. Read and gate

Read the source. Over ~2000 words: skim-summarise section by section first, then process from
your summary (token discipline - never hold a whole book in context). Then gate:

- Off-mission or credibility 1-2 on actual reading -> tell the user, recommend skip; if skipped,
  mark the metadata note `status: rejected` with one line why, log it, stop.

## 2. Literature note (02-literature-notes/)

`lit-<slug>.md` from templates/notes/literature.md. Factual compression of THIS source only:
what it claims, key evidence, notable quotes (attributed), what it does not cover.
No interpretation - that belongs in concept notes. Link to `[[src-<slug>]]`.

## 3. Concept and entity notes (03-concept-notes/)

For each distinct idea/person/tool/method the source materially informs:

- Existing note -> update in place (write-back): integrate the claim, add the source link,
  handle contradictions per schema.md, bump `updated`.
- New note only if it is a distinct linkable thing (schema.md compression rule). One idea per
  note, self-contained, confidence set by the evidence, all claims sourced.
- Typical touch count: 3-10 notes per source. Fewer is fine; padding is not.

New terms with project-specific meaning -> add to 04-maps-of-content/GLOSSARY.md.

## 4. Bookkeeping (never skip)

1. INDEX.md: move the source out of Unprocessed; add the literature note and any new concept
   notes with one-line summaries.
2. Relevant MOC(s): link new notes. No MOC fits -> add to the inbox MOC section of INDEX.md;
   /build-map deals with it later.
3. Questions the source raised or left open -> 05-questions/.
4. LOG.md: `## [date] ingest | <source title> - N notes touched`.
5. Delete the processed item from 00-inbox (its content now lives in 01-sources/raw or the
   literature note).

## 5. Report

Tell the user: what the source contributed (2-3 lines), notes created/updated, contradictions
found, queue remaining. On the last source of a batch, recommend /build-map if several notes
landed without a MOC, or /review-vault after every ~10 sources.
