---
description: Process a source (given or from 00-inbox) into structured vault notes
argument-hint: "optional: file, URL, or pasted text; default = oldest inbox item"
---

Ingest: $ARGUMENTS (default: oldest item in wiki/vault/00-inbox). If the wiki-builder skill is
available, follow its references/ingestion.md and references/schema.md; otherwise:

1. Provenance first: metadata note in 01-sources if missing (url/author/published/retrieved/
   kind/credibility/licence). Never modify anything in 01-sources/raw.
2. Read it. Over ~2000 words: summarise section by section, then work from the summary.
   Off-mission or credibility 1-2 on reading: recommend skipping, mark rejected, stop.
3. Literature note in 02-literature-notes (lit-<slug>.md): factual claims, evidence, attributed
   quotes, what it does not cover. No interpretation. Link [[src-<slug>]].
4. Concept/entity notes in 03-concept-notes: update existing notes in place before creating new;
   new note only for a distinct linkable idea; one idea per note, self-contained, every claim
   cites its [[source]], set confidence. Contradicting an existing note: record both claims with
   dates - never silently overwrite. Typical touch: 3-10 notes.
5. Bookkeeping, never skip: INDEX.md (out of Unprocessed, add new notes), relevant MOCs, new
   open questions to 05-questions, LOG.md line, clear the inbox item.
6. Report: what the source contributed, notes touched, contradictions, queue remaining.
