/* ============================================================================
   CONTENT FILE — this is the ONLY file you edit to add or change projects.
   You don't touch the HTML, CSS, or app.js.

   HOW TO ADD A PROJECT:
   1. Copy one { ... } block below (from the opening { to its comma).
   2. Paste it into the right list — PROFESSIONAL or PERSONAL.
   3. Fill in the fields, keep the quotes, separate blocks with a comma.

   FIELD GUIDE (every field is text inside "quotes" unless noted):
   - title      → project name (card + detail headline)
   - tagline    → one punchy hook line shown under the title
   - org        → company / context, e.g. "Computershare"
   - role       → your role, e.g. "Product Owner"
   - timeframe  → when, e.g. "2024–2025"
   - domain     → short label for the chip, e.g. "Fintech · Process Redesign"
   - impact     → headline metric badge — keep it short
   - image      → OPTIONAL header/card image. Put files in the images/ folder
                  and write the path, e.g. "images/transfer-tool.jpg".
                  Leave as "" to use an auto-generated gradient instead.
   - tags       → list of short labels, e.g. ["UX", "Fintech"]
   - challenge  → detail view: the problem and why it mattered
   - approach   → detail view: what you did / built (this is where the story lives)
   - results    → list of outcome bullets
   - reflection → OPTIONAL one-line takeaway ("what it taught me"). Use "" to skip.
   - gallery    → OPTIONAL extra images: [{ "src": "images/x.jpg", "caption": "..." }]
   - links      → OPTIONAL: [{ "label": "View prototype", "url": "https://..." }]

   To leave anything blank: use "" (text) or [] (a list).
   ========================================================================== */

const PROFESSIONAL = [
  {
    title: "Digital Transfer Tool",
    tagline: "Turning an 80% reject rate into a self-correcting flow.",
    org: "Computershare",
    role: "Product Owner",
    timeframe: "2024–2025",
    domain: "Fintech · Process Redesign",
    impact: "Rejections −50% · inquiries −20%",
    image: "images/transfer-tool.png",
    tags: ["Process Redesign", "UX", "Fintech", "Prioritization"],
    challenge:
      "As a transfer agent, Computershare handles 300,000+ transfer requests a year — and over 80% were getting rejected, with the resulting enquiries driving millions in call-center and operational cost. Working with operations, account management, and customer success, I traced the rejects to two root causes: missing or incorrect documents, and wrong details on the form — both stemming from a process too complex and poorly communicated for users to get right the first time.",
    approach:
      "I built a Digital Transfer Tool that pulls a user's info from our internal database, walks them step-by-step through verification, and generates a package custom to their scenario — a pre-filled form requesting exactly the documents their case needs. In parallel I reworked the print-and-mail comms with a clear CTA to the tool and simpler language for the offline route. Scoping that comms rebrand surfaced the real surface area: 27 letters × 1,300 customers × 50 states ≈ 175,000 variations. Rather than a 6-month full rebuild, I found that the cover letter was shared across nearly every customer — so I shipped the CTA on page one in a month, protecting the timeline and ~$500K in operational overhead. Throughout, I used RICE to triage incoming requests against the long-term roadmap, while still prioritizing strategically critical work (like a fraud-relevant welcome flow) that scored low but mattered.",
    results: [
      "Reduced rejection rates by 50% — from over 80% to roughly 40%.",
      "Cut call-center inquiries by 20% and drove $1.5M+ in annualized savings.",
      "Shipped the CTA in one month instead of six by finding leverage in the architecture, not the feature list."
    ],
    reflection: "In regulated systems, compliance is a system problem, not a content one — and the leverage is always in the architecture.",
    gallery: [],
    links: []
  },
  {
    title: "LUMI — Frontline Policy Assistant",
    tagline: "A RAG assistant that turns a five-minute policy hunt into a grounded answer in seconds.",
    org: "BMO",
    role: "Product Owner",
    timeframe: "2023",
    domain: "Banking · AI / RAG",
    impact: "Time-to-first-answer −60%",
    image: "images/lumi.png",
    tags: ["AI", "RAG", "LLM", "Banking", "Internal Tools"],
    challenge:
      "At BMO, every transaction procedure and policy lived on SharePoint, which was hard enough to search that frontline staff spent two to five minutes hunting for the right procedure — with a customer waiting at the counter. The cost wasn't just time; an unsure rep is a slow, inconsistent rep.",
    approach:
      "I owned the launch of LUMI, a retrieval-augmented (RAG) chatbot that lets staff ask in natural language and get an answer grounded in our actual policy docs. The product call I'm proudest of was accuracy: in a bank, a confidently wrong answer is worse than no answer. So I set the policy that LUMI only responds when retrieval confidence hits 0.90 or above — below that it says it doesn't have enough rather than guessing. That's a deliberate precision-over-recall choice: we answer fewer questions in exchange for trusting the ones we do. Every answer carries a citation back to the source doc, and we logged every stage of the pipeline (similarity scores, retrieved chunks, the re-rank decision, citation match, user feedback) so a thumbs-down could be localized instead of guessed at. I owned the problem definition, the accuracy policy, and the eval and SME coordination; engineering owned the retrieval pipeline and re-ranker tuning.",
    results: [
      "Reduced time-to-first-answer for employee queries by 60% — from the two-to-five minutes staff spent searching SharePoint.",
      "Turned every 'I don't have that' miss into a prioritized content gap fixed with SMEs — misses became a roadmap, not a failure.",
      "Protected trust by never shipping a confidently wrong answer to staff acting on procedures live."
    ],
    reflection: "A wrong answer erodes trust permanently — an honest 'I don't have that' keeps the tool credible and turns every miss into a content fix.",
    gallery: [],
    links: []
  },
  {
    title: "Customer Risk Matrix",
    tagline: "Making a slow, gut-feel fraud call consistent and fast.",
    org: "BMO",
    role: "Product Owner",
    timeframe: "2022–2023",
    domain: "Banking · Internal Tools",
    impact: "Cheque time −40% · CSAT +15%",
    image: "images/risk-matrix.png",
    tags: ["Discovery", "Risk", "Banking", "Internal Tools"],
    challenge:
      "At BMO, cheque deposits were taking five to eight minutes — far longer than any other transaction. For every deposit, a rep had to manually size up the customer's history and deposit patterns to decide how much of the cheque to release or hold, then escalate to a manager for sign-off. It was slow, inconsistent, and customers hated the wait — all driven by fraud risk that had to be managed person-by-person.",
    approach:
      "I interviewed reps, branch managers, and ops leaders to map exactly which factors drove the risk call, then turned that into a structured Customer Risk Matrix — a weighted set of questions that scores each customer as high, medium, or low risk, so the release-or-hold decision is consistent instead of a judgment call. I worked with design and engineering to build it inline in the CRM, so reps had it in-flow and managers could approve against a clear score. We measured success by the time to complete a deposit from the moment the matrix was opened.",
    results: [
      "Cut average cheque-deposit time by 40% — down to two to four minutes.",
      "Lifted CSAT by 15%.",
      "Turned an inconsistent judgment call into a repeatable, auditable decision."
    ],
    reflection: "Start from the frontline reality — the people doing the task know exactly where the time goes.",
    gallery: [],
    links: []
  }
];

const PERSONAL = [
  {
    title: "Spotify Circles",
    tagline: "A full, working social-listening app on top of Spotify — the conversation layer streaming never built.",
    org: "Personal Product Build",
    role: "Product Lead & Full-Stack Builder",
    timeframe: "2025–2026",
    domain: "Social · Music · Full-Stack 0→1",
    impact: "Built & shipped end-to-end",
    image: "images/spotify-circles.png",
    tags: ["0→1", "Full-Stack", "Spotify API / OAuth", "Node · SQLite", "Product Strategy"],
    challenge:
      "Music is one of the most social things people do, yet the act of listening has become almost entirely private. Spotify is excellent at playback and weak at conversation — its social surface is thin (a desktop-only Friend Activity sidebar, Blend, once-a-year Wrapped). So the conversation about music leaked out of streaming into group chats, Stories, and lock-screen screenshots — tools never built for it, where a screenshot isn't playable and a share gets buried. Circles is the dedicated, low-friction place to share what you're playing with the right audience — public or a small private circle — and get a real reaction, with the track one tap from playback.",
    approach:
      "I designed and built Circles end-to-end — product strategy through working code, not a mockup. The central product decision was making it a standalone app rather than a Spotify feature: that self-selects for the dense, social-listener segment and keeps the social graph in a backend I own. That became a two-plane architecture — Spotify as a read-only, swappable music layer (identity, now-playing, search) and a Circles-owned social layer (feed, private circles, reactions, threaded replies, follows, notifications) that no Spotify API change can revoke. I shipped real Spotify OAuth, live search, full-song in-app playback via the Web Playback SDK, inline circle creation, and a human-in-the-loop daily top-track suggestion that always asks before posting. I defined success on a HEART framework with a north-star of weekly returning sharers — retention over vanity signups.",
    results: [
      "Shipped a fully functioning full-stack app (Node/Express + SQLite): real Spotify OAuth, social backend, live search, in-app playback, and automated daily-share — runnable by anyone, not a clickable mock.",
      "Designed a two-plane architecture that keeps all product value in the layer I own, so the app degrades gracefully and could add Apple/YouTube Music without touching the social core.",
      "Confronted the real platform-dependency risk head-on — Spotify's 5-user Dev Mode cap and deprecated discovery endpoints — and designed the moat around it: discovery built from Circles' own social signal.",
      "Wrote a full PRD: three personas, goals/non-goals, HEART metrics, an MVP validation plan, and a four-phase roadmap to a Spotify partnership."
    ],
    reflection: "A platform dependency this deep is existential — the move isn't to pretend it away, but to keep the dependency shallow and build the moat in the layer you own.",
    gallery: [],
    links: [
      { label: "View prototype", url: "https://raw.githack.com/VivekArora1107/Spotify-circles/main/prototype/circles-prototype.html" },
      { label: "GitHub repo", url: "https://github.com/VivekArora1107/Spotify-circles" }
    ]
  },
  {
    title: "Knowledge Hub — Agentic Note Revival",
    tagline: "A scheduled agent that resurfaces my own notes back to me — spaced revision and focus-aware retrieval, as a thin layer over Notion.",
    org: "Personal Product Build",
    role: "Product Lead & Builder",
    timeframe: "2026",
    domain: "AI Agents · Personal Knowledge",
    impact: "Write-only notes → daily active recall",
    image: "images/knowledge-hub-digest.svg",
    tags: ["AI Agent", "Notion API", "Spaced Repetition", "Personal Knowledge", "0→1"],
    challenge:
      "I learn something almost every day and take careful notes — then never reopen them. Hundreds of notes across years had decayed into write-only storage: captured once, never revisited, slowly forgotten. The problem was never capture; it was retrieval and revision. Nothing ever brought the right old note back at the right moment, so hard-won knowledge quietly rotted.",
    approach:
      "I built a deliberately thin agentic layer over Notion — no custom app, no frontend, no vector database. Notes live in a Notion database; the only moving part is a scheduled agent that runs every morning. It reads a plain-language current-focus line I can edit, ranks every note against it blended with a spacing boost so nothing goes un-revisited, and writes a dated digest with a two-to-three line refresher plus one active-recall question per note — because retrieval practice beats re-reading. The hard part was not the AI. It was migrating hundreds of image-heavy OneNote notes, and one constraint that quietly reshaped the whole design: Notion's API cannot embed local images, and its hosted image links expire within an hour, so per-note pages cannot be rebuilt with images programmatically. The resolution was a two-layer model — searchable text rows the agent ranks and digests on, linked to a Word-imported visual archive that holds the original images.",
    results: [
      "Turned a static, write-only note graveyard into a daily active-recall habit that resurfaces my own notes against whatever I am working on.",
      "Designed around a hard platform constraint — expiring image URLs and no API image upload — with a two-layer text-plus-visual-archive model instead of fighting it.",
      "Shipped the full agent loop end to end: interpret focus → rank with spacing → synthesize digest → generate a recall question → stamp last-surfaced, as a scheduled job rather than a demo.",
      "Kept it a thin layer — Notion as the store and the delivery surface, the agent as the only moving part."
    ],
    reflection: "The interesting work was not the model — it was the boring edge case (expiring image URLs) that quietly reshaped the entire architecture.",
    gallery: [],
    links: [
      { label: "GitHub repo", url: "https://github.com/vivekarora1107/knowledge-hub" }
    ]
  }
  // More personal projects coming: software-builder agent.
];
