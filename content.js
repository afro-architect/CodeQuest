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
  {
    id: "lesson-4",
    title: "What is CSS?",
    theme: "Themed Mall",
    cards: [
      { heading: "What You'll Learn", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "You’ll go from seeing web pages as fixed screens to building your own simple, working pages and mini projects that you can actually click, change, and remix yourself." },
      { heading: "Icebreaker", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "A quick warm-up to share how you already use websites and apps, and to imagine what you’d change or build if you had the tools." },
      { heading: "Helpful Terms to Know", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "A short glossary of words you’ll see a lot in this course—like HTML, CSS, JavaScript, element, and browser—so the rest of the lessons feel more familiar." },
      { heading: "What is CSS?", videoSrc: "assets/video/placeholder-css-the-outfit.mp4", body: "CSS is the coding language that dresses up your HTML structure with color, fonts, spacing, and layout so a page feels designed, not just plain text." },
      { heading: "Where CSS Lives: inline, <style>, external stylesheet", videoSrc: "assets/video/placeholder-css-the-outfit.mp4", body: "You’ll see the three main places CSS can live—directly on an element, inside a <style> block, or in a separate stylesheet—and when each approach is used in real projects." },
      { heading: "Activity: TBD", videoSrc: "assets/video/placeholder-css-the-outfit.mp4", body: "... some sort of interactive knowledge check related to inline, style tags, and stylesheets..." },
      { heading: "What a CSS rule looks like: selector + curly braces + property: value;", videoSrc: "assets/video/placeholder-css-the-outfit.mp4", body: "You’ll break down one CSS rule into its parts—a selector, curly braces, and property–value pairs—so you can read and write basic styles confidently." },
      { heading: "Basic selectors: element, class, ID", videoSrc: "assets/video/placeholder-selectors.mp4", body: "You’ll learn how to target elements by type, class, or id—like choosing a style for all headers vs. one specific header — so you can control exactly what gets styled." },
      { heading: "Attributes in HTML: especially class and id, and how selectors use them", videoSrc: "assets/video/placeholder-css-the-outfit.mp4", body: "You’ll see how HTML attributes like class and id label elements, and how CSS selectors use those labels to apply styles to the right parts of the page." },
      { heading: "Activity: TBD", videoSrc: "assets/video/placeholder-css-the-outfit.mp4", body: "...some sort of interactive knowledge check that is selector related..." },
      { heading: "Core visual properties: color, fonts, paragraphs, spacing", videoSrc: "assets/video/placeholder-colors-fonts-spacing.mp4", body: "You’ll play with core properties like color, font-family, line-height, margin, and padding to shape how text and sections look and feel on the page." },
      { heading: "Activity: TBD", videoSrc: "assets/video/placeholder-css-the-outfit.mp4", body: "Hands-on tweaks to the colors, fonts, and spacing of a simple page, so you can see how a few property changes transform the overall vibe." },
      { heading: "The Box Model", videoSrc: "assets/video/placeholder-the-box-model.mp4", body: "You’ll learn that every element is a box—with content, padding, border, and margin—and see how those layers interact like packaging around a product." },
      { heading: "Mini Challenge: Restyle a Card", videoSrc: "assets/video/placeholder-mini-challenge-restyle-a-card.mp4", body: "Change the color, font, and spacing of a sample card for an online store item (with starter code for a fake site provided).", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      body { font-family: sans-serif; background: #fdeed0; }\n      .card {\n        max-width: 260px;\n        margin: 24px auto;\n        padding: 16px;\n        background: white;\n        border-radius: 12px;\n        box-shadow: 0 4px 14px rgba(0,0,0,0.15);\n        text-align: center;\n      }\n      .card h3 { color: #ff5a3d; margin: 8px 0 4px; }\n      .card p { color: #5b5f78; font-size: 14px; }\n    </style>\n  </head>\n  <body>\n    <div class=\"card\">\n      <h3>Jordan Rivera</h3>\n      <p>Skate Park Regular</p>\n    </div>\n  </body>\n</html>" } },
      { heading: "Layout & Grids", videoSrc: "assets/video/placeholder-css-the-outfit.mp4", body: "You’ll learn how CSS layout tools like flexbox or simple grids can line up cards, buttons, and sections, turning a vertical stack into a neat, organized layout." },
      { heading: "Activity: TBD", videoSrc: "assets/video/placeholder-css-the-outfit.mp4", body: "A hands-on activity where you rearrange a few cards or sections into rows and columns using layout properties, and see how small CSS changes reshape the page." },      
      { heading: "Responsive CSS", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "You’ll see how to use CSS so your pages adapt to different screen sizes—like phones, tablets, and laptops—by adjusting layout, spacing, and text with simple rules." },
      { heading: "Recap", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "A quick look back at what you’ve built and the CSS ideas you used, so you can see your progress from blank page to styled mini project." },
      { heading: "What's Next?", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
]
  },
{
  id: "lesson-5",
  title: "What is JavaScript?",
  theme: "Arcade",
  cards: [
    {
      heading: "What You'll Learn",
      videoSrc: "assets/video/placeholder-course-intro.mp4",
      body: "Learn how HTML, CSS, and JavaScript work together by building small interactive pages and mini projects."
    },
    {
      heading: "Icebreaker",
      videoSrc: "assets/video/placeholder-course-intro.mp4",
      body: "Share how you already use apps and imagine what you’d build or change if you could control the code."
    },
    {
      heading: "Helpful Terms to Know",
      videoSrc: "assets/video/placeholder-course-intro.mp4",
      body: "Get a quick glossary of words like variable, function, event, and DOM before you start coding."
    },
    {
      heading: "What is Javascript?",
      videoSrc: "assets/video/placeholder-js-the-controller.mp4",
      body: "JavaScript is the language that makes web pages interactive, telling the browser what to do when users act."
    },
    {
      heading: "JS = The Cook",
      videoSrc: "assets/video/placeholder-js-the-controller.mp4",
      body: "JavaScript is the cook that reacts to orders, runs steps on events, and updates what you see on the page."
    },
    {
      heading: "Syntax: How the Cook Writes Instructions",
      videoSrc: "assets/video/placeholder-js-the-controller.mp4",
      body: "Syntax is JavaScript’s grammar—the rules for writing instructions the browser can understand."
    },
    {
      heading: "Simple Statements",
      videoSrc: "assets/video/placeholder-variables-values.mp4",
      body: "Start with one-line instructions like console.log(...) to see JavaScript run steps from top to bottom."
    },
    {
      heading: "Variables: What the Cook Keeps Track Of",
      videoSrc: "assets/video/placeholder-variables-values.mp4",
      body: "Variables store information—like scores, names, or flags—so JavaScript can remember values as it runs."
    },
    {
      heading: "Functions: what the cook can do (define + call)",
      videoSrc: "assets/video/placeholder-functions.mp4",
      body: "Functions are named actions—mini recipes you define once and call whenever you need them."
    },
    {
      heading: "Events: when something happens on the page",
      videoSrc: "assets/video/placeholder-events.mp4",
      body: "Events are clicks, key presses, and submits that signal JavaScript to run code in response."
    },
    {
      heading: "The DOM: What is Javascript Talking To",
      videoSrc: "assets/video/placeholder-events.mp4",
      body: "The DOM is the browser’s live map of page elements that JavaScript can find, change, and listen to."
    },
    {
      heading: "Event listeners + How to Call a Function + Updating the DOM",
      videoSrc: "assets/video/placeholder-events.mp4",
      body: "Attach listeners so a click on a DOM element calls your function, updates variables, and changes on-screen text."
    },
    {
      heading: "What Happens behind the scenes",
      videoSrc: "assets/video/placeholder-events.mp4",
      body: "The browser reads your script, sets up variables, functions, and listeners, then runs code when events occur."
    },
    {
      heading: "Activity: Order Counter",
      videoSrc: "assets/video/placeholder-events.mp4",
      body: "Build an Order button that raises a counter and updates a status message each time it’s clicked."
    },
    {
      heading: "Core variables to practice",
      videoSrc: "assets/video/placeholder-events.mp4",
      body: "Practice using numbers, strings, and true/false variables to track scores, names, and simple states."
    },
    {
      heading: "Statements and patterns to bank",
      videoSrc: "assets/video/placeholder-events.mp4",
      body: "Reuse patterns like console.log, score = score + 1, if/else checks, and simple function calls."
    },
    {
      heading: ,
  {
    id: "lesson-7",
    title: "What do you need before building Python projects?",
    theme: "Basecamp / Gear Shop",
    cards: [
      { heading: "What You'll Learn", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Icebreaker", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Helpful Terms to Know", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "Variables, Types & Data", videoSrc: "assets/video/placeholder-variables-types-data.mp4", body: "Numbers, strings, booleans, and lists and the basic 'gear' every Python project uses." },
      { heading: "Conditionals", videoSrc: "assets/video/placeholder-conditionals.mp4", body: "if / elif / else statements are decision points on the trail and 'if this happens, do that.'" },
      { heading: "Loops", videoSrc: "assets/video/placeholder-loops.mp4", body: "for and while loops repeat tasks without repeating code and like running the same drill over and over." },
      { heading: "Functions & Imports", videoSrc: "assets/video/placeholder-functions-imports.mp4", body: "Functions package reusable code; imports let you bring in tools other people already built." },
      { heading: "Debugging Basics", videoSrc: "assets/video/placeholder-debugging-basics.mp4", body: "Error messages aren't scary and they're clues. Read them top to bottom before panicking." },
      { heading: "Gear Check Before the Climb", videoSrc: "assets/video/placeholder-gear-check-before-the-climb.mp4", body: "You now have everything you need to start building real Python projects. Let's go." },
      { heading: "Recap", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
      { heading: "What's Next?", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects and not just read about them." },
]
  }
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
