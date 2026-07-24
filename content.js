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
      { heading: "Course Introduction", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "What You'll Learn", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Icebreaker", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Helpful Terms to Know", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Every Website is a Conversation", videoSrc: "assets/video/placeholder-every-website-is-a-conversation.mp4", body: "Websites are how computers talk to you and through text, images, buttons, and links. Every click is you 'talking back.'" },
      { heading: "Three Layers of Every Site", videoSrc: "assets/video/placeholder-three-layers-of-every-site.mp4", body: "HTML = structure (the bones), CSS = style (the skin/outfit), JavaScript = behavior (the reflexes). You'll learn all three on this trail." },
      { heading: "Client vs. Server", videoSrc: "assets/video/placeholder-client-vs-server.mp4", body: "Your browser (the client) asks a server for a page. The server sends back the ingredients, and your browser assembles them for you." },
      { heading: "Recap", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "What's Next?", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
          ]
  },
  {
    id: "lesson-2",
    title: "Parts of a Website",
    theme: "Skate Park",
    cards: [
      { heading: "What You'll Learn", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Icebreaker", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Anatomy of a Website - Page Structure", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Content Blocks Inside the Page Structure", videoSrc: "assets/video/placeholder-header-body-footer.mp4", body: "Most pages follow the same skeleton: a header up top, main content in the middle, footer info at the bottom." },
      { heading: "Text Hierarchy On a Page", videoSrc: "assets/video/placeholder-header-body-footer.mp4", body: "Most pages follow the same skeleton: a header up top, main content in the middle, footer info at the bottom." },
      { heading: "Layout and Grid", videoSrc: "assets/video/placeholder-header-body-footer.mp4", body: "Most pages follow the same skeleton: a header up top, main content in the middle, footer info at the bottom." },
      { heading: "Forms As Interactive Parts", videoSrc: "assets/video/placeholder-header-body-footer.mp4", body: "Most pages follow the same skeleton: a header up top, main content in the middle, footer info at the bottom." },
      {
        heading: "Activity: Website Anatomy Lab",
        videoSrc: "assets/video/placeholder-header-body-footer.mp4",
        body: "Below is a real sample website for a skate crew. Hover over any part \u2014 header, nav, hero, cards, footer, form \u2014 to see its boundary outlined. Click a highlighted part to answer two questions about it: what is this part called, and what job does it do? Pick your answers from the buttons; no typing needed. Get both right and that part gets checked off. Work through all 8 parts.",
        anatomyLab: {
          siteHtml: SKATE_SITE_HTML,
          hotspots: SKATE_SITE_HOTSPOTS
        }
      },
      {
        heading: "Remix Challenge",
        videoSrc: "assets/video/placeholder-header-body-footer.mp4",
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
        videoSrc: "assets/video/placeholder-header-body-footer.mp4",
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
      { heading: "Responsive Design", videoSrc: "assets/video/placeholder-responsive-design.mp4", body: "A good site looks great on a phone or a laptop and adapting to any terrain, just like a good skater." },
      { heading: "Recap", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "What's Next?", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
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
      { heading: "HTML = The Ingredients", videoSrc: "assets/video/placeholder-html-the-ingredients.mp4", body: "Tags are like ingredients you line up and combine to build a page." },
      { heading: "Tags & Elements", videoSrc: "assets/video/placeholder-tags-elements.mp4", body: "Tags come in pairs: <p>...</p>, <h1>...</h1>. What's between the tags is the content." },
      { heading: "The IDE", videoSrc: "assets/video/placeholder-tags-elements.mp4", body: "An IDE is your coding workspace. It’s where you write and organize your HTML, CSS, and JavaScript files, see errors, and run or preview your project." },
      { heading: "Your First HTML Page", videoSrc: "assets/video/placeholder-your-first-html-page.mp4", body: "In the Try It tab, change the text between the <h1>...</h1> tags to say Hello World!", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <h1>Your text goes here. </h1>\n <p>Feel free to type other things (e.g. What's for Lunch?).</p>\n <p>Click the red button that says Run to see your result.</p>\n  </body>\n</html>" } },
      { heading: "Containers & Sections", videoSrc: "assets/video/placeholder-tags-elements.mp4", body: "Webpages are organized into containers and sections—like headers, main content areas, and footers. These sections help you group related content so it’s easier to design, style, and understand."  },      
  {
  heading: "HTML Comments",
  videoSrc: "assets/video/placeholder-tags-elements.mp4",
  body: "In HTML, comments are little notes you can leave in your code. The browser ignores them, so they won’t show up on the webpage. They’re helpful when you want to explain something, leave yourself a reminder, or hide part of your code temporarily. An HTML comment is made from an opening comment marker, a note in the middle, and a closing comment marker. Explore each piece below to see how the browser knows where the hidden note starts and stops.",
  syntaxAnnotate: {
    language: "HTML",
    filename: "index.html",
    lines: [
      [
        {
          text: "<!--",
          type: "opening-marker",
          order: 1,
          tip: "This opening comment marker starts the hidden note. It begins with <, then !, then two dashes."
        },
        {
          text: " This is a comment ",
          type: "content",
          order: 2,
          tip: "This is the note inside the comment. The browser ignores it, so it does not show on the webpage."
        },
        {
          text: "-->",
          type: "closing-marker",
          order: 3,
          tip: "This closing comment marker ends the hidden note. Once HTML sees this, the comment is over."
        }
      ]
    ],
    outputText: "Visible result: this line does not display anything on the page."
  }
},
      { heading: "Nesting", videoSrc: "assets/video/placeholder-nesting.mp4", body: "Tags can go inside other tags and like a burrito wrapped in foil wrapped in a bag." },
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
      { heading: "What You'll Learn", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "You’ll go from seeing web pages as fixed screens to building your own simple, working pages and mini projects that you can actually click, change, and remix yourself." },
      { heading: "Icebreaker", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "A quick warm-up to share how you already use websites and apps, and to imagine what you’d change or build if you had the tools." },
      { heading: "Helpful Terms to Know", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "A short glossary of words you’ll see a lot in this course—like HTML, CSS, JavaScript, element, and browser—so the rest of the lessons feel more familiar." },
      { heading: "What is CSS?", videoSrc: "assets/video/placeholder-css-the-outfit.mp4", body: "CSS is the coding language that dresses up your HTML structure with color, fonts, spacing, and layout so a page feels designed, not just plain text." },
      { heading: "Where CSS Lives: inline, <style>, external stylesheet", videoSrc: "assets/video/placeholder-css-the-outfit.mp4", body: "You’ll see the three main places CSS can live—directly on an element, inside a <style> block, or in a separate stylesheet—and when each approach is used in real projects.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      /* This is an INTERNAL stylesheet, inside a <style> block */\n      .storefront { color: purple; }\n    </style>\n  </head>\n  <body>\n    <!-- This is INLINE CSS, written directly on one element -->\n    <h2 style=\"color: hotpink;\">Welcome to the Mall!</h2>\n\n    <!-- This heading gets its style from the <style> block above -->\n    <h3 class=\"storefront\">Store Directory</h3>\n\n    <!-- An EXTERNAL stylesheet would be linked like this in the <head>: -->\n    <!-- <link rel=\"stylesheet\" href=\"styles.css\"> -->\n\n    <p>Try changing the inline color above, then the .storefront color in the style block.</p>\n  </body>\n</html>" } },
      { heading: "What a CSS rule looks like: selector + curly braces + property: value;", videoSrc: "assets/video/placeholder-css-the-outfit.mp4", body: "You’ll break down one CSS rule into its parts—a selector, curly braces, and property–value pairs—so you can read and write basic styles confidently.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      /* selector       property: value;  */\n      h2 {\n        color: teal;\n        font-size: 28px;\n      }\n    </style>\n  </head>\n  <body>\n    <h2>Mall Hours: 10am - 9pm</h2>\n    <!-- Try adding a new property inside the { } above, like background-color -->\n  </body>\n</html>" } },
     {
        heading: "Activity: Match the Selector",
        videoSrc: "assets/video/placeholder-selectors.mp4",
        body: "Below are three CSS rules. Tap a rule, then tap whether it's an Element, Class, or ID selector. Get it right and watch it take real effect on the mock storefront below.",
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
      { heading: "Basic selectors: element, class, ID", videoSrc: "assets/video/placeholder-selectors.mp4", body: "You’ll learn how to target elements by type, class, or id—like choosing a style for all headers vs. one specific header — so you can control exactly what gets styled.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      /* Element selector: targets every <p> on the page */\n      p { color: gray; }\n\n      /* Class selector: targets anything with class=\"sale\" */\n      .sale { color: red; font-weight: bold; }\n\n      /* ID selector: targets the one element with id=\"hero\" */\n      #hero { color: white; background: navy; padding: 10px; }\n    </style>\n  </head>\n  <body>\n    <p id=\"hero\">Grand Opening This Weekend!</p>\n    <p class=\"sale\">50% off shoes</p>\n    <p>Regular store hours apply.</p>\n  </body>\n</html>" } },
      { heading: "Attributes in HTML: especially class and id, and how selectors use them", videoSrc: "assets/video/placeholder-css-the-outfit.mp4", body: "You’ll see how HTML attributes like class and id label elements, and how CSS selectors use those labels to apply styles to the right parts of the page. Tap an HTML snippet, then tap what kind of attribute (if any) it's using. Correct matches will get outlined below so you can see class, id, and no-attribute elements grouped by color.",
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
      { heading: "Core visual properties: color, fonts, paragraphs, spacing", videoSrc: "assets/video/placeholder-colors-fonts-spacing.mp4", body: "You’ll play with core properties like color, font-family, line-height, margin, and padding to shape how text and sections look and feel on the page.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      body { font-family: Georgia, serif; }\n      .sign {\n        color: darkorange;\n        font-size: 24px;\n        line-height: 1.6;\n        margin: 20px;\n        padding: 16px;\n      }\n    </style>\n  </head>\n  <body>\n    <p class=\"sign\">Food Court → Second Floor, Past the Escalators</p>\n    <!-- Try changing color, font-size, margin, or padding above -->\n  </body>\n</html>" } },
 {
  heading: "CSS Syntax Rules",
  videoSrc: "assets/video/placeholder-css-the-outfit.mp4",
  body: "A CSS rule has two main parts: a selector that chooses what to style, and a declaration block that says how it should look. Explore each piece below to see how one full CSS rule is built.",
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
      { heading: "Activity: Style the Storefront Sign", videoSrc: "assets/video/placeholder-css-the-outfit.mp4", body: "Hands-on tweaks to the colors, fonts, and spacing of a simple page, so you can see how a few property changes transform the overall vibe.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      body { background: #f0f0f0; }\n      .sign {\n        font-family: sans-serif;\n        color: #333;\n        font-size: 20px;\n        margin: 16px;\n        padding: 12px;\n      }\n    </style>\n  </head>\n  <body>\n    <p class=\"sign\">Sale Ends Sunday!</p>\n\n    <!-- Challenge: change the background color, font-family, and font-size\n         until this sign feels like it belongs in a fun mall storefront -->\n  </body>\n</html>" } },
      { heading: "The Box Model", videoSrc: "assets/video/placeholder-the-box-model.mp4", body: "You’ll learn that every element is a box—with content, padding, border, and margin—and see how those layers interact like packaging around a product.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      .product {\n        width: 150px;\n        padding: 10px;      /* space inside the border, around the content */\n        border: 4px solid navy;\n        margin: 20px;        /* space outside the border, pushing other boxes away */\n        background: lightyellow;\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"product\">Backpack — $24.99</div>\n    <!-- Try changing padding, border, and margin one at a time to see each layer -->\n  </body>\n</html>" } },
      { heading: "Mini Challenge: Restyle a Card", videoSrc: "assets/video/placeholder-mini-challenge-restyle-a-card.mp4", body: "Change the color, font, and spacing of a sample card for an online store item (with starter code for a fake site provided).", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      body { font-family: sans-serif; background: #fdeed0; }\n      .card {\n        max-width: 260px;\n        margin: 24px auto;\n        padding: 16px;\n        background: white;\n        border-radius: 12px;\n        box-shadow: 0 4px 14px rgba(0,0,0,0.15);\n        text-align: center;\n      }\n      .card h3 { color: #ff5a3d; margin: 8px 0 4px; }\n      .card p { color: #5b5f78; font-size: 14px; }\n    </style>\n  </head>\n  <body>\n    <div class=\"card\">\n      <h3>Jordan Rivera</h3>\n      <p>Skate Park Regular</p>\n    </div>\n  </body>\n</html>" } },
      { heading: "Layout & Grids", videoSrc: "assets/video/placeholder-css-the-outfit.mp4", body: "You’ll learn how CSS layout tools like flexbox or simple grids can line up cards, buttons, and sections, turning a vertical stack into a neat, organized layout.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      .shelf {\n        display: flex;\n        gap: 12px;\n      }\n      .item {\n        background: #eee;\n        border-radius: 8px;\n        padding: 16px;\n        flex: 1;\n        text-align: center;\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"shelf\">\n      <div class=\"item\">Shoes</div>\n      <div class=\"item\">Hats</div>\n      <div class=\"item\">Bags</div>\n    </div>\n    <!-- Try changing display: flex to display: block above to see the difference -->\n  </body>\n</html>" } },
      { heading: "Activity: Arrange the Store Shelf", videoSrc: "assets/video/placeholder-css-the-outfit.mp4", body: "A hands-on activity where you rearrange a few cards or sections into rows and columns using layout properties, and see how small CSS changes reshape the page.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      .shelf {\n        display: block; /* Challenge: change this to flex or grid */\n      }\n      .item {\n        background: #d6eaff;\n        border-radius: 8px;\n        padding: 16px;\n        margin: 6px;\n        display: inline-block;\n        width: 100px;\n        text-align: center;\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"shelf\">\n      <div class=\"item\">Sneakers</div>\n      <div class=\"item\">Jackets</div>\n      <div class=\"item\">Watches</div>\n      <div class=\"item\">Sunglasses</div>\n    </div>\n\n    <!-- Challenge: use display: flex or display: grid on .shelf, and gap,\n         to arrange these four items into a neat row or grid -->\n  </body>\n</html>" } },
      { heading: "Responsive CSS", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "You’ll see how to use CSS so your pages adapt to different screen sizes—like phones, tablets, and laptops—by adjusting layout, spacing, and text with simple rules.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      .banner {\n        background: coral;\n        color: white;\n        padding: 20px;\n        font-size: 24px;\n        text-align: center;\n      }\n\n      /* This rule only applies when the screen is 480px wide or less */\n      @media (max-width: 480px) {\n        .banner {\n          font-size: 14px;\n          padding: 8px;\n        }\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"banner\">Mall Closes at 9pm Tonight</div>\n    <!-- Try resizing your browser window narrower to see the media query kick in -->\n  </body>\n</html>" } },
      { heading: "Recap", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "A quick look back at what you’ve built and the CSS ideas you used, so you can see your progress from blank page to styled mini project." },
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
      { heading: "JS = The Cook", videoSrc: "assets/video/placeholder-js-the-controller.mp4", body: "Think of JavaScript as the cook in a kitchen: HTML is the menu (structure), CSS is the plating (style), and JavaScript is the one actually doing things — taking orders, cooking, and serving up results. Here's one line of JavaScript: let total = 5;  Tap a piece of it below, then tap what that piece is doing. Correctly matched pieces will light up in the line below, building up an annotated version as you go.",
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
  body: "Every recipe has a format: ingredients, then steps. JavaScript syntax works the same way & statements end with a semicolon, code blocks live inside curly braces, and the computer reads everything top to bottom. Head to the Try It tab, then hover, tap, or tab through the code below to see what each piece is called and how it turns into real output & then scroll down to see that same idea running in an actual code editor.",
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
      { heading: "Simple Statements", videoSrc: "assets/video/placeholder-variables-values.mp4", body: "A statement is one complete instruction, like one line in a recipe. Statements run top to bottom, one after another, building up a result step by step.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"output\"></p>\n    <script>\n      let order = 'Table 5 order: ';\n      order = order + '1 taco, ';\n      order = order + '1 soda.';\n      document.getElementById('output').textContent = order;\n    </script>\n  </body>\n</html>" } },
      { heading: "Variables: What the Cook Keeps Track Of", videoSrc: "assets/video/placeholder-variables-values.mp4", body: "Variables store information the cook needs to remember, like an order total or how many tacos are left. Use let when the value can change, and const when it shouldn't.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"output\"></p>\n    <script>\n      let tacosLeft = 12;\n      const specialOfTheDay = 'Carnitas Taco';\n      tacosLeft = tacosLeft - 3; // 3 tacos just sold\n      document.getElementById('output').textContent =\n        specialOfTheDay + ' — tacos left: ' + tacosLeft;\n    </script>\n  </body>\n</html>" } },
      { heading: "Functions: what the cook can do (define + call)", videoSrc: "assets/video/placeholder-functions.mp4", body: "Functions are reusable blocks of instructions and your character's 'combo move' you can call anytime.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"output\"></p>\n    <script>\n      function makeTaco(filling) {\n        return filling + ' taco, coming right up!';\n      }\n\n      document.getElementById('output').textContent = makeTaco('Carnitas');\n      // Try calling makeTaco() again below with a different filling\n    </script>\n  </body>\n</html>" } },
      { heading: "Events: when something happens on the page", videoSrc: "assets/video/placeholder-events.mp4", body: "Clicks, hovers, and form submits are 'events' and triggers that make something happen.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <button id=\"bellBtn\">Ring the Order Bell</button>\n    <p id=\"output\">Waiting for an order...</p>\n    <script>\n      const bell = document.getElementById('bellBtn');\n      bell.addEventListener('click', function () {\n        document.getElementById('output').textContent = 'Order up!';\n      });\n    </script>\n  </body>\n</html>" } },
      { heading: "The DOM: What is Javascript Talking To", videoSrc: "assets/video/placeholder-events.mp4", body: "The DOM is the page itself, broken into pieces JavaScript can grab and change and every button, heading, and paragraph is an object it can talk to.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <h1 id=\"menuTitle\">Today's Menu</h1>\n    <script>\n      const title = document.getElementById('menuTitle');\n      title.style.color = 'tomato';\n      title.textContent = \"Today's Menu, Fresh and Hot\";\n    </script>\n  </body>\n</html>" } },
      { heading: "Event listeners + How to Call a Function + Updating the DOM", videoSrc: "assets/video/placeholder-events.mp4", body: "Put it all together: an event listener waits for something to happen, calls a function when it does, and that function updates the DOM so the page changes right in front of you.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <button id=\"orderBtn\">Place Order</button>\n    <p id=\"output\">Orders placed: 0</p>\n    <script>\n      let orders = 0;\n\n      function updateOrders() {\n        orders = orders + 1;\n        document.getElementById('output').textContent = 'Orders placed: ' + orders;\n      }\n\n      document.getElementById('orderBtn').addEventListener('click', updateOrders);\n    </script>\n  </body>\n</html>" } },
      { heading: "What Happens behind the scenes", videoSrc: "assets/video/placeholder-events.mp4", body: "When you click, the browser fires an event, JavaScript's listener catches it, your function runs, and the DOM updates and all in a fraction of a second.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <button id=\"goBtn\">Click Me</button>\n    <ol id=\"steps\"></ol>\n    <script>\n      const steps = document.getElementById('steps');\n\n      function logStep(text) {\n        const item = document.createElement('li');\n        item.textContent = text;\n        steps.appendChild(item);\n      }\n\n      document.getElementById('goBtn').addEventListener('click', function () {\n        logStep('1. Browser detects the click (the event)');\n        logStep('2. The listener catches it');\n        logStep('3. Your function runs');\n        logStep('4. The DOM updates on screen');\n      });\n    </script>\n  </body>\n</html>" } },
      { heading: "Activity: Order Counter", videoSrc: "assets/video/placeholder-events.mp4", body: "Build a live order counter: every click on 'New Order' should add one to the total and update the page instantly.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <button id=\"newOrderBtn\">New Order</button>\n    <p id=\"orderCount\">Total orders: 0</p>\n    <script>\n      let totalOrders = 0;\n\n      document.getElementById('newOrderBtn').addEventListener('click', function () {\n        totalOrders++;\n        document.getElementById('orderCount').textContent = 'Total orders: ' + totalOrders;\n      });\n\n      // Challenge: add a second button that resets totalOrders back to 0\n    </script>\n  </body>\n</html>" } },
      { heading: "Core variables to practice", videoSrc: "assets/video/placeholder-events.mp4", body: "Practice creating a few variables of your own: a number, a string, and a boolean and then display each one on the page.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"output\"></p>\n    <script>\n      let orderNumber = 42;        // a number\n      let customerName = 'Riley';  // a string\n      let isPaid = true;           // a boolean\n\n      document.getElementById('output').textContent =\n        'Order #' + orderNumber + ' for ' + customerName + ' — paid: ' + isPaid;\n\n      // Try adding your own variable and displaying it too\n    </script>\n  </body>\n</html>" } },
      { heading: "Statements and patterns to bank", videoSrc: "assets/video/placeholder-events.mp4", body: "A few patterns you'll reuse constantly: updating a variable, building a running total, and checking a condition with if/else.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"output\"></p>\n    <script>\n      let score = 0;\n      score = score + 1;\n\n      let message = '';\n      if (score > 0) {\n        message = 'Score is now ' + score + ' — nice!';\n      } else {\n        message = 'No points yet.';\n      }\n\n      document.getElementById('output').textContent = message;\n    </script>\n  </body>\n</html>" } },
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
      { heading: "Icebreaker", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "Name one app or website you use every day. Instagram, Spotify, and Netflix all run Python behind the scenes — what do you think it might be doing back there?" },
      { heading: "What is Python", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "Python is a computer language used to tell a machine what to do, and it’s one of the main languages you use if you want to learn concepts like data science and AI because it’s powerful but still feels pretty relatable to work with. Python is basically a tool for writing instructions, like super-precise recipes for a computer." },
      { heading: "Helpful Terms to Know", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "Key words for this unit: Python (the language itself), interpreter (the program that runs your Python code), print() (displays text on screen), and script (a saved file full of instructions)." },
      { heading: "How is Python Used?", videoSrc: "assets/video/placeholder-python-a-new-board.mp4", body: "It powers everything from apps to AI to robots." },
      { heading: "How Python Works in Practice", videoSrc: "assets/video/placeholder-python-a-new-board.mp4", body: "Python works like a restaurant. You start with a customer at the table = user with a browser (front end). They see the menu (web page) and click or type. They request (what the user wants: a page, data, or an action) as if it were an order slip. A waiter carryies the slip (network/API), just moving the request back and forth. The Kitchen is like the backend server where Python runs. This is where the actual work happens: checking the menu, combining ingredients, timing, validation, etc. This is where python can reference recipes (code) + keep track of what's kept on the pantry shelves (database information). Python follows recipe instructions (functions) and pulls ingredients (stored data). Then it sends a response as if it were a finished plate (HTML, JSON, or data) back to the customer’s browser to display. So Python specifically is the kitchen logic: how the order is interpreted, what steps are taken, how ingredients/data are combined, and what result gets sent back." },
      { heading: "Why Learn Python At My Age?", videoSrc: "assets/video/placeholder-why-python.mp4", body: "Easy to Read, has a huge community of people to help you learn, and gives you real skills to complete tasks you care about faster and in a more intelligent way." },
      { heading: "Where Python Runs", videoSrc: "assets/video/placeholder-where-python-runs.mp4", body: "Python runs almost anywhere: in a terminal on your own laptop, inside a browser-based tool like this one, on a server you never see, or on tiny devices like a Raspberry Pi. Wherever it runs, the code you write looks exactly the same." },
      { heading: "Recap", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "What's Next?", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
]
  },
  {
    id: "lesson-7",
    title: "What do you need before building Python projects?",
    theme: "Basecamp / Gear Shop",
    cards: [
      { heading: "How Are Python Fundamentals Sequenced?", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "Python talks to the computer → Stores info → Uses Rules to Decide → Repeat → Organizes → and Uses other tools." },
      { heading: "What You'll Learn", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Icebreaker", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "Think about a checklist or packing list you've used before a trip. Why does the order of steps matter? Python fundamentals work the same way and each piece builds on the one before it." },
      { heading: "Helpful Terms to Know", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "Key words for this unit: variable, data type, conditional, loop, function, and import. You'll meet each one in this section, then use all of them together in your first real projects." },
 {
  heading: "Python Syntax: How the Pieces Fit Together",
  videoSrc: "assets/video/placeholder-python-syntax.mp4",
  body: "Every line of Python is built from small pieces & keywords, punctuation, operators, and values & and each piece has an exact spot in the line. Head to the Try It tab, then hover, tap, or tab through the code below to see what each piece is called, why its punctuation matters, and how it turns into the output on the right.",
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
            { key: "colon", label: "Colon (:) — announces a new indented block is coming", shortLabel: "Colon", previewColor: "#2a6df5" },
            { key: "indent", label: "Indentation — spaces showing this line lives inside the block above", shortLabel: "Indentation", previewColor: "#0f9d58" },
            { key: "noSemicolon", label: "No semicolon needed — Python lines just end with a line break", shortLabel: "No semicolon", previewColor: "#caa000" },
          ],
          hints: {
            colon: "Look for the punctuation mark right before the line ends — it's Python's signal that an indented block follows.",
            indent: "Count the spaces before the code starts — that whitespace is what tells Python this line belongs inside something else.",
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
      { heading: "Print & Input", videoSrc: "assets/video/placeholder-print-input.mp4", body: "print('Hello!') and input('What's your name? ') are your first two Python commands.", playground: { lang: "python", code: "print('Hello!')\nname = 'Explorer'\nprint('What is your name? (edit the name variable above and Run again)')\nprint('Nice to meet you, ' + name + '!')" } },
      { heading: "Mini Challenge: Say Hello", videoSrc: "assets/video/placeholder-mini-challenge-say-hello.mp4", body: "Write a script that asks for your name and prints a custom greeting back.", playground: { lang: "python", code: "name = 'Explorer'\n\ndef greet(who):\n    print('Hey there, ' + who + '! Welcome to the trail.')\n\ngreet(name)" } },
      {
  heading: "Running a Script vs a REPL",
  videoSrc: "assets/video/placeholder-variables-types-data.mp4",
  body: "Running a script means saving your code in a file and running the whole thing at once. A REPL (Read-Evaluate-Print-Loop) runs one line at a time and shows you the result immediately, more like a conversation with the computer. Head to the Try It tab to see the exact same three lines run both ways.",
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
      { heading: "Variables & Data Types", videoSrc: "assets/video/placeholder-variables-types-data.mp4", body: "Numbers, strings, booleans; and the basic 'gear' every Python project uses.", playground: { lang: "python", code: "age = 13                  # int (whole number)\nheight = 5.2               # float (decimal number)\nname = 'Explorer'          # string (text)\nis_hiking = True           # boolean (True or False)\n\nprint(name, 'is', age, 'years old and', height, 'feet tall.')\nprint('Currently hiking:', is_hiking)" } },
      { heading: "Basic Operations", videoSrc: "assets/video/placeholder-variables-types-data.mp4", body: "Python can do math (+, -, *, /) and combine text (+) just like a calculator and a word processor rolled into one.", playground: { lang: "python", code: "trail_miles = 8\nmiles_hiked = 3\n\nprint('Miles left:', trail_miles - miles_hiked)\nprint('Total snacks needed:', trail_miles * 2)\n\nfirst_name = 'Alex'\nlast_name = 'Rivera'\nprint('Hiker: ' + first_name + ' ' + last_name)" } },
      { heading: "Naming Conventions", videoSrc: "assets/video/placeholder-variables-types-data.mp4", body: "Variable names should be lowercase with underscores between words (like trail_miles), start with a letter, and describe what they hold. Good names make your code easier for you (and everyone else) to read.", playground: { lang: "python", code: "# Good names: clear and describe what they hold\ntrail_miles = 8\nhiker_name = 'Alex'\n\n# Avoid names like these — they work, but they're confusing later on\nx = 8\nthing2 = 'Alex'\n\nprint(hiker_name, 'has', trail_miles, 'miles to go.')" } },
      { heading: "Lists & Dictionaries", videoSrc: "assets/video/placeholder-variables-types-data.mp4", body: "A list holds items in order, like a packing list. A dictionary holds labeled pairs, like a gear checklist where each item has a status.", playground: { lang: "python", code: "packing_list = ['tent', 'water filter', 'headlamp', 'map']\n\nfor item in packing_list:\n    print('Packing:', item)\n\ngear_status = {'tent': 'packed', 'water filter': 'packed', 'headlamp': 'still charging'}\nprint('Headlamp status:', gear_status['headlamp'])" } },
      { heading: "Activity: Build a Gear Checklist", videoSrc: "assets/video/placeholder-variables-types-data.mp4", body: "Create a list of at least 4 gear items, loop through it to print each one, then build a dictionary that tracks whether each item is packed.", playground: { lang: "python", code: "gear_list = ['tent', 'water filter', 'headlamp', 'map']\n\nfor item in gear_list:\n    print('Checking:', item)\n\ngear_status = {}\nfor item in gear_list:\n    gear_status[item] = True  # mark everything as packed\n\nprint(gear_status)\n\n# Challenge: mark one item as False, then print just that one item's status" } },
      { heading: "Conditionals", videoSrc: "assets/video/placeholder-conditionals.mp4", body: "if / elif / else statements are decision points on the trail and 'if this happens, do that.'", playground: { lang: "python", code: "water_bottles = 1\n\nif water_bottles == 0:\n    print('Fill up before you go!')\nelif water_bottles < 2:\n    print('You might want one more bottle.')\nelse:\n    print(\"You're set on water.\")" } },
      { heading: "Loops", videoSrc: "assets/video/placeholder-loops.mp4", body: "for and while loops repeat tasks without repeating code and like running the same drill over and over.", playground: { lang: "python", code: "checkpoints = ['trailhead', 'creek crossing', 'ridge line', 'summit']\n\nfor spot in checkpoints:\n    print('Next checkpoint:', spot)\n\n# A while loop repeats until a condition becomes false\nsteps_taken = 0\nwhile steps_taken < 3:\n    steps_taken += 1\n    print('Step', steps_taken)" } },
      { heading: "Functions & Imports", videoSrc: "assets/video/placeholder-functions-imports.mp4", body: "Functions package reusable code; imports let you bring in tools other people already built.", playground: { lang: "python", code: "import random\n\ndef pack_snack():\n    snacks = ['trail mix', 'granola bar', 'apple', 'jerky']\n    return random.choice(snacks)\n\nprint(\"Today's snack:\", pack_snack())\nprint(\"Today's snack:\", pack_snack())" } },
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
      { heading: "What You'll Learn", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Icebreaker", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Helpful Terms to Know", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Python Behind the Scenes", videoSrc: "assets/video/placeholder-python-behind-the-scenes.mp4", body: "Frameworks like Flask and Django let Python power the backend of real websites." },
      { heading: "Frontend vs. Backend", videoSrc: "assets/video/placeholder-frontend-vs-backend.mp4", body: "JavaScript usually runs in the browser (frontend); Python often runs on a server (backend)." },
      { heading: "A Simple Flask Example", videoSrc: "assets/video/placeholder-a-simple-flask-example.mp4", body: "from flask import Flask\napp = Flask(__name__)\n\n@app.route('/')\ndef home():\n    return 'Hello from Python!'", playground: { lang: "python", code: "from flask import Flask\napp = Flask(__name__)\n\n@app.route('/')\ndef home():\n    return 'Hello from Python!'\n\nif __name__ == '__main__':\n    app.run()", unsupported: true, reason: "This example needs Flask's real web server, which can't run safely in this browser sandbox." } },
      { heading: "APIs", videoSrc: "assets/video/placeholder-apis.mp4", body: "APIs are how a website's frontend asks a Python backend for data and like ordering from a menu." },
      { heading: "Fork This Starter Project â†’", videoSrc: "assets/video/placeholder-fork-this-starter-project.mp4", body: "Fork the mini Flask web app starter and build your own simple page backed by Python.", forkLink: "REPLACE_WITH_STARTER_REPO_LINK" },
      { heading: "Recap", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "What's Next?", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
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
      { heading: "You Reached the Summit", videoSrc: "assets/video/placeholder-you-reached-the-summit.mp4", body: "You've gone from 'what is a website?' to training an AI agent. Look back at the trail and that's the whole journey." },
      { heading: "Fork This Starter Project â†’", videoSrc: "assets/video/placeholder-fork-this-starter-project.mp4", body: "Fork the simple RL starter (a tiny game-playing agent) and try tweaking its rewards.", forkLink: "REPLACE_WITH_STARTER_REPO_LINK" },
      { heading: "Recap", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "End of This Road", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
]
  }
];
