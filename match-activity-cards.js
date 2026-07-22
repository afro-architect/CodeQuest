// ============================================================
// 5 'Match Activity' cards to paste into content.js
// Requires the updated app-lesson.js + lesson-layout.css (shared separately)
// ============================================================

// --- Insert into lesson-4 (What is CSS?), RIGHT BEFORE the
// "Basic selectors: element, class, ID" card ---
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
// --- Insert into lesson-4 (What is CSS?), RIGHT BEFORE the
// "Attributes in HTML..." card ---
      {
        heading: "Activity: Match the Attribute",
        videoSrc: "assets/video/placeholder-css-the-outfit.mp4",
        body: "Tap an HTML snippet, then tap what kind of attribute (if any) it's using. Correct matches will get outlined below so you can see class, id, and no-attribute elements grouped by color.",
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
      },
// --- Insert into lesson-5 (What is JavaScript?), RIGHT BEFORE the
// "Syntax: How the Cook Writes Instructions" card ---
      {
        heading: "Activity: Match the Parts",
        videoSrc: "assets/video/placeholder-js-the-controller.mp4",
        body: "Here's one line of JavaScript: let total = 5;  Tap a piece of it below, then tap what that piece is doing. Correctly matched pieces will light up in the line below, building up an annotated version as you go.",
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
// --- Insert into lesson-7 (Python fundamentals), RIGHT BEFORE the
// "Print & Input" card. This is the NEW syntax-rules card ---
// (add this one first, then the 'Match the Parts' card right after it)
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

// --- Insert into lesson-7 (Python fundamentals), RIGHT AFTER the
// card above and still BEFORE "Print & Input" ---
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