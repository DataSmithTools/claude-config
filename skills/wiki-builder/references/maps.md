# Maps mode - index, MOCs, glossary, pathways

Goal: navigable structure over the notes that exist. Structure follows content - build a MOC
when notes cluster, not before (a MOC over 2 notes is scaffolding cosplay).

## INDEX.md (vault root - the catalog)

The first file read when answering any question. Keep every entry to one line.

- Sections: Unprocessed (queued sources), Sources, Literature notes, Concept notes (grouped
  under MOC headings once MOCs exist), Questions, Outputs.
- Every vault note appears exactly once. Update on every ingest; verify during review.

## Maps of content (04-maps-of-content/)

Create a MOC when 5+ concept notes share a theme, or the grill interview demands one on day one
(e.g. exam syllabus). From templates/notes/moc.md:

- 2-3 sentence orientation: what this area is, why it matters to the mission.
- Linked notes in a deliberate reading order (not alphabetical), each with a half-line hook.
- A "Frontier" section: what is thin, missing, or contested in this area.

MOCs link to each other and up to INDEX.md. Three levels maximum: INDEX -> MOC -> notes.
When a MOC exceeds ~30 links, split by sub-theme.

## GLOSSARY.md (04-maps-of-content/)

Canonical language for the wiki - one opinionated definition per term:

```
**Term**: tight 1-2 sentence definition, using other glossary terms where possible.
_Avoid_: alias1, alias2 (say why if not obvious)
```

Only terms with project-specific meaning or genuine ambiguity; no dictionary padding.
Pick one word per concept and list the rest as avoided aliases; use the chosen terms in all
notes. Add a term only once it is actually understood; revise in place as understanding sharpens.

## Learning pathways (04-maps-of-content/, when the mission is learning)

An ordered route through existing notes toward a mission goal: stage -> notes to read -> what
you should be able to do after. Sequence by dependency (prerequisites first) against the user's
stated existing knowledge. Point each stage's gaps at 05-questions/ entries so the next research
pass fills the path, not random corners.

## Question lists (05-questions/)

One note per substantial open question (templates/notes/question.md): why it matters, what has
been tried, candidate sources. Trivial gaps can live as a checklist inside a MOC's Frontier
section instead. Review passes and research passes both feed and drain this folder - it is the
wiki's to-do list.

## Bookkeeping

As always: INDEX.md updated, LOG.md appended (`## [date] map | what changed`). Building maps
often reveals duplicates or orphans - fix trivial ones on the spot, file the rest as a question
note for /review-vault.
