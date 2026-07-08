# Research mode - search, assess, retrieve, queue

Goal: a shortlist of vetted sources registered with provenance and queued for ingestion.
Never ingest during research - assess first, ingest deliberately (references/ingestion.md).

## 1. Clarify the slice

Confirm in one line which part of the mission this pass serves and the target count
(default: 5-8 sources for a first pass). If MISSION.md is missing, run grill first.

## 2. Search

With web access (WebSearch/WebFetch or equivalent):

- Run 3-5 queries from different angles: overview/survey, primary sources, recent developments
  (include the current year), criticism/limitations, and the user's own suggested leads.
- Prefer primary and canonical material over commentary on it. Follow citation trails one hop.

Without web access: say so plainly and switch to user-supplied mode - ask them to drop files or
paste URLs/text into 00-inbox; everything else below still applies.

## 3. Assess (credibility rubric)

Score each candidate 1-5 with a one-line rationale:

- **Authority**: recognised author/venue, primary source, peer review, or working practitioner?
- **Recency**: current enough for the topic's half-life? (Maths ages slowly; tooling fast.)
- **Independence**: marketing dressed as education scores 1-2. Prune ruthlessly.
- **Fit**: serves the mission slice at the user's level.

3+ average = shortlist; 2 = keep only if nothing better exists (flag it); 1 = reject.
Distrust your parametric memory: verify a source exists and says what you think via fetch or
the user before registering it.

## 4. Shortlist to the user

Present a compact table: title, kind, date, score, one-line why. Recommend which to take.
The user curates - wait for their picks (or explicit "you choose").

## 5. Register and queue

For each accepted source:

1. Metadata note in 01-sources/ (templates/notes/source.md): url, author, published, retrieved
   (today), kind, credibility + rationale, licence note.
2. Retrievable full text: save raw copy to 01-sources/raw/ (or note "read via fetch, not
   stored"). Paywalled: register metadata, mark `full-text: user-to-supply` - never bypass
   paywalls; the user supplies content they have rights to.
3. Add to INDEX.md under Unprocessed.

## 6. Log

- RESEARCH_LOG.md dated entry: queries run, accepted, rejected-with-reason (rejects matter -
  they stop the next session re-finding the same chaff), and known gaps still open.
- Gaps that need a future pass -> a note in 05-questions/.
- LOG.md: `## [date] research | <slice> - N sources registered`.

Finish by stating the queue size and recommending /ingest-source.
