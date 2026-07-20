// content.js
// Placeholder carousel content for the Web + Python Quest Map course.
// Each lesson object matches a node in progress.js (same id).
// Swap in real text/media/links later — structure is ready to use as-is.

const LESSON_CONTENT = [
  {
    id: "lesson-1",
    title: "What Makes a Website?",
    theme: "Trailhead / Campsite",
    cards: [
      { heading: "Course Introduction", videoSrc: "assets/video/placeholder-course-intro.mp4", body: "By the end of this journey you'll have built your own working pages and mini projects — not just read about them." }
      { heading: "Every Website is a Conversation", videoSrc: "assets/video/placeholder-every-website-is-a-conversation.mp4", body: "Websites are how computers talk to you — through text, images, buttons, and links. Every click is you 'talking back.'" },
      { heading: "Three Layers of Every Site", videoSrc: "assets/video/placeholder-three-layers-of-every-site.mp4", body: "HTML = structure (the bones), CSS = style (the skin/outfit), JavaScript = behavior (the reflexes). You'll learn all three on this trail." },
      { heading: "Client vs. Server", videoSrc: "assets/video/placeholder-client-vs-server.mp4", body: "Your browser (the client) asks a server for a page. The server sends back the ingredients, and your browser assembles them for you." },
          ]
  },
  {
    id: "lesson-2",
    title: "Parts of a Website",
    theme: "Skate Park",
    cards: [
      { heading: "Header, Body, Footer", videoSrc: "assets/video/placeholder-header-body-footer.mp4", body: "Most pages follow the same skeleton: a header up top, main content in the middle, footer info at the bottom." },
      { heading: "Navigation Bars", videoSrc: "assets/video/placeholder-navigation-bars.mp4", body: "Menus let people move around a site without getting lost — like signs pointing to the ramps and rails at a skate park." },
      { heading: "Content Blocks", videoSrc: "assets/video/placeholder-content-blocks.mp4", body: "Text, images, buttons, and forms are the 'tricks' a page can do. Combine them to build any layout." },
      { heading: "Responsive Design", videoSrc: "assets/video/placeholder-responsive-design.mp4", body: "A good site looks great on a phone or a laptop — adapting to any terrain, just like a good skater." }
    ]
  },
  {
    id: "lesson-3",
    title: "What is HTML?",
    theme: "Snack Truck Row",
    cards: [
      { heading: "HTML = The Ingredients", videoSrc: "assets/video/placeholder-html-the-ingredients.mp4", body: "Tags are like ingredients you line up and combine to build a page." },
      { heading: "Tags & Elements", videoSrc: "assets/video/placeholder-tags-elements.mp4", body: "Tags come in pairs: <p>...</p>, <h1>...</h1>. What's between the tags is the content." },
      { heading: "Nesting", videoSrc: "assets/video/placeholder-nesting.mp4", body: "Tags can go inside other tags — like a burrito wrapped in foil wrapped in a bag." },
      { heading: "Your First HTML Page", videoSrc: "assets/video/placeholder-your-first-html-page.mp4", body: "<!DOCTYPE html>\n<html>\n  <body>\n    <h1>Hello, world!</h1>\n  </body>\n</html>", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <h1>Hello, world!</h1>\n  </body>\n</html>" } },
      { heading: "Practice: Build a Menu", videoSrc: "assets/video/placeholder-practice-build-a-menu.mp4", body: "Try listing your 3 favorite snacks using <ul> and <li> tags.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <h2>My Favorite Snacks</h2>\n    <ul>\n      <li>Popcorn</li>\n      <li>Churros</li>\n    </ul>\n  </body>\n</html>" } }
    ]
  },
  {
    id: "lesson-4",
    title: "What is CSS?",
    theme: "Themed Mall",
    cards: [
      { heading: "CSS = The Outfit", videoSrc: "assets/video/placeholder-css-the-outfit.mp4", body: "CSS dresses up your HTML skeleton with color, spacing, and style." },
      { heading: "Selectors", videoSrc: "assets/video/placeholder-selectors.mp4", body: "You can target elements by tag, class, or id — like picking an outfit for everyone vs. picking one just for you." },
      { heading: "Colors, Fonts, Spacing", videoSrc: "assets/video/placeholder-colors-fonts-spacing.mp4", body: "Properties like color, font-family, margin, and padding control how things look and feel." },
      { heading: "The Box Model", videoSrc: "assets/video/placeholder-the-box-model.mp4", body: "Every element is a box: content, padding, border, margin — like layers of packaging around a product." },
      { heading: "Mini Challenge: Restyle a Card", videoSrc: "assets/video/placeholder-mini-challenge-restyle-a-card.mp4", body: "Change the color, font, and spacing of a sample profile card.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      body { font-family: sans-serif; background: #fdeed0; }\n      .card {\n        max-width: 260px;\n        margin: 24px auto;\n        padding: 16px;\n        background: white;\n        border-radius: 12px;\n        box-shadow: 0 4px 14px rgba(0,0,0,0.15);\n        text-align: center;\n      }\n      .card h3 { color: #ff5a3d; margin: 8px 0 4px; }\n      .card p { color: #5b5f78; font-size: 14px; }\n    </style>\n  </head>\n  <body>\n    <div class=\"card\">\n      <h3>Jordan Rivera</h3>\n      <p>Skate Park Regular</p>\n    </div>\n  </body>\n</html>" } }
    ]
  },
  {
    id: "lesson-5",
    title: "What is JavaScript?",
    theme: "Arcade",
    cards: [
      { heading: "JS = The Controller", videoSrc: "assets/video/placeholder-js-the-controller.mp4", body: "JavaScript makes a page interactive — it responds to clicks, typing, and time." },
      { heading: "Variables & Values", videoSrc: "assets/video/placeholder-variables-values.mp4", body: "Variables store information, like tracking a score in a game: let score = 0;" },
      { heading: "Events", videoSrc: "assets/video/placeholder-events.mp4", body: "Clicks, hovers, and form submits are 'events' — triggers that make something happen." },
      { heading: "Functions", videoSrc: "assets/video/placeholder-functions.mp4", body: "Functions are reusable blocks of instructions — your character's 'combo move' you can call anytime." },
      { heading: "Mini Challenge: Button Click Counter", videoSrc: "assets/video/placeholder-mini-challenge-button-click-counter.mp4", body: "Build a button that counts how many times it's been clicked.", playground: { lang: "web", code: "<!DOCTYPE html>\n<html>\n  <body>\n    <button id=\"counterBtn\">Clicked 0 times</button>\n    <script>\n      var count = 0;\n      var btn = document.getElementById('counterBtn');\n      btn.addEventListener('click', function () {\n        count++;\n        btn.textContent = 'Clicked ' + count + ' times';\n      });\n    </script>\n  </body>\n</html>" } }
    ]
  },
  {
    id: "lesson-6",
    title: "What is Python?",
    theme: "Surf Break",
    cards: [
      { heading: "Python = A New Board", videoSrc: "assets/video/placeholder-python-a-new-board.mp4", body: "Different language, different feel — but you're still surfing the same ocean of logic you learned in JS." },
      { heading: "Why Python?", videoSrc: "assets/video/placeholder-why-python.mp4", body: "Readable syntax, huge community, and it powers everything from apps to AI to robots." },
      { heading: "Where Python Runs", videoSrc: "assets/video/placeholder-where-python-runs.mp4", body: "Not just in browsers — scripts, servers, data pipelines, and even physical robots run on Python." },
      { heading: "Print & Input", videoSrc: "assets/video/placeholder-print-input.mp4", body: "print('Hello!') and input('What's your name? ') are your first two Python commands.", playground: { lang: "python", code: "print('Hello!')\nname = 'Explorer'\nprint('What is your name? (edit the name variable above and Run again)')\nprint('Nice to meet you, ' + name + '!')" } },
      { heading: "Mini Challenge: Say Hello", videoSrc: "assets/video/placeholder-mini-challenge-say-hello.mp4", body: "Write a script that asks for your name and prints a custom greeting back.", playground: { lang: "python", code: "name = 'Explorer'\n\ndef greet(who):\n    print('Hey there, ' + who + '! Welcome to the trail.')\n\ngreet(name)" } }
    ]
  },
  {
    id: "lesson-7",
    title: "What do you need before building Python projects?",
    theme: "Basecamp / Gear Shop",
    cards: [
      { heading: "Variables, Types & Data", videoSrc: "assets/video/placeholder-variables-types-data.mp4", body: "Numbers, strings, booleans, and lists — the basic 'gear' every Python project uses." },
      { heading: "Conditionals", videoSrc: "assets/video/placeholder-conditionals.mp4", body: "if / elif / else statements are decision points on the trail — 'if this happens, do that.'" },
      { heading: "Loops", videoSrc: "assets/video/placeholder-loops.mp4", body: "for and while loops repeat tasks without repeating code — like running the same drill over and over." },
      { heading: "Functions & Imports", videoSrc: "assets/video/placeholder-functions-imports.mp4", body: "Functions package reusable code; imports let you bring in tools other people already built." },
      { heading: "Debugging Basics", videoSrc: "assets/video/placeholder-debugging-basics.mp4", body: "Error messages aren't scary — they're clues. Read them top to bottom before panicking." },
      { heading: "Gear Check Before the Climb", videoSrc: "assets/video/placeholder-gear-check-before-the-climb.mp4", body: "You now have everything you need to start building real Python projects. Let's go." }
    ]
  },
  {
    id: "lesson-8",
    title: "Python in Websites",
    theme: "Zipline Canopy",
    cards: [
      { heading: "Python Behind the Scenes", videoSrc: "assets/video/placeholder-python-behind-the-scenes.mp4", body: "Frameworks like Flask and Django let Python power the backend of real websites." },
      { heading: "Frontend vs. Backend", videoSrc: "assets/video/placeholder-frontend-vs-backend.mp4", body: "JavaScript usually runs in the browser (frontend); Python often runs on a server (backend)." },
      { heading: "A Simple Flask Example", videoSrc: "assets/video/placeholder-a-simple-flask-example.mp4", body: "from flask import Flask\napp = Flask(__name__)\n\n@app.route('/')\ndef home():\n    return 'Hello from Python!'", playground: { lang: "python", code: "from flask import Flask\napp = Flask(__name__)\n\n@app.route('/')\ndef home():\n    return 'Hello from Python!'\n\nif __name__ == '__main__':\n    app.run()", unsupported: true, reason: "This example needs Flask's real web server, which can't run safely in this browser sandbox." } },
      { heading: "APIs", videoSrc: "assets/video/placeholder-apis.mp4", body: "APIs are how a website's frontend asks a Python backend for data — like ordering from a menu." },
      { heading: "Fork This Starter Project →", videoSrc: "assets/video/placeholder-fork-this-starter-project.mp4", body: "Fork the mini Flask web app starter and build your own simple page backed by Python.", forkLink: "REPLACE_WITH_STARTER_REPO_LINK" }
    ]
  },
  {
    id: "lesson-9",
    title: "Python for Automating Tasks",
    theme: "Night Market",
    cards: [
      { heading: "Why Automate?", videoSrc: "assets/video/placeholder-why-automate.mp4", body: "Computers are great at repeating boring tasks so you don't have to." },
      { heading: "Scripts vs. Manual Work", videoSrc: "assets/video/placeholder-scripts-vs-manual-work.mp4", body: "Renaming 100 files by hand takes forever. A 5-line script can do it in a second." },
      { heading: "Real Examples", videoSrc: "assets/video/placeholder-real-examples.mp4", body: "Auto-sorting downloads, scheduling social posts, batch-renaming photos, sending reminder texts." },
      { heading: "Libraries That Help", videoSrc: "assets/video/placeholder-libraries-that-help.mp4", body: "os, shutil, and schedule are common tools for automation scripts.", playground: { lang: "python", code: "import os\n\n# Make a few pretend files in Pyodide's in-memory filesystem\nfor i in range(1, 4):\n    with open('note' + str(i) + '.txt', 'w') as f:\n        f.write('This is note number ' + str(i))\n\nprint('Files created:')\nfor name in os.listdir('.'):\n    if name.endswith('.txt'):\n        print(' -', name)" } },
      { heading: "Fork This Starter Project →", videoSrc: "assets/video/placeholder-fork-this-starter-project.mp4", body: "Fork the file-renaming automation starter and adapt it to something you actually need to automate.", forkLink: "REPLACE_WITH_STARTER_REPO_LINK" }
    ]
  },
  {
    id: "lesson-10",
    title: "Python Managing Files Locally",
    theme: "Backstage Pass",
    cards: [
      { heading: "Reading & Writing Files", videoSrc: "assets/video/placeholder-reading-writing-files.mp4", body: "open(), .read(), and .write() let Python create, read, and edit files on your computer.", playground: { lang: "python", code: "# This runs against a virtual in-memory filesystem \u2014 it never touches your real computer.\nwith open('trail_log.txt', 'w') as f:\n    f.write('Day 1: reached the backstage pass stop!')\n\nwith open('trail_log.txt', 'r') as f:\n    contents = f.read()\n\nprint('File contents:')\nprint(contents)" } },
      { heading: "Folders & Paths", videoSrc: "assets/video/placeholder-folders-paths.mp4", body: "Python can navigate your computer's folder structure just like you do by clicking through Finder/Explorer." },
      { heading: "Organizing Data", videoSrc: "assets/video/placeholder-organizing-data.mp4", body: "Rename, move, and sort files automatically based on rules you write." },
      { heading: "Safety First", videoSrc: "assets/video/placeholder-safety-first.mp4", body: "Be extra careful with delete commands — always test on a copy of your files first." },
      { heading: "Fork This Starter Project →", videoSrc: "assets/video/placeholder-fork-this-starter-project.mp4", body: "Fork the file-organizer starter and build a script that tidies up a messy folder.", forkLink: "REPLACE_WITH_STARTER_REPO_LINK" }
    ]
  },
  {
    id: "lesson-11",
    title: "Python in Data Science",
    theme: "Stadium — Big Game Night",
    cards: [
      { heading: "Data is Everywhere", videoSrc: "assets/video/placeholder-data-is-everywhere.mp4", body: "Stats, scores, and trends are just numbers waiting to tell a story — like a box score after a big game." },
      { heading: "Pandas & Spreadsheets", videoSrc: "assets/video/placeholder-pandas-spreadsheets.mp4", body: "The pandas library loads spreadsheets/CSVs into Python so you can explore them with code.", playground: { lang: "python", loadPackages: ["pandas"], code: "import pandas as pd\n\ndata = {\n    'player': ['Ari', 'Sam', 'Lee', 'Kai'],\n    'points': [18, 24, 9, 31]\n}\ndf = pd.DataFrame(data)\n\nprint(df)\nprint()\nprint('Top scorer:', df.loc[df['points'].idxmax(), 'player'])" } },
      { heading: "Visualizing Data", videoSrc: "assets/video/placeholder-visualizing-data.mp4", body: "Turning raw numbers into charts is like turning a stat sheet into a scoreboard everyone can read." },
      { heading: "Asking Questions with Data", videoSrc: "assets/video/placeholder-asking-questions-with-data.mp4", body: "Example: who's the real MVP this season based on the numbers, not just vibes?" },
      { heading: "Fork This Starter Project →", videoSrc: "assets/video/placeholder-fork-this-starter-project.mp4", body: "Fork the sports/data-analysis starter notebook and explore a dataset you care about.", forkLink: "REPLACE_WITH_STARTER_REPO_LINK" }
    ]
  },
  {
    id: "lesson-12",
    title: "Python in LLMs",
    theme: "Chatbot Alley",
    cards: [
      { heading: "What's an LLM?", videoSrc: "assets/video/placeholder-what-s-an-llm.mp4", body: "A large language model predicts the next most likely word, over and over, based on patterns it learned from huge amounts of text." },
      { heading: "How Chatbots 'Think'", videoSrc: "assets/video/placeholder-how-chatbots-think.mp4", body: "Text gets broken into tokens, sent through the model, and turned back into a response." },
      { heading: "Bias & Limitations", videoSrc: "assets/video/placeholder-bias-limitations.mp4", body: "LLMs learn from human-written data — so they can also learn and repeat human biases. Always question the output." },
      { heading: "Calling an LLM API in Python", videoSrc: "assets/video/placeholder-calling-an-llm-api-in-python.mp4", body: "response = client.chat.completions.create(\n    model='...',\n    messages=[{'role':'user','content':'Hi!'}]\n)", playground: { lang: "python", code: "from some_llm_sdk import Client\n\nclient = Client(api_key='YOUR_API_KEY')\nresponse = client.chat.completions.create(\n    model='...',\n    messages=[{'role': 'user', 'content': 'Hi!'}]\n)\nprint(response.choices[0].message.content)", unsupported: true, reason: "This example needs a real API key and a live network call, which can't run safely in this browser sandbox." } },
      { heading: "Fork This Starter Project →", videoSrc: "assets/video/placeholder-fork-this-starter-project.mp4", body: "Fork the mini-chatbot starter and build a bot with its own personality.", forkLink: "REPLACE_WITH_STARTER_REPO_LINK" }
    ]
  },
  {
    id: "lesson-13",
    title: "Python in Computer Vision",
    theme: "Photo Booth",
    cards: [
      { heading: "How Computers 'See'", videoSrc: "assets/video/placeholder-how-computers-see.mp4", body: "An image is just a grid of numbers (pixels) — computer vision is math applied to those grids." },
      { heading: "Detecting Faces & Objects", videoSrc: "assets/video/placeholder-detecting-faces-objects.mp4", body: "Models can be trained to find faces, objects, or text inside an image." },
      { heading: "Real-World Uses", videoSrc: "assets/video/placeholder-real-world-uses.mp4", body: "Photo filters, self-driving cars, sports instant-replay tech, and security cameras all use CV." },
      { heading: "A Simple CV Example", videoSrc: "assets/video/placeholder-a-simple-cv-example.mp4", body: "import cv2\nimg = cv2.imread('photo.jpg')\nfaces = face_cascade.detectMultiScale(img)", playground: { lang: "python", code: "import cv2\n\nimg = cv2.imread('photo.jpg')\nfaces = face_cascade.detectMultiScale(img)\nprint('Faces found:', len(faces))", unsupported: true, reason: "This example needs OpenCV (cv2), which isn't available in this browser sandbox." } },
      { heading: "Fork This Starter Project →", videoSrc: "assets/video/placeholder-fork-this-starter-project.mp4", body: "Fork the face/object-detection starter and try it on your own photos.", forkLink: "REPLACE_WITH_STARTER_REPO_LINK" }
    ]
  },
  {
    id: "lesson-14",
    title: "Python in Neural Networks",
    theme: "Rooftop Observatory",
    cards: [
      { heading: "Inspired by Brains", videoSrc: "assets/video/placeholder-inspired-by-brains.mp4", body: "Neural networks are made of connected 'neurons' in layers — a bit like a constellation of stars linked together." },
      { heading: "How a Neural Net Learns", videoSrc: "assets/video/placeholder-how-a-neural-net-learns.mp4", body: "It takes inputs, makes a guess, checks how wrong it was, and adjusts — over and over, thousands of times." },
      { heading: "Layers & Activation", videoSrc: "assets/video/placeholder-layers-activation.mp4", body: "Each layer transforms the data a little more, passing it forward until a final answer comes out." },
      { heading: "A Tiny Neural Net in Code", videoSrc: "assets/video/placeholder-a-tiny-neural-net-in-code.mp4", body: "model = Sequential([\n  Dense(8, activation='relu'),\n  Dense(1, activation='sigmoid')\n])", playground: { lang: "python", code: "from tensorflow.keras.models import Sequential\nfrom tensorflow.keras.layers import Dense\n\nmodel = Sequential([\n    Dense(8, activation='relu'),\n    Dense(1, activation='sigmoid')\n])\nmodel.summary()", unsupported: true, reason: "This example needs TensorFlow/Keras, which is too heavy to load in this browser sandbox." } },
      { heading: "Fork This Starter Project →", videoSrc: "assets/video/placeholder-fork-this-starter-project.mp4", body: "Fork the tiny neural-network starter and train it on a simple dataset.", forkLink: "REPLACE_WITH_STARTER_REPO_LINK" }
    ]
  },
  {
    id: "lesson-15",
    title: "Python in Reinforcement Learning",
    theme: "Summit / Skyline Finish Line",
    cards: [
      { heading: "Learning by Trial & Reward", videoSrc: "assets/video/placeholder-learning-by-trial-reward.mp4", body: "Reinforcement learning is like leveling up in a video game — try something, get a reward or penalty, adjust your strategy." },
      { heading: "Agents, Actions, Rewards", videoSrc: "assets/video/placeholder-agents-actions-rewards.mp4", body: "An 'agent' takes 'actions' in an environment and receives 'rewards' that shape what it tries next." },
      { heading: "Real-World RL", videoSrc: "assets/video/placeholder-real-world-rl.mp4", body: "Game-playing AI, warehouse robots, and recommendation systems all use reinforcement learning." },
      { heading: "A Simple RL Example", videoSrc: "assets/video/placeholder-a-simple-rl-example.mp4", body: "A basic reward loop: choose action → observe result → update strategy → repeat.", playground: { lang: "python", code: "import random\n\n# A tiny reward loop: the agent picks 'left' or 'right' and learns\n# which one tends to pay off, purely from trial and reward.\naction_values = {'left': 0.0, 'right': 0.0}\nlearning_rate = 0.1\n\ndef get_reward(action):\n    # 'right' secretly pays off more often \u2014 the agent has to discover this\n    return 1 if (action == 'right' and random.random() < 0.7) else 0\n\nfor step in range(20):\n    action = max(action_values, key=action_values.get) if random.random() > 0.2 else random.choice(list(action_values))\n    reward = get_reward(action)\n    action_values[action] += learning_rate * (reward - action_values[action])\n\nprint('Learned action values after 20 tries:')\nfor a, v in action_values.items():\n    print(' ', a, '->', round(v, 3))\nprint('Best action found:', max(action_values, key=action_values.get))" } },
      { heading: "You Reached the Summit", videoSrc: "assets/video/placeholder-you-reached-the-summit.mp4", body: "You've gone from 'what is a website?' to training an AI agent. Look back at the trail — that's the whole journey." },
      { heading: "Fork This Starter Project →", videoSrc: "assets/video/placeholder-fork-this-starter-project.mp4", body: "Fork the simple RL starter (a tiny game-playing agent) and try tweaking its rewards.", forkLink: "REPLACE_WITH_STARTER_REPO_LINK" }
    ]
  }
];
