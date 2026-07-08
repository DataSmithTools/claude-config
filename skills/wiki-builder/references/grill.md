# Grill mode - scope the wiki by interview

Goal: replace a vague wish ("I want to learn about X") with a mission sharp enough to drive
source selection and note structure. Output: wiki/MISSION.md filled in and confirmed.

## Protocol

- One question at a time. Each question comes with your recommended answer so the user can just
  say "yes". Never ask a question you could answer yourself from the folder or the conversation.
- Walk the decision tree in order; stop early if answers make later branches obvious.
- Challenge vagueness. "Learn about AI" is not scopeable; "explain transformer inference costs
  to my team" is. Reflect weak answers back: "That could mean A or B - which?"
- Expose assumptions: if they name an output ("a wiki") but no use, ask what failure would look
  like in three months.
- Budget: 4-8 questions for a light user, up to 12 for a technical user who is enjoying it.
  Read resistance - two curt answers in a row means wrap up with recommended defaults.

## Decision tree

1. **Why now?** What triggered this - a project, exam, job, curiosity itch? (Grounds everything;
   the teach-skill rule: no mission, no way to judge what to do next.)
2. **Audience.** Who reads the outputs - only you, your team, students, the public?
3. **Success criteria.** What can you do/produce in N weeks that you cannot now? Force one
   concrete artefact or capability.
4. **Depth.** Overview (10 sources), working knowledge (25-50), expert/reference (100+)?
   Recommend based on answers 1-3.
5. **Boundaries.** Two or three things explicitly OUT of scope. (The cheapest scope control.)
6. **Existing knowledge.** What do they already know? Sets the starting level and prevents
   ingesting beginner material they will never read.
7. **Source constraints.** Preferred source types (papers/blogs/video/books), languages,
   paywalls available, any must-include sources they already have.
8. **Cadence.** Ongoing living wiki, or a bounded sprint with an end date?

## Wrap-up

1. Play back the mission in 5 lines. Get an explicit yes.
2. Write wiki/MISSION.md (templates/project/MISSION.md). Date-stamp the confirmation.
3. Record structural consequences in wiki/SCHEMA.md (e.g. "exam sprint: pathways MOC is primary;
   outputs are practice answers").
4. Append LOG.md: `## [date] setup | mission scoped`.
5. State the next action (usually research or ingestion).

Re-grill triggers: user's questions drift from the mission for several sessions; a review pass
finds most new notes outside scope; user says the goal changed. Confirm before rewriting
MISSION.md and note the change in RESEARCH_LOG.md.
