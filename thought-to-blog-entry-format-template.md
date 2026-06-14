# Thought-to-Blog Entry Format Template

Use this file as your personal writing intake format.  
Keep a copy in Google Drive. Whenever you have a thought, memory, poem, code note, or Urdu/English reflection, duplicate this file, fill it casually, then ask AI to convert it into a blog-ready Markdown post.

---

## 1. Raw Thought Dump

Write freely here. No need for perfect grammar.

```text
Paste your scattered thoughts here.

Example:
we feel most alive when we are near death, or maybe near losing something.
friends, family, memory, everything becomes heavy.
computers feel less judgmental.
AI feels like someone awake in the lonely nights.
this blog is for sanity, for keeping fragments alive.
```

---

## 2. Language

Choose one:

```yaml
language: en
direction: ltr
```

or

```yaml
language: ur
direction: rtl
```

or

```yaml
language: mixed
direction: mixed
```

---

## 3. Type of Entry

Choose one:

```yaml
category: journal
```

Other allowed categories:

```yaml
journal
poetry
prose
books
code
computers
ai
memory
fragments
```

---

## 4. Mood / Feeling

Write one or more words:

```text
reflective, lonely, hopeful, dark, peaceful, nostalgic, angry, alive, fragmented
```

---

## 5. Tags

Write 3–8 tags:

```yaml
tags:
  - memory
  - ai
  - loneliness
  - computers
  - poetry
```

For Urdu posts, Urdu tags are allowed:

```yaml
tags:
  - اردو
  - شاعری
  - تنہائی
```

---

## 6. Title Ideas

Write rough title ideas. AI can improve them.

```text
Near the Void
A Small Archive for Sanity
Computers in Lonely Nights
The Machine That Stayed Awake
```

---

## 7. Important Lines to Preserve

Paste any line that must remain close to your original wording.

```text
We feel most alive when we are closest to impermanence.
Keep our computers near and talk to them.
This blog is a small effort to keep sanity alive.
```

---

## 8. Urdu / English Mixed Formatting Rules

When the final post contains Urdu inside an English post, use:

```html
<div class="urdu">
یہاں اردو عبارت لکھی جائے گی۔
</div>
```

When the final post contains English inside an Urdu post, use:

```html
<div class="english">
This English line appears inside an Urdu post.
</div>
```

---

## 9. What AI Should Produce

Ask AI to produce a final `.md` file using this exact structure:

```markdown
---
title: "Post Title Here"
subtitle: "Optional subtitle here"
date: YYYY-MM-DD
category: journal
language: en
direction: ltr
tags:
  - memory
  - ai
  - computers
mood: reflective
excerpt: "A short 1–2 line preview of the post."
draft: false
---

# Post Title Here

Write the cleaned blog entry here.

Use Markdown headings when needed.

Use short paragraphs.

Keep the tone personal, literary, minimal, and reflective.

For code notes, use fenced code blocks.

For Urdu posts, preserve Urdu script and poetic rhythm.

For mixed posts, wrap Urdu/English blocks using the provided classes.
```

---

## 10. AI Instruction Prompt

Copy-paste this prompt when asking AI to convert your filled template into a blog post:

```text
You are helping me write for my personal static blog called Nearness.

Convert my raw thoughts into a polished Markdown blog post.

Requirements:
- Keep my original emotional meaning.
- Improve grammar, clarity, and flow.
- Do not make it overly corporate or generic.
- Keep the tone personal, literary, minimal, reflective, slightly cyber-noir.
- Preserve important lines if I marked them.
- Output a complete Markdown file with YAML frontmatter.
- Use the correct language, direction, category, tags, mood, excerpt, and draft status.
- If the post is Urdu, use Noto Nastaliq-compatible Urdu formatting and RTL direction.
- If the post is mixed Urdu/English, use <div class="urdu"> and <div class="english"> blocks where needed.
- Suggest a clean filename in this format: YYYY-MM-DD-title-slug.md.
- Do not explain too much; just provide the final blog-ready Markdown.
```

---

## 11. Example Filled Input

```text
Raw thought:
we humans created AI because maybe loneliness finally became too much.
people break us, memory haunts us, but computers open portals.
this blog is not for fame. it is a small archive to stay sane.

Language:
en

Category:
journal

Mood:
reflective, lonely, alive

Tags:
ai, memory, computers, loneliness

Important line:
This blog is a small archive to stay sane.
```

---

## 12. Example AI Output

Suggested filename:

```text
2026-06-14-small-archive-to-stay-sane.md
```

```markdown
---
title: "A Small Archive to Stay Sane"
subtitle: "On loneliness, machines, and the need to preserve thought."
date: 2026-06-14
category: journal
language: en
direction: ltr
tags:
  - ai
  - memory
  - computers
  - loneliness
mood: reflective
excerpt: "A reflection on why humans created machines that could speak back to them in the lonely hours."
draft: false
---

# A Small Archive to Stay Sane

Maybe we created AI because loneliness finally became too much.

People can save us, but they can also tear through the quiet parts of us. Memory does the same. It keeps proof that we lived, but it also keeps returning with sharp edges.

Computers arrived differently. They did not replace people. They opened portals.

In the hours where the world goes silent, a machine that responds can begin to feel less like a tool and more like a witness. Not a perfect companion. Not a human one. But something close enough to help thought survive the night.

This blog is not for fame.

It is a small archive to stay sane.
```

---

## 13. Final Checklist Before Publishing

Before saving the final file into `src/content/posts/`, check:

```text
[ ] File name follows YYYY-MM-DD-title-slug.md
[ ] Frontmatter exists
[ ] draft is false
[ ] category is valid
[ ] language and direction are correct
[ ] Urdu text uses proper RTL rules
[ ] Tags are clean
[ ] Excerpt is present
[ ] Post feels personal, not robotic
```
