// content.js
// Placeholder carousel content for the Web + Python Quest Map course.
// Each lesson object matches a node in progress.js (same id).
// Swap in real text/media/links later and structure is ready to use as-is.

// Shared "Grind & Grow Skate Crew" sample site \u2014 the same real, semantic
// HTML markup reused across the Website Anatomy Lab (hover + click-to-quiz)
// and the Remix Challenge (click-to-identify + reflection) so students are
// always working with one consistent, real page instead of a static picture.
const SKATE_SITE_HTML =
  '<div class="ssx-site">' +
  '<header class="ssx-header"><span class="ssx-logo">\uD83C\uDEF9 Grind &amp; Grow Skate Crew</span></header>' +
  '<nav class="ssx-nav"><a href="#">Home</a><a href="#">Tricks</a><a href="#">Crew</a><a href="#">Shop</a><a href="#">Contact</a></nav>' +
  '<section class="ssx-hero">' +
  '<h1 class="ssx-hero-heading">Land Your First Kickflip This Summer</h1>' +
  '<p class="ssx-hero-body">Free weekend clinics at the park bowl \u2014 no board required, we\u2019ve got extras to borrow.</p>' +
  '<button class="ssx-cta" type="button">Join a Clinic</button>' +
  '</section>' +
  '<section class="ssx-cards">' +
  '<article class="ssx-card"><h2 class="ssx-card-heading">Weekly Tricks</h2><p>A new trick breakdown every Friday, from ollies to 360 flips.</p></article>' +
  '<article class="ssx-card"><h2 class="ssx-card-heading">Meet the Crew</h2><p>Twelve skaters, one park, zero attitude \u2014 just help landing tricks.</p></article>' +
  '<article class="ssx-card"><h2 class="ssx-card-heading">Shop Gear</h2><p>Decks, grip tape, and pads at crew-only prices.</p></article>' +
  '</section>' +
  '<footer class="ssx-footer">' +
  '<form class="ssx-form"><label for="ssx-email">Get clinic reminders</label><input id="ssx-email" type="email" placeholder="you@email.com" /><button type="submit">Sign Up</button></form>' +
  '<p class="ssx-copy">\u00A9 Grind &amp; Grow Skate Crew</p>' +
  '</footer>' +
  '</div>';

// The 8 real, teachable parts of SKATE_SITE_HTML used by the Anatomy Lab's
// hover-then-quiz flow. Each hotspot's name/job also feeds the shared chip
// option pools, so decoys always come from real parts of this same page.
const SKATE_SITE_HOTSPOTS = [
  { id: "header", selector: ".ssx-header", name: "Header (<header>)", job: "Sits at the top of the page and introduces the site \u2014 usually a logo or site name." },
  { id: "nav", selector: ".ssx-nav", name: "Navigation (<nav>)", job: "Holds the links that let visitors jump to other pages or sections." },
  { id: "hero", selector: ".ssx-hero", name: "Hero section", job: "The big attention-grabbing area right under the header \u2014 usually the first thing visitors notice." },
  { id: "h1", selector: ".ssx-hero-heading", name: "Main heading (<h1>)", job: "The single most important heading on the page \u2014 biggest, and used only once." },
  { id: "heroBody", selector: ".ssx-hero-body", name: "Body text (<p>)", job: "Regular paragraph text that explains or supports the heading above it." },
  { id: "card", selector: ".ssx-card", name: "Card", job: "One self-contained chunk of content, grouped with its own mini-heading and text." },
  { id: "footer", selector: ".ssx-footer", name: "Footer (<footer>)", job: "Sits at the very bottom of the page \u2014 usually copyright, contact info, or small links." },
  { id: "form", selector: ".ssx-form", name: "Form (<form>)", job: "Collects input from a visitor, like an email address, and does something with it when submitted." }
];

const LESSON_CONTENT = [
  {
    id: "lesson-1",
    title: "What Makes a Website?",
    theme: "Trailhead / Campsite",
    cards: [
      { heading: "Course Introduction", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them.", resources: [ { label: "Course Topics Map", href: "assets/resources/lesson-1/course-topics-map.png", type: "image" } ] },
      { heading: "What You'll Learn", videoSrc: "assets/video/L1-what-you-will-learn.mp4", body: "This stop covers three big ideas: every website is a conversation, the three layers every site is built from, and how clients and servers talk to each other." },
      { heading: "Icebreaker", videoSrc: "assets/video/L1-icebreaker.mp4", body: "Introduce yourself in the discussion tab, then share one memorable thing you've seen on a website that you really enjoyed." },
      { heading: "Helpful Terms to Know", videoSrc: "assets/video/L1-helpful-terms.mp4", body: "Browser, client, and server — the three terms you'll need before this stop makes sense." },
      { heading: "Every Website is a Conversation", videoSrc: "assets/video/L1-every-website-is-a-conversation.mp4", body: "Websites are how computers talk to you and through text, images, buttons, and links. Every click is you 'talking back.'" },
      { heading: "Three Layers of Every Site", videoSrc: "assets/video/L1-three-layers-of-every-site.mp4", body: "HTML = structure (the bones), CSS = style (the skin/outfit), JavaScript = behavior (the reflexes). You'll learn all three on this trail." },
      { heading: "Client vs. Server", videoSrc: "assets/video/L1-client-vs-server.mp4", body: "Your browser (the client) asks a server for a page. The server sends back the ingredients, and your browser assembles them for you." },
      { heading: "Recap", videoSrc: "assets/video/L1-recap.mp4", body: "Every website is a conversation between a client and a server, built from three layers: HTML, CSS, and JavaScript." },
      { heading: "What's Next?", videoSrc: "assets/video/L1-whats-next.mp4", body: "Next up: the parts of a website, how HTML actually works, and how CSS makes your site look the way you intend." },
          ]
  },
  {
    id: "lesson-2",
    title: "Parts of a Website",
    theme: "Skate Park",
    cards: [
      { heading: "What You'll Learn", videoSrc: "assets/video/L2-what-you-will-learn.mp4", body: "Every website is made of the same recurring parts — frames, blocks, text hierarchy, layout, and forms. This stop teaches you to name them and spot them everywhere." },
      { heading: "Icebreaker", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "Think of an app or site you use all the time — what's the first thing your eyes land on when it opens? Share what you noticed in the discussion tab." },
      { heading: "Anatomy of a Website - Page Structure", videoSrc: "assets/video/L2-anatomy-of-a-website.mp4", body: "Every page shares the same basic frame: header, navigation, body, and footer — the book covers, table of contents, and chapter of the site." },
      { heading: "Content Blocks Inside the Page Structure", videoSrc: "assets/L2-content-blocks.mp4", body: "Inside the body, content is organized into blocks like hero sections, cards, and featured sections — each one doing its own job, like a post in a feed." },
      { heading: "Text Hierarchy On a Page", videoSrc: "assets/video/L2-text-hierarchy.mp4", body: "Headings, subheadings, body text, and captions create a hierarchy so your brain knows what to read first." },
      { heading: "Layout and Grid", videoSrc: "assets/video/L2-layout.mp4", body: "Layout is how many columns a page uses and in what order; grid is the invisible lines that keep those blocks lined up." },
      { heading: "Forms As Interactive Parts", videoSrc: "assets/video/L2-forms.mp4", body: "Forms are how a website listens back to you — titles, labels, inputs, radio buttons, checkboxes, and a submit button all play a role." },
      {
        heading: "Activity: Website Anatomy Lab",
        videoSrc: "assets/video/L2-website-anatomy-lab.mp4",
        body: "Below is a real sample website for a skate crew. Hover over any part \u2014 header, nav, hero, cards, footer, form \u2014 to see its boundary outlined. Click a highlighted part to answer two questions about it: what is this part called, and what job does it do? Pick your answers from the buttons; no typing needed. Get both right and that part gets checked off. Work through all 8 parts.",
        anatomyLab: {
          siteHtml: SKATE_SITE_HTML,
          hotspots: SKATE_SITE_HOTSPOTS
        }
      },
      {
        heading: "How Did This Land?",
        videoSrc: "assets/video/L2-how-did-this-land.mp4",
        body: "Here's that same skate crew site again. This time, click directly on the page to answer three quick questions: where's the hero, which text is the H1, and which text is the body copy. Then there's an open reflection question \u2014 no right answer, just your thinking: if this were a music site instead of a skate site, what would you move, rename, or restyle first, and why?",
        remixChallenge: {
          siteHtml: SKATE_SITE_HTML,
          clickQuestions: [
            {
              id: "findHero",
              prompt: "Where is the hero? Click it on the sample site below.",
              targetSelector: ".ssx-hero",
              correctFeedback: "That's it \u2014 the hero, right under the header.",
              retryFeedback: "Not quite \u2014 look for the big attention-grabbing block just under the header."
            },
            {
              id: "findH1",
              prompt: "Which text is the H1? Click directly on it.",
              targetSelector: ".ssx-hero-heading",
              correctFeedback: "Yep \u2014 that's the H1, the single biggest heading on the page.",
              retryFeedback: "Look for the biggest, boldest line of text on the page and click right on it."
            },
            {
              id: "findBody",
              prompt: "Now click the body text right below that heading.",
              targetSelector: ".ssx-hero-body",
              correctFeedback: "Right \u2014 that's body text, just a regular paragraph.",
              retryFeedback: "Body text is the smaller, regular sentence \u2014 not a heading. Click right on it."
            }
          ],
          reflectionPrompt: "This site is built for a skate crew. If this were a music site instead, what would you move, rename, or restyle first \u2014 and why?"
        }
      },
      {
        heading: "Vibe Coding Extension",
        videoSrc: "assets/video/L2-vibe-coding.mp4",
        body: "An AI tool was given this prompt: \"Build a homepage for a student skate club with a header, nav, hero section, 3 content cards, heading hierarchy, and footer.\" Below is what it actually produced. Your job isn't to build it yourself \u2014 it's to diagnose it. Look at the preview, answer the diagnostic questions, check off anything you'd fix for clarity, then write a short final reflection.",
        vibeCoding: {
          starterPrompt: "Build a homepage for a student skate club with:\n- header\n- nav\n- hero section\n- 3 content cards\n- heading hierarchy\n- footer",
          aiOutputHtml:
            '<style>body{font-family:sans-serif;margin:0;padding:14px;color:#23283f;background:#fff;} .box1{font-weight:bold;font-size:16px;margin-bottom:10px;} .tinytext{font-size:11px;color:#555;margin:2px 0;} .box3{display:flex;gap:8px;margin:14px 0;} .card{border:1px solid #ddd;padding:8px;flex:1;font-size:13px;} .cardtitle{font-weight:bold;margin-bottom:4px;} .box3 h2{font-size:13px;margin:0 0 4px;} .box4{font-size:11px;color:#888;margin-top:14px;}</style>' +
            '<div class="box1"><div>Skate Club</div></div>' +
            '<div class="box2"><div class="tinytext">Come check out our club!</div><div class="tinytext">Meetups every Tuesday after school.</div></div>' +
            '<div class="box3">' +
            '<div class="card"><div class="cardtitle">Upcoming Meets</div><div>See the schedule for this month.</div></div>' +
            '<div class="card"><div class="cardtitle">Gear Swap</div><div>Trade boards, wheels, and pads with the crew.</div></div>' +
            '<div class="card"><h2>New Members</h2><div>Sign up any Tuesday, no experience needed.</div></div>' +
            '</div>' +
            '<div class="box4"><div>\u00A9 Skate Club</div></div>',
          diagnosticQuestions: [
            {
              id: "hierarchy",
              prompt: "Did the AI tool include a working heading hierarchy (one clear H1, then smaller headings below it)?",
              options: [
                { label: "Yes, it's solid", correct: false },
                { label: "No, hierarchy is missing or broken", correct: true }
              ],
              explanation: "There's no <h1> anywhere, and only one stray <h2> shows up on a single card \u2014 the rest of the \u201cheadings\u201d are just bold-looking divs."
            },
            {
              id: "hero",
              prompt: "Is the hero section actually acting like a hero?",
              options: [
                { label: "Yes", correct: false },
                { label: "No", correct: true }
              ],
              explanation: "It's technically there, but it's just tiny 11px text with no big heading and no button \u2014 it doesn't do a hero's job of grabbing attention."
            },
            {
              id: "missing",
              prompt: "Which required part is missing entirely from this output?",
              options: [
                { label: "Header", correct: false },
                { label: "Nav", correct: true },
                { label: "Cards", correct: false },
                { label: "Footer", correct: false }
              ],
              explanation: "There's no navigation at all \u2014 no links to Home, Tricks, Crew, or anything else."
            }
          ],
          checklistOptions: [
            "Swap the divs for real header / nav / hero / footer tags",
            "Add one clear H1 for the page",
            "Make the hero look like a hero \u2014 bigger heading plus a button",
            "Add the missing nav links",
            "Give every card the same heading level"
          ],
          reflectionPrompt: "What did the AI understand about page structure, and what did it get wrong?"
        }
      },
{
  heading: "Responsive Design",
  videoSrc: "assets/video/L2-responsive-design.mp4",
  body: "A good site looks great on a phone or a laptop, adapting to any terrain, just like a good skater.\n\nResize a real site from a laptop down to a phone and the layout doesn't just shrink & it reorganizes. Switch between the tabs below to compare the plain page against a version with the changes called out, no code required.",
  responsiveBreakpoints: {
    compareMode: "annotated",
    siteUrl: "grindworks.example",
    instructions: "Same skate shop page, three screen widths. Switch tabs, then compare the plain preview on the left with the callouts on the right to see exactly what rearranges at each breakpoint & no code here yet, just watch the page change.",
    breakpointNote: "A breakpoint is the screen width where a design switches to a new layout. This page has two: one where it switches to a tablet-sized layout, and one where it switches to a phone-sized layout.",
    modes: [
      {
        label: "Desktop",
        frameVariant: "desktop",
        previewHtml: "<div class=\"sp-site\"><div class=\"sp-header\"><p class=\"sp-logo\">GrindWorks ðŸ›¹</p><nav class=\"sp-nav\"><a>Decks</a><a>Wheels</a><a>Locations</a></nav></div><div class=\"sp-hero\"><div class=\"sp-hero-text\"><h2>New Deck Drop</h2><p>Fresh graphics just landed, hand-picked by our team.</p><button>Shop Decks</button></div><div class=\"sp-hero-art\">ðŸ›¹</div></div><div class=\"sp-shelf\"><div class=\"sp-item\"><h3>Street Deck</h3><p>$65</p></div><div class=\"sp-item\"><h3>Cruiser Board</h3><p>$89</p></div><div class=\"sp-item\"><h3>Grip Tape 3-Pack</h3><p>$12</p></div></div></div>",
        annotatedHtml: "<div class=\"sp-site\"><div class=\"sp-header\"><p class=\"sp-logo\">GrindWorks ðŸ›¹</p><nav class=\"sp-nav\"><a>Decks</a><a>Wheels</a><a>Locations</a></nav></div><div class=\"sp-hero\"><div class=\"sp-hero-text\"><h2>New Deck Drop</h2><p>Fresh graphics just landed, hand-picked by our team.</p><button>Shop Decks</button></div><div class=\"sp-hero-art\">ðŸ›¹</div></div><div class=\"sp-shelf\"><div class=\"sp-item\"><h3>Street Deck</h3><p>$65</p></div><div class=\"sp-item\"><h3>Cruiser Board</h3><p>$89</p></div><div class=\"sp-item\"><h3>Grip Tape 3-Pack</h3><p>$12</p></div></div></div>",
        changes: [],
        emptyChangeNote: "This is the starting point & the full-width layout. Switch to Tablet or Mobile to see what changes.",
        caption: "At full width, the nav sits beside the logo, the hero text sits beside the skateboard icon, and all three product cards line up in a row."
      },
      {
        label: "Tablet",
        frameVariant: "tablet",
        previewHtml: "<div class=\"sp-site\"><div class=\"sp-header\"><p class=\"sp-logo\">GrindWorks ðŸ›¹</p><nav class=\"sp-nav\"><a>Decks</a><a>Wheels</a><a>Locations</a></nav></div><div class=\"sp-hero sp-hero--stack\"><div class=\"sp-hero-text sp-text-sm\"><h2>New Deck Drop</h2><p>Fresh graphics just landed, hand-picked by our team.</p><button>Shop Decks</button></div><div class=\"sp-hero-art\">ðŸ›¹</div></div><div class=\"sp-shelf\"><div class=\"sp-item\"><h3>Street Deck</h3><p>$65</p></div><div class=\"sp-item\"><h3>Cruiser Board</h3><p>$89</p></div><div class=\"sp-item\"><h3>Grip Tape 3-Pack</h3><p>$12</p></div></div></div>",
        annotatedHtml: "<div class=\"sp-site\"><div class=\"sp-header\"><p class=\"sp-logo\">GrindWorks ðŸ›¹</p><nav class=\"sp-nav\"><a>Decks</a><a>Wheels</a><a>Locations</a></nav></div><div class=\"sp-hero sp-hero--stack rdbp-tag-target\"><span class=\"rdbp-tag\">1</span><div class=\"sp-hero-text sp-text-sm\"><h2>New Deck Drop</h2><p>Fresh graphics just landed, hand-picked by our team.</p><button>Shop Decks</button></div><div class=\"sp-hero-art\">ðŸ›¹</div></div><div class=\"sp-shelf\"><div class=\"sp-item\"><h3>Street Deck</h3><p>$65</p></div><div class=\"sp-item\"><h3>Cruiser Board</h3><p>$89</p></div><div class=\"sp-item\"><h3>Grip Tape 3-Pack</h3><p>$12</p></div></div></div>",
        changes: [
          "1. The hero switches from a side-by-side row to a stacked column & the text centers itself above the skateboard icon."
        ],
        caption: "On a tablet-sized screen, the hero stacks. The nav and product shelf are still wide enough to stay in a row."
      },
      {
        label: "Mobile",
        frameVariant: "mobile",
        previewHtml: "<div class=\"sp-site\"><div class=\"sp-header sp-header--stack\"><p class=\"sp-logo\">GrindWorks ðŸ›¹</p><nav class=\"sp-nav sp-nav--stack\"><a>Decks</a><a>Wheels</a><a>Locations</a></nav></div><div class=\"sp-hero sp-hero--stack\"><div class=\"sp-hero-text sp-text-sm\"><h2>New Deck Drop</h2><p>Fresh graphics just landed, hand-picked by our team.</p><button>Shop Decks</button></div><div class=\"sp-hero-art\">ðŸ›¹</div></div><div class=\"sp-shelf sp-shelf--stack\"><div class=\"sp-item\"><h3>Street Deck</h3><p>$65</p></div><div class=\"sp-item\"><h3>Cruiser Board</h3><p>$89</p></div><div class=\"sp-item\"><h3>Grip Tape 3-Pack</h3><p>$12</p></div></div></div>",
        annotatedHtml: "<div class=\"sp-site\"><div class=\"sp-header sp-header--stack rdbp-tag-target\"><span class=\"rdbp-tag\">1</span><p class=\"sp-logo\">GrindWorks ðŸ›¹</p><nav class=\"sp-nav sp-nav--stack\"><a>Decks</a><a>Wheels</a><a>Locations</a></nav></div><div class=\"sp-hero sp-hero--stack rdbp-tag-target\"><span class=\"rdbp-tag\">2</span><div class=\"sp-hero-text sp-text-sm\"><h2>New Deck Drop</h2><p>Fresh graphics just landed, hand-picked by our team.</p><button>Shop Decks</button></div><div class=\"sp-hero-art\">ðŸ›¹</div></div><div class=\"sp-shelf sp-shelf--stack rdbp-tag-target\"><span class=\"rdbp-tag\">3</span><div class=\"sp-item\"><h3>Street Deck</h3><p>$65</p></div><div class=\"sp-item\"><h3>Cruiser Board</h3><p>$89</p></div><div class=\"sp-item\"><h3>Grip Tape 3-Pack</h3><p>$12</p></div></div></div>",
        changes: [
          "1. The header stacks: the logo sits on top, and the nav links drop into a vertical list.",
          "2. The hero still stacks into a column, same as on tablet.",
          "3. The product shelf goes from a row of three cards to a single stacked column."
        ],
        caption: "On a phone-sized screen, everything stacks: the nav links drop into a list, and the three product cards line up in a single column so they're easy to tap."
      }
    ]
  }
},
      { heading: "Recap", videoSrc: "assets/video/L2-recap.mp4", body: "You now know the anatomy of any page: header, navigation, body, and footer, built from content blocks, organized with text hierarchy, arranged in a layout, and made interactive with forms." },
      { heading: "What's Next?", videoSrc: "assets/video/L2-whats-nexto.mp4", body: "Next up: getting hands-on with the actual HTML code behind this structure, then styling it with CSS." },
    ]
  },
  {
    id: "lesson-3",
    title: "What is HTML?",
    theme: "Snack Truck Row",
    cards: [
      { heading: "What You'll Learn", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Icebreaker", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Helpful Terms to Know", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "HTML = The Ingredients", videoSrc: "assets/video/placeholder-html-the-ingredients.mp4", body: "HTML (HyperText Markup Language) is the skeleton of every website you've ever visited & TikTok, YouTube, your school portal, all of it. It's not really a \"programming language\" like Python; it's a markup language, meaning its whole job is to label pieces of content so a browser knows what ingredients make up a website. The labels tell the browser what's a heading, what's a paragraph, what's an image, and so on. Think of it like a set of instructions for how to label the ingredients or parts that you combine to make up the internet.\n\nWhy it matters: before you can make a website look cool or do anything interactive, you need something for the styling (CSS) and behavior (JavaScript/Python-backed logic) to attach to, like the bones of a meat based dish.\n\nHTML is that foundation & skip it and there's nothing to build on. In your skill progression, HTML is literally step one of \"how the web works,\" and everything else (CSS, JavaScript, even backend Python with frameworks like Flask) gets layered on top of it." },
      { heading: "Tags & Elements", videoSrc: "assets/video/placeholder-tags-elements.mp4", body: "Tags are the labels themselves & little instructions wrapped in angle brackets like <p> or <h1> that tell the browser \"this next chunk of content is a paragraph\" or \"this is a big heading.\"\n\nRelatable way to think about it: it's like to-go food packaging. The tag is the receipt taped on the container telling you what's inside before you open it. <h1>My Robotics Project</h1> is a tag-wrapped heading.\n\nMost tags come in pairs: an opening tag <p> and a closing tag </p>, with your actual content sandwiched in between. That whole package & opening tag + content + closing tag & is called an element.\n\nUnderstanding tags and elements is the vocabulary you need before you can read or write any HTML & it's like learning letters before words." },
      {
        heading: "Activity: Match the Code to the Page",
        videoSrc: "assets/video/placeholder-tags-elements.mp4",
        body: "On the left is a real sample IDE with HTML for a snack truck's page. On the right is that exact page, rendered live. Hover either side to see how a line of code and a part of the real page connect. Then click a line of code and click the part of the site you think it produced (or start from the site & either order works) to match them up. Match all 5 to finish.",
        ideSiteMatch: {
          filename: "index.html",
          instructions: "Hover either panel to see how a line of code and a part of the real page connect. Click a line of code, then click the part of the site you think it produced & or start from the site, either order works & to match them up.",
          codeLines: [
            { text: "<h1>Ray's Snack Truck</h1>", pairId: "h1" },
            { text: "<p>Best tacos on the block, parked by the football field every Friday.</p>", pairId: "p" },
            { text: "<a href=\"#menu\">See the Full Menu</a>", pairId: "a" },
            { text: "<button>Order Now</button>", pairId: "button" },
            { text: "<ul>", pairId: "ul" },
            { text: "  <li>Tacos â€“ $3</li>", pairId: "ul" },
            { text: "  <li>Churros â€“ $2</li>", pairId: "ul" },
            { text: "</ul>", pairId: "ul" },
          ],
          siteHtml:
            '<div class="tem-site">' +
            '<h1 class="tem-h1">Rayâ€™s Snack Truck</h1>' +
            '<p class="tem-p">Best tacos on the block, parked by the football field every Friday.</p>' +
            '<a class="tem-link" href="#menu">See the Full Menu</a>' +
            '<button class="tem-button" type="button">Order Now</button>' +
            '<ul class="tem-list"><li>Tacos â€“ $3</li><li>Churros â€“ $2</li></ul>' +
            "</div>",
          pairs: [
            { id: "h1", selector: ".tem-h1", label: "Heading (<h1>)", job: "The biggest, most important text on the page & used once per page." },
            { id: "p", selector: ".tem-p", label: "Paragraph (<p>)", job: "Holds a block of regular sentence text." },
            { id: "a", selector: ".tem-link", label: "Link (<a>)", job: "Takes the visitor somewhere else when clicked & another page, section, or site." },
            { id: "button", selector: ".tem-button", label: "Button (<button>)", job: "A clickable control that triggers an action, like ordering or submitting." },
            { id: "ul", selector: ".tem-list", label: "List (<ul> + <li>)", job: "Groups related items together, one <li> per item." },
          ],
          successMessage: "ðŸŽ‰ All matched! Every line of code found its match on the real page.",
        },
      },
      { heading: "The IDE", videoSrc: "assets/video/placeholder-tags-elements.mp4", body: "IDE stands for Integrated Development Environment & basically a supercharged text editor built for writing code (think VS Code, Replit, or CodePen). Regular apps like Google Docs auto-correct and format things for humans to read; an IDE is built for code & it highlights syntax in colors, catches typos and errors, auto-completes tags, and lets you preview your site instantly.\n\nRelatable way to think about it: if HTML is the ingredients, the IDE is your kitchen & the counter space, knives, and stove that make cooking actually possible.\n\nYou could technically write HTML in Notepad, but it'd be like chopping vegetables with a butter knife on your lap. Getting comfortable in an IDE early pays off across every future project & the same skills (running code, reading error messages, organizing files) carry straight into Python, JavaScript, or Arduino work." },
      { heading: "Text & Content Tags", videoSrc: "assets/video/placeholder-tags-elements.mp4", body: "These are the tags that handle the actual words and content people read: <h1> through <h6> for headings (big to small), <p> for paragraphs, <strong> for bold or important text, <em> for emphasis and italics, and <span> for small inline bits you want to style differently.\n\nRelatable way to think about it: it's like formatting a group chat message or a school essay & some words need to be a title, some need emphasis, some are just regular text. These tags let you organize information the way your brain naturally organizes it, which is huge for accessibility too & screen readers use these tags to know what to read as a heading versus regular text.\n\nThis is the \"readability and communication\" layer of your web skills & the same instinct you use when designing a clear lesson slide." },
      { heading: "List & Table Tags", videoSrc: "assets/video/placeholder-tags-elements.mp4", body: "Lists (<ul> for bullet points, <ol> for numbered lists, <li> for each list item) and tables (<table>, <tr> for rows, <td> for cells) let you organize information into structured groups instead of one giant wall of text.\n\nRelatable way to think about it: like making a packing list for a trip (unordered list), a top-10 ranking (ordered list), or a class schedule grid (table). If you've ever built a spreadsheet or a schedule, you already think in this structure & HTML just gives it browser-readable form.\n\nThis connects directly to data organization skills you'd use later in Python too, like when you work with lists and dictionaries." },
      { heading: "Your First HTML Page", videoSrc: "assets/video/placeholder-your-first-html-page.mp4", body: "In the Try It tab, change the text between the <h1>...</h1> tags to say Hello World!", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <h1>Your text goes here. </h1>\n <p>Feel free to type other things (e.g. What's for Lunch?).</p>\n <p>Click the red button that says Run to see your result.</p>\n  </body>\n</html>" } },
      { heading: "Containers & Sections", videoSrc: "assets/video/placeholder-tags-elements.mp4", body: "Tags like <div> and <section> (plus <header>, <footer>, <nav>, <article>) don't display any content themselves & they're invisible boxes that group related stuff together so you can style or position it as one unit.\n\nRelatable way to think about it: imagine organizing your backpack & you don't just throw everything in loose, you use pockets and pouches (pencil pouch, laptop sleeve, snack pocket). Containers are those pouches for your webpage's content.\n\nThis becomes essential the moment you start using CSS, because almost all layout and styling techniques (like Flexbox or Grid) work by targeting containers, not individual pieces of text." },      
  {
  heading: "HTML Comments",
  videoSrc: "assets/video/placeholder-tags-elements.mp4",
  body: "Comments look like <!-- this is a comment --> and the browser completely ignores them & they're notes left in the code purely for humans (you, or teammates) to read.\n\nRelatable way to think about it: it's like sticky notes on a group project poster & reminders like \"finish this section\" or \"don't delete this yet, testing something.\"\n\nEvery language you'll ever code in (Python uses #, JavaScript uses //) has some version of comments, so building the habit of leaving clear notes now makes you a much easier collaborator later, whether that's a classmate or your future self debugging at midnight.\n\nAn HTML comment is made from an opening comment marker, a note in the middle, and a closing comment marker. Explore each piece below to see how the browser knows where the hidden note starts and stops.",
  syntaxAnnotate: {
    language: "HTML",
    filename: "index.html",
    lines: [
      [
        {
          text: "<!--",
          type: "comment-open",
          order: 1,
          tip: "This opening comment marker starts the hidden note. It begins with <, then !, then two dashes."
        },
        {
          text: " This is a comment ",
          type: "comment-text",
          order: 2,
          tip: "This is the note inside the comment. The browser ignores it, so it does not show on the webpage."
        },
        {
          text: "-->",
          type: "comment-close",
          order: 3,
          tip: "This closing comment marker ends the hidden note. Once HTML sees this, the comment is over."
        }
      ]
    ],
    outputText: "Visible result: this line does not display anything on the page."
  }
},
      { heading: "Layout Tags", videoSrc: "assets/video/placeholder-tags-elements.mp4", body: "These are the structural tags & <header>, <nav>, <main>, <footer>, <section> & that define the major regions of a page: the top banner, the navigation menu, the main content, the bottom info bar.\n\nRelatable way to think about it: think of a magazine or a YouTube page layout & there's always a header up top, a sidebar or nav for browsing, the main video or article in the middle, and footer info at the bottom. Once you know these tags, you start \"seeing\" the skeleton underneath every website you visit.\n\nThis is a big step toward thinking like a designer, not just a coder & it's the bridge between HTML structure and real UI/UX design decisions." },
      { heading: "Nesting", videoSrc: "assets/video/placeholder-nesting.mp4", body: "Nesting means putting elements inside other elements & like an <li> inside a <ul>, or a <p> inside a <div>. The trick is that tags have to open and close in the right order, like Russian nesting dolls: whatever opens last has to close first.\n\nRelatable way to think about it: it's exactly like folders inside folders on your computer, or a playlist inside a playlist folder inside your music app.\n\nGetting nesting right is one of the most common early debugging challenges & a missing closing tag can make your whole layout break. This is also great practice for coding logic in general, since nesting (loops inside loops, if-statements inside functions) shows up constantly once you move into Python." },
      {
        heading: "Activity: Big List, Little List",
        videoSrc: "assets/video/placeholder-tags-elements.mp4",
        body:
          "Below are three untagged pieces of a mini recipe: a title, a one-sentence description, and three steps. Tap a piece of text, then tap the tag that belongs around it \u2014 <h1> for the title, <p> for the description, and <li> for each step (your three steps will automatically be wrapped together in a <ul> list). Hit Check My Tags when you're ready. If something's off, you'll get an encouraging nudge to try again, and a hint if you need one.",
        tagMatch: {
          chunks: [
            { id: "title", text: "My After-School Snack", correctTag: "h1" },
            { id: "desc", text: "This quesadilla is ready in five minutes flat.", correctTag: "p" },
            { id: "step1", text: "Grab a tortilla and lay it flat.", correctTag: "li" },
            { id: "step2", text: "Sprinkle on cheese and beans.", correctTag: "li" },
            { id: "step3", text: "Fold it up and heat until golden.", correctTag: "li" },
          ],
          tagOptions: [
            { tag: "h1", label: "<h1> Big Heading" },
            { tag: "p", label: "<p> Paragraph" },
            { tag: "li", label: "<li> List Item" },
          ],
          hints: {
            h1: "Which tag makes text act like a big, bold heading \u2014 the kind you'd use for a title?",
            p: "Which tag holds a regular sentence of paragraph text?",
            li: "Which tag wraps a single item inside a list? (Remember, the whole group of items also needs a <ul> around them \u2014 that part happens automatically.)",
          },
          successMessage: "\ud83c\udf89 Boom \u2014 every piece is wearing the right tag! Your title, description, and steps are all set.",
          retryMessage: "Not quite yet \u2014 take another look and give it another try. You've got this!",
        },
      },
      { heading: "Practice: Build a Menu", videoSrc: "assets/video/placeholder-practice-build-a-menu.mp4", body: "Try listing 3 of your own favorite snacks using <ul> and <li> tags. \n You'll see placeholder snacks in the Try It section on the next tab.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <h2>My Favorite Snacks</h2>\n    <ul>\n      <li>Popcorn</li>\n      <li>Churros</li>\n    </ul>\n  </body>\n</html>" } },
      { heading: "Link & Media Assets", videoSrc: "assets/video/placeholder-tags-elements.mp4", body: "The <a> tag creates clickable links, like <a href=\"https://example.com\">click me</a>, while <img>, <video>, and <audio> tags embed pictures, videos, and sound directly into the page.\n\nRelatable way to think about it: this is the \"connect the dots\" layer of the web & links are literally what makes it a web, weaving separate pages together, and media tags are what turn a plain text document into something that feels alive, like adding your 3D print photos or a demo video of your robot in action to a project page.\n\nThis is often the most exciting tag group for beginners because it's the difference between \"a page of text\" and \"a real website\" & and it sets you up for later skills like optimizing image file sizes or embedding interactive content (like a Scratch project or a p5.js sketch) inside your site." },      
      { heading: "Recap", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "What's Next?", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
]
  },
 // Replacement for the lesson-4 object in content.js
// Paste this in place of the existing lesson-4 object (same id) in the top-level array.

  {
    id: "lesson-4",
    title: "What is CSS?",
    theme: "Themed Mall",
    cards: [
      { heading: "What You'll Learn", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "Youâ€™ll go from seeing web pages as fixed screens to building your own simple, working pages and mini projects that you can actually click, change, and remix yourself." },
      { heading: "Icebreaker", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "A quick warm-up to share how you already use websites and apps, and to imagine what youâ€™d change or build if you had the tools." },
      { heading: "Helpful Terms to Know", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "A short glossary of words youâ€™ll see a lot in this course&like HTML, CSS, JavaScript, element, and browser&so the rest of the lessons feel more familiar." },
      { heading: "What is CSS?", videoSrc: "assets/video/placeholder-css-the-outfit.mp4", body: "CSS (Cascading Style Sheets) is what makes a website go from \"plain text on a white page\" to actually looking like something \u2014 colors, fonts, spacing, layout, all of it. If HTML is the skeleton, CSS is the skin, clothes, and style. Same content, totally different vibe depending on the CSS.\n\nRelatable way to think about it: think about how the same essay looks completely different depending on the font and formatting \u2014 Comic Sans vs. a clean sans-serif, cramped vs. spaced out. CSS is you controlling that, on purpose, for every element on the page.\n\nIn your skill progression, CSS is the layer where coding starts feeling like design \u2014 it's where you go from \"does this work\" to \"does this look good,\" which is a totally different (and honestly harder) skill than HTML alone." },
            { heading: "Where CSS Lives: inline, <style>, external stylesheet", videoSrc: "assets/video/placeholder-css-the-outfit.mp4", body: "CSS can live in three places:\n\n- Inline \u2014 styling written directly inside an HTML tag, like <p style=\"color: red;\">. Quick, but messy if overused.\n- Internal style tags \u2014 a <style> block inside the HTML file's <head>, holding CSS for that one page.\n- External stylesheets \u2014 a separate .css file linked to your HTML with <link rel=\"stylesheet\" href=\"style.css\">. This is the pro move.\n\nRelatable way to think about it: it's like outfits. Inline CSS is throwing on a jacket for one specific moment. A style tag is your outfit for the day. An external stylesheet is your whole closet, organized and reusable across every day (every page) without repacking it each time.\n\nAlmost every real website uses external stylesheets because it means you can restyle 50 pages by editing one file \u2014 a huge lesson in not repeating yourself, which is a core principle you'll see again in Python (functions exist for the same reason).",
        cssWhereLives: {
          instructions: "Same heading, same final look, three different places to write the CSS. Switch tabs to compare & the rendered result below never changes.",
          modes: [
            {
              key: "inline",
              label: "Inline",
              files: [
                {
                  filename: "index.html",
                  lines: [
                    "<body>",
                    "  <h2 style=\"color: hotpink;\">Welcome to the Mall!</h2>",
                    "</body>",
                  ],
                  highlight: [1],
                },
              ],
              caption: "Written directly on the element with the style attribute. Fastest for a one-off tweak, but it only affects this exact tag & copy the tag somewhere else and the style doesn't come with it.",
            },
            {
              key: "internal",
              label: "Internal <style>",
              files: [
                {
                  filename: "index.html",
                  lines: [
                    "<head>",
                    "  <style>",
                    "    .storefront { color: purple; }",
                    "  </style>",
                    "</head>",
                    "<body>",
                    "  <h3 class=\"storefront\">Store Directory</h3>",
                    "</body>",
                  ],
                  highlight: [1, 2, 3],
                },
              ],
              caption: "Lives in a <style> block in the <head>. Every matching element on THIS page picks it up, but a second page wouldn't see it unless you paste the block there too.",
            },
            {
              key: "external",
              label: "External stylesheet",
              files: [
                {
                  filename: "index.html",
                  lines: [
                    "<head>",
                    "  <link rel=\"stylesheet\" href=\"styles.css\">",
                    "</head>",
                    "<body>",
                    "  <h3 class=\"storefront\">Store Directory</h3>",
                    "</body>",
                  ],
                  highlight: [1],
                },
                {
                  filename: "styles.css",
                  lines: [".storefront { color: purple; }"],
                  highlight: [0],
                },
              ],
              caption: "Lives in its own .css file, linked once with <link>. Every page that links to styles.css shares the same rule & this is what real, multi-page projects use almost all the time.",
            },
          ],
          preview: [
            { tag: "h2", text: "Welcome to the Mall!", color: "hotpink" },
            { tag: "h3", text: "Store Directory", color: "purple" },
          ],
          ideHeading: "How This Shows Up In the IDE",
          ideCaption: "Same three approaches, real tool & here they all live together in one file so you can see them side by side. Click Run, then try changing the inline color above and the .storefront color in the style block.",
        },
        playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      /* This is an INTERNAL stylesheet, inside a <style> block */\n      .storefront { color: purple; }\n    </style>\n  </head>\n  <body>\n    <!-- This is INLINE CSS, written directly on one element -->\n    <h2 style=\"color: hotpink;\">Welcome to the Mall!</h2>\n\n    <!-- This heading gets its style from the <style> block above -->\n    <h3 class=\"storefront\">Store Directory</h3>\n\n    <!-- An EXTERNAL stylesheet would be linked like this in the <head>: -->\n    <!-- <link rel=\"stylesheet\" href=\"styles.css\"> -->\n\n    <p>Try changing the inline color above, then the .storefront color in the style block.</p>\n  </body>\n</html>" } },
      {
  heading: "CSS Syntax",
  videoSrc: "assets/video/placeholder-css-the-outfit.mp4",
  body: "CSS rules follow one pattern: a selector (what you're targeting) followed by curly braces containing `property: value;` pairs. For example:\n\np {\n  color: blue;\n  font-size: 18px;\n}\n\nThat says \"find every paragraph, make the text blue, and set it to 18 pixels.\"\n\nRelatable way to think about it: it's basically a recipe card \u2014 \"ingredient: amount\" over and over (property: value), wrapped in a title telling you what dish it's for (the selector).\n\nGet the punctuation right (colons, semicolons, curly braces) or the \"recipe\" won't cook \u2014 this is your first real taste of syntax strictness, which matters even more once you get into Python, where a missing colon or wrong indent breaks everything too.",
  syntaxAnnotate: {
    language: "CSS",
    filename: "styles.css",
    lines: [
      [
        {
          text: "h2",
          type: "selector",
          order: 1,
          tip: "This selector chooses which HTML elements get styled. Here, it targets every h2 heading."
        },
        {
          text: " {",
          type: "opening-brace",
          order: 2,
          tip: "This opening brace starts the declaration block, where the styling instructions go."
        }
      ],
      [
        {
          text: "  color",
          type: "property-name",
          order: 3,
          tip: "This property name tells CSS what part of the element you want to change."
        },
        {
          text: ":",
          type: "colon",
          order: 4,
          tip: "The colon separates the property name from its value."
        },
        {
          text: " teal",
          type: "value",
          order: 5,
          tip: "This value tells CSS what setting to use for that property. Here, the text color becomes teal."
        },
        {
          text: ";",
          type: "declaration-end",
          order: 6,
          tip: "This semicolon ends one declaration. It tells CSS that this styling instruction is complete."
        }
      ],
      [
        {
          text: "}",
          type: "closing-brace",
          order: 7,
          tip: "This closing brace ends the declaration block and finishes the CSS rule."
        }
      ]
    ],
    outputText: "Visible result: all h2 headings would appear teal."
  }
},
      {
        heading: "Basic selectors: element, class, ID",
        videoSrc: "assets/video/placeholder-selectors.mp4",
        body: "Selectors are how you tell CSS what to style:\n\n- Element selectors \u2014 target a tag type directly, so `p` styles every paragraph on the page.\n- Class selectors \u2014 written `.className`, they target any element with that class, and you can reuse one class on tons of elements.\n- ID selectors \u2014 written `#idName`, they target one specific, unique element. Only one element per page should ever have a given ID.\n\nRelatable way to think about it: element selectors are like saying \"everyone wearing a hoodie\" (a whole category). Classes are like a team jersey \u2014 multiple people can share it (\"everyone on the Robotics Club\"). IDs are like your student ID number \u2014 it belongs to exactly one person, no duplicates.\n\nKnowing which selector to reach for is one of the biggest \"aha\" moments in CSS, because it's really a question of scope: do I want to style one thing, a group, or everything?",
        matchActivity: {
          previewType: "css-selector",
          previewHtml: "<p id=\"hero\">Grand Opening This Weekend!</p>\n<p class=\"sale\">50% off shoes</p>\n<p>Regular store hours apply.</p>",
          chunks: [
            { id: "elSel", text: "p { color: gray; }", correctKey: "element" },
            { id: "classSel", text: ".sale { color: red; font-weight: bold; }", correctKey: "class" },
            { id: "idSel", text: "#hero { color: white; background: navy; padding: 10px; }", correctKey: "id" },
          ],
          options: [
            { key: "element", label: "Element Selector", previewColor: "#2a6df5" },
            { key: "class", label: "Class Selector", previewColor: "#e0433d" },
            { key: "id", label: "ID Selector", previewColor: "#caa000" },
          ],
          hints: {
            element: "This selector has no dot or hash \u2014 it just names a tag, like p or h2. It styles every matching tag on the page.",
            class: "This selector starts with a dot (.) and matches every element sharing that class.",
            id: "This selector starts with a hash (#) and should match only one unique element on the page.",
          },
          successMessage: "\ud83c\udf89 All three selectors ID'd correctly \u2014 and now they're live on the mock storefront below!",
          retryMessage: "Not quite \u2014 check the very first character of each rule (nothing, a dot, or a hash) and try again.",
        },
      },
            { heading: "Attributes in HTML: especially class and id, and how selectors use them", videoSrc: "assets/video/placeholder-css-the-outfit.mp4", body: "Attributes are extra info you attach to an HTML tag, written inside the opening tag, like <div class=\"card\" id=\"project-1\">. On their own, `class` and `id` don't do anything \u2014 they're just labels \u2014 but CSS (and later, JavaScript) uses them as handles to grab specific elements and style or manipulate them.\n\nRelatable way to think about it: it's like nametags at a summer camp. The nametag itself doesn't change who you are, but it lets a counselor (CSS) find and call out specific people, or a specific group, by name.\n\nLearning to plan out your class and id names thoughtfully as you write HTML is a skill that pays off constantly \u2014 messy, inconsistent naming is one of the top reasons beginner CSS \"doesn't work\" even when the syntax is technically correct.",
        matchActivity: {
          previewType: "css-attribute",
          chunks: [
            { id: "storeCardA", text: "<div class=\"storeCard\">Sneaker Spot</div>", correctKey: "class" },
            { id: "storeCardB", text: "<div class=\"storeCard\">Arcade Zone</div>", correctKey: "class" },
            { id: "featured", text: "<div id=\"featuredStore\">Grand Opening Booth</div>", correctKey: "id" },
            { id: "plain", text: "<div>Just a plain sign, no label</div>", correctKey: "none" },
          ],
          options: [
            { key: "class", label: "class \u2014 reusable label, many elements can share it", shortLabel: "class", previewColor: "#2a6df5" },
            { key: "id", label: "id \u2014 unique label, only one element should have it", shortLabel: "id", previewColor: "#caa000" },
            { key: "none", label: "No attribute \u2014 nothing for a selector to grab onto", shortLabel: "No attribute", previewColor: "#8b8fa3" },
          ],
          hints: {
            class: "Look for class=\"...\" \u2014 the same class name can be reused on lots of elements.",
            id: "Look for id=\"...\" \u2014 an id should only ever be used once per page.",
            none: "If there's no class or id at all, a CSS class/id selector has nothing to target.",
          },
          successMessage: "\ud83c\udf89 Every element correctly sorted \u2014 class, id, and plain, all grouped by color!",
          retryMessage: "Take another look at each snippet's attributes (or lack of one) and try again.",
        },
        playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      .storeCard { border: 2px solid #ccc; padding: 12px; margin: 8px; }\n      #featuredStore { border-color: gold; background: #fff8dc; }\n    </style>\n  </head>\n  <body>\n    <!-- class=\"storeCard\" labels this element so CSS can find it -->\n    <div class=\"storeCard\">Sneaker Spot</div>\n\n    <!-- id=\"featuredStore\" is a unique label, only one per page -->\n    <div class=\"storeCard\" id=\"featuredStore\">Arcade Zone (Featured!)</div>\n\n    <!-- Try adding class=\"storeCard\" to a new div and see it pick up the style -->\n  </body>\n</html>" },
      },
      { heading: "Core visual properties: color, fonts, paragraphs, spacing", videoSrc: "assets/video/placeholder-colors-fonts-spacing.mp4", body: "These are the everyday CSS properties you'll use constantly:\n\n- Colors \u2014 `color` for text and `background-color` for the background, using names, hex codes like #ff5733, or `rgb()`.\n- Fonts \u2014 `font-family`, `font-size`, and `font-weight` (bold vs. normal).\n- Paragraphs and text \u2014 `text-align`, `line-height`, and `letter-spacing`.\n- Spacing \u2014 `margin` is space outside an element, `padding` is space inside it, between its border and its content.\n\nRelatable way to think about it: this is basically the \"customize your profile\" screen. Picking colors, fonts, and spacing is exactly like designing a Canva slide, a Spotify playlist cover, or your phone's home screen theme.\n\nThis is where your personal design taste starts directly translating into code, and it's genuinely one of the most fun parts of learning CSS because the results are immediate and visual.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      body { font-family: Georgia, serif; }\n      .sign {\n        color: darkorange;\n        font-size: 24px;\n        line-height: 1.6;\n        margin: 20px;\n        padding: 16px;\n      }\n    </style>\n  </head>\n  <body>\n    <p class=\"sign\">Food Court â†’ Second Floor, Past the Escalators</p>\n    <!-- Try changing color, font-size, margin, or padding above -->\n  </body>\n</html>" } },
      { heading: "Activity: Style the Storefront Sign", videoSrc: "assets/video/placeholder-css-the-outfit.mp4", body: "Hands-on tweaks to the colors, fonts, and spacing of a simple page, so you can see how a few property changes transform the overall vibe.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      body { background: #f0f0f0; }\n      .sign {\n        font-family: sans-serif;\n        color: #333;\n        font-size: 20px;\n        margin: 16px;\n        padding: 12px;\n      }\n    </style>\n  </head>\n  <body>\n    <p class=\"sign\">Sale Ends Sunday!</p>\n\n    <!-- Challenge: change the background color, font-family, and font-size\n         until this sign feels like it belongs in a fun mall storefront -->\n  </body>\n</html>" } },
      { heading: "The Box Model", videoSrc: "assets/video/placeholder-the-box-model.mp4", body: "Every single HTML element is secretly a rectangular box made of four layers, from the inside out: content (the actual text or image), padding (space around the content, inside the box), border (the box's edge), and margin (space outside the box, pushing away from other elements).\n\nRelatable way to think about it: think of a picture in a frame on a wall. The photo is the content, the mat around the photo is the padding, the actual frame is the border, and the empty wall space around the frame so it doesn't touch other pictures is the margin.\n\nThe box model is arguably the single most important CSS concept to truly understand \u2014 almost every layout bug (\"why is there a weird gap\" or \"why is this overlapping\") comes down to misunderstanding padding, border, or margin.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      .product {\n        width: 150px;\n        padding: 10px;      /* space inside the border, around the content */\n        border: 4px solid navy;\n        margin: 20px;        /* space outside the border, pushing other boxes away */\n        background: lightyellow;\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"product\">Backpack & $24.99</div>\n    <!-- Try changing padding, border, and margin one at a time to see each layer -->\n  </body>\n</html>" } },
      { heading: "Mini Challenge: Restyle a Card", videoSrc: "assets/video/placeholder-mini-challenge-restyle-a-card.mp4", body: "Change the color, font, and spacing of a sample card for an online store item (with starter code for a fake site provided).", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      body { font-family: sans-serif; background: #fdeed0; }\n      .card {\n        max-width: 260px;\n        margin: 24px auto;\n        padding: 16px;\n        background: white;\n        border-radius: 12px;\n        box-shadow: 0 4px 14px rgba(0,0,0,0.15);\n        text-align: center;\n      }\n      .card h3 { color: #ff5a3d; margin: 8px 0 4px; }\n      .card p { color: #5b5f78; font-size: 14px; }\n    </style>\n  </head>\n  <body>\n    <div class=\"card\">\n      <h3>Jordan Rivera</h3>\n      <p>Skate Park Regular</p>\n    </div>\n  </body>\n</html>" } },
      { heading: "Layout & Grids", videoSrc: "assets/video/placeholder-css-the-outfit.mp4", body: "Once you understand boxes, layout is about arranging those boxes on the page. Modern CSS mainly uses Flexbox (`display: flex`) for arranging things in a row or column, and CSS Grid (`display: grid`) for full two-dimensional layouts \u2014 rows and columns at once, like a gallery or a dashboard.\n\nRelatable way to think about it: Flexbox is like lining people up for a class photo \u2014 one row, evenly spaced, easy to adjust. Grid is like a bento box \u2014 everything has its own designated compartment, in rows and columns, planned out in advance.\n\nThis is the final boss of core CSS skills. It's where you go from styling individual elements to actually designing a page's structure, and it directly connects to design thinking you'd use in Figma, Canva, or even laying out a physical maker space.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      .shelf {\n        display: flex;\n        gap: 12px;\n      }\n      .item {\n        background: #eee;\n        border-radius: 8px;\n        padding: 16px;\n        flex: 1;\n        text-align: center;\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"shelf\">\n      <div class=\"item\">Shoes</div>\n      <div class=\"item\">Hats</div>\n      <div class=\"item\">Bags</div>\n    </div>\n    <!-- Try changing display: flex to display: block above to see the difference -->\n  </body>\n</html>" } },
      { heading: "Activity: Arrange the Store Shelf", videoSrc: "assets/video/placeholder-css-the-outfit.mp4", body: "A hands-on activity where you rearrange a few cards or sections into rows and columns using layout properties, and see how small CSS changes reshape the page.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      .shelf {\n        display: block; /* Challenge: change this to flex or grid */\n      }\n      .item {\n        background: #d6eaff;\n        border-radius: 8px;\n        padding: 16px;\n        margin: 6px;\n        display: inline-block;\n        width: 100px;\n        text-align: center;\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"shelf\">\n      <div class=\"item\">Sneakers</div>\n      <div class=\"item\">Jackets</div>\n      <div class=\"item\">Watches</div>\n      <div class=\"item\">Sunglasses</div>\n    </div>\n\n    <!-- Challenge: use display: flex or display: grid on .shelf, and gap,\n         to arrange these four items into a neat row or grid -->\n  </body>\n</html>" } },
      {
        heading: "Responsive Design",
        videoSrc: "assets/video/placeholder-responsive-design.mp4",
        body: "Responsive design means your website automatically adjusts its layout depending on the screen size it's viewed on \u2014 phone, tablet, laptop, giant classroom monitor \u2014 instead of looking perfect on one screen and broken on every other. It relies on media queries, flexible units (%, vw, rem instead of fixed pixels), and layouts like Flexbox and Grid that naturally reflow.\n\n@media (max-width: 600px) {\n  .card {\n    width: 100%;\n  }\n}\n\nRelatable way to think about it: think about how Instagram or YouTube look totally different \u2014 but still work great \u2014 on your phone versus on a computer. That's not an accident; someone coded specific rules for each screen size.\n\nAlmost every real website has to be responsive today since most traffic is mobile, so this isn't an \"advanced extra.\" It's considered a baseline professional skill once you've got the fundamentals down, and it's the concept that turns a \"school project website\" into something that actually feels production-ready.",
  responsiveBreakpoints: {
    siteUrl: "solezone.example",
    instructions: "Same mall storefront, three screen widths. Switch tabs to see exactly which CSS rule kicks in at each breakpoint, and how that changes the rendered page.",
    breakpointNote: "A breakpoint is the screen width where a design switches to a new layout. This mall storefront has two: one where it switches to a tablet-sized layout, and one where it switches to a phone-sized layout.",
    modes: [
      {
        label: "Desktop",
        frameVariant: "desktop",
        previewHtml: "<div class=\"ms-site\"><div class=\"ms-header\"><p class=\"ms-logo\">SoleZone ðŸ‘Ÿ</p><nav class=\"ms-nav\"><a>Shop</a><a>Sale</a><a>Locations</a></nav></div><div class=\"ms-hero\"><div class=\"ms-hero-text\"><h2>Weekend Sneaker Sale</h2><p>Save up to 30% on select styles, this weekend only.</p><button>Shop the Sale</button></div><div class=\"ms-hero-art\">ðŸ‘Ÿ</div></div><div class=\"ms-shelf\"><div class=\"ms-item\"><h3>Classic Runners</h3><p>$59</p></div><div class=\"ms-item\"><h3>Retro High-Tops</h3><p>$72</p></div><div class=\"ms-item\"><h3>Canvas Slip-Ons</h3><p>$45</p></div></div></div>",
        caption: "At full width, the nav sits beside the logo, the sale banner sits beside the sneaker icon, and all three product cards line up in a row. None of the media queries in style.css have kicked in yet.",
        files: [
          {
            filename: "style.css",
            lines: [
              ".ms-header { display: flex; justify-content: space-between; }",
              ".ms-nav { display: flex; gap: 18px; }",
              ".ms-hero { display: flex; gap: 24px; }",
              ".ms-shelf { display: flex; gap: 12px; }",
              "",
              "@media (max-width: 900px) {",
              "  .ms-hero { flex-direction: column; text-align: center; }",
              "}",
              "",
              "@media (max-width: 600px) {",
              "  .ms-header { flex-direction: column; }",
              "  .ms-nav { flex-direction: column; }",
              "  .ms-shelf { flex-direction: column; }",
              "}"
            ],
            highlight: [0, 1, 2, 3]
          }
        ]
      },
      {
        label: "Tablet",
        frameVariant: "tablet",
        previewHtml: "<div class=\"ms-site\"><div class=\"ms-header\"><p class=\"ms-logo\">SoleZone ðŸ‘Ÿ</p><nav class=\"ms-nav\"><a>Shop</a><a>Sale</a><a>Locations</a></nav></div><div class=\"ms-hero ms-hero--stack\"><div class=\"ms-hero-text ms-text-sm\"><h2>Weekend Sneaker Sale</h2><p>Save up to 30% on select styles, this weekend only.</p><button>Shop the Sale</button></div><div class=\"ms-hero-art\">ðŸ‘Ÿ</div></div><div class=\"ms-shelf\"><div class=\"ms-item\"><h3>Classic Runners</h3><p>$59</p></div><div class=\"ms-item\"><h3>Retro High-Tops</h3><p>$72</p></div><div class=\"ms-item\"><h3>Canvas Slip-Ons</h3><p>$45</p></div></div></div>",
        caption: "At 900px or narrower, the @media (max-width: 900px) block kicks in: the hero switches from a row to a stacked column, with the text centered above the icon. The nav and shelf are still wide enough to stay in a row.",
        files: [
          {
            filename: "style.css",
            lines: [
              ".ms-header { display: flex; justify-content: space-between; }",
              ".ms-nav { display: flex; gap: 18px; }",
              ".ms-hero { display: flex; gap: 24px; }",
              ".ms-shelf { display: flex; gap: 12px; }",
              "",
              "@media (max-width: 900px) {",
              "  .ms-hero { flex-direction: column; text-align: center; }",
              "}",
              "",
              "@media (max-width: 600px) {",
              "  .ms-header { flex-direction: column; }",
              "  .ms-nav { flex-direction: column; }",
              "  .ms-shelf { flex-direction: column; }",
              "}"
            ],
            highlight: [5, 6, 7]
          }
        ]
      },
      {
        label: "Mobile",
        frameVariant: "mobile",
        previewHtml: "<div class=\"ms-site\"><div class=\"ms-header ms-header--stack\"><p class=\"ms-logo\">SoleZone ðŸ‘Ÿ</p><nav class=\"ms-nav ms-nav--stack\"><a>Shop</a><a>Sale</a><a>Locations</a></nav></div><div class=\"ms-hero ms-hero--stack\"><div class=\"ms-hero-text ms-text-sm\"><h2>Weekend Sneaker Sale</h2><p>Save up to 30% on select styles, this weekend only.</p><button>Shop the Sale</button></div><div class=\"ms-hero-art\">ðŸ‘Ÿ</div></div><div class=\"ms-shelf ms-shelf--stack\"><div class=\"ms-item\"><h3>Classic Runners</h3><p>$59</p></div><div class=\"ms-item\"><h3>Retro High-Tops</h3><p>$72</p></div><div class=\"ms-item\"><h3>Canvas Slip-Ons</h3><p>$45</p></div></div></div>",
        caption: "At 600px or narrower, the @media (max-width: 600px) block also kicks in: the header stacks, the nav becomes a vertical list, and the shelf drops to a single column, on top of the hero rule already active from the tablet breakpoint.",
        files: [
          {
            filename: "style.css",
            lines: [
              ".ms-header { display: flex; justify-content: space-between; }",
              ".ms-nav { display: flex; gap: 18px; }",
              ".ms-hero { display: flex; gap: 24px; }",
              ".ms-shelf { display: flex; gap: 12px; }",
              "",
              "@media (max-width: 900px) {",
              "  .ms-hero { flex-direction: column; text-align: center; }",
              "}",
              "",
              "@media (max-width: 600px) {",
              "  .ms-header { flex-direction: column; }",
              "  .ms-nav { flex-direction: column; }",
              "  .ms-shelf { flex-direction: column; }",
              "}"
            ],
            highlight: [9, 10, 11, 12, 13]
          }
        ]
      }
    ]
  }
},
      { heading: "Structural Selectors", videoSrc: "assets/video/placeholder-tags-elements.mp4", body: "Structural selectors target elements based on their position or relationship in the HTML, without needing a class or ID at all. Common ones are `:first-child`, `:last-child`, `:nth-child(2)`, and `li:nth-child(odd)`.\n\nRelatable way to think about it: it's like giving instructions by seating position instead of by name \u2014 \"the first person in line,\" \"every other seat in the row,\" \"the last row of desks.\"\n\nThis is super useful for things like striping table rows or highlighting every 3rd card in a gallery without manually adding a class to each one.\n\nIt's also a mental shift toward thinking about patterns and structure in your code, which is a skill that shows up again in Python when you work with lists and indexes (position 0, every other item, the last item, and so on)." },      
      { heading: "Attribute Selectors", videoSrc: "assets/video/placeholder-tags-elements.mp4", body: "Attribute selectors target elements based on an HTML attribute and its value, without needing a class or ID \u2014 like `input[type=\"text\"]` for only text inputs, or `a[href^=\"https\"]` for only links starting with https.\n\nRelatable way to think about it: it's like sorting a pile of forms by looking at a specific field \u2014 \"grab every form where the box marked 'grade level' says 9th grade\" \u2014 instead of needing someone to pre-label each form with a sticky note (a class).\n\nThis is a more surgical, precise tool than class or ID selectors, and it's especially handy on forms and links, which come up constantly in real projects like sign-up pages or portfolio sites." },        
      { heading: "Pseudo Classes", videoSrc: "assets/video/placeholder-tags-elements.mp4", body: "Pseudo-classes select elements based on a state or condition they're currently in \u2014 not something written in the HTML, but something happening in the moment. Common ones are `:hover` (the mouse is over it), `:focus` (an input is selected or active), `:visited` (a link already clicked), and `:disabled` (a button that's inactive).\n\nRelatable way to think about it: think about how a button on an app looks slightly different the second your finger touches it, or how a text field glows when you tap into it. That's `:hover` and `:focus` in action.\n\nPseudo-classes are what make a site feel alive and responsive to the user instead of static. It's a small but huge upgrade in perceived quality, and it's usually the moment students realize \"oh, THIS is how professional sites get that polished, interactive feel.\"" },      
      { heading: "Recap", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "A quick look back at what youâ€™ve built and the CSS ideas you used, so you can see your progress from blank page to styled mini project." },
      { heading: "What's Next?", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
]
  },
// Replacement for the lesson-5, lesson-6, and lesson-7 objects in content.js
// Paste each block in place of its matching lesson object (same id) in the top-level array.

  {
    id: "lesson-5",
    title: "What is JavaScript?",
    theme: "Arcade",
    cards: [
      { heading: "What You'll Learn", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Icebreaker", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "Think of a time you clicked, tapped, or typed something and the screen responded instantly. What do you think was happening behind the scenes to make that reaction so fast?" },
      { heading: "Helpful Terms to Know", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "Key words for this unit: syntax (the grammar rules of code), variable (a labeled container for a value), function (a reusable set of instructions), and event (something that happens, like a click)." },
      { heading: "What is Javascript?", videoSrc: "assets/video/placeholder-js-the-controller.mp4", body: "JavaScript makes a page interactive and it responds to clicks, typing, and time." },
      { heading: "JS = The Cook", videoSrc: "assets/video/placeholder-js-the-controller.mp4", body: "If HTML is the recipe card (the ingredients and structure) and CSS is the plating and presentation (how it all looks on the table), JavaScript is the cook \u2014 the one who actually does things: reacts when an order comes in, chops something, changes the temperature, plates a new dish when a customer asks. HTML and CSS are static. They just sit there looking a certain way until JavaScript comes in and makes things happen.\n\nWhy it matters: without JS, a webpage is basically a poster \u2014 nice to look at, but it can't respond to you. JS is what makes buttons actually do something when clicked, forms check that they have complete information before submitting, games run, and content update without reloading the page.\n\nIn your skill progression, this is the leap from \"building a page\" to \"building an app\" \u2014 and since JS shares a lot of core logic (variables, functions, loops, conditionals) with Python, everything you learn here transfers almost directly.",
        matchActivity: {
          previewType: "syntax",
          instructions: "Tap a code piece below, then tap the role it plays in the line \"let total = 5;\"",
          chunks: [
            { id: "kw", text: "let", correctKey: "keyword" },
            { id: "name", text: "total", correctKey: "variable" },
            { id: "op", text: "=", correctKey: "operator" },
            { id: "val", text: "5", correctKey: "value" },
            { id: "end", text: ";", correctKey: "terminator" },
          ],
          options: [
            { key: "keyword", label: "Keyword (reserved word)", shortLabel: "Keyword", previewColor: "#2a6df5" },
            { key: "variable", label: "Variable Name", previewColor: "#0f9d58" },
            { key: "operator", label: "Operator", previewColor: "#e0433d" },
            { key: "value", label: "Value", previewColor: "#caa000" },
            { key: "terminator", label: "Statement End", previewColor: "#8b5cf6" },
          ],
          hints: {
            keyword: "This word (let, const, var) tells JavaScript you're about to create a variable.",
            variable: "This is the name you chose to label your stored value.",
            operator: "This symbol does an action, like assigning or comparing a value.",
            value: "This is the actual piece of data being stored, like a number or word.",
            terminator: "JavaScript statements end with this punctuation mark.",
          },
          successMessage: "\ud83c\udf89 You've read the whole line \u2014 keyword, name, operator, value, and terminator, all correct!",
          retryMessage: "Not quite \u2014 look at each piece's job in the line again and try another match.",
        },
      },
      {
  heading: "Syntax: How the Cook Writes Instructions",
  videoSrc: "assets/video/placeholder-js-the-controller.mp4",
  body: "JS syntax is the grammar rules for writing those instructions clearly enough that the browser (a very literal-minded sous-chef) can follow them exactly.\n\n- Statements \u2014 typically end in a semicolon `;`\n- Blocks \u2014 groups of related instructions go inside curly braces `{ }`\n- Calls \u2014 function calls use parentheses `()` to pass in information\n\nRelatable way to think about it: it's like writing a recipe step-by-step instead of rambling \u2014 \"1. Preheat oven. 2. Mix ingredients.\" Each step is separate and precise.\n\nMiss a comma or a bracket and the cook (the browser) gets confused and stops, which is exactly why reading error messages carefully becomes such a critical debugging skill \u2014 one that carries straight into Python, where the same kind of precision is required.",
  syntaxAnnotate: {
    language: "JavaScript",
    filename: "cook.js",
    lines: [
      [
        { text: "let", type: "keyword", order: 1, tip: "A keyword that tells JavaScript you're creating a new variable & one whose value is allowed to change later." },
        { text: "cook", type: "variable", order: 2, tip: "The name you're choosing to label this piece of data, so you can reuse it later in your code." },
        { text: "=", type: "operator", order: 3, tip: "The equals sign here means \"store the value on the right into the name on the left\" & it's an assignment, not a math equals sign." },
        { text: "'Chef Byte'", type: "string", order: 4, tip: "Quotation marks tell JavaScript this is literal text (a string), not a variable name or a command." },
        { text: ";", type: "punct", order: 5, tip: "Every JavaScript statement ends with a semicolon & it tells the computer \"this instruction is complete, move to the next one.\"" },
      ],
      [
        { text: "console.log", type: "keyword", order: 6, tip: "A built-in command that tells JavaScript \"print whatever I hand you next.\" (console is where JavaScript's messages get displayed.)" },
        { text: "(", type: "punct", order: 7, tip: "Opens the list of inputs you're handing to console.log. Every ( needs a matching ) & JavaScript keeps track of the pair.", pairId: "parens1" },
        { text: "cook", type: "variable", order: 8, tip: "Reusing the name from line 1 hands JavaScript the value stored there instead of retyping it.", output: "Chef Byte" },
        { text: "+", type: "operator", order: 9, tip: "Between two strings, + doesn't add numbers & it means \"join these pieces of text together.\"" },
        { text: "' is ready to cook!'", type: "string", order: 10, tip: "This literal text appears in the output exactly as written, including the leading space.", output: " is ready to cook!" },
        { text: ")", type: "punct", order: 11, tip: "Closes the input list. Forget this closing parenthesis and JavaScript raises a SyntaxError before your code even runs.", pairId: "parens1" },
        { text: ";", type: "punct", order: 12, tip: "Ends this statement too & every complete instruction needs one, even the last line in a block." },
      ],
    ],
    outputText: "Chef Byte is ready to cook!",
    ideCaption: "Same idea, real tool & here's that code (wired up to update the page instead of a console) in a live editor. Click Run to actually execute it.",
  },
  playground: {
    lang: "web",
    code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"output\">Waiting for the cook...</p>\n    <script>\n      // Every statement ends with a semicolon, and code blocks live inside { }\n      let cook = 'Chef Byte';\n      document.getElementById('output').textContent = cook + ' is ready to cook!';\n\n      // Try changing 'Chef Byte' above, then click Run again\n    </script>\n  </body>\n</html>",
  },
},
      { heading: "Simple Statements", videoSrc: "assets/video/placeholder-variables-values.mp4", body: "A statement is one single, complete instruction \u2014 like `let orders = 5;` or `console.log(\"Order ready!\");`. Each one tells the computer to do something or set something, and then the program moves to the next line.\n\nRelatable way to think about it: each statement is one line on an order ticket in the kitchen \u2014 \"table 4, one burger.\" Simple, specific, done.\n\nGetting comfortable reading and writing individual statements before combining them into bigger logic is like learning to write a clear sentence before writing a whole paragraph.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"output\"></p>\n    <script>\n      let order = 'Table 5 order: ';\n      order = order + '1 taco, ';\n      order = order + '1 soda.';\n      document.getElementById('output').textContent = order;\n    </script>\n  </body>\n</html>" } },
      { heading: "Expressions Inside Those Statements", videoSrc: "assets/video/placeholder-variables-values.mp4", body: "An expression is the \"ingredient\" part that produces a value \u2014 like `5`, `orders + 1`, or `\"Order ready!\"`. You can plug expressions into statements:\n\n// the whole line below is a statement\nlet orders = 5;\n// orders + 1 is an expression\nlet nextOrder = orders + 1;\n// joining strings is an expression too\nconsole.log(\"Order \" + nextOrder);\n\nBack to the kitchen: the statement is the full line on the ticket, and the expressions are the bits that say what to cook (\"one burger\", \"two tacos\"). The ticket line is the instruction; the food words on it are the values the cooks actually use.\n\nGetting comfortable reading and writing individual statements before combining them into bigger logic is exactly like learning to write a clear sentence before writing a whole paragraph. It's the foundation everything else builds on.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"output\"></p>\n    <script>\n      // Each line below is a STATEMENT.\n      // The bold parts doing the math are EXPRESSIONS.\n      let orders = 5;                     // 5 is an expression\n      let nextOrder = orders + 1;         // orders + 1 is an expression\n      let ticket = \"Order \" + nextOrder;  // joining strings is an expression\n      document.getElementById(\"output\").textContent = ticket;\n    </script>\n  </body>\n</html>" } },
      { heading: "Variables: What the Cook Keeps Track Of", videoSrc: "assets/video/placeholder-variables-values.mp4", body: "Variables are named containers that store information the cook needs to remember \u2014 a name, a number, a list, anything. You create them with statements like:\n\n- `let` \u2014 the value can change later\n- `const` \u2014 the value can't be reassigned\n- `var` \u2014 the older form, mostly avoided now\n\nlet orderCount = 3;\n\nRelatable way to think about it: it's like labeled containers in the kitchen \u2014 a jar labeled \"salt,\" a container labeled \"today's orders.\" The cook doesn't need to remember everything in their head; they just check the labeled container.\n\nThis exact concept (naming and storing information to reuse later) is identical in Python, so mastering variables here means you're basically already halfway to understanding Python variables too.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"output\"></p>\n    <script>\n      let tacosLeft = 12;\n      const specialOfTheDay = 'Carnitas Taco';\n      tacosLeft = tacosLeft - 3; // 3 tacos just sold\n      document.getElementById('output').textContent =\n        specialOfTheDay + ' & tacos left: ' + tacosLeft;\n    </script>\n  </body>\n</html>" } },
      { heading: "Functions: what the cook can do (define + call)", videoSrc: "assets/video/placeholder-functions.mp4", body: "A function is a reusable set of instructions \u2014 a \"move\" the cook knows how to do on demand. You define it once (write out the steps), then call it (tell the cook \"do that now\") as many times as you want, optionally handing it information (parameters) it needs to do the job.\n\nfunction makeSandwich(bread) {\n  return bread + \" with turkey\";\n}\nmakeSandwich(\"wheat\");   // calling it\n\nRelatable way to think about it: defining a function is like teaching the cook a recipe once (\"here's how you make a sandwich\"). Calling the function is yelling \"make me a sandwich!\" anytime you need one, without re-explaining the whole recipe each time.\n\nThis is one of the biggest \"unlocks\" in coding. Once you get comfortable defining and calling functions, you stop repeating yourself and start building real, organized programs \u2014 in JS or Python alike.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"output\"></p>\n    <script>\n      function makeTaco(filling) {\n        return filling + ' taco, coming right up!';\n      }\n\n      document.getElementById('output').textContent = makeTaco('Carnitas');\n      // Try calling makeTaco() again below with a different filling\n    </script>\n  </body>\n</html>" } },
      { heading: "Events: when something happens on the page", videoSrc: "assets/video/placeholder-events.mp4", body: "An event is anything that happens on a webpage that JS can react to \u2014 a click, a key press, a form submission, the page finishing loading, even a mouse hovering over something. Events are the trigger; JS decides what happens in response.\n\nRelatable way to think about it: it's the kitchen bell ringing when an order comes in, or a customer waving to get the cook's attention. The cook doesn't act randomly \u2014 they're constantly listening for specific signals and responding to them.\n\nUnderstanding events is the mental shift from \"code that just runs top to bottom once\" to \"code that waits and reacts,\" which is how basically every real app, game, or interactive tool actually works.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <button id=\"bellBtn\">Ring the Order Bell</button>\n    <p id=\"output\">Waiting for an order...</p>\n    <script>\n      const bell = document.getElementById('bellBtn');\n      bell.addEventListener('click', function () {\n        document.getElementById('output').textContent = 'Order up!';\n      });\n    </script>\n  </body>\n</html>" } },
      { heading: "The DOM: What is Javascript Talking To", videoSrc: "assets/video/placeholder-events.mp4", body: "The DOM (Document Object Model) is the browser's live, structured version of your HTML \u2014 basically the whole kitchen and everything in it (counters, ingredients, plates), represented as something JS can actually see, grab, and change. When JS updates the page (changing text, adding an image, hiding a button) it's reaching into the DOM and rearranging it.\n\nRelatable way to think about it: your HTML file is the recipe card; the DOM is the actual kitchen set up in real life, with everything in its place, that the cook can walk around and touch. JS never edits your original HTML file \u2014 it edits this live version in the browser.\n\nThis distinction (the code you wrote vs. what's actually rendered and changeable) is a genuinely important \"aha\" moment, and it's the concept that unlocks everything from simple UI updates to full interactive apps.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <h1 id=\"menuTitle\">Today's Menu</h1>\n    <script>\n      const title = document.getElementById('menuTitle');\n      title.style.color = 'tomato';\n      title.textContent = \"Today's Menu, Fresh and Hot\";\n    </script>\n  </body>\n</html>" } },
      { heading: "Event listeners + How to Call a Function + Updating the DOM", videoSrc: "assets/video/placeholder-events.mp4", body: "An event listener is how you tell JS \"watch for this specific event on this specific element, and when it happens, run this function.\" Put together, the full loop looks like this:\n\nconst btn = document.getElementById(\"orderBtn\");\nconst label = document.getElementById(\"status\");\nbtn.addEventListener(\"click\", function () {\n  label.textContent = \"Order placed!\";\n});\n\nThat's: listen for a click on the button, run a function, change something in the DOM.\n\nRelatable way to think about it: this is the cook literally stationed by the order bell (the event listener), and the moment it rings (the event) they spring into action (calling the function) and physically update the dish on the counter (updating the DOM) so the customer sees the change.\n\nThis three-part pattern \u2014 listen, react, update \u2014 is the single most repeated pattern in interactive web development, so getting fluent with this combo is one of the highest-value things you can practice.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <button id=\"orderBtn\">Place Order</button>\n    <p id=\"output\">Orders placed: 0</p>\n    <script>\n      let orders = 0;\n\n      function updateOrders() {\n        orders = orders + 1;\n        document.getElementById('output').textContent = 'Orders placed: ' + orders;\n      }\n\n      document.getElementById('orderBtn').addEventListener('click', updateOrders);\n    </script>\n  </body>\n</html>" } },
      { heading: "What Happens behind the scenes", videoSrc: "assets/video/placeholder-events.mp4", body: "When a page loads, the browser reads your HTML top to bottom and builds the DOM, reads your CSS and applies styles, then runs your JavaScript \u2014 which can now reach into that already-built DOM and start listening for events. JS itself runs one instruction at a time in order (the \"call stack\"), but it can also wait for things like a click or a timer without freezing the whole page, which is called asynchronous behavior.\n\nRelatable way to think about it: it's like the kitchen being fully set up and stocked (HTML and CSS loaded) before the cook (JS) even clocks in and starts working the line, taking orders as they come rather than needing every ticket lined up in advance.\n\nYou don't need to master every detail of this immediately, but having a rough mental model of \"structure loads first, then styling, then behavior\" helps a ton when your page isn't behaving the way you expect. A lot of beginner bugs come from JS trying to grab something in the DOM before it exists yet.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <button id=\"goBtn\">Click Me</button>\n    <ol id=\"steps\"></ol>\n    <script>\n      const steps = document.getElementById('steps');\n\n      function logStep(text) {\n        const item = document.createElement('li');\n        item.textContent = text;\n        steps.appendChild(item);\n      }\n\n      document.getElementById('goBtn').addEventListener('click', function () {\n        logStep('1. Browser detects the click (the event)');\n        logStep('2. The listener catches it');\n        logStep('3. Your function runs');\n        logStep('4. The DOM updates on screen');\n      });\n    </script>\n  </body>\n</html>" } },
      { heading: "Activity: Order Counter", videoSrc: "assets/video/placeholder-events.mp4", body: "Build a live order counter: every click on 'New Order' should add one to the total and update the page instantly.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <button id=\"newOrderBtn\">New Order</button>\n    <p id=\"orderCount\">Total orders: 0</p>\n    <script>\n      let totalOrders = 0;\n\n      document.getElementById('newOrderBtn').addEventListener('click', function () {\n        totalOrders++;\n        document.getElementById('orderCount').textContent = 'Total orders: ' + totalOrders;\n      });\n\n      // Challenge: add a second button that resets totalOrders back to 0\n    </script>\n  </body>\n</html>" } },
      { heading: "Core variables to practice", videoSrc: "assets/video/placeholder-events.mp4", body: "These are the basic data types you'll use constantly and should get comfortable naming and storing:\n\n- Strings \u2014 text, like \"Order #204\"\n- Numbers \u2014 like `orderCount = 12`\n- Booleans \u2014 true or false, like `isReady = false`\n- Arrays \u2014 ordered lists, like `let toppings = [\"cheese\", \"lettuce\"]`\n- Objects \u2014 grouped info with labeled properties, like `let order = { name: \"Taco\", price: 5 }`\n\nRelatable way to think about it: these are your basic pantry categories \u2014 a single ingredient (a string or number), a yes/no label on a container (a boolean), a list of items on a shelf (an array), or a whole labeled meal-prep box with multiple parts (an object).\n\nGetting fast and confident naming and using these five types is genuinely most of what \"knowing how to code\" feels like day-to-day, in JS or Python.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"output\"></p>\n    <script>\n      let orderNumber = 42;        // a number\n      let customerName = 'Riley';  // a string\n      let isPaid = true;           // a boolean\n\n      document.getElementById('output').textContent =\n        'Order #' + orderNumber + ' for ' + customerName + ' & paid: ' + isPaid;\n\n      // Try adding your own variable and displaying it too\n    </script>\n  </body>\n</html>" } },
      { heading: "Statements and patterns to bank", videoSrc: "assets/video/placeholder-events.mp4", body: "These are the reusable code \"moves\" worth memorizing because you'll use them constantly:\n\n- Conditionals \u2014 `if (orderReady) { ... } else { ... }` for making decisions\n- Loops \u2014 `for` or `while` for repeating an action, like going through every item in an order\n- Define and call \u2014 writing a reusable function, then using it\n- Event listener pattern \u2014 `element.addEventListener(\"event\", function () { ... })`\n- DOM update pattern \u2014 `document.getElementById(\"id\").textContent = \"new text\"`\n\nRelatable way to think about it: think of these as the cook's signature techniques they can pull out on autopilot \u2014 knife skills, plating moves, standard responses to common orders. You don't need to invent these from scratch each time; once you've practiced them enough to \"bank\" them, you can combine them like Lego pieces to build almost anything.\n\nThis is genuinely the payoff moment of learning JS \u2014 recognizing \"oh, this is just an event listener plus a DOM update\" makes even complex-looking projects feel approachable.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"output\"></p>\n    <script>\n      let score = 0;\n      score = score + 1;\n\n      let message = '';\n      if (score > 0) {\n        message = 'Score is now ' + score + ' & nice!';\n      } else {\n        message = 'No points yet.';\n      }\n\n      document.getElementById('output').textContent = message;\n    </script>\n  </body>\n</html>" } },
      { heading: "Decision-Making Statements: When the Cook Has to Choose", videoSrc: "assets/video/placeholder-functions.mp4", body: "`if`, `else if`, and `else` let your program choose different actions depending on a condition: \"if this is true, do this; otherwise, do that.\"\n\nif (ordersWaiting > 5) {\n  console.log(\"Call in backup!\");\n} else if (ordersWaiting > 0) {\n  console.log(\"Keep cooking.\");\n} else {\n  console.log(\"Kitchen's clear.\");\n}\n\nRelatable way to think about it: this is the cook checking conditions mid-shift and adjusting on the fly \u2014 \"if we've got more than five orders backed up, call in backup; if there's a few, keep going; if it's quiet, take a breather.\"\n\nEvery real program uses logic to make decisions constantly, so this is one of the most-used tools in the whole kitchen. You'll lean on it in almost everything you build from here forward, in JS or any other language.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"output\"></p>\n    <script>\n      // Change ordersWaiting to 7, then 2, then 0, and Run again.\n      let ordersWaiting = 7;\n      let message;\n\n      if (ordersWaiting > 5) {\n        message = \"Call in backup!\";\n      } else if (ordersWaiting > 0) {\n        message = \"Keep cooking.\";\n      } else {\n        message = \"Kitchen's clear.\";\n      }\n\n      document.getElementById(\"output\").textContent =\n        ordersWaiting + \" orders waiting: \" + message;\n    </script>\n  </body>\n</html>" } },
      { heading: "APIs: When the Cook Calls Out to Another Kitchen", videoSrc: "assets/video/placeholder-js-the-controller.mp4", body: "You've already met an API without the label \u2014 the DOM is one. An API (Application Programming Interface) is a defined way for your code to request information or action from something else: another program, another server, even another part of the browser itself. `fetch()` is the classic example. It lets your JS reach out to an external server and ask for data.\n\nfetch(\"https://api.example.com/joke\")\n  .then(response => response.json())\n  .then(data => console.log(data.joke));\n\nRelatable way to think about it: think about a cook radioing over to a neighboring restaurant's kitchen to borrow an ingredient \u2014 \"hey, can you send over a cup of sugar?\" \u2014 instead of making it from scratch. You don't need to know how their kitchen works internally, just how to ask correctly and what to expect back.\n\nYou've actually been using an API this whole time: the DOM is the browser's own built-in API, letting your cook (JS) talk to the \"kitchen\" (the page) it's working in. `fetch()` just extends that same idea to kitchens outside the building." },
      { heading: "Modules: Recipe Cards From Other Parts of the Kitchen", videoSrc: "assets/video/placeholder-functions.mp4", body: "A module is a separate JS file containing related code \u2014 variables, functions, whatever \u2014 that you can export from one file and import into another, instead of cramming everything into one giant script.\n\n// prep.js\nexport function chopVeggies() {\n  return \"veggies chopped\";\n}\n// main.js\nimport { chopVeggies } from \"./prep.js\";\nconsole.log(chopVeggies());\n\nRelatable way to think about it: it's like keeping recipe cards organized in separate binders by station \u2014 one binder for prep, one for sauces, one for plating \u2014 instead of one massive, disorganized cookbook.\n\nAs your projects grow past a single file, modules are how you keep things organized and reusable. It's the exact same idea as Python's import: same concept, just JS's version of \"grab this recipe card from that binder.\"" },
      { heading: "Libraries: The Cookbook Someone Else Already Wrote", videoSrc: "assets/video/placeholder-js-the-controller.mp4", body: "A library is a bundle of prewritten code that you borrow rather than build. Libraries solve common problems, built and tested by other developers, so you don't have to build everything from scratch. React, which you'll use later, is a JS library \u2014 it handles a lot of the repetitive work of updating the page for you.\n\nRelatable way to think about it: it's like using a trusted cookbook someone else wrote and perfected, instead of inventing every recipe yourself from raw ingredients.\n\nYou still need to understand the basics \u2014 how an oven works, what \"fold in gently\" means \u2014 to use the cookbook well. That's exactly why you learn plain JS fundamentals first, before reaching for a library like React." },
      { heading: "Mini Challenge: Click Counter", videoSrc: "assets/video/placeholder-mini-challenge-button-click-counter.mp4", body: "Build a button that counts how many times it's been clicked.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <button id=\"counterBtn\">Clicked 0 times</button>\n    <script>\n      var count = 0;\n      var btn = document.getElementById('counterBtn');\n      btn.addEventListener('click', function () {\n        count++;\n        btn.textContent = 'Clicked ' + count + ' times';\n      });\n    </script>\n  </body>\n</html>" } },
      { heading: "Recap", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "What's Next?", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
]
  },
  {
    id: "lesson-6",
    title: "What is Python?",
    theme: "Surf Break",
    cards: [
      { heading: "What You'll Learn", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Icebreaker", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "Name one app or website you use every day. Instagram, Spotify, and Netflix all run Python behind the scenes & what do you think it might be doing back there?" },
      { heading: "What is Python", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "Python is a beginner-friendly, general-purpose programming language known for being clean, readable, and shockingly close to plain English. Where some languages bury you in curly braces and semicolons, Python strips a lot of that clutter away so the code reads almost like a set of instructions a person could follow.\n\nRelatable way to think about it: Python is like the classic all-around surfboard \u2014 the one every surfer, from total beginner to pro, keeps in rotation because it works on nearly any wave. You can learn the basics on it fast, but it also scales up to handle serious, advanced stuff later (AI, data science, robotics).\n\nIn your coding progression, Python is where you shift from \"building things that live in a browser\" (HTML, CSS, JS) to \"building things that can run almost anywhere and do almost anything\" \u2014 a much bigger ocean to explore." },
      { heading: "Helpful Terms to Know", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "Key words for this unit: Python (the language itself), interpreter (the program that runs your Python code), print() (displays text on screen), and script (a saved file full of instructions)." },
      { heading: "How is Python Used?", videoSrc: "assets/video/placeholder-python-a-new-board.mp4", body: "Python shows up basically everywhere: automating boring repetitive tasks, powering AI and machine learning tools, running the backend of huge sites like Instagram and Spotify, scientific research and data analysis (NASA and researchers worldwide use it), game development, and even robotics \u2014 MicroPython runs on microcontrollers similar to Arduino.\n\nRelatable way to think about it: think of it like different boards for different waves. A small, mellow beach-break day is like using Python to automate a task (rename 100 files instantly). A big offshore swell is like using Python for AI or data science \u2014 same sport, way bigger wave, more skill required.\n\nThe point is: it's the same core language the whole time. You're just paddling into progressively bigger water as your skills grow." },
      { heading: "How Python Works in Practice", videoSrc: "assets/video/placeholder-python-a-new-board.mp4", body: "Python works like a restaurant. You start with a customer at the table = user with a browser (front end). They see the menu (web page) and click or type. They request (what the user wants: a page, data, or an action) as if it were an order slip. A waiter carryies the slip (network/API), just moving the request back and forth. The Kitchen is like the backend server where Python runs. This is where the actual work happens: checking the menu, combining ingredients, timing, validation, etc. This is where python can reference recipes (code) + keep track of what's kept on the pantry shelves (database information). Python follows recipe instructions (functions) and pulls ingredients (stored data). Then it sends a response as if it were a finished plate (HTML, JSON, or data) back to the customerâ€™s browser to display. So Python specifically is the kitchen logic: how the order is interpreted, what steps are taken, how ingredients/data are combined, and what result gets sent back." },
      { heading: "Why Learn Python At My Age?", videoSrc: "assets/video/placeholder-why-python.mp4", body: "Right now is honestly one of the best possible times to start. Python is the main language behind AI and machine learning, which means learning it now isn't just \"a school skill\" \u2014 it's direct access to understanding and building the technology reshaping everything around you. It's also genuinely one of the easiest languages to start with, so you're not fighting the language itself while you're still learning to think like a programmer.\n\nRelatable way to think about it: it's like learning to surf on a longboard in small, forgiving waves before anyone hands you a shortboard for a serious swell. You build real fundamentals without getting wiped out constantly, and those fundamentals transfer directly once you're ready for bigger challenges.\n\nEvery year you wait, the \"waves\" (AI tools, automation, data-driven everything) get bigger and more central to nearly every career. Starting young means you're already comfortable in the water by the time it really matters." },
      { heading: "Where Python Runs", videoSrc: "assets/video/placeholder-where-python-runs.mp4", body: "Python runs almost anywhere: your own laptop (Mac, Windows, Linux) once installed, cloud-based coding platforms in a browser tab like Replit or Google Colab with no install needed, servers that power websites, and even tiny microcontrollers via MicroPython.\n\nRelatable way to think about it: Python doesn't need one special beach \u2014 you can paddle out anywhere as long as you've got your board. Your laptop is your local home beach. A browser-based tool like Replit is like renting a board at a beach you're just visiting, no gear required. And something like a Raspberry Pi running Python is like a tiny travel board that still lets you catch small waves anywhere you go.\n\nThis flexibility is a big reason Python became so popular \u2014 you're never locked into one setup." },
 {
  heading: "Python Syntax: How the Pieces Fit Together",
  videoSrc: "assets/video/placeholder-python-syntax.mp4",
  body: "Python syntax is famous for one big, unusual rule: whitespace and indentation aren't just style, they're the actual structure of the code. Instead of curly braces marking where a block of code starts and ends (like JavaScript), Python uses consistent indentation to show what's \"inside\" what.\n\nif wave_height > 4:\n    print(\"Go surf!\")\nelse:\n    print(\"Stay on the beach\")\n\nRelatable way to think about it: think of syntax as your flow on a wave \u2014 where your weight sits, how your board is angled, the rhythm of your turns. If your positioning is even slightly off, you don't crash the whole ocean, but you do fall off the ride.\n\nSame with Python: mess up your indentation and the \"ride\" (your program) breaks or does something unexpected. It feels strict at first, but it's actually what makes Python code so readable once you're fluent \u2014 you can look at any script and immediately see its shape.",
  syntaxAnnotate: {
    filename: "trailhead.py",
    lines: [
      [
        { text: "checkpoint", type: "variable", order: 1, tip: "A variable & a name you're choosing to label a piece of data so you can reuse it later." },
        { text: "=", type: "operator", order: 2, tip: "The equals sign here means \"store the value on the right into the name on the left.\" It's an assignment, not a question." },
        { text: "\"Ridge Line\"", type: "string", order: 3, tip: "Quotation marks tell Python this is literal text (a string), not a command or another variable's name." },
      ],
      [
        { text: "print", type: "keyword", order: 4, tip: "A built-in keyword & it tells Python \"run the print tool and show whatever I hand you next.\"" },
        { text: "(", type: "punct", order: 5, tip: "Opens the list of inputs you're handing to print. Every ( needs a matching ) & Python keeps track of the pair.", pairId: "parens1" },
        { text: "\"Reached \"", type: "string", order: 6, tip: "This literal text appears in the output exactly as written, including the space before the closing quote.", output: "Reached " },
        { text: "+", type: "operator", order: 7, tip: "Between two strings, + doesn't add numbers & it means \"join these pieces of text together.\"" },
        { text: "checkpoint", type: "variable", order: 8, tip: "Reusing the name from line 1 hands Python the value stored there instead of retyping it.", output: "Ridge Line" },
        { text: ")", type: "punct", order: 9, tip: "Closes the input list. Forget this closing parenthesis and Python raises a SyntaxError before your code even runs.", pairId: "parens1" },
      ],
    ],
    outputText: "Reached Ridge Line",
  },
},
      {
        heading: "Activity: Match the Syntax Rule",
        videoSrc: "assets/video/placeholder-python-syntax.mp4",
        body: "Python skips semicolons and curly braces entirely. Instead, a colon (:) announces that an indented block is coming, and the indentation itself (the spaces at the start of a line) is what tells Python which lines belong inside that block. Tap each line below, then tap the rule it's demonstrating.",
        matchActivity: {
          previewType: "syntax",
          instructions: "Tap a line of Python below, then tap the syntax rule it's demonstrating.",
          chunks: [
            { id: "ifLine", text: "if elevation >= 5000:", correctKey: "colon" },
            { id: "printLine", text: "    print('You reached basecamp!')", correctKey: "indent" },
            { id: "doneLine", text: "print('Hike complete')", correctKey: "noSemicolon" },
          ],
          options: [
            { key: "colon", label: "Colon (:) & announces a new indented block is coming", shortLabel: "Colon", previewColor: "#2a6df5" },
            { key: "indent", label: "Indentation & spaces showing this line lives inside the block above", shortLabel: "Indentation", previewColor: "#0f9d58" },
            { key: "noSemicolon", label: "No semicolon needed & Python lines just end with a line break", shortLabel: "No semicolon", previewColor: "#caa000" },
          ],
          hints: {
            colon: "Look for the punctuation mark right before the line ends & it's Python's signal that an indented block follows.",
            indent: "Count the spaces before the code starts & that whitespace is what tells Python this line belongs inside something else.",
            noSemicolon: "This line isn't starting a block and doesn't need a colon, and Python never needs a semicolon at the end either.",
          },
          successMessage: "\ud83c\udf89 You've spotted Python's core syntax rules \u2014 colon, indentation, and no semicolons needed!",
          retryMessage: "Not quite \u2014 check whether each line starts a block, sits inside one, or stands alone, then try again.",
        },
      },
      {
        heading: "Activity: Match the Parts",
        videoSrc: "assets/video/placeholder-print-input.mp4",
        body: "Here's one line of Python: age = 13  Tap a piece of it below, then tap what that piece is doing. Notice Python doesn't need a keyword to declare a variable, and there's no semicolon at the end \u2014 that's different from JavaScript!",
        matchActivity: {
          previewType: "syntax",
          instructions: "Tap a code piece below, then tap the role it plays in the line \"age = 13\"",
          chunks: [
            { id: "name", text: "age", correctKey: "variable" },
            { id: "op", text: "=", correctKey: "operator" },
            { id: "val", text: "13", correctKey: "value" },
          ],
          options: [
            { key: "variable", label: "Variable Name", previewColor: "#0f9d58" },
            { key: "operator", label: "Operator", previewColor: "#e0433d" },
            { key: "value", label: "Value", previewColor: "#caa000" },
          ],
          hints: {
            variable: "This is the name you chose to label your stored value.",
            operator: "This symbol does an action, like assigning a value to a name.",
            value: "This is the actual piece of data being stored, like a number or word.",
          },
          successMessage: "\ud83c\udf89 All three pieces matched \u2014 variable, operator, and value!",
          retryMessage: "Not quite \u2014 look at each piece's job in the line again and try another match.",
        },
      },
      { heading: "Python Installation", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "To run Python on your own computer, you install the Python interpreter (free, from python.org) \u2014 the program that actually reads and executes your code. Alongside it comes `pip`, Python's package manager, which lets you install extra tools and libraries other people built, like grabbing new fins or a leash for your board. Most people then also install a code editor or IDE (like VS Code or Thonny) to actually write in comfortably.\n\nRelatable way to think about it: this is your gear-up before paddling out \u2014 waxing the board, checking the leash, grabbing the right wetsuit for the water temperature. Skip this step and you technically can't get in the water at all.\n\nThe good news: if you don't want to install anything yet, browser tools like Replit let you \"rent gear\" and start practicing immediately, no setup required \u2014 great for testing the waters (literally) before committing to your own full kit." },
      { heading: "The Terminal: Talking to Your Computer Directly", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "The terminal (also called the command line or shell) is a text-only way to give your computer instructions \u2014 navigating folders, running programs, installing tools \u2014 by typing commands instead of clicking through menus and icons. A few essentials:\n\n- `cd` \u2014 change which folder you're \"in\"\n- `ls` on Mac or Linux, `dir` on Windows \u2014 see what's in that folder\n- `python your_file.py` \u2014 actually run a script\n\nRelatable way to think about it: it's the difference between paddling out through a marked, lifeguarded harbor with signs everywhere versus paddling straight out into open water. No buttons, no menus, just you and the ocean responding directly to what you do.\n\nIt looks intimidating at first, a blank screen with a blinking cursor and zero visual hints, but once you know a handful of core moves you move faster and have more control than clicking around ever gave you.\n\nThis is also the tool you'll come back to constantly: every time you install a new library later in the course, like `pip install pandas`, you'll be back here typing the command yourself.", playground: { lang: "python", code: "# This is what lives inside a .py file.\n# In a real terminal you would type:  python surf_report.py\n\nspot = \"Ocean Beach\"\nwave_height = 6\n\nprint(\"Checking conditions at\", spot)\nprint(\"Wave height:\", wave_height, \"ft\")\n\nif wave_height > 4:\n    print(\"Go surf!\")\nelse:\n    print(\"Stay on the beach\")" } },   
      {
  heading: "Running a Script vs a REPL",
  videoSrc: "assets/video/placeholder-variables-types-data.mp4",
  body: "A script is a complete .py file with your full program written out, which you run all at once from top to bottom \u2014 like a whole planned run through a wave. A REPL (Read-Evaluate-Print Loop) is an interactive mode where you type one line of code at a time and immediately see the result, before moving to the next line.\n\nRelatable way to think about it: the REPL is like paddling out and testing small pop-ups and turns in the shallow water before committing to anything \u2014 quick, low-stakes, immediate feedback, perfect for practicing a single move or checking \"wait, will this work?\" A script is the real ride: you've planned your line, committed to the wave, and you're executing the whole thing start to finish.\n\nGood surfers (and good coders) use both constantly \u2014 the REPL to test ideas quickly, scripts to build the real, complete project.",
  replVsScript: {
    filename: "greet.py",
    prompt: ">>>",
    lines: [
      { code: "name = 'Explorer'" },
      { code: "print('Hello, ' + name + '!')", output: "Hello, Explorer!" },
      { code: "print('Scripts are great for saving and reusing your work.')", output: "Scripts are great for saving and reusing your work." },
    ],
  },
},      
      { heading: "Running Your First Program", videoSrc: "assets/video/placeholder-print-input.mp4", body: "print('Hello!') and input('What's your name? ') are your first two Python commands.", playground: { lang: "python", code: "print('Hello!')\nname = 'Explorer'\nprint('What is your name? (edit the name variable above and Run again)')\nprint('Nice to meet you, ' + name + '!')" } },
      { heading: "Recap", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "What's Next?", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
]
  },
  {
    id: "lesson-7",
    title: "What do you need before building Python projects?",
    theme: "Basecamp / Gear Shop",
    cards: [
      { heading: "How Are Python Fundamentals Sequenced?", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "You just got your passport stamped at Surf Break, Stop 6, What is Python? Nice catch. But the trail turns uphill from here: welcome to Basecamp / Gear Shop, Stop 7.\n\nBefore you can tackle real Python projects \u2014 building websites, automating tasks, working with data, even training AI \u2014 you need the right gear packed and ready. Everything below isn't just vocabulary, it's the equipment you'll be reaching for on every climb from here to the Summit. Get comfortable with this gear now, and every stop after this one gets easier.\n\nThe order of the trail: Python talks to the computer, then stores info, then uses rules to decide, then repeats, then organizes, and finally uses other people's tools." },
      { heading: "What You'll Learn", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Icebreaker", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "Think about a checklist or packing list you've used before a trip. Why does the order of steps matter? Python fundamentals work the same way and each piece builds on the one before it." },
      { heading: "Helpful Terms to Know", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "Key words for this unit: variable, data type, conditional, loop, function, and import. You'll meet each one in this section, then use all of them together in your first real projects." },
      { heading: "Print Statements", videoSrc: "assets/video/placeholder-print-input.mp4", body: "`print()` displays output to the screen \u2014 it's how your program \"talks back\" to you. Anything inside the parentheses gets shown, like `print(\"Gear check complete!\")`.\n\nRelatable way to think about it: print statements are your radio, the tool you use to check in and confirm status before heading further up the trail.\n\nIt's the simplest way to see what your code is actually doing, and it's your go-to debugging tool: when something's not working, sprinkling `print()` statements through your code is like radioing in at different checkpoints to pinpoint exactly where things went wrong. You'll use this piece of gear on literally every stop from here on.", playground: { lang: "python", code: "print('Hello!')\nname = 'Explorer'\nprint('What is your name? (edit the name variable above and Run again)')\nprint('Nice to meet you, ' + name + '!')" } },
      { heading: "Comments in Python", videoSrc: "assets/video/placeholder-print-input.mp4", body: "print('Hello!') and input('What's your name? ') are your first two Python commands.", playground: { lang: "python", code: "print('Hello!')\nname = 'Explorer'\nprint('What is your name? (edit the name variable above and Run again)')\nprint('Nice to meet you, ' + name + '!')" } },

      { heading: "Variables & Data Types", videoSrc: "assets/video/placeholder-variables-types-data.mp4", body: "Variables are named containers that store information your program needs to remember, like `elevation = 8500` or `climber_name = \"Leslie\"`. Core Python data types include strings (text), integers (whole numbers), floats (decimals), and booleans (True or False).\n\nRelatable way to think about it: variables are the labeled compartments in your pack \u2014 a pocket for rope, a pouch for snacks, a case for your GPS. Each item is a specific kind of thing, just like each variable holds a specific kind of data.\n\nThis is core gear: every future stop on the map, from Alpine Canopy to the Summit, assumes you can pack and label information this way.", playground: { lang: "python", code: "age = 13                  # int (whole number)\nheight = 5.2               # float (decimal number)\nname = 'Explorer'          # string (text)\nis_hiking = True           # boolean (True or False)\n\nprint(name, 'is', age, 'years old and', height, 'feet tall.')\nprint('Currently hiking:', is_hiking)" } },
      { heading: "Naming Conventions", videoSrc: "assets/video/placeholder-variables-types-data.mp4", body: "Python's naming convention is snake_case \u2014 lowercase words separated by underscores, like `climber_name` or `summit_elevation`, instead of vague names like `x` or `data1`.\n\nRelatable way to think about it: it's like labeling your gear clearly before a group expedition. \"Leslie's rope\" beats an unmarked coil that could belong to anyone.\n\nClear names make your pack (your code) easy for you or a teammate to search through fast, without digging around confused. Small habit, big payoff on longer climbs.", playground: { lang: "python", code: "# Good names: clear and describe what they hold\ntrail_miles = 8\nhiker_name = 'Alex'\n\n# Avoid names like these & they work, but they're confusing later on\nx = 8\nthing2 = 'Alex'\n\nprint(hiker_name, 'has', trail_miles, 'miles to go.')" } },
      { heading: "Input, Output & Operators", videoSrc: "assets/video/placeholder-variables-types-data.mp4", body: "Input is how a program receives info from the user, via `input()`. Output is what it displays back, usually via `print()`. Operators are the symbols doing the work: `+`, `-`, `*`, `/` for math, and `==`, `>`, `<` for comparisons.\n\nname = input(\"What's your climber name? \")\nprint(\"On belay, \" + name + \"!\")\n\nRelatable way to think about it: input is radioing basecamp to ask \"what's the weather report?\" before deciding your next move. Output is you radioing back with your response, reporting whatever your program produces after receiving that info. Operators are the actual calculations behind it \u2014 altimeter and compass math, like \"if elevation gain is over 2,000 feet, start earlier.\"\n\nThis input, process, output loop is the basic gear setup behind nearly every stop still ahead of you.", playground: { lang: "python", code: "trail_miles = 8\nmiles_hiked = 3\n\nprint('Miles left:', trail_miles - miles_hiked)\nprint('Total snacks needed:', trail_miles * 2)\n\nfirst_name = 'Alex'\nlast_name = 'Rivera'\nprint('Hiker: ' + first_name + ' ' + last_name)" } },
      { heading: "Mini Challenge: Say Hello", videoSrc: "assets/video/placeholder-mini-challenge-say-hello.mp4", body: "Write a script that asks for your name and prints a custom greeting back.", playground: { lang: "python", code: "name = 'Explorer'\n\ndef greet(who):\n    print('Hey there, ' + who + '! Welcome to the trail.')\n\ngreet(name)" } },

      { heading: "Type Casting", videoSrc: "assets/video/placeholder-print-input.mp4", body: "Type casting converts a value from one data type to another, like turning the text \"8500\" into an actual number 8500 with `int(\"8500\")`. This matters constantly with `input()`, since Python always captures typed input as text, even if it looks like a number.\n\nelevation = int(input(\"Starting elevation? \"))\n\nRelatable way to think about it: it's like translating a radioed trail report into usable trail-planning numbers. Someone calls \"we're at eight thousand five hundred feet,\" but you need that as an actual number to calculate remaining elevation gain.\n\nPack this tool now, because you'll need it constantly once you're working with real data later on the trail, like at Data Science or Computer Vision.", playground: { lang: "python", code: "print('Hello!')\nname = 'Explorer'\nprint('What is your name? (edit the name variable above and Run again)')\nprint('Nice to meet you, ' + name + '!')" } },
      { heading: "Print Formatting", videoSrc: "assets/video/placeholder-print-input.mp4", body: "Print formatting controls exactly how output looks, most easily with f-strings. The `f` before the quotes lets you drop variables directly into text using curly braces.\n\nclimber = \"Leslie\"\nelevation = 8500\nprint(f\"{climber} reached {elevation} feet\")\n\nRelatable way to think about it: it's like writing a clean, specific summit log instead of a jumbled one. \"Leslie reached 8,500 feet today\" reads far better than mashed-together text and numbers.\n\nThis is the polish gear \u2014 the difference between a report that's technically correct and one that actually communicates clearly, which matters more and more the bigger your projects get further up the trail.", playground: { lang: "python", code: "print('Hello!')\nname = 'Explorer'\nprint('What is your name? (edit the name variable above and Run again)')\nprint('Nice to meet you, ' + name + '!')" } },
      { heading: "Mini Challenge: TBD", videoSrc: "assets/video/placeholder-mini-challenge-say-hello.mp4", body: "Coming Soon.", playground: { lang: "python", code: "name = 'Explorer'\n\ndef greet(who):\n    print('Hey there, ' + who + '! Welcome to the trail.')\n\ngreet(name)" } },
     
      { heading: "Decision-Making Statements", videoSrc: "assets/video/placeholder-conditionals.mp4", body: "`if`, `elif`, and `else` let your program choose different paths depending on conditions: \"if this is true, do this; otherwise, do that.\" These are Python's decision points.\n\nif elevation > 10000:\n    print(\"Bring oxygen\")\nelif elevation > 5000:\n    print(\"Bring extra water\")\nelse:\n    print(\"Light pack is fine\")\n\nRelatable way to think about it: this is your route-decision gear \u2014 the moment on a climb where the trail splits and you have to check conditions before picking a direction. \"If it's raining, take the sheltered path. Otherwise, take the ridge line.\"\n\nEvery real program makes decisions constantly, so this is one of the most-used pieces of gear on the whole trail. You'll lean on it at nearly every stop ahead, from automating tasks to building AI.", playground: { lang: "python", code: "water_bottles = 1\n\nif water_bottles == 0:\n    print('Fill up before you go!')\nelif water_bottles < 2:\n    print('You might want one more bottle.')\nelse:\n    print(\"You're set on water.\")" } },
      { heading: "Loops", videoSrc: "assets/video/placeholder-loops.mp4", body: "Loops (`for` and `while`) let you repeat an action multiple times without rewriting the same code over and over. `for` loops repeat a set number of times or over a list of items, while `while` loops repeat as long as a condition stays true.\n\nfor step in range(10):\n    print(\"Climbing step\", step)\n\nRelatable way to think about it: loops are your switchback technique. Instead of describing every single step up a steep slope one at a time, you learn one repeating motion \u2014 plant your foot, push up, catch your breath \u2014 and just repeat that same three-part motion until you clear the section. The loop is the repeating cycle itself.\n\nLoops are how programs handle repetitive work efficiently, and they show up in almost every meaningful project further up the trail: processing lists of data, checking files, running simulations.", playground: { lang: "python", code: "checkpoints = ['trailhead', 'creek crossing', 'ridge line', 'summit']\n\nfor spot in checkpoints:\n    print('Next checkpoint:', spot)\n\n# A while loop repeats until a condition becomes false\nsteps_taken = 0\nwhile steps_taken < 3:\n    steps_taken += 1\n    print('Step', steps_taken)" } },
      { heading: "Functions", videoSrc: "assets/video/placeholder-functions-imports.mp4", body: "A function is a reusable block of instructions. You write it once (define it), then run it whenever you need it (call it), optionally handing it information (parameters) it needs to do the job. Functions are how climbers (and coders) build up a personal toolkit of reliable moves, and they're essential gear for organizing bigger projects without repeating yourself constantly.\n\nDefining a function just writes the instructions down \u2014 it doesn't run anything yet. Calling a function is what actually makes it run: you write the function's name followed by parentheses, and Python jumps into that block of code, executes it using whatever you passed in, and (if there's a return) hands a result back to you.\n\ndef check_gear(item):\n    return item + \" packed!\"\n# calling it makes Python run it now\nresult = check_gear(\"rope\")\nprint(result)   # rope packed!\n\nWalking through what happens when `check_gear(\"rope\")` runs:\n\n- Python jumps into the function definition\n- It sets `item` to \"rope\", the value you passed in\n- It runs the instruction inside: `return item + \" packed!\"`\n- It hands back the result, \"rope packed!\", to wherever you called it from\n\nRelatable way to think about it: defining a function is like learning a climbing technique once \u2014 a proper knot, a rappel setup \u2014 so you don't have to relearn it from scratch every time you need it. Calling the function is the moment you actually tie that knot on the mountain, right now, on this specific rope.\n\nJust like tying a knot produces a result you can check (is it secure?), calling a function usually produces a result you can use. That's why the example above stores it in `result` and prints it, instead of calling the function and never looking at what it gave back.", playground: { lang: "python", code: "import random\n\ndef pack_snack():\n    snacks = ['trail mix', 'granola bar', 'apple', 'jerky']\n    return random.choice(snacks)\n\nprint(\"Today's snack:\", pack_snack())\nprint(\"Today's snack:\", pack_snack())" } },
      { heading: "Mini Challenge: TBD", videoSrc: "assets/video/placeholder-mini-challenge-say-hello.mp4", body: "Coming Soon.", playground: { lang: "python", code: "name = 'Explorer'\n\ndef greet(who):\n    print('Hey there, ' + who + '! Welcome to the trail.')\n\ngreet(name)" } },
      { heading: "Lists & Dictionaries", videoSrc: "assets/video/placeholder-variables-types-data.mp4", body: "Lists store ordered collections of items, accessed by position, and are written with square brackets: `gear = [\"rope\", \"helmet\", \"harness\"]`. Dictionaries store labeled pairs of information, accessed by name instead of position, and are written with curly braces: `gear = {\"rope\": 30, \"helmet\": 1}` where the label is the item and the value is the quantity.\n\nRelatable way to think about it: a list is like your gear coiled in your pack in a specific order \u2014 first thing in, first thing out, and you can always ask \"what's item #2?\" A dictionary is like a labeled first-aid kit with named compartments. You don't ask for \"compartment #2,\" you ask for \"bandages\" and grab exactly that slot.\n\nBoth are essential organizing gear: lists for anything ordered or sequential, dictionaries for anything you want to look up by name. You'll use both nonstop in every stop still ahead, especially Data Science and LLMs.", playground: { lang: "python", code: "packing_list = ['tent', 'water filter', 'headlamp', 'map']\n\nfor item in packing_list:\n    print('Packing:', item)\n\ngear_status = {'tent': 'packed', 'water filter': 'packed', 'headlamp': 'still charging'}\nprint('Headlamp status:', gear_status['headlamp'])" } },
      { heading: "Tuples", videoSrc: "assets/video/placeholder-lists-dictionaries.mp4", body: "A tuple is an ordered collection just like a list, written with parentheses instead of square brackets \u2014 but once you create it, it's locked. You can look at what's inside, but you can't add, remove, or change any of it.\n\nsummit_coords = (37.8651, -119.5383)\nphoto_size = (1920, 1080)\n\nRelatable way to think about it: a list is your pack \u2014 you can rearrange it, swap gear in and out mid-climb. A tuple is more like a factory-sealed emergency kit: fixed contents, no rearranging, no risk of someone accidentally grabbing something out or shoving something extra in.\n\nThat's exactly the point. Some information shouldn't be editable, like GPS coordinates, a photo's width and height, or the fixed number of days on your permit.\n\nOnce you're further up the trail, tuples show up constantly and quietly: image dimensions in Computer Vision, coordinate pairs, and functions that hand back more than one value at once. Packing this gear now means it won't catch you off guard later.", playground: { lang: "python", code: "summit_coords = (37.8651, -119.5383)\nphoto_size = (1920, 1080)\n\nprint(\"Summit is at\", summit_coords)\nprint(\"Photo is\", photo_size[0], \"x\", photo_size[1])\n\n# A tuple is locked. Uncomment the next line to see Python refuse:\n# photo_size[0] = 3840\n\n# A list, by contrast, can change:\ngear = [\"rope\", \"helmet\"]\ngear.append(\"harness\")\nprint(\"Pack now holds:\", gear)" } },
      { heading: "Sets", videoSrc: "assets/video/placeholder-lists-dictionaries.mp4", body: "A set stores a collection of items where duplicates get automatically dropped and order doesn't matter. You only care whether something is in there, not how many times or in what position.\n\ngear = {\"rope\", \"helmet\", \"harness\", \"rope\"}\nprint(gear)   # the duplicate rope vanishes\n\nRelatable way to think about it: a set is like a permit checklist at the ranger station. It only cares whether you have a rope, a helmet, and a harness, not how many ropes you happen to be carrying or which order they're listed in. Say the item once or say it five times, the checklist only shows one checkmark per item.\n\nThis makes sets genuinely useful anytime you need to strip out duplicates or quickly check \"do I have this or not\" without caring about order or count. Less common in your later stops than tuples, but a handy tool to have packed when the situation calls for it.", playground: { lang: "python", code: "gear_checklist = {\"rope\", \"helmet\", \"harness\", \"rope\"}\n\nprint(\"Checklist:\", gear_checklist)\nprint(\"How many unique items?\", len(gear_checklist))\nprint(\"Do I have a helmet?\", \"helmet\" in gear_checklist)\n\n# Sets are handy for stripping duplicates out of a list:\nsignatures = [\"Leslie\", \"Amir\", \"Leslie\", \"Jun\", \"Amir\"]\nprint(\"Unique climbers who signed in:\", set(signatures))" } },   
      { heading: "Imports", videoSrc: "assets/video/placeholder-functions-imports.mp4", body: "Import lets you bring in code other people already wrote and packaged into modules or libraries, so you don't have to build every tool from scratch \u2014 `import random` or `from math import sqrt`.\n\nRelatable way to think about it: this is like showing up at basecamp and borrowing gear other climbers already tested and left behind, instead of forging your own ice axe from raw metal.\n\nWhen you're ready to bring in gear other climbers packed (an outside library, not just Python's built-in stuff), you'll type `pip install libraryname`, using the same terminal you learned back at Surf Break, just put to use further up the trail.\n\nReal-world Python projects almost always rely on imported libraries \u2014 for websites, data science, AI, all of it. Learning to import (and later, install) tools other developers built is one of the biggest productivity boosts on the entire trail, and it's essential gear for every stop from Alpine Canopy onward.", playground: { lang: "python", code: "import random\n\ndef pack_snack():\n    snacks = ['trail mix', 'granola bar', 'apple', 'jerky']\n    return random.choice(snacks)\n\nprint(\"Today's snack:\", pack_snack())\nprint(\"Today's snack:\", pack_snack())" } },
      { heading: "Algorithm", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "An algorithm is the step-by-step plan or logic for solving a problem. It's the idea, not the code. The same algorithm (say, \"sort this list from smallest to largest\") can be written as a function in Python, in JavaScript, or even described in plain English with no code at all. Multiple different algorithms can solve the same problem with different tradeoffs: faster, uses less memory, simpler to read.\n\nRelatable way to think about it: an algorithm is the route plan for reaching the summit \u2014 \"start at the east ridge, switchback through the tree line, cross the saddle, then straight up the final pitch.\" That plan exists whether it's written on paper, memorized, or coded into a GPS app.\n\nA function is one way of actually executing that plan in Python. The plan (the algorithm) and the execution (the function) are two different layers.", playground: { lang: "python", code: "# One algorithm: \"find the heaviest item in the pack.\"\n# Written out step by step as a function.\n\nweights = {\"rope\": 30, \"helmet\": 12, \"harness\": 18, \"stove\": 24}\n\ndef heaviest(items):\n    heaviest_name = None\n    heaviest_weight = 0\n    for name in items:              # step 1: look at every item\n        if items[name] > heaviest_weight:   # step 2: is it the biggest so far?\n            heaviest_name = name            # step 3: remember it\n            heaviest_weight = items[name]\n    return heaviest_name, heaviest_weight   # step 4: report back\n\nprint(\"Heaviest item:\", heaviest(weights))" } },
      { heading: "API", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "An API (Application Programming Interface) is a defined way for your code to talk to someone else's code or system, often a whole separate service, without needing to know how it works internally. You send a request in an expected format, and you get a response back.\n\nurl = \"https://api.weather.com/ridge-3\"\nresponse = requests.get(url)\n\nRelatable way to think about it: an API is like calling basecamp on the radio using an agreed-upon set of call signs. You don't need to know how their entire radio system works internally, you just need to know the right words to say (\"requesting weather report for Ridge 3\") to get the right response back.\n\nA function is something you built and fully control. An API is a doorway into someone else's system, with rules about exactly how to knock." },
      { heading: "Module", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "A module is a single file of Python code, usually containing related functions, variables, or classes, that you can import and reuse in another script instead of rewriting it. It's the smallest reusable unit: literally one .py file, like `math.py`, or a file you write yourself, like `gear_utils.py`.\n\nRelatable way to think about it: a module is like one labeled gear pouch \u2014 say, a pouch that just holds carabiners. It's a single, focused container with related items inside, and you can grab that one pouch and clip it onto your harness whenever you need it." },
      { heading: "Library", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "A library is a larger collection of modules bundled together, usually built around a broader purpose \u2014 like NumPy for math and data, Pandas for working with data tables, or Requests for talking to APIs. Libraries are what you actually install with `pip install` before importing from them.\n\nRelatable way to think about it: a library is the whole gear bag someone else packed and tested for a specific type of expedition \u2014 an \"ice climbing kit\" bag containing several pouches (modules) already organized: crampons pouch, ice axe pouch, rope pouch. You don't build the bag yourself. You borrow the whole thing, already proven to work, and pull out exactly what you need.\n\nGetting a library onto your machine isn't automatic, though. You have to actually go grab it first, using `pip install libraryname` in the same terminal you were gearing up with back at Surf Break. Same tool, same skills \u2014 you're just using it to restock your gear bag instead of running your own script." },
      { heading: "How It All Fits Together", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "Building on the earlier map: an algorithm is the route plan, a function is one technique you know, a module is a labeled pouch of related techniques, and a library is a whole gear bag of pouches built by other climbers (developers) for a specific kind of climb.\n\nAn API, by contrast, isn't gear you carry at all. It's a radio channel to a completely separate basecamp (a server) you're requesting help from.", table: { caption: "How They Connect", headers: ["Concept", "What it is", "Climbing analogy"], rows: [["Algorithm", "The logical plan or steps to solve a problem", "The route plan to the summit"], ["Function", "One reusable piece of code", "A single technique you've learned, like a knot"], ["Module", "A single file grouping related functions", "One labeled gear pouch"], ["Library", "A collection of modules for a broader purpose", "A full gear bag packed by other climbers"], ["API", "A way to request something from a separate program or server", "Radioing a different basecamp using known call signs"]] } },
      { heading: "Activity: Build a Gear Checklist", videoSrc: "assets/video/placeholder-variables-types-data.mp4", body: "Create a list of at least 4 gear items, loop through it to print each one, then build a dictionary that tracks whether each item is packed.", playground: { lang: "python", code: "gear_list = ['tent', 'water filter', 'headlamp', 'map']\n\nfor item in gear_list:\n    print('Checking:', item)\n\ngear_status = {}\nfor item in gear_list:\n    gear_status[item] = True  # mark everything as packed\n\nprint(gear_status)\n\n# Challenge: mark one item as False, then print just that one item's status" } },
      { heading: "Debugging Basics", videoSrc: "assets/video/placeholder-debugging-basics.mp4", body: "Error messages aren't scary and they're clues. Read them top to bottom before panicking.", playground: { lang: "python", code: "# This code has one small bug. Click Run, read the error message\n# from the bottom up, then fix it.\n\nhiker_name = 'Alex'\nprint('Hello, ' + hiker_name)\nprint('Miles hiked: ' + miles_hiked)" } },
      { heading: "Gear Check Before the Climb", videoSrc: "assets/video/placeholder-gear-check-before-the-climb.mp4", body: "You now have everything you need to start building real Python projects. Let's go.", playground: { lang: "python", code: "gear = ['tent', 'water filter', 'headlamp', 'map', 'snacks']\n\ndef gear_check(items):\n    print('Gear check!')\n    for item in items:\n        print(' -', item, 'packed')\n    if len(items) >= 5:\n        print(\"You're ready for the climb.\")\n    else:\n        print('Grab a few more things first.')\n\ngear_check(gear)" } },
      { heading: "Recap", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "What's Next?", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
]
  },
  {
    id: "lesson-8",
    title: "Python in Websites",
    theme: "Zipline Canopy",
    cards: [
      { heading: "How Does Python Cross Over Into Websites?", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "You just got your passport stamped at Basecamp / Gear Shop, Stop 7, What Do You Need Before Building Python Projects? Gear's packed. Now the trail opens onto two platforms connected by a single line: welcome to Zipline Canopy, Stop 8.\n\nUp to now, everything you've built lived entirely on one platform & HTML, CSS, and JavaScript, all running in the browser. Here, you're stringing a line to a second platform, one built in Python, and learning to send a package across it and catch what comes back.\n\nGoal: understand how Python acts as the brain behind a website & receiving requests, running logic or AI, and sending responses back to the browser.\n\nOutcome: by the end of this stop, you'll have a working app where your frontend platform (JavaScript) sends something across the line to a Python backend platform, and gets a real answer back." },
      { heading: "What You'll Learn", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this stop, you'll be able to:\n\n- Build a website that talks to a real Python backend\n- Send data from the browser to Python, and get something back\n- Run Python code, models, or APIs behind the scenes\n- Return results to your webpage in real time\n- Use pretrained AI tools without training anything yourself\n- Recognize the shape of almost every AI-powered app you'll ever use\n\nThis is the moment your web skills and your Python skills finally meet." },
      { heading: "Icebreaker", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "Think about the last time you had to relay something through someone else to get an answer & you texted a friend to ask the front desk a question, or messaged a group chat and then just... waited.\n\nThere's always a gap between asking and getting an answer back. Everything on this stop is about building that gap on purpose: sending something across the line, and designing exactly what comes back." },
      { heading: "Helpful Terms to Know", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "Seven words carry this entire stop: endpoint, request, response, JSON, model, inference, and API. None of them are complicated once you've used them once, and you'll lean on every one of them for the rest of the trail & especially once you reach Chatbot Alley and Photo Booth." },
      { heading: "Endpoint", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "An endpoint is a Python function the browser is allowed to call. Think of it as a door in your backend platform with a name on it & the browser knocks on that specific door when it wants that specific job done.\n\ndef get_greeting():\n    return \"Hello from Python!\"\n\nNothing calls this function yet. Wiring it up so the browser can reach it (with a tool like Flask) is what turns a plain function into a real endpoint & but the logic inside is exactly the same Python you already know.", playground: {"lang": "python", "code": "def get_greeting():\n    return \"Hello from Python!\"\n\n# This is exactly what an endpoint runs & a real server\n# just calls it automatically whenever the browser asks.\nprint(get_greeting())"} },
      { heading: "Request", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "A request is whatever the browser sends across the line to Python & a question, a number, an image, a whole form. It's the package leaving the frontend platform.\n\nRelatable way to think about it: a request is you calling out across the zipline, \"catch this!\", right before you send the package over. Python doesn't do anything until a request actually arrives." },
      { heading: "Response", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "A response is whatever Python sends back & a prediction, a label, a summary, a decision. It's the package that comes back down the line.\n\nEvery single thing you build on this stop, and every AI feature you build after it, is some version of this same round trip: something goes out, something comes back.", playground: {"lang": "python", "code": "request = {\"question\": \"What's 7 times 6?\"}\n\ndef handle_request(req):\n    # In a real app, Python would do real work here.\n    # For now, just prove the round trip works.\n    return {\"answer\": 7 * 6}\n\nresponse = handle_request(request)\nprint(\"Sent:\", request)\nprint(\"Got back:\", response)"} },
      { heading: "JSON", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "JSON is the shared language both sides speak. It's basically a Python dictionary that's been packed up to travel across the internet, and it's the format almost every request and response gets sent in.\n\nRelatable way to think about it: JSON is the shipping label everyone on both platforms already knows how to read, no matter which one packed the box.\n\nPython has a built-in `json` module for converting between a real dictionary and the JSON text version of it & you'll use `json.dumps()` to pack one up and `json.loads()` to unpack one that arrives.", playground: {"lang": "python", "code": "import json\n\nprofile = {\"name\": \"Ray\", \"favorite_snack\": \"Churros\", \"level\": 3}\n\npacked = json.dumps(profile)\nprint(\"Packed for shipping:\", packed)\n\nunpacked = json.loads(packed)\nprint(\"Unpacked on arrival:\", unpacked)\nprint(\"Favorite snack:\", unpacked[\"favorite_snack\"])"} },
      { heading: "Model", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "A model is a pretrained \"brain\" that can already do something smart & classify text, detect faces, summarize writing, label an image & because someone else already trained it on huge amounts of data.\n\nYou are not training one on this trail. You're learning to ask one for help, the same way you'd ask a specialist instead of learning their entire trade yourself." },
      { heading: "Inference", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "Inference is running a model on something new and getting an answer back & \"here's a sentence, is it positive or negative?\" It's the actual moment the model does its job.\n\nRelatable way to think about it: training a model is like an apprentice spending years learning a craft. Inference is that same expert glancing at one new piece of work and giving you their read on it, in seconds.\n\nReal models take real setup, so here's the idea in miniature & a tiny, fake \"model\" built from nothing but a few keywords, doing real inference on real sentences.", playground: {"lang": "python", "code": "# A real sentiment model is trained on millions of examples.\n# This one is a toy version, built from a few keywords, so you\n# can see what \"running inference\" means without downloading\n# anything.\n\ndef tiny_sentiment_model(sentence):\n    positive_words = ['love', 'great', 'awesome', 'happy']\n    negative_words = ['hate', 'bad', 'terrible', 'sad']\n    words = sentence.lower().split()\n    if any(w in positive_words for w in words):\n        return 'positive'\n    if any(w in negative_words for w in words):\n        return 'negative'\n    return 'neutral'\n\nfor sentence in ['I love robotics', 'This is terrible', 'The sky is blue']:\n    print(sentence, '->', tiny_sentiment_model(sentence))"} },
      { heading: "Python Behind the Scenes", videoSrc: "assets/video/placeholder-python-behind-the-scenes.mp4", body: "The browser is a great frontend platform, but it can't run Python, can't run heavy AI, and can't safely touch files on a server. Those jobs all happen on the other platform, across the line.\n\nWhat Python can do back there:\n\n- Run AI models\n- Process images\n- Make API calls\n- Store and organize data\n- Make decisions based on logic\n\nMental model: your website is the face. Python is the brain. The browser asks questions, and Python answers them." },
      { heading: "Activity: The Echo", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "The very first \"aha\" moment in backend work: sending something across the line and getting the exact same thing back, proving Python is actually listening on the other end.\n\nRelatable way to think about it: it's like yelling across a canyon and hearing your own voice come back. Nothing clever happens yet & you're just confirming the line works.", playground: {"lang": "python", "code": "def echo(message):\n    # A real endpoint would receive this over the network.\n    # For now, call it directly and watch it come straight back.\n    return message\n\nsent = \"Can you hear me, Python?\"\nreceived = echo(sent)\n\nprint(\"Frontend sent:\", sent)\nprint(\"Backend echoed back:\", received)"} },
      { heading: "Frontend vs. Backend: The Real Separation of Powers", videoSrc: "assets/video/placeholder-frontend-vs-backend.mp4", body: "You already know the frontend & the part people see and touch. The backend is the part that thinks.\n\nFrontend (JavaScript):\n\n- Buttons\n- Forms\n- Camera input\n- Displaying results\n- Animations\n\nBackend (Python):\n\n- Logic\n- AI\n- Data processing\n- API calls\n- File handling\n\nRelatable way to think about it: frontend is the platform you're standing on, backend is the platform on the other side of the line. JavaScript sends a request across, Python processes it, Python sends a response back, and JavaScript updates what you see. Neither platform tries to do the other one's job." },
      { heading: "Activity: The Decision Maker", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "Now make Python do something the browser genuinely can't: decide something on its own, differently each time.\n\nRelatable way to think about it: press a button on the frontend platform, and whatever comes back across the line is entirely up to the backend & the browser has no idea what answer is coming until it arrives.", playground: {"lang": "python", "code": "import random\n\ndef ask_the_brain():\n    answers = ['Yes', 'No', 'Maybe', 'Try again']\n    return random.choice(answers)\n\n# Simulate pressing \"Ask the Brain\" three times\nfor _ in range(3):\n    print('Frontend asks... Backend says:', ask_the_brain())"} },
      { heading: "APIs: Your Zipline to the Outside World", videoSrc: "assets/video/placeholder-apis.mp4", body: "So far, every response you've built comes from your own Python logic. An API lets your backend platform ask a completely different platform for help & one you didn't build and don't control.\n\nWhat calling an API actually takes:\n\n- Send a request to someone else's server, usually with the `requests` library\n- Read the JSON response that comes back\n- Pull out the piece you actually need\n- Send that piece back to your own frontend\n\nMini example: your website sends \"Translate: I love robotics.\" Python calls a translation API. The API responds with \"Me encanta la robÃ³tica.\" Your website displays it instantly & three platforms, one smooth trip.\n\nThe same shape works for pulling in weather data, movie recommendations, or almost any live information you don't want to hand-type yourself." },
      { heading: "Activity: The Translator", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "Same shape as everything else on this stop & send something out, get something back & except now the \"brain\" answering is a real translation service somewhere else on the internet.\n\nThis one needs a live network connection and a real API key, so it can't safely run inside this browser sandbox. Here's exactly what the code looks like when it's running for real:", playground: {"lang": "python", "code": "import requests\n\ndef translate(text, target_language='es'):\n    response = requests.post(\n        'https://api.example.com/translate',\n        json={'text': text, 'target': target_language},\n        headers={'Authorization': 'Bearer YOUR_API_KEY'}\n    )\n    return response.json()['translated_text']\n\nprint(translate('I love robotics'))", "unsupported": true, "reason": "This example needs a real API key and a live network call, which can't run safely in this browser sandbox."} },
      { heading: "Pretrained Models: The AI Shortcut", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "APIs aren't the only way to borrow intelligence & you can also load a pretrained model directly into your own Python code and run it yourself, no external service required.\n\nTools like HuggingFace, OpenCV, and MediaPipe give you models that already know how to classify text, detect faces, or track hand movement, all trained by someone else on huge amounts of data.\n\nYou won't train a model on this trail. You'll learn to load one and ask it questions & and you'll get real hands-on practice with this exact skill soon: language models at Chatbot Alley, and computer vision at Photo Booth." },
      { heading: "The Request â†’ Process â†’ Response Loop", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "This is the one pattern behind every single thing you'll build from here on:\n\n1. Frontend sends data\n2. Python receives it\n3. Python runs logic or AI\n4. Python returns JSON\n5. Frontend updates the page\n\nMaster this loop, and you can build a chatbot, a camera app, a recommendation engine, an accessibility tool, or a study helper & they're all the exact same five steps, just with different logic sitting in step 3." },
      { heading: "Activity: The Text Analyzer", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "Run the whole loop end to end: send text over, let Python actually process it, and get real structured results back & not just an echo this time.", playground: {"lang": "python", "code": "def analyze_text(sentence):\n    words = sentence.split()\n    longest = max(words, key=len)\n    return {\n        'word_count': len(words),\n        'character_count': len(sentence),\n        'longest_word': longest\n    }\n\nsent = \"Python powers the web behind the scenes\"\nresult = analyze_text(sent)\n\nprint('Frontend sent:', sent)\nprint('Backend analyzed it:', result)"} },
      { heading: "Where This Loop Takes You", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "Once you can run this loop with your eyes closed, whole categories of projects open up. A few you'll be ready to build once you've picked up a bit more Python and AI further down the trail:\n\n- AI Study Buddy & send a homework question, get back an explanation from an LLM\n- Mood-Based Playlist Generator & send how you're feeling, get back a matching playlist\n- Food Recognition Camera & send a photo, get back what's in it\n- Accessibility Tool & send an image, get back a description of it\n\nEvery one of these is the exact same five-step loop you just learned, wearing a different outfit. You'll build toward one of these, or something entirely your own, at the Summit." },
      { heading: "Fork This Starter Project â†’", videoSrc: "assets/video/placeholder-fork-this-starter-project.mp4", body: "Fork the mini backend starter & an Echo and Decision Maker endpoint already wired up & and add one endpoint of your own that does something nobody's tried yet.", forkLink: "REPLACE_WITH_STARTER_REPO_LINK" },
      { heading: "Recap", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "Python is the brain behind the site. It receives requests, does the thinking & logic, AI, an API call & and sends a response back across the line. Every backend feature you'll ever build is that same loop, on repeat." },
      { heading: "What's Next?", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "Next stop: Night Market, where Python stops waiting for requests altogether and starts doing work entirely on its own." },
]
  },
  {
    id: "lesson-9",
    title: "Python for Automating Tasks",
    theme: "Night Market",
    cards: [
      { heading: "What You'll Learn", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Icebreaker", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Helpful Terms to Know", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Why Automate?", videoSrc: "assets/video/placeholder-why-automate.mp4", body: "Computers are great at repeating boring tasks so you don't have to." },
      { heading: "Scripts vs. Manual Work", videoSrc: "assets/video/placeholder-scripts-vs-manual-work.mp4", body: "Renaming 100 files by hand takes forever. A 5-line script can do it in a second." },
      { heading: "Real Examples", videoSrc: "assets/video/placeholder-real-examples.mp4", body: "Auto-sorting downloads, scheduling social posts, batch-renaming photos, sending reminder texts." },
      { heading: "Libraries That Help", videoSrc: "assets/video/placeholder-libraries-that-help.mp4", body: "os, shutil, and schedule are common tools for automation scripts.", playground: { lang: "python", code: "import os\n\n# Make a few pretend files in Pyodide's in-memory filesystem\nfor i in range(1, 4):\n    with open('note' + str(i) + '.txt', 'w') as f:\n        f.write('This is note number ' + str(i))\n\nprint('Files created:')\nfor name in os.listdir('.'):\n    if name.endswith('.txt'):\n        print(' -', name)" } },
      { heading: "Fork This Starter Project â†’", videoSrc: "assets/video/placeholder-fork-this-starter-project.mp4", body: "Fork the file-renaming automation starter and adapt it to something you actually need to automate.", forkLink: "REPLACE_WITH_STARTER_REPO_LINK" },
      { heading: "Recap", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "What's Next?", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
]
  },
  {
    id: "lesson-10",
    title: "Python Managing Files Locally",
    theme: "Backstage Pass",
    cards: [
      { heading: "What You'll Learn", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Icebreaker", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Helpful Terms to Know", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Reading & Writing Files", videoSrc: "assets/video/placeholder-reading-writing-files.mp4", body: "open(), .read(), and .write() let Python create, read, and edit files on your computer.", playground: { lang: "python", code: "# This runs against a virtual in-memory filesystem \u2014 it never touches your real computer.\nwith open('trail_log.txt', 'w') as f:\n    f.write('Day 1: reached the backstage pass stop!')\n\nwith open('trail_log.txt', 'r') as f:\n    contents = f.read()\n\nprint('File contents:')\nprint(contents)" } },
      { heading: "Folders & Paths", videoSrc: "assets/video/placeholder-folders-paths.mp4", body: "Python can navigate your computer's folder structure just like you do by clicking through Finder/Explorer." },
      { heading: "Organizing Data", videoSrc: "assets/video/placeholder-organizing-data.mp4", body: "Rename, move, and sort files automatically based on rules you write." },
      { heading: "Safety First", videoSrc: "assets/video/placeholder-safety-first.mp4", body: "Be extra careful with delete commands and always test on a copy of your files first." },
      { heading: "Fork This Starter Project â†’", videoSrc: "assets/video/placeholder-fork-this-starter-project.mp4", body: "Fork the file-organizer starter and build a script that tidies up a messy folder.", forkLink: "REPLACE_WITH_STARTER_REPO_LINK" },
      { heading: "Recap", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "What's Next?", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
]
  },
  {
    id: "lesson-11",
    title: "Python in Data Science",
    theme: "Stadium and Big Game Night",
    cards: [
      { heading: "What You'll Learn", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Icebreaker", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Helpful Terms to Know", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Data is Everywhere", videoSrc: "assets/video/placeholder-data-is-everywhere.mp4", body: "Stats, scores, and trends are just numbers waiting to tell a story and like a box score after a big game." },
      { heading: "Pandas & Spreadsheets", videoSrc: "assets/video/placeholder-pandas-spreadsheets.mp4", body: "The pandas library loads spreadsheets/CSVs into Python so you can explore them with code.", playground: { lang: "python", loadPackages: ["pandas"], code: "import pandas as pd\n\ndata = {\n    'player': ['Ari', 'Sam', 'Lee', 'Kai'],\n    'points': [18, 24, 9, 31]\n}\ndf = pd.DataFrame(data)\n\nprint(df)\nprint()\nprint('Top scorer:', df.loc[df['points'].idxmax(), 'player'])" } },
      { heading: "Visualizing Data", videoSrc: "assets/video/placeholder-visualizing-data.mp4", body: "Turning raw numbers into charts is like turning a stat sheet into a scoreboard everyone can read." },
      { heading: "Asking Questions with Data", videoSrc: "assets/video/placeholder-asking-questions-with-data.mp4", body: "Example: who's the real MVP this season based on the numbers, not just vibes?" },
      { heading: "Fork This Starter Project â†’", videoSrc: "assets/video/placeholder-fork-this-starter-project.mp4", body: "Fork the sports/data-analysis starter notebook and explore a dataset you care about.", forkLink: "REPLACE_WITH_STARTER_REPO_LINK" },
      { heading: "Recap", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "What's Next?", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
]
  },
  {
    id: "lesson-12",
    title: "Python in LLMs",
    theme: "Chatbot Alley",
    cards: [
      { heading: "What You'll Learn", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Icebreaker", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Helpful Terms to Know", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "What's an LLM?", videoSrc: "assets/video/placeholder-what-s-an-llm.mp4", body: "A large language model predicts the next most likely word, over and over, based on patterns it learned from huge amounts of text." },
      { heading: "How Chatbots 'Think'", videoSrc: "assets/video/placeholder-how-chatbots-think.mp4", body: "Text gets broken into tokens, sent through the model, and turned back into a response." },
      { heading: "Bias & Limitations", videoSrc: "assets/video/placeholder-bias-limitations.mp4", body: "LLMs learn from human-written data and so they can also learn and repeat human biases. Always question the output." },
      { heading: "Calling an LLM API in Python", videoSrc: "assets/video/placeholder-calling-an-llm-api-in-python.mp4", body: "response = client.chat.completions.create(\n    model='...',\n    messages=[{'role':'user','content':'Hi!'}]\n)", playground: { lang: "python", code: "from some_llm_sdk import Client\n\nclient = Client(api_key='YOUR_API_KEY')\nresponse = client.chat.completions.create(\n    model='...',\n    messages=[{'role': 'user', 'content': 'Hi!'}]\n)\nprint(response.choices[0].message.content)", unsupported: true, reason: "This example needs a real API key and a live network call, which can't run safely in this browser sandbox." } },
      { heading: "Activity: Sentiment Analyzer", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "Back at Zipline Canopy you built a tiny fake sentiment model out of a few keywords. A real one, like the pretrained pipelines HuggingFace ships, has actually learned this from millions of real sentences & same request/response shape, dramatically smarter brain on the other end.\n\nThis needs a downloaded model, which is too heavy to load in this browser sandbox. Here's exactly what the real version looks like:", playground: {"lang": "python", "code": "from transformers import pipeline\n\nclassifier = pipeline('sentiment-analysis')\nresult = classifier('I love robotics!')\n\nprint(result)\n# [{'label': 'POSITIVE', 'score': 0.999...}]", "unsupported": true, "reason": "This example needs a downloaded HuggingFace model, which is too large to load in this browser sandbox."} },
      { heading: "Fork This Starter Project â†’", videoSrc: "assets/video/placeholder-fork-this-starter-project.mp4", body: "Fork the mini-chatbot starter and build a bot with its own personality.", forkLink: "REPLACE_WITH_STARTER_REPO_LINK" },
      { heading: "Recap", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "What's Next?", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
]
  },
  {
    id: "lesson-13",
    title: "Python in Computer Vision",
    theme: "Photo Booth",
    cards: [
      { heading: "What You'll Learn", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Icebreaker", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Helpful Terms to Know", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "How Computers 'See'", videoSrc: "assets/video/placeholder-how-computers-see.mp4", body: "An image is just a grid of numbers (pixels) and computer vision is math applied to those grids." },
      { heading: "Detecting Faces & Objects", videoSrc: "assets/video/placeholder-detecting-faces-objects.mp4", body: "Models can be trained to find faces, objects, or text inside an image." },
      { heading: "Real-World Uses", videoSrc: "assets/video/placeholder-real-world-uses.mp4", body: "Photo filters, self-driving cars, sports instant-replay tech, and security cameras all use CV." },
      { heading: "A Simple CV Example", videoSrc: "assets/video/placeholder-a-simple-cv-example.mp4", body: "import cv2\nimg = cv2.imread('photo.jpg')\nfaces = face_cascade.detectMultiScale(img)", playground: { lang: "python", code: "import cv2\n\nimg = cv2.imread('photo.jpg')\nfaces = face_cascade.detectMultiScale(img)\nprint('Faces found:', len(faces))", unsupported: true, reason: "This example needs OpenCV (cv2), which isn't available in this browser sandbox." } },
      { heading: "Activity: Image Labeler", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "Same loop as everything back at Zipline Canopy: the frontend sends an image, Python runs it through a pretrained CV model, and the response comes back with labels for whatever's in the photo.\n\nThis needs a real pretrained model file, which is too large to load in this browser sandbox. Here's exactly what the real version looks like:", playground: {"lang": "python", "code": "from transformers import pipeline\n\nlabeler = pipeline('image-classification')\nresults = labeler('photo.jpg')\n\nfor r in results:\n    print(r['label'], '-', round(r['score'] * 100, 1), '%')", "unsupported": true, "reason": "This example needs a downloaded image-classification model, which is too large to load in this browser sandbox."} },
      { heading: "Fork This Starter Project â†’", videoSrc: "assets/video/placeholder-fork-this-starter-project.mp4", body: "Fork the face/object-detection starter and try it on your own photos.", forkLink: "REPLACE_WITH_STARTER_REPO_LINK" },
      { heading: "Recap", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "What's Next?", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
]
  },
  {
    id: "lesson-14",
    title: "Python in Neural Networks",
    theme: "Rooftop Observatory",
    cards: [
      { heading: "What You'll Learn", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Icebreaker", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Helpful Terms to Know", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Inspired by Brains", videoSrc: "assets/video/placeholder-inspired-by-brains.mp4", body: "Neural networks are made of connected 'neurons' in layers and a bit like a constellation of stars linked together." },
      { heading: "How a Neural Net Learns", videoSrc: "assets/video/placeholder-how-a-neural-net-learns.mp4", body: "It takes inputs, makes a guess, checks how wrong it was, and adjusts and over and over, thousands of times." },
      { heading: "Layers & Activation", videoSrc: "assets/video/placeholder-layers-activation.mp4", body: "Each layer transforms the data a little more, passing it forward until a final answer comes out." },
      { heading: "A Tiny Neural Net in Code", videoSrc: "assets/video/placeholder-a-tiny-neural-net-in-code.mp4", body: "model = Sequential([\n  Dense(8, activation='relu'),\n  Dense(1, activation='sigmoid')\n])", playground: { lang: "python", code: "from tensorflow.keras.models import Sequential\nfrom tensorflow.keras.layers import Dense\n\nmodel = Sequential([\n    Dense(8, activation='relu'),\n    Dense(1, activation='sigmoid')\n])\nmodel.summary()", unsupported: true, reason: "This example needs TensorFlow/Keras, which is too heavy to load in this browser sandbox." } },
      { heading: "Fork This Starter Project â†’", videoSrc: "assets/video/placeholder-fork-this-starter-project.mp4", body: "Fork the tiny neural-network starter and train it on a simple dataset.", forkLink: "REPLACE_WITH_STARTER_REPO_LINK" },
      { heading: "Recap", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "What's Next?", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
]
  },
  {
    id: "lesson-15",
    title: "Python in Reinforcement Learning",
    theme: "Summit / Skyline Finish Line",
    cards: [
      { heading: "What You'll Learn", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Icebreaker", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Helpful Terms to Know", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Learning by Trial & Reward", videoSrc: "assets/video/placeholder-learning-by-trial-reward.mp4", body: "Reinforcement learning is like leveling up in a video game and try something, get a reward or penalty, adjust your strategy." },
      { heading: "Agents, Actions, Rewards", videoSrc: "assets/video/placeholder-agents-actions-rewards.mp4", body: "An 'agent' takes 'actions' in an environment and receives 'rewards' that shape what it tries next." },
      { heading: "Real-World RL", videoSrc: "assets/video/placeholder-real-world-rl.mp4", body: "Game-playing AI, warehouse robots, and recommendation systems all use reinforcement learning." },
      { heading: "A Simple RL Example", videoSrc: "assets/video/placeholder-a-simple-rl-example.mp4", body: "A basic reward loop: choose action â†’ observe result â†’ update strategy â†’ repeat.", playground: { lang: "python", code: "import random\n\n# A tiny reward loop: the agent picks 'left' or 'right' and learns\n# which one tends to pay off, purely from trial and reward.\naction_values = {'left': 0.0, 'right': 0.0}\nlearning_rate = 0.1\n\ndef get_reward(action):\n    # 'right' secretly pays off more often \u2014 the agent has to discover this\n    return 1 if (action == 'right' and random.random() < 0.7) else 0\n\nfor step in range(20):\n    action = max(action_values, key=action_values.get) if random.random() > 0.2 else random.choice(list(action_values))\n    reward = get_reward(action)\n    action_values[action] += learning_rate * (reward - action_values[action])\n\nprint('Learned action values after 20 tries:')\nfor a, v in action_values.items():\n    print(' ', a, '->', round(v, 3))\nprint('Best action found:', max(action_values, key=action_values.get))" } },
            { heading: "Choose Your Demo Day Project", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "You've now got every piece: a backend that thinks, APIs and models that add real intelligence, and the request â†’ process â†’ response loop tying it all together. Time to point that at something of your own.\n\nPick a category, or bring your own idea that fits the same shape:\n\n- AI chatbot\n- CV camera app\n- Recommendation engine\n- Accessibility tool\n- Creative AI (poetry, art, music)\n- Data dashboard\n- Personal assistant\n\nEvery option above is still just frontend â†’ backend â†’ model or API â†’ frontend. You've built every piece of this before, just never all pointed at the same project." },
      { heading: "The Build Sprint", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "Getting from idea to working demo follows the same steps every time, no matter which category you picked:\n\n- Scoping & decide exactly what your app does, and just as importantly, what it doesn't\n- Wireframing & sketch what the frontend looks like before you build it\n- Building endpoints & write the Python that actually does the work\n- Connecting frontend & wire your JS up to call those endpoints and show what comes back\n- Testing & try to break your own app before anyone else does\n- Polishing & the last pass that makes it feel finished, not just functional\n\nThis is the exact same checklist real teams use before shipping anything." },
{ heading: "You Reached the Summit", videoSrc: "assets/video/placeholder-you-reached-the-summit.mp4", body: "You've gone from 'what is a website?' to training an AI agent. Look back at the trail and that's the whole journey." },
      { heading: "Showcase & Reflection", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "When you present, walk your audience through four things:\n\n- What the frontend does\n- What Python does\n- How you used a model or an API\n- What you learned about AI and web architecture along the way\n\nThat last one matters as much as the demo itself & you now understand, from the inside, how the AI-powered apps you use every day are actually built." },
      { heading: "Fork This Starter Project â†’", videoSrc: "assets/video/placeholder-fork-this-starter-project.mp4", body: "Fork the simple RL starter (a tiny game-playing agent) and try tweaking its rewards.", forkLink: "REPLACE_WITH_STARTER_REPO_LINK" },
      { heading: "Recap", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "End of This Road", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
]
  }
];
