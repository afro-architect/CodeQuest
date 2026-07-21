// app-lesson.js â€” shared behavior for every lesson-N.html page: renders the
// sidebar mini-course (stop accordion + sub-lesson list), the video player +
// tabs content browser for the active sub-lesson, wires the fixed
// Stamp My Passport button, dark-mode toggle, and the locked-page guard.
//
// NOTE: completeLesson()/getProgress()/getLessonState() come from progress.js
// and are NOT modified by this file â€” this file only reads/calls them exactly
// as the previous carousel version did.

(function () {
  "use strict";

  var LESSON_ID = document.body.getAttribute("data-lesson-id");
  var lesson = LESSON_CONTENT.find(function (l) {
    return l.id === LESSON_ID;
  });
  var nodeMeta = getNodeMeta(LESSON_ID);

  if (!lesson) {
    console.error("Unknown lesson id:", LESSON_ID);
    return;
  }

  // ---- Guard: redirect back to roadmap if this lesson is still locked ----
  var state = getLessonState(LESSON_ID);
  if (state === "locked") {
    window.location.replace("roadmap.html");
    return;
  }

  // ---- Populate banner + title ----
  document.getElementById("lesson-title").textContent = lesson.title;
  document.getElementById("lesson-theme-tag").textContent = lesson.theme;
  var bannerImg = document.getElementById("lesson-banner-img");
  if (nodeMeta) {
    bannerImg.src = nodeMeta.banner;
    bannerImg.alt = lesson.theme + " illustrated banner for " + lesson.title;
  }
  document.title = lesson.title + " â€” Quest Map";

  var cards = lesson.cards;
  var current = 0; // index of active sub-lesson within this stop
  var viewed = {}; // sub-lesson index -> true, once opened this session

  // =========================================================================
  // SIDEBAR: stop accordion (current stop expanded w/ sub-lessons, other 14
  // collapsed headers that route to their lesson-N.html when unlocked).
  // =========================================================================
  var accordionEl = document.getElementById("stop-accordion");

  function renderAccordion() {
    accordionEl.innerHTML = "";

    // Only render THIS stop â€” other stops are intentionally hidden from the
    // sidebar so students stay focused on the current unit's sub-lessons.
    var nodeIdx = QUEST_NODES.findIndex(function (n) {
      return n.id === LESSON_ID;
    });
    var node = QUEST_NODES[nodeIdx];
    var nodeLesson = LESSON_CONTENT.find(function (l) {
      return l.id === node.id;
    });

    var item = document.createElement("div");
    item.className = "stop-item is-current";

    var header = document.createElement("div");
    header.className = "stop-header stop-header--static";

    var idxChip = document.createElement("span");
    idxChip.className = "stop-index";
    idxChip.textContent = String(nodeIdx + 1);
    header.appendChild(idxChip);

    var titleSpan = document.createElement("span");
    titleSpan.className = "stop-title";
    titleSpan.textContent = nodeLesson ? nodeLesson.title : node.shortLabel;
    header.appendChild(titleSpan);

    item.appendChild(header);

    var listWrap = document.createElement("div");
    listWrap.className = "sublesson-list";
    var ul = document.createElement("ul");
    ul.setAttribute("role", "list");

    cards.forEach(function (card, i) {
      var li = document.createElement("li");
      var row = document.createElement("button");
      row.type = "button";
      row.className = "sublesson-row";
      row.setAttribute("data-sub-index", String(i));

      var check = document.createElement("span");
      check.className = "sub-check";
      check.innerHTML =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>';
      row.appendChild(check);

      var label = document.createElement("span");
      label.className = "sub-label";
      label.textContent = card.heading;
      row.appendChild(label);

      row.addEventListener("click", function () {
        openSubLesson(i);
      });

      li.appendChild(row);
      ul.appendChild(li);
    });

    listWrap.appendChild(ul);
    item.appendChild(listWrap);
    accordionEl.appendChild(item);

    syncSidebarStates();
  }

  function syncSidebarStates() {
    var rows = accordionEl.querySelectorAll(".sublesson-row");
    rows.forEach(function (row) {
      var i = Number(row.getAttribute("data-sub-index"));
      row.classList.toggle("is-active", i === current);
      row.classList.toggle("is-viewed", !!viewed[i]);
      row.setAttribute("aria-current", i === current ? "true" : "false");
    });
  }

  // =========================================================================
  // VIDEO PLAYER
  // =========================================================================
  var videoPlayerEl = document.getElementById("video-player");
  var videoEl = document.getElementById("lesson-video");
  var videoPoster = document.getElementById("video-poster");
  var videoPosterLabel = document.getElementById("video-poster-label");
  var videoPlayBtn = document.getElementById("video-play-btn");

  function renderVideo(card) {
    videoPlayerEl.classList.remove("is-playing");
    videoEl.pause();
    videoEl.removeAttribute("src");
    videoEl.setAttribute("data-src", card.videoSrc || "");
    videoEl.load();
    videoPosterLabel.textContent = card.heading;
  }

  videoPlayBtn.addEventListener("click", function () {
    var src = videoEl.getAttribute("data-src");
    if (src) {
      videoEl.src = src;
      videoEl.play().catch(function () {
        /* placeholder source may not resolve â€” poster stays as fallback */
      });
    }
    videoPlayerEl.classList.add("is-playing");
  });

  // =========================================================================
  // TABS: Description / Try It / Resources / Discussion
  // =========================================================================
  var tabBtns = document.querySelectorAll(".tab-btn");
  var tabPanels = document.querySelectorAll(".tab-panel");
  var tryItTabBtn = document.getElementById("tryit-tab-btn");

  tabBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (btn.disabled) return;
      var target = btn.getAttribute("data-tab");
      tabBtns.forEach(function (b) {
        b.classList.toggle("active", b === btn);
        b.setAttribute("aria-selected", String(b === btn));
      });
      tabPanels.forEach(function (p) {
        p.classList.toggle("active", p.getAttribute("data-panel") === target);
      });
      // The Try It panel may have been rendered while hidden (display:none),
      // which leaves CodeMirror measuring itself at zero width. Refresh any
      // mounted editor now that its panel is actually visible.
      if (target === "tryit" && typeof refreshTryItEditors === "function") {
        refreshTryItEditors();
      }
    });
  });

  function resetToDescriptionTab() {
    tabBtns.forEach(function (b, i) {
      b.classList.toggle("active", i === 0);
      b.setAttribute("aria-selected", String(i === 0));
    });
    tabPanels.forEach(function (p, i) {
      p.classList.toggle("active", i === 0);
    });
  }

  var descPanel = document.querySelector('[data-panel="description"]');
  var resourcesPanel = document.querySelector('[data-panel="resources"]');

  function renderDescription(card) {
    descPanel.innerHTML = "";
    var h2 = document.createElement("h2");
    h2.textContent = card.heading;
    descPanel.appendChild(h2);

    var bodyText = card.body || "";
    var isCode = /\n/.test(bodyText) && /[{}();=<>]/.test(bodyText) && !card.forkLink;
    if (isCode) {
      var pre = document.createElement("pre");
      var codeEl = document.createElement("code");
      codeEl.textContent = bodyText;
      pre.appendChild(codeEl);
      descPanel.appendChild(pre);
    } else {
      var p = document.createElement("p");
      p.textContent = bodyText;
      descPanel.appendChild(p);
    }
  }

  function renderResources(card, isLastSubLesson) {
    resourcesPanel.innerHTML = "";
    var ul = document.createElement("ul");
    ul.setAttribute("role", "list");

    var starter = document.createElement("li");
    starter.innerHTML =
      '<a class="resource-link" href="#" data-resource-placeholder="starter"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg><span>Starter file</span></a>';
    ul.appendChild(starter);

    var cheatsheet = document.createElement("li");
    cheatsheet.innerHTML =
      '<a class="resource-link" href="#" data-resource-placeholder="cheatsheet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg><span>Cheat sheet</span></a>';
    ul.appendChild(cheatsheet);

    resourcesPanel.appendChild(ul);

    ul.querySelectorAll("[data-resource-placeholder]").forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        showToast("This is a placeholder resource â€” real files go here!");
      });
    });

    // For modules 8-15, the last sub-lesson of the stop surfaces the existing
    // forkLink CTA here instead of only in the old carousel.
    if (card.forkLink) {
      var fork = document.createElement("a");
      fork.className = "fork-cta";
      fork.href = "#";
      fork.setAttribute("data-fork-placeholder", card.forkLink);
      fork.target = "_blank";
      fork.rel = "noopener noreferrer";
      fork.innerHTML =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 3v12M18 9v9M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 9a9 9 0 0 0 9 9"/></svg><span>Fork This Starter Project \u2192</span>';
      fork.addEventListener("click", function (e) {
        e.preventDefault();
        showToast("This is a placeholder link \u2014 your real starter repo goes here!");
      });
      resourcesPanel.appendChild(fork);
    } else if (!isLastSubLesson) {
      var note = document.createElement("p");
      note.className = "resources-empty";
      note.textContent = "More resources unlock as you move through this stop.";
      resourcesPanel.appendChild(note);
    }
  }

  // giscus config â€” GitHub Discussions-powered comments for afro-architect/CodeQuest
  var GISCUS_CONFIG = {
    repo: "afro-architect/CodeQuest",
    repoId: "R_kgDOTdW5Bg",
    category: "General",
    categoryId: "DIC_kwDOTdW5Bs4DBh3C",
  };

  function currentGiscusTheme() {
    var t = document.documentElement.getAttribute("data-theme");
    return t === "dark" ? "dark" : "light";
  }

  function postMessageToGiscus(message) {
    var iframe = document.querySelector("iframe.giscus-frame");
    if (!iframe) return;
    iframe.contentWindow.postMessage({ giscus: message }, "https://giscus.app");
  }

  // Keep the embedded giscus iframe's theme in sync when the site's own
  // dark-mode toggle changes, without needing to reload the whole widget.
  function syncGiscusTheme() {
    postMessageToGiscus({ setConfig: { theme: currentGiscusTheme() } });
  }
  window.__syncGiscusTheme = syncGiscusTheme;

  function renderDiscussion(card) {
    var panel = document.querySelector('[data-panel="discussion"]');
    panel.innerHTML = "";

    var wrap = document.createElement("div");
    wrap.className = "discussion-giscus";
    panel.appendChild(wrap);

    var script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", GISCUS_CONFIG.repo);
    script.setAttribute("data-repo-id", GISCUS_CONFIG.repoId);
    script.setAttribute("data-category", GISCUS_CONFIG.category);
    script.setAttribute("data-category-id", GISCUS_CONFIG.categoryId);
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", currentGiscusTheme());
    script.setAttribute("data-lang", "en");
    script.crossOrigin = "anonymous";
    script.async = true;
    wrap.appendChild(script);
  }

  // =========================================================================
  // TRY IT: live code playground (CodeMirror + sandboxed iframe / Pyodide)
  // =========================================================================
  var tryItPanel = document.querySelector('[data-panel="tryit"]');

  // Shared Pyodide instance â€” loaded lazily once per page view, reused across
  // every Python sub-lesson card on this same lesson page.
  var pyodideInstance = null;
  var pyodidePromise = null;

  function loadPyodideOnce() {
    if (pyodidePromise) return pyodidePromise;
    pyodidePromise = new Promise(function (resolve, reject) {
      var existingScript = document.getElementById("pyodide-cdn-script");
      function afterScriptLoaded() {
        if (typeof loadPyodide !== "function") {
          reject(new Error("Pyodide script loaded but loadPyodide() is missing."));
          return;
        }
        loadPyodide()
          .then(function (py) {
            pyodideInstance = py;
            resolve(py);
          })
          .catch(reject);
      }
      if (existingScript) {
        if (window.__pyodideScriptLoaded) {
          afterScriptLoaded();
        } else {
          existingScript.addEventListener("load", afterScriptLoaded);
          existingScript.addEventListener("error", function () {
            reject(new Error("Failed to load the Python engine."));
          });
        }
        return;
      }
      var script = document.createElement("script");
      script.id = "pyodide-cdn-script";
      script.src = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js";
      script.onload = function () {
        window.__pyodideScriptLoaded = true;
        afterScriptLoaded();
      };
      script.onerror = function () {
        reject(new Error("Failed to load the Python engine."));
      };
      document.head.appendChild(script);
    });
    return pyodidePromise;
  }

  // Track the currently-mounted Try It instance so we can tear it down
  // cleanly whenever the student switches tabs or sub-lessons (no leaked
  // CodeMirror instances / stale closures between different cards).
  var activeTryIt = null;

  function teardownActiveTryIt() {
    if (activeTryIt && typeof activeTryIt.destroy === "function") {
      activeTryIt.destroy();
    }
    activeTryIt = null;
  }

  function refreshTryItEditors() {
    if (activeTryIt && typeof activeTryIt.refresh === "function") {
      activeTryIt.refresh();
    }
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  // =========================================================================
  // TAG-MATCH ACTIVITY: click a plain-text chunk, then click the tag that
  // belongs around it. No typing required — used when we're asking students
  // to *apply* a tag family before they've been shown how to *type* its
  // syntax. State (assignments + attempt count) lives on the tagMatch object
  // itself so it persists for the rest of this page view even if the
  // student switches tabs or sub-lessons and comes back.
  // =========================================================================
  function renderTagMatchActivity(card, tm) {
    if (!tm.__assignments) {
      tm.__assignments = {};
      tm.chunks.forEach(function (chunk) {
        tm.__assignments[chunk.id] = null;
      });
    }
    if (typeof tm.__attempts !== "number") tm.__attempts = 0;
    var assignments = tm.__assignments;
    var selectedChunkId = null;

    var wrap = document.createElement("div");
    wrap.className = "tagmatch-wrap";

    var instructions = document.createElement("p");
    instructions.className = "tagmatch-instructions";
    instructions.textContent = "Tap a piece of text below, then tap the tag that belongs around it.";
    wrap.appendChild(instructions);

    // ---- Tag palette ----
    var palette = document.createElement("div");
    palette.className = "tagmatch-palette";
    tm.tagOptions.forEach(function (opt) {
      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "tagmatch-chip";
      chip.textContent = opt.label;
      chip.setAttribute("data-tag", opt.tag);
      chip.disabled = true;
      palette.appendChild(chip);
    });
    wrap.appendChild(palette);

    // ---- Chunk list ----
    var chunksEl = document.createElement("div");
    chunksEl.className = "tagmatch-chunks";
    wrap.appendChild(chunksEl);

    function renderChunks() {
      chunksEl.innerHTML = "";
      tm.chunks.forEach(function (chunk) {
        var row = document.createElement("button");
        row.type = "button";
        row.className = "tagmatch-chunk";
        row.setAttribute("data-chunk-id", chunk.id);
        if (selectedChunkId === chunk.id) row.classList.add("is-selected");

        var textEl = document.createElement("span");
        textEl.className = "tagmatch-chunk-text";
        textEl.textContent = chunk.text;
        row.appendChild(textEl);

        var badge = document.createElement("span");
        badge.className = "tagmatch-chunk-badge";
        var assigned = assignments[chunk.id];
        badge.textContent = assigned ? "<" + assigned + ">" : "no tag yet";
        if (assigned) badge.classList.add("has-tag");
        row.appendChild(badge);

        row.addEventListener("click", function () {
          selectedChunkId = chunk.id;
          renderChunks();
          updatePaletteEnabled();
        });

        chunksEl.appendChild(row);
      });
    }

    function updatePaletteEnabled() {
      var chips = palette.querySelectorAll(".tagmatch-chip");
      chips.forEach(function (chip) {
        chip.disabled = !selectedChunkId;
        chip.classList.toggle(
          "is-active",
          !!selectedChunkId && assignments[selectedChunkId] === chip.getAttribute("data-tag")
        );
      });
    }

    palette.querySelectorAll(".tagmatch-chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        if (!selectedChunkId) return;
        var tag = chip.getAttribute("data-tag");
        assignments[selectedChunkId] = assignments[selectedChunkId] === tag ? null : tag;
        renderChunks();
        updatePaletteEnabled();
        renderPreview();
      });
    });

    // ---- Live preview (builds real HTML from current tag assignments) ----
    var previewLabel = document.createElement("span");
    previewLabel.className = "tryit-col-label";
    previewLabel.style.marginTop = "var(--space-3)";
    previewLabel.textContent = "Preview";
    wrap.appendChild(previewLabel);

    var previewShell = document.createElement("div");
    previewShell.className = "tagmatch-preview-shell";
    var previewFrame = document.createElement("iframe");
    previewFrame.setAttribute("sandbox", "");
    previewFrame.title = card.heading + " tag preview";
    previewShell.appendChild(previewFrame);
    wrap.appendChild(previewShell);

    function buildPreviewHtml() {
      var parts = [];
      var inList = false;
      tm.chunks.forEach(function (chunk) {
        var tag = assignments[chunk.id];
        if (tag === "li") {
          if (!inList) {
            parts.push("<ul>");
            inList = true;
          }
          parts.push("<li>" + escapeHtml(chunk.text) + "</li>");
        } else {
          if (inList) {
            parts.push("</ul>");
            inList = false;
          }
          if (tag) {
            parts.push("<" + tag + ">" + escapeHtml(chunk.text) + "</" + tag + ">");
          } else {
            parts.push('<p class="tagmatch-untagged">' + escapeHtml(chunk.text) + "</p>");
          }
        }
      });
      if (inList) parts.push("</ul>");
      return parts.join("\n");
    }

    function renderPreview() {
      var doc =
        '<style>body{font-family:sans-serif;margin:0;padding:12px;color:#23283f;background:#fff;} .tagmatch-untagged{color:#9aa0b4;font-style:italic;} h1{margin:0 0 8px;} p{margin:0 0 8px;} ul{margin:0 0 8px;padding-left:22px;}</style>' +
        buildPreviewHtml();
      previewFrame.setAttribute("srcdoc", doc);
    }

    // ---- Check + feedback ----
    var feedbackEl = document.createElement("div");
    feedbackEl.className = "tagmatch-feedback";

    var checkBtn = document.createElement("button");
    checkBtn.type = "button";
    checkBtn.className = "tryit-btn";
    checkBtn.style.marginTop = "var(--space-4)";
    checkBtn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg><span>Check My Tags</span>';
    wrap.appendChild(checkBtn);
    wrap.appendChild(feedbackEl);

    checkBtn.addEventListener("click", function () {
      var allCorrect = true;
      var wrongTags = {};
      tm.chunks.forEach(function (chunk) {
        if (assignments[chunk.id] !== chunk.correctTag) {
          allCorrect = false;
          wrongTags[chunk.correctTag] = true;
        }
      });

      feedbackEl.innerHTML = "";

      if (allCorrect) {
        tm.__attempts = 0;
        var successEl = document.createElement("div");
        successEl.className = "tagmatch-feedback-banner tagmatch-feedback-success";
        successEl.textContent = tm.successMessage || "Nice work \u2014 every tag is correct!";
        feedbackEl.appendChild(successEl);
        return;
      }

      tm.__attempts += 1;
      var retryEl = document.createElement("div");
      retryEl.className = "tagmatch-feedback-banner tagmatch-feedback-retry";
      retryEl.textContent = tm.retryMessage || "Not quite yet \u2014 give it another try!";
      feedbackEl.appendChild(retryEl);

      if (tm.__attempts >= 2 && tm.hints) {
        var hintBox = document.createElement("div");
        hintBox.className = "tagmatch-hints";
        var hintTitle = document.createElement("p");
        hintTitle.className = "tagmatch-hints-title";
        hintTitle.textContent = "Hints \u2014 ask yourself:";
        hintBox.appendChild(hintTitle);
        var ul = document.createElement("ul");
        Object.keys(wrongTags).forEach(function (tag) {
          if (tm.hints[tag]) {
            var li = document.createElement("li");
            li.textContent = tm.hints[tag];
            ul.appendChild(li);
          }
        });
        hintBox.appendChild(ul);
        feedbackEl.appendChild(hintBox);
      }
    });

    renderChunks();
    updatePaletteEnabled();
    renderPreview();
    tryItPanel.appendChild(wrap);

    activeTryIt = {
      destroy: function () {},
      refresh: function () {},
    };
  }

  function renderTryIt(card) {
    teardownActiveTryIt();
    tryItPanel.innerHTML = "";

    // ---- Tag-matching activity: click-to-tag instead of free code entry.
    // Used for activities that ask students to apply tags they haven't been
    // shown how to *type* yet (e.g. lists before list syntax is modeled).
    if (card.tagMatch) {
      if (tryItTabBtn) {
        tryItTabBtn.disabled = false;
        tryItTabBtn.classList.remove("is-disabled");
        tryItTabBtn.setAttribute("aria-disabled", "false");
        tryItTabBtn.removeAttribute("title");
      }
      renderTagMatchActivity(card, card.tagMatch);
      return;
    }

    var pg = card.playground;

    // ---- No playground field at all: tab disabled, friendly note ----
    if (!pg) {
      if (tryItTabBtn) {
        tryItTabBtn.disabled = true;
        tryItTabBtn.classList.add("is-disabled");
        tryItTabBtn.setAttribute("aria-disabled", "true");
        tryItTabBtn.title = "Nothing to code yet; but keep an eye out for future side quests!";
      }
      var emptyNote = document.createElement("p");
      emptyNote.className = "tryit-empty";
      emptyNote.textContent = "Nothing to code for this part \u2014 check the video/description!";
      tryItPanel.appendChild(emptyNote);
      return;
    }

    // Playground exists â€” enable the tab.
    if (tryItTabBtn) {
      tryItTabBtn.disabled = false;
      tryItTabBtn.classList.remove("is-disabled");
      tryItTabBtn.setAttribute("aria-disabled", "false");
      tryItTabBtn.removeAttribute("title");
    }

    // ---- Unsupported: read-only code + friendly explanation ----
    if (pg.unsupported) {
      renderUnsupportedTryIt(card, pg);
      return;
    }

    renderRunnableTryIt(card, pg);
  }

  function renderUnsupportedTryIt(card, pg) {
    var wrap = document.createElement("div");
    wrap.className = "tryit-wrap";

    var note = document.createElement("div");
    note.className = "tryit-unsupported-note";
    var langLabel =
      pg.lang === "python"
        ? pg.reason || "This example needs capabilities that can't run safely in this browser sandbox."
        : pg.reason || "This example can't run safely in this browser sandbox.";
    note.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 9v4M12 17h.01"/><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L14.71 3.86a2 2 0 0 0-3.42 0z"/></svg>' +
      "<div><strong>Can\u2019t run this in-browser.</strong><br />" +
      escapeHtml(langLabel) +
      " Fork the starter project to run it for real!</div>";

    if (card.forkLink) {
      var fork = document.createElement("a");
      fork.className = "fork-cta";
      fork.href = "#";
      fork.target = "_blank";
      fork.rel = "noopener noreferrer";
      fork.innerHTML =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 3v12M18 9v9M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 9a9 9 0 0 0 9 9"/></svg><span>Fork This Starter Project \u2192</span>';
      fork.addEventListener("click", function (e) {
        e.preventDefault();
        showToast("This is a placeholder link \u2014 your real starter repo goes here!");
      });
      note.querySelector("div").appendChild(fork);
    }

    wrap.appendChild(note);

    var codeLabel = document.createElement("p");
    codeLabel.className = "tryit-col-label";
    codeLabel.style.marginTop = "var(--space-2)";
    codeLabel.textContent = "Read-only code";
    wrap.appendChild(codeLabel);

    var readonlyShell = document.createElement("div");
    readonlyShell.className = "tryit-editor-shell tryit-readonly-code";
    wrap.appendChild(readonlyShell);

    tryItPanel.appendChild(wrap);

    var cmMode = pg.lang === "python" ? "python" : "htmlmixed";
    var cmInstance = mountEditor(readonlyShell, pg.code, cmMode, true);

    activeTryIt = {
      destroy: function () {
        if (cmInstance && cmInstance.toTextArea) {
          cmInstance.toTextArea();
        }
      },
      refresh: function () {
        if (cmInstance && typeof cmInstance.refresh === "function") {
          cmInstance.refresh();
        }
      },
    };
  }

  function mountEditor(container, code, mode, readOnly) {
    if (window.CodeMirror) {
      var ta = document.createElement("textarea");
      container.appendChild(ta);
      var cm = window.CodeMirror.fromTextArea(ta, {
        mode: mode,
        theme: "default",
        lineNumbers: true,
        viewportMargin: Infinity,
        readOnly: !!readOnly,
        indentUnit: 2,
        tabSize: 2,
        lineWrapping: true,
      });
      cm.setValue(code || "");
      // Container may have been zero-width at mount time (e.g. tab panel was
      // hidden with display:none) â€” refresh on the next frame so CodeMirror
      // re-measures itself and renders every line correctly.
      requestAnimationFrame(function () {
        cm.refresh();
      });
      return cm;
    }
    // Fallback: plain textarea if CodeMirror failed to load.
    var fallback = document.createElement("textarea");
    fallback.className = "tryit-fallback-editor";
    fallback.value = code || "";
    fallback.readOnly = !!readOnly;
    fallback.spellcheck = false;
    container.appendChild(fallback);
    return {
      getValue: function () {
        return fallback.value;
      },
      setValue: function (v) {
        fallback.value = v;
      },
      toTextArea: null,
      isFallback: true,
    };
  }

  function renderRunnableTryIt(card, pg) {
    var wrap = document.createElement("div");
    wrap.className = "tryit-wrap";

    // Toolbar
    var toolbar = document.createElement("div");
    toolbar.className = "tryit-toolbar";

    var runBtn = document.createElement("button");
    runBtn.type = "button";
    runBtn.className = "tryit-btn";
    runBtn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg><span>Run</span>';
    toolbar.appendChild(runBtn);

    var resetBtn = document.createElement("button");
    resetBtn.type = "button";
    resetBtn.className = "tryit-btn tryit-btn--secondary";
    resetBtn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M1 4v6h6M23 20v-6h-6"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg><span>Reset</span>';
    toolbar.appendChild(resetBtn);

    var clearBtn = null;
    if (pg.lang === "python") {
      clearBtn = document.createElement("button");
      clearBtn.type = "button";
      clearBtn.className = "tryit-btn tryit-btn--ghost";
      clearBtn.innerHTML = "<span>Clear console</span>";
      toolbar.appendChild(clearBtn);
    }

    var statusEl = document.createElement("span");
    statusEl.className = "tryit-status";
    toolbar.appendChild(statusEl);

    wrap.appendChild(toolbar);

    // Editor + output side-by-side
    var editorPanel = document.createElement("div");
    editorPanel.className = "tryit-editor-panel";

    var editorCol = document.createElement("div");
    editorCol.className = "tryit-editor-col";
    var editorLabel = document.createElement("span");
    editorLabel.className = "tryit-col-label";
    editorLabel.textContent = pg.lang === "python" ? "Python" : "HTML / CSS / JS";
    editorCol.appendChild(editorLabel);
    var editorShell = document.createElement("div");
    editorShell.className = "tryit-editor-shell";
    editorCol.appendChild(editorShell);
    editorPanel.appendChild(editorCol);

    var outputCol = document.createElement("div");
    outputCol.className = "tryit-output-col";
    var outputLabel = document.createElement("span");
    outputLabel.className = "tryit-col-label";
    outputLabel.textContent = pg.lang === "python" ? "Console" : "Preview";
    outputCol.appendChild(outputLabel);

    var outputEl;
    if (pg.lang === "python") {
      outputEl = document.createElement("div");
      outputEl.className = "tryit-console";
      outputEl.setAttribute("role", "log");
      outputEl.setAttribute("aria-live", "polite");
    } else {
      var frameShell = document.createElement("div");
      frameShell.className = "tryit-output-frame-shell";
      var iframe = document.createElement("iframe");
      iframe.setAttribute("sandbox", "allow-scripts");
      iframe.title = card.heading + " output preview";
      frameShell.appendChild(iframe);
      outputEl = frameShell;
      outputEl._iframe = iframe;
    }
    outputCol.appendChild(outputEl);
    editorPanel.appendChild(outputCol);

    wrap.appendChild(editorPanel);
    tryItPanel.appendChild(wrap);

    var cmMode = pg.lang === "python" ? "python" : "htmlmixed";
    var cmInstance = mountEditor(editorShell, pg.code, cmMode, false);

    function getEditorValue() {
      return cmInstance.getValue();
    }

    function consoleLine(text, cls) {
      var line = document.createElement("div");
      line.className = "console-line" + (cls ? " " + cls : "");
      line.textContent = text;
      outputEl.appendChild(line);
      outputEl.scrollTop = outputEl.scrollHeight;
    }

    function runWeb() {
      var iframe = outputEl._iframe;
      iframe.setAttribute("srcdoc", getEditorValue());
    }

    var destroyed = false;

    function setStatus(html) {
      if (destroyed) return;
      statusEl.innerHTML = html || "";
    }

    function runPython() {
      if (destroyed) return;
      runBtn.disabled = true;
      var neededPackages = pg.loadPackages || [];
      setStatus(
        pyodideInstance
          ? ""
          : '<span class="tryit-spinner"></span> Loading Python engine\u2026'
      );

      loadPyodideOnce()
        .then(function (py) {
          if (destroyed) return;
          if (neededPackages.length) {
            setStatus('<span class="tryit-spinner"></span> Loading ' + neededPackages.join(", ") + "\u2026");
            return py.loadPackage(neededPackages).then(function () {
              return py;
            });
          }
          return py;
        })
        .then(function (py) {
          if (destroyed) return;
          setStatus("");
          var capturedOut = [];
          py.setStdout({
            batched: function (s) {
              capturedOut.push({ text: s, err: false });
            },
          });
          py.setStderr({
            batched: function (s) {
              capturedOut.push({ text: s, err: true });
            },
          });
          try {
            py.runPython(getEditorValue());
            capturedOut.forEach(function (item) {
              consoleLine(item.text, item.err ? "console-line--error" : null);
            });
            if (!capturedOut.length) {
              consoleLine("(ran with no output)", "console-line--muted");
            }
          } catch (err) {
            capturedOut.forEach(function (item) {
              consoleLine(item.text, item.err ? "console-line--error" : null);
            });
            var msg = err && err.message ? err.message : String(err);
            // Trim Pyodide's verbose Python traceback down to the last, most
            // readable line so students see a clean error, not a raw dump.
            var lines = msg.trim().split("\n");
            var lastLine = lines[lines.length - 1] || msg;
            consoleLine(lastLine, "console-line--error");
          }
        })
        .catch(function (err) {
          if (destroyed) return;
          setStatus("");
          consoleLine(
            "Couldn't load the Python engine: " + (err && err.message ? err.message : String(err)),
            "console-line--error"
          );
        })
        .finally(function () {
          if (destroyed) return;
          runBtn.disabled = false;
        });
    }

    runBtn.addEventListener("click", function () {
      if (pg.lang === "python") {
        runPython();
      } else {
        runWeb();
      }
    });

    resetBtn.addEventListener("click", function () {
      cmInstance.setValue(pg.code || "");
      if (pg.lang === "web") {
        var iframe = outputEl._iframe;
        iframe.removeAttribute("srcdoc");
      } else {
        outputEl.innerHTML = "";
      }
    });

    if (clearBtn) {
      clearBtn.addEventListener("click", function () {
        outputEl.innerHTML = "";
      });
    }

    // Auto-run once for `web` cards so students immediately see something
    // in the preview pane rather than a blank iframe.
    if (pg.lang === "web") {
      runWeb();
    }

    activeTryIt = {
      destroy: function () {
        destroyed = true;
        if (cmInstance && cmInstance.toTextArea) {
          cmInstance.toTextArea();
        }
      },
      refresh: function () {
        if (cmInstance && typeof cmInstance.refresh === "function") {
          cmInstance.refresh();
        }
      },
    };
  }

  // =========================================================================
  // Stamp bar gating + open/close sub-lesson
  // =========================================================================
  var stampBtn = document.getElementById("stamp-btn");

  function updateStampGate() {
    var isLastSubLesson = current === cards.length - 1;
    var lastViewed = !!viewed[cards.length - 1];
    var canStamp = isLastSubLesson && lastViewed;
    stampBtn.disabled = !canStamp;
    stampBtn.setAttribute("aria-disabled", String(!canStamp));
  }

  function openSubLesson(i) {
    if (i < 0 || i >= cards.length) return;
    current = i;
    viewed[i] = true;
    var card = cards[i];
    renderVideo(card);
    renderDescription(card);
    renderTryIt(card);
    renderResources(card, i === cards.length - 1);
    renderDiscussion(card);
    resetToDescriptionTab();
    syncSidebarStates();
    updateStampGate();
    closeMobileSidebar();
  }

  // Initial render
  renderAccordion();
  openSubLesson(0);

  // ---- Mobile sidebar drawer ----
  var sidebarToggle = document.getElementById("sidebar-toggle");
  var sidebarClose = document.getElementById("sidebar-close");
  var sidebarScrim = document.getElementById("sidebar-scrim");

  function openMobileSidebar() {
    document.body.classList.add("sidebar-open");
    sidebarToggle && sidebarToggle.setAttribute("aria-expanded", "true");
  }
  function closeMobileSidebar() {
    document.body.classList.remove("sidebar-open");
    sidebarToggle && sidebarToggle.setAttribute("aria-expanded", "false");
  }
  sidebarToggle && sidebarToggle.addEventListener("click", openMobileSidebar);
  sidebarClose && sidebarClose.addEventListener("click", closeMobileSidebar);
  sidebarScrim && sidebarScrim.addEventListener("click", closeMobileSidebar);

  // ---- Stamp My Passport ---- (unchanged unlock flow)
  var idx = LESSON_SEQUENCE.indexOf(LESSON_ID);
  var nextId = LESSON_SEQUENCE[idx + 1];

  stampBtn.addEventListener("click", function () {
    if (stampBtn.disabled) return;
    completeLesson(LESSON_ID);
    try {
      sessionStorage.setItem("questMapJustCompleted", "1");
      if (nextId) sessionStorage.setItem("questMapJustUnlocked", nextId);
    } catch (e) {}
    fireStampConfetti();
    setTimeout(function () {
      window.location.href = "roadmap.html";
    }, 650);
  });

  function fireStampConfetti() {
    var layer = document.getElementById("confetti-layer");
    var colors = ["#FF5A3D", "#0EA5A0", "#FFB238", "#FF4F9A", "#1B2A4A"];
    for (var i = 0; i < 40; i++) {
      var piece = document.createElement("div");
      piece.className = "confetti-piece";
      piece.style.left = 50 + (Math.random() * 60 - 30) + "%";
      piece.style.top = "70%";
      piece.style.background = colors[i % colors.length];
      piece.style.animationDelay = Math.random() * 150 + "ms";
      layer.appendChild(piece);
      (function (el) {
        setTimeout(function () {
          el.remove();
        }, 1700);
      })(piece);
    }
  }

  function showToast(message) {
    var toastEl = document.getElementById("toast");
    toastEl.textContent = message;
    toastEl.classList.add("visible");
    setTimeout(function () {
      toastEl.classList.remove("visible");
    }, 2600);
  }

  // ---- Dark mode toggle ----
  (function () {
    var t = document.querySelector("[data-theme-toggle]"),
      r = document.documentElement;
    var d = matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light";
    r.setAttribute("data-theme", d);
    t &&
      t.addEventListener("click", function () {
        d = d === "dark" ? "light" : "dark";
        r.setAttribute("data-theme", d);
        if (window.__syncGiscusTheme) window.__syncGiscusTheme();
        t.setAttribute("aria-label", "Switch to " + (d === "dark" ? "light" : "dark") + " mode");
        t.innerHTML =
          d === "dark"
            ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
            : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
      });
  })();

  // ---- Passport tracker in header ----
  var passportCountEl = document.getElementById("passport-count");
  if (passportCountEl) passportCountEl.textContent = String(getCompletedCount());

  // ---- Reset progress control ----
  var resetBtn = document.getElementById("reset-progress-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      if (confirm("Reset all quest progress? This clears every stamp.")) {
        resetProgress();
        window.location.href = "roadmap.html";
      }
    });
  }
})();
