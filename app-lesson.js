// app-lesson.js â€” shared behavior for every lesson-N.html page: renders the
// sidebar mini-course (stop accordion + sub-lesson list), the video player +
// tabs content browser for the active sub-lesson, wires the fixed
// Stamp My Passport button, dark-mode toggle, and the locked-page guard.
//
// NOTE: completeLesson()/getProgress()/getLessonState() come from progress.js
// and are NOT modified by this file â€” this file only reads/calls them exactly
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
  document.title = lesson.title + " CodeQuest";

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

    // Only render THIS stop â€” other stops are intentionally hidden from the
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
        /* placeholder source may not resolve â€” poster stays as fallback */
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
    var bodyPre = document.createElement("pre");
    var bodyCodeEl = document.createElement("code");
    bodyCodeEl.textContent = bodyText;
    bodyPre.appendChild(bodyCodeEl);
    descPanel.appendChild(bodyPre);
} else {
  bodyText
    .split(/\n\s*\n/)
    .map(function (chunk) { return chunk.trim(); })
    .filter(Boolean)
    .forEach(function (chunk) {
      var p = document.createElement("p");
      p.textContent = chunk;
      descPanel.appendChild(p);
    });
}

  if (card.uiBlock) {
    var uiWrap = document.createElement("div");
    uiWrap.className = "lesson-ui-block";

    var uiHeader = document.createElement("div");
    uiHeader.className = "lesson-ui-block__header";
    uiHeader.textContent = card.uiBlock.label || "Code Block";

    var uiPre = document.createElement("pre");
    uiPre.className = "lesson-ui-block__code";

    var uiCode = document.createElement("code");
    uiCode.textContent = card.uiBlock.code || "";

    uiPre.appendChild(uiCode);
    uiWrap.appendChild(uiHeader);
    uiWrap.appendChild(uiPre);
    descPanel.appendChild(uiWrap);
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
        showToast("This is a placeholder resource -- real files go here!");
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

  // giscus config â€” GitHub Discussions-powered comments for afro-architect/CodeQuest
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

  // Shared Pyodide instance â€” loaded lazily once per page view, reused across
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
  // belongs around it. No typing required & used when we're asking students
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

  // =========================================================================
  // MATCH ACTIVITY: a generalized version of the tag-match pattern above.
  // Click a chunk, then click the option that describes it \u2014 works for
  // CSS selectors, HTML attributes, or code syntax, not just HTML tags.
  // Drop a `matchActivity` object on any card (instead of `tagMatch`) to
  // reuse this same click-to-match UI for a brand-new concept:
  //
  //   matchActivity: {
  //     previewType: "css-selector" | "css-attribute" | "syntax",
  //     previewHtml: "..."   // only needed for previewType "css-selector"
  //     instructions: "optional override of the default instruction line",
  //     chunks: [ { id, text, correctKey } ],
  //     options: [ { key, label, previewColor } ],
  //     hints: { correctKey: "hint text" },
  //     successMessage: "...",
  //     retryMessage: "...",
  //   }
  //
  // previewType "css-selector": previewHtml is a small mock page. Each
  // chunk's text should be a full, valid CSS rule (e.g. ".sale { color:
  // red; }"). Once a chunk is correctly matched, its rule is injected into
  // a live <style> block above previewHtml, so students see the *real*
  // effect land as they identify selectors correctly.
  //
  // previewType "css-attribute": each chunk's text should be a small HTML
  // snippet (e.g. '<div class="storeCard">Sneaker Spot</div>'). Every
  // chunk always renders, and correctly-matched ones get an outline in
  // that option's previewColor so students see class vs id vs "no
  // attribute" visually grouped.
  //
  // previewType "syntax": no previewHtml needed. Chunks are read as one
  // line of code, left to right, in the order given. Correctly-matched
  // tokens get a colored underline plus a small caption with the option's
  // label, building up an annotated line of code piece by piece.
  // =========================================================================
  function renderMatchActivity(card, ma) {
    if (!ma.__assignments) {
      ma.__assignments = {};
      ma.chunks.forEach(function (chunk) {
        ma.__assignments[chunk.id] = null;
      });
    }
    if (typeof ma.__attempts !== "number") ma.__attempts = 0;
    var assignments = ma.__assignments;
    var selectedChunkId = null;

    function optionFor(key) {
      return ma.options.filter(function (o) {
        return o.key === key;
      })[0];
    }

    var wrap = document.createElement("div");
    wrap.className = "tagmatch-wrap";

    var instructions = document.createElement("p");
    instructions.className = "tagmatch-instructions";
    instructions.textContent =
      ma.instructions || "Tap a piece below, then tap the option that matches it.";
    wrap.appendChild(instructions);

    // ---- Option palette ----
    var palette = document.createElement("div");
    palette.className = "tagmatch-palette";
    ma.options.forEach(function (opt) {
      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "tagmatch-chip tagmatch-chip--wide";
      chip.textContent = opt.label;
      chip.setAttribute("data-key", opt.key);
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
      ma.chunks.forEach(function (chunk) {
        var row = document.createElement("button");
        row.type = "button";
        row.className = "tagmatch-chunk";
        row.setAttribute("data-chunk-id", chunk.id);
        if (selectedChunkId === chunk.id) row.classList.add("is-selected");

        var textEl = document.createElement("span");
        textEl.className = "tagmatch-chunk-text tagmatch-chunk-text--code";
        textEl.textContent = chunk.text;
        row.appendChild(textEl);

        var badge = document.createElement("span");
        badge.className = "tagmatch-chunk-badge";
        var assignedKey = assignments[chunk.id];
        var assignedOpt = assignedKey ? optionFor(assignedKey) : null;
        badge.textContent = assignedOpt ? (assignedOpt.shortLabel || assignedOpt.label) : "no match yet";
        if (assignedOpt) badge.classList.add("has-tag");
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
          !!selectedChunkId && assignments[selectedChunkId] === chip.getAttribute("data-key")
        );
      });
    }

    palette.querySelectorAll(".tagmatch-chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        if (!selectedChunkId) return;
        var key = chip.getAttribute("data-key");
        assignments[selectedChunkId] = assignments[selectedChunkId] === key ? null : key;
        renderChunks();
        updatePaletteEnabled();
        renderPreview();
      });
    });

    // ---- Live preview (behavior depends on previewType) ----
    var previewLabel = document.createElement("span");
    previewLabel.className = "tryit-col-label";
    previewLabel.style.marginTop = "var(--space-3)";
    previewLabel.textContent = "Preview";
    wrap.appendChild(previewLabel);

    var previewHost;
    var previewFrame;
    if (ma.previewType === "syntax") {
      previewHost = document.createElement("div");
      previewHost.className = "syntaxmatch-shell";
      wrap.appendChild(previewHost);
    } else {
      var previewShell = document.createElement("div");
      previewShell.className = "tagmatch-preview-shell";
      previewFrame = document.createElement("iframe");
      previewFrame.setAttribute("sandbox", "");
      previewFrame.title = card.heading + " preview";
      previewShell.appendChild(previewFrame);
      wrap.appendChild(previewShell);
    }

    function renderPreview() {
      if (ma.previewType === "css-selector") {
        var liveCss = "";
        ma.chunks.forEach(function (chunk) {
          if (assignments[chunk.id] === chunk.correctKey) liveCss += chunk.text + "\n";
        });
        var doc =
          "<style>body{font-family:sans-serif;margin:0;padding:12px;color:#23283f;background:#fff;} p{margin:0 0 8px;}</style>" +
          "<style>" + liveCss + "</style>" +
          (ma.previewHtml || "");
        previewFrame.setAttribute("srcdoc", doc);
        return;
      }

      if (ma.previewType === "css-attribute") {
        var rows = ma.chunks
          .map(function (chunk) {
            var isCorrect = assignments[chunk.id] === chunk.correctKey;
            var opt = optionFor(chunk.correctKey);
            var color = isCorrect && opt && opt.previewColor ? opt.previewColor : "#dcdfef";
            var badgeText = opt ? opt.shortLabel || opt.label : "";
            var tagHtml =
              '<div style="border:2px solid ' +
              color +
              "; border-radius:10px; padding:10px 12px; margin:8px 0; display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:10px;\">" +
              '<div style="font-family:monospace; font-size:13px; min-width:0; word-break:break-word;">' +
              chunk.text +
              "</div>" +
              (isCorrect && opt
                ? '<div style="font-size:11px; font-weight:700; color:' +
                  color +
                  '; white-space:normal; text-align:right; max-width:100%;">' +
                  escapeHtml(badgeText) +
                  "</div>"
                : "") +
              "</div>";
            return tagHtml;
          })
          .join("");
        var doc2 =
          "<style>body{font-family:sans-serif;margin:0;padding:12px;color:#23283f;background:#fff;}</style>" +
          rows;
        previewFrame.setAttribute("srcdoc", doc2);
        return;
      }

      if (ma.previewType === "syntax") {
        previewHost.innerHTML = "";
        var line = document.createElement("div");
        line.className = "syntaxmatch-line";
        ma.chunks.forEach(function (chunk) {
          var isCorrect = assignments[chunk.id] === chunk.correctKey;
          var opt = optionFor(chunk.correctKey);
          var token = document.createElement("span");
          token.className = "syntaxmatch-token" + (isCorrect ? " is-tagged" : "");
          if (isCorrect && opt && opt.previewColor) {
            token.style.borderColor = opt.previewColor;
            token.style.color = opt.previewColor;
          }
          var codeEl = document.createElement("span");
          codeEl.className = "syntaxmatch-token-code";
          codeEl.textContent = chunk.text;
          token.appendChild(codeEl);
          if (isCorrect && opt) {
            var caption = document.createElement("small");
            caption.textContent = opt.label;
            token.appendChild(caption);
          }
          line.appendChild(token);
        });
        previewHost.appendChild(line);
      }
    }

    // ---- Check + feedback ----
    var feedbackEl = document.createElement("div");
    feedbackEl.className = "tagmatch-feedback";

    var checkBtn = document.createElement("button");
    checkBtn.type = "button";
    checkBtn.className = "tryit-btn";
    checkBtn.style.marginTop = "var(--space-4)";
    checkBtn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg><span>Check My Matches</span>';
    wrap.appendChild(checkBtn);
    wrap.appendChild(feedbackEl);

    checkBtn.addEventListener("click", function () {
      var allCorrect = true;
      var wrongKeys = {};
      ma.chunks.forEach(function (chunk) {
        if (assignments[chunk.id] !== chunk.correctKey) {
          allCorrect = false;
          wrongKeys[chunk.correctKey] = true;
        }
      });

      feedbackEl.innerHTML = "";

      if (allCorrect) {
        ma.__attempts = 0;
        var successEl = document.createElement("div");
        successEl.className = "tagmatch-feedback-banner tagmatch-feedback-success";
        successEl.textContent = ma.successMessage || "Nice work \u2014 every match is correct!";
        feedbackEl.appendChild(successEl);
        return;
      }

      ma.__attempts += 1;
      var retryEl = document.createElement("div");
      retryEl.className = "tagmatch-feedback-banner tagmatch-feedback-retry";
      retryEl.textContent = ma.retryMessage || "Not quite yet \u2014 give it another try!";
      feedbackEl.appendChild(retryEl);

      if (ma.__attempts >= 2 && ma.hints) {
        var hintBox = document.createElement("div");
        hintBox.className = "tagmatch-hints";
        var hintTitle = document.createElement("p");
        hintTitle.className = "tagmatch-hints-title";
        hintTitle.textContent = "Hints \u2014 ask yourself:";
        hintBox.appendChild(hintTitle);
        var ul = document.createElement("ul");
        Object.keys(wrongKeys).forEach(function (key) {
          if (ma.hints[key]) {
            var li = document.createElement("li");
            li.textContent = ma.hints[key];
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

  // ---- Website Anatomy Lab: hover a real sample site to see its boundary,
  // click a highlighted part to answer "what is this called?" and "what job
  // does it do?" via chips (no typing). Reused across Remix/Vibe below.
  function renderAnatomyLab(card, data) {
    if (!data.__done) data.__done = {};

    var wrap = document.createElement("div");
    wrap.className = "anatomy-wrap";

    var instructions = document.createElement("p");
    instructions.className = "tagmatch-instructions";
    instructions.textContent =
      "Hover any part of the sample site to see its boundary. Click a highlighted part to answer what it's called and what job it does.";
    wrap.appendChild(instructions);

    var progressEl = document.createElement("p");
    progressEl.className = "anatomy-progress";
    wrap.appendChild(progressEl);

    var siteShell = document.createElement("div");
    siteShell.className = "anatomy-site-shell ssx-scope";
    siteShell.innerHTML = data.siteHtml;
    wrap.appendChild(siteShell);

    var quizHost = document.createElement("div");
    quizHost.className = "anatomy-quiz-host";
    wrap.appendChild(quizHost);

    siteShell.addEventListener("submit", function (e) {
      e.preventDefault();
    });

    function updateProgress() {
      var doneCount = Object.keys(data.__done).length;
      progressEl.textContent = doneCount + " of " + data.hotspots.length + " parts identified.";
    }

    function markHotspotState() {
      data.hotspots.forEach(function (h) {
        var els = siteShell.querySelectorAll(h.selector);
        els.forEach(function (el) {
          el.classList.add("anatomy-hotspot");
          el.classList.toggle("anatomy-hotspot-done", !!data.__done[h.id]);
          el.setAttribute("data-hotspot-id", h.id);
        });
      });
    }

    function renderQuizFor(hotspot) {
      quizHost.innerHTML = "";
      var qWrap = document.createElement("div");
      qWrap.className = "anatomy-quiz";

      var title = document.createElement("p");
      title.className = "anatomy-quiz-title";
      title.textContent = "What is this called, and what job does it do?";
      qWrap.appendChild(title);

      var nameLabel = document.createElement("p");
      nameLabel.className = "tryit-col-label";
      nameLabel.textContent = "What is this called?";
      qWrap.appendChild(nameLabel);

      var namePalette = document.createElement("div");
      namePalette.className = "tagmatch-palette";
      var selectedName = null;
      data.hotspots
        .map(function (h) {
          return h.name;
        })
        .forEach(function (n) {
          var chip = document.createElement("button");
          chip.type = "button";
          chip.className = "tagmatch-chip";
          chip.textContent = n;
          chip.addEventListener("click", function () {
            selectedName = n;
            namePalette.querySelectorAll(".tagmatch-chip").forEach(function (c) {
              c.classList.toggle("is-active", c === chip);
            });
          });
          namePalette.appendChild(chip);
        });
      qWrap.appendChild(namePalette);

      var jobLabel = document.createElement("p");
      jobLabel.className = "tryit-col-label";
      jobLabel.style.marginTop = "var(--space-3)";
      jobLabel.textContent = "What job does it do?";
      qWrap.appendChild(jobLabel);

      var jobPalette = document.createElement("div");
      jobPalette.className = "tagmatch-palette";
      var selectedJob = null;
      data.hotspots
        .map(function (h) {
          return h.job;
        })
        .forEach(function (j) {
          var chip = document.createElement("button");
          chip.type = "button";
          chip.className = "tagmatch-chip tagmatch-chip--wide";
          chip.textContent = j;
          chip.addEventListener("click", function () {
            selectedJob = j;
            jobPalette.querySelectorAll(".tagmatch-chip").forEach(function (c) {
              c.classList.toggle("is-active", c === chip);
            });
          });
          jobPalette.appendChild(chip);
        });
      qWrap.appendChild(jobPalette);

      var feedbackEl = document.createElement("div");
      feedbackEl.className = "tagmatch-feedback";

      var checkBtn = document.createElement("button");
      checkBtn.type = "button";
      checkBtn.className = "tryit-btn";
      checkBtn.style.marginTop = "var(--space-4)";
      checkBtn.innerHTML =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg><span>Check My Answer</span>';
      qWrap.appendChild(checkBtn);
      qWrap.appendChild(feedbackEl);

      checkBtn.addEventListener("click", function () {
        feedbackEl.innerHTML = "";
        var correct = selectedName === hotspot.name && selectedJob === hotspot.job;
        var banner = document.createElement("div");
        if (correct) {
          data.__done[hotspot.id] = true;
          banner.className = "tagmatch-feedback-banner tagmatch-feedback-success";
          banner.textContent = "Nailed it \u2014 that's the " + hotspot.name + ".";
          feedbackEl.appendChild(banner);
          markHotspotState();
          updateProgress();
        } else {
          banner.className = "tagmatch-feedback-banner tagmatch-feedback-retry";
          banner.textContent = "Not quite \u2014 take another look and give it another try. You've got this!";
          feedbackEl.appendChild(banner);
        }
      });

      quizHost.appendChild(qWrap);
    }

    siteShell.addEventListener("click", function (e) {
      e.preventDefault();
      var target = e.target.closest(".anatomy-hotspot");
      if (!target) return;
      var id = target.getAttribute("data-hotspot-id");
      var hotspot = data.hotspots.find(function (h) {
        return h.id === id;
      });
      if (!hotspot) return;
      siteShell.querySelectorAll(".anatomy-hotspot").forEach(function (el) {
        el.classList.toggle("is-active-hotspot", el.getAttribute("data-hotspot-id") === id);
      });
      renderQuizFor(hotspot);
    });

    markHotspotState();
    updateProgress();
    tryItPanel.appendChild(wrap);

    activeTryIt = {
      destroy: function () {},
      refresh: function () {},
    };
  }

  // ---- Syntax Annotate Lab: a static, hoverable/tappable "annotated IDE"
  // diagram (not a real code editor) used to introduce syntax concepts
  // *before* students try a match activity. Each token in a short code
  // sample is a button; hovering/tapping/focusing it reveals (a) what kind
  // of syntax piece it is and why it matters, (b) its place in the read
  // order Python follows, (c) its matching bracket/quote partner if any,
  // and (d) the exact slice of the output it produces, if any. Data shape:
  //   {
  //     filename: "trailhead.py",
  //     language: "Python",   // optional, sensible default provided \u2014 shown in instructional copy
  //     lines: [ [tokenA, tokenB, ...], [tokenC, ...] ],   // one array per code line
  //     outputText: "Reached Ridge Line",
  //     legend: [ { type: "keyword", label: "Keyword" }, ... ]  // optional, sensible default provided
  //   }
  // token: { text, type, order, tip, output (optional), pairId (optional) }
  //
  // buildSyntaxAnnotateEl() builds and wires up the widget's DOM but does NOT
  // append it to tryItPanel or touch activeTryIt \u2014 that's left to the two
  // callers below, since one of them (renderSyntaxAnnotateWithIde) needs to
  // append a second section underneath before finalizing activeTryIt.


  // TOKEN_META gives friendly labels and colors for every token "type" we
// teach with. When a card uses a type that isn't listed here,
// humanizeType() turns the raw string into a readable label automatically.
  
function buildSyntaxAnnotateEl(card, sa) {
  var language = sa.language || "Python";

  var TOKEN_META = {
    keyword: { label: "Keyword", color: "#4c6fff" },
    string: { label: "String", color: "#43b05c" },
    number: { label: "Number", color: "#d98a2b" },
    variable: { label: "Variable", color: "#8b5cf6" },
    operator: { label: "Operator", color: "#e25555" },
    punct: { label: "Punctuation", color: "#c7a32b" },

    "comment-open": { label: "Opening Comment Marker", color: "#4c6fff" },
    "comment-text": { label: "Comment Text", color: "#43b05c" },
    "comment-close": { label: "Closing Comment Marker", color: "#d98a2b" },

    selector: { label: "Selector", color: "#4c6fff" },
    "opening-brace": { label: "Opening Brace", color: "#8b5cf6" },
    "property-name": { label: "Property Name", color: "#43b05c" },
    colon: { label: "Colon", color: "#e25555" },
    value: { label: "Value", color: "#d98a2b" },
    "declaration-end": { label: "Semicolon", color: "#c7a32b" },
    "closing-brace": { label: "Closing Brace", color: "#7c89ff" }
  };

  function humanizeType(type) {
    return String(type)
      .split(/[-_]/)
      .filter(Boolean)
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  function legendFromTokens() {
    var seen = {};
    var order = [];
    (sa.lines || []).forEach(function (lineTokens) {
      lineTokens.forEach(function (token) {
        if (!seen[token.type]) {
          seen[token.type] = true;
          order.push(token.type);
        }
      });
    });
    return order.map(function (type) {
      return {
        type: type,
        label: TOKEN_META[type] ? TOKEN_META[type].label : humanizeType(type)
      };
    });
  }

  var legend = sa.legend || legendFromTokens();

  var hasPrintedOutput = (sa.lines || []).some(function (lineTokens) {
    return lineTokens.some(function (token) {
      return !!token.output;
    });
  });

  var wrap = document.createElement("div");
  wrap.className = "syntax-annot-wrap";

  var instructions = document.createElement("p");
  instructions.className = "tagmatch-instructions";
  instructions.textContent = hasPrintedOutput
    ? "Hover, tap, or tab through each highlighted piece of code below. The number shows the order " + language + " reads it in, and the output panel lights up when that piece is part of what gets printed."
    : "Hover, tap, or tab through each highlighted piece of code below. The number shows the order " + language + " reads it in, and the panel below explains what job each piece does.";
  wrap.appendChild(instructions);

  var legendRow = document.createElement("div");
  legendRow.className = "syntax-annot-legend";
  legend.forEach(function (item) {
    var chip = document.createElement("span");
    chip.className = "syntax-annot-legend-item";

    var swatch = document.createElement("span");
    swatch.className = "syntax-annot-swatch type-" + item.type;
    chip.appendChild(swatch);

    var label = document.createElement("span");
    label.textContent = item.label;
    chip.appendChild(label);

    legendRow.appendChild(chip);
  });
  wrap.appendChild(legendRow);

  var win = document.createElement("div");
  win.className = "syntax-annot-window";

  var titlebar = document.createElement("div");
  titlebar.className = "syntax-annot-titlebar";
  ["red", "yellow", "green"].forEach(function (c) {
    var dot = document.createElement("span");
    dot.className = "syntax-annot-dot syntax-annot-dot--" + c;
    titlebar.appendChild(dot);
  });

  var filename = document.createElement("span");
  filename.className = "syntax-annot-filename";
  filename.textContent = sa.filename || (language === "Python" ? "syntax_demo.py" : "syntax_demo.js");
  titlebar.appendChild(filename);
  win.appendChild(titlebar);

  var body = document.createElement("div");
  body.className = "syntax-annot-body";

  var tokenButtons = [];
  (sa.lines || []).forEach(function (lineTokens, lineIdx) {
    var lineEl = document.createElement("div");
    lineEl.className = "syntax-annot-line";

    var lineNo = document.createElement("span");
    lineNo.className = "syntax-annot-lineno";
    lineNo.textContent = String(lineIdx + 1);
    lineEl.appendChild(lineNo);

    var codeEl = document.createElement("span");
    codeEl.className = "syntax-annot-code";

    lineTokens.forEach(function (token) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "syntax-annot-token type-" + token.type;
      btn.setAttribute("aria-label", token.text + " — " + token.tip);

      var order = document.createElement("sup");
      order.className = "syntax-annot-order";
      order.textContent = token.order;
      btn.appendChild(order);

      var textEl = document.createElement("span");
      textEl.textContent = token.text;
      btn.appendChild(textEl);

      btn._token = token;
      tokenButtons.push(btn);
      codeEl.appendChild(btn);
      codeEl.appendChild(document.createTextNode(" "));
    });

    lineEl.appendChild(codeEl);
    body.appendChild(lineEl);
  });

  win.appendChild(body);
  wrap.appendChild(win);

  var captionBox = document.createElement("div");
  captionBox.className = "syntax-annot-caption";
  wrap.appendChild(captionBox);

  var outputLabel = document.createElement("p");
  outputLabel.className = "tryit-col-label";
  outputLabel.style.marginTop = "var(--space-3)";
  outputLabel.textContent = hasPrintedOutput ? "Output" : "What this piece does";
  wrap.appendChild(outputLabel);

  var outputShell = document.createElement("div");
  outputShell.className = "syntax-annot-output-shell";

  var outputPrompt = document.createElement("span");
  outputPrompt.className = "syntax-annot-output-prompt";
  outputPrompt.textContent = hasPrintedOutput ? ">_" : "i";
  outputShell.appendChild(outputPrompt);

  var outputText = document.createElement("span");
  outputText.className = "syntax-annot-output-text";
  outputShell.appendChild(outputText);
  wrap.appendChild(outputShell);

  var outputNote = document.createElement("p");
  outputNote.className = "syntax-annot-output-note";
  wrap.appendChild(outputNote);

  var typeLabelFor = {};
  legend.forEach(function (item) {
    typeLabelFor[item.type] = item.label;
  });

  var selectedBtn = null;

  function renderOutput(activeToken) {
    outputText.innerHTML = "";
    var full = sa.outputText || "";

    if (!hasPrintedOutput) {
      outputText.textContent = activeToken ? (activeToken.tip || "") : "Select a highlighted piece to learn what it does.";
      outputNote.textContent = activeToken
        ? "This code explains structure or syntax, not printed output."
        : "Hover, tap, or tab a piece of code above to inspect it.";
      outputNote.classList.toggle("is-dim", !activeToken);
      return;
    }

    outputText.textContent = full;

    if (activeToken) {
      outputNote.textContent = activeToken.output
        ? "This piece helps produce the highlighted output."
        : "This piece doesn't show up in the output — it's an instruction for " + language + ", not printed text.";
      outputNote.classList.remove("is-dim");
    } else {
      outputNote.textContent = "Hover, tap, or tab a piece of code above to see how it connects here.";
      outputNote.classList.add("is-dim");
    }
  }

 function showToken(btn) {
  var token = btn._token;
  tokenButtons.forEach(function (b) {
    b.classList.toggle("is-active", b === btn);
    b.classList.toggle("is-selected", b === selectedBtn);
    b.classList.toggle("is-paired", b !== btn && !!token.pairId && b._token.pairId === token.pairId);
  });
tokenButtons.forEach(function (b) {
  b.classList.remove("is-active", "is-selected", "is-paired");
});

  var typeLabel = typeLabelFor[token.type] || humanizeType(token.type);

  captionBox.innerHTML = "";
  var kicker = document.createElement("strong");
  kicker.className = "syntax-annot-caption-kicker type-" + token.type;
  kicker.textContent = "#" + token.order + " · " + typeLabel;
  captionBox.appendChild(kicker);

  var tip = document.createElement("p");
  tip.textContent = token.tip;
  captionBox.appendChild(tip);

  renderOutput(token);
}

  function clearToShownOrPlaceholder() {
    if (selectedBtn) {
      showToken(selectedBtn);
      return;
    }

    tokenButtons.forEach(function (b) {
      b.classList.remove("is-active", "is-paired");
    });

    captionBox.innerHTML =
      '<p class="is-dim">Hover, tap, or tab through the code above to learn what each piece does.</p>';

    renderOutput(null);
  }

  tokenButtons.forEach(function (btn) {
    btn.addEventListener("mouseenter", function () {
      showToken(btn);
    });
    btn.addEventListener("focus", function () {
      showToken(btn);
    });
    btn.addEventListener("mouseleave", clearToShownOrPlaceholder);
    btn.addEventListener("blur", clearToShownOrPlaceholder);
    btn.addEventListener("click", function () {
      selectedBtn = selectedBtn === btn ? null : btn;
      if (selectedBtn) {
        showToken(selectedBtn);
      } else {
        clearToShownOrPlaceholder();
      }
    });
  });

  clearToShownOrPlaceholder();
  return wrap;
}

  // Standalone use: the annotated diagram is the whole Try It tab (e.g. the
  // Python syntax intro card).
  function renderSyntaxAnnotate(card, sa) {
    var wrap = buildSyntaxAnnotateEl(card, sa);
    tryItPanel.appendChild(wrap);

    activeTryIt = {
      destroy: function () {},
      refresh: function () {},
    };
  }

  // Combined use: the annotated diagram sits above a real, runnable code
  // editor (reusing the normal playground), separated by a "How This Shows
  // Up In the IDE" section heading \u2014 so the abstract, hoverable breakdown
  // scaffolds into the real, concrete tool right below it on the same tab.
  // `pg` is a normal playground object, same shape used by card.playground.
  function renderSyntaxAnnotateWithIde(card, sa, pg) {
    var wrap = buildSyntaxAnnotateEl(card, sa);
    tryItPanel.appendChild(wrap);

    var divider = document.createElement("div");
    divider.className = "syntax-annot-ide-divider";
    tryItPanel.appendChild(divider);

    var ideHeading = document.createElement("h4");
    ideHeading.className = "syntax-annot-ide-heading";
    ideHeading.textContent = sa.ideHeading || "How This Shows Up In the IDE";
    tryItPanel.appendChild(ideHeading);

    var ideCaption = document.createElement("p");
    ideCaption.className = "syntax-annot-ide-caption";
    ideCaption.textContent =
      sa.ideCaption ||
      "Same idea, real tool \u2014 here's that code (plus the extra setup it needs to run) in a live editor. Click Run to actually execute it.";
    tryItPanel.appendChild(ideCaption);

    // renderRunnableTryIt appends its own editor/output panel to tryItPanel
    // and sets activeTryIt itself (with the real CodeMirror teardown), which
    // is exactly the cleanup we want when this combined tab is torn down.
    renderRunnableTryIt(card, pg);
  }

  // ---- REPL vs Script Simulator: a guided, click-through comparison of
  // running code one line at a time (REPL) versus all at once (a saved
  // script). Not a real interpreter \u2014 every line's output is pre-scripted
  // in the data so the *timing* of when output appears is always correct
  // and pedagogically clean. Data shape:
  //   {
  //     filename: "greet.py",       // optional, shown on the script tab
  //     prompt: ">>>",              // optional REPL prompt symbol
  //     lines: [ { code: "name = 'Explorer'" },
  //              { code: "print('Hello, ' + name + '!')", output: "Hello, Explorer!" } ]
  //   }
  function renderReplVsScript(card, rv) {
    var promptSymbol = rv.prompt || ">>>";
    var filename = rv.filename || "script.py";
    var lines = rv.lines || [];

    var wrap = document.createElement("div");
    wrap.className = "rvs-wrap";

    var instructions = document.createElement("p");
    instructions.className = "tagmatch-instructions";
    instructions.textContent =
      "Same lines of code, run two different ways. Switch modes, then step through each one to see when output actually shows up.";
    wrap.appendChild(instructions);

    var toggleRow = document.createElement("div");
    toggleRow.className = "rvs-toggle";
    var replToggleBtn = document.createElement("button");
    replToggleBtn.type = "button";
    replToggleBtn.className = "rvs-toggle-btn";
    replToggleBtn.textContent = "REPL \u2014 line by line";
    var scriptToggleBtn = document.createElement("button");
    scriptToggleBtn.type = "button";
    scriptToggleBtn.className = "rvs-toggle-btn";
    scriptToggleBtn.textContent = "Script \u2014 all at once";
    toggleRow.appendChild(replToggleBtn);
    toggleRow.appendChild(scriptToggleBtn);
    wrap.appendChild(toggleRow);

    var stage = document.createElement("div");
    stage.className = "rvs-stage";
    wrap.appendChild(stage);

    var caption = document.createElement("div");
    caption.className = "syntax-annot-caption rvs-caption";
    wrap.appendChild(caption);

    function setCaption(text) {
      caption.textContent = text;
    }

    var CAPTIONS = {
      replIdle:
        'Click \u201cType next line\u201d to see what happens right after each line runs.',
      replProgress:
        "Notice \u2014 you get a result (or a quiet moment with no output) immediately after every single line, before you even type the next one.",
      replDone:
        "That's the REPL loop: Read your line, Evaluate it, Print any result, then Loop back for the next line \u2014 one line at a time, with feedback after each one.",
      scriptIdle:
        "The whole file is already written, top to bottom. Nothing runs until you press Run.",
      scriptDone:
        "Notice \u2014 nothing appeared until the entire file finished running, then every print showed up together, in the order it was written. Lines with no print (like line 1) never show anything on their own.",
    };

    // ---- REPL panel ----
    var replPanel = document.createElement("div");

    var replWin = document.createElement("div");
    replWin.className = "syntax-annot-window rvs-window";
    var replTitlebar = document.createElement("div");
    replTitlebar.className = "syntax-annot-titlebar";
    ["red", "yellow", "green"].forEach(function (c) {
      var dot = document.createElement("span");
      dot.className = "syntax-annot-dot syntax-annot-dot--" + c;
      replTitlebar.appendChild(dot);
    });
    var replLabel = document.createElement("span");
    replLabel.className = "syntax-annot-filename";
    replLabel.textContent = "Python REPL";
    replTitlebar.appendChild(replLabel);
    replWin.appendChild(replTitlebar);

    var replTranscript = document.createElement("div");
    replTranscript.className = "rvs-transcript";
    replWin.appendChild(replTranscript);
    replPanel.appendChild(replWin);

    var replControls = document.createElement("div");
    replControls.className = "rvs-controls";
    var replStepBtn = document.createElement("button");
    replStepBtn.type = "button";
    replStepBtn.className = "tryit-btn";
    replStepBtn.textContent = "Type next line \u25b8";
    var replResetBtn = document.createElement("button");
    replResetBtn.type = "button";
    replResetBtn.className = "tryit-btn tryit-btn--ghost";
    replResetBtn.textContent = "\u21ba Start over";
    var replProgress = document.createElement("span");
    replProgress.className = "rvs-progress";
    replControls.appendChild(replStepBtn);
    replControls.appendChild(replResetBtn);
    replControls.appendChild(replProgress);
    replPanel.appendChild(replControls);

    var replStep = 0;

    function appendPromptGhost() {
      var ghost = document.createElement("div");
      ghost.className = "rvs-line rvs-line--ghost";
      ghost.textContent = promptSymbol + " ";
      var cursor = document.createElement("span");
      cursor.className = "rvs-cursor";
      ghost.appendChild(cursor);
      replTranscript.appendChild(ghost);
    }

    function resetRepl() {
      replStep = 0;
      replTranscript.innerHTML = "";
      replStepBtn.disabled = false;
      replStepBtn.textContent = "Type next line \u25b8";
      replProgress.textContent = "Line 1 of " + lines.length;
      appendPromptGhost();
      if (mode === "repl") setCaption(CAPTIONS.replIdle);
    }

    function stepRepl() {
      var ghost = replTranscript.querySelector(".rvs-line--ghost");
      if (ghost) ghost.remove();

      var line = lines[replStep];
      var inputRow = document.createElement("div");
      inputRow.className = "rvs-line rvs-line--input";
      inputRow.textContent = promptSymbol + " " + line.code;
      replTranscript.appendChild(inputRow);

      if (line.output) {
        var outRow = document.createElement("div");
        outRow.className = "rvs-line rvs-line--output";
        outRow.textContent = line.output;
        replTranscript.appendChild(outRow);
      } else {
        var noteRow = document.createElement("div");
        noteRow.className = "rvs-line rvs-line--note";
        noteRow.textContent = "(no output \u2014 this line just stored a value)";
        replTranscript.appendChild(noteRow);
      }

      replStep++;
      replTranscript.scrollTop = replTranscript.scrollHeight;

      if (replStep < lines.length) {
        appendPromptGhost();
        replProgress.textContent = "Line " + (replStep + 1) + " of " + lines.length;
        setCaption(CAPTIONS.replProgress);
      } else {
        replStepBtn.disabled = true;
        replStepBtn.textContent = "All lines typed \u2713";
        replProgress.textContent = "Done";
        setCaption(CAPTIONS.replDone);
      }
    }

    replStepBtn.addEventListener("click", stepRepl);
    replResetBtn.addEventListener("click", resetRepl);

    // ---- Script panel ----
    var scriptPanel = document.createElement("div");

    var scriptWin = document.createElement("div");
    scriptWin.className = "syntax-annot-window rvs-window";
    var scriptTitlebar = document.createElement("div");
    scriptTitlebar.className = "syntax-annot-titlebar";
    ["red", "yellow", "green"].forEach(function (c) {
      var dot = document.createElement("span");
      dot.className = "syntax-annot-dot syntax-annot-dot--" + c;
      scriptTitlebar.appendChild(dot);
    });
    var scriptFilename = document.createElement("span");
    scriptFilename.className = "syntax-annot-filename";
    scriptFilename.textContent = filename;
    scriptTitlebar.appendChild(scriptFilename);
    scriptWin.appendChild(scriptTitlebar);

    var scriptBody = document.createElement("div");
    scriptBody.className = "syntax-annot-body rvs-scriptbody";
    lines.forEach(function (line, i) {
      var row = document.createElement("div");
      row.className = "rvs-scriptline";
      var no = document.createElement("span");
      no.className = "syntax-annot-lineno";
      no.textContent = String(i + 1);
      row.appendChild(no);
      var code = document.createElement("span");
      code.className = "rvs-scriptcode";
      code.textContent = line.code;
      row.appendChild(code);
      scriptBody.appendChild(row);
    });
    scriptWin.appendChild(scriptBody);
    scriptPanel.appendChild(scriptWin);

    var scriptControls = document.createElement("div");
    scriptControls.className = "rvs-controls";
    var runBtn = document.createElement("button");
    runBtn.type = "button";
    runBtn.className = "tryit-btn";
    runBtn.textContent = "\u25b6 Run " + filename;
    var scriptResetBtn = document.createElement("button");
    scriptResetBtn.type = "button";
    scriptResetBtn.className = "tryit-btn tryit-btn--ghost";
    scriptResetBtn.textContent = "\u21ba Reset";
    scriptControls.appendChild(runBtn);
    scriptControls.appendChild(scriptResetBtn);
    scriptPanel.appendChild(scriptControls);

    var scriptOutputLabel = document.createElement("p");
    scriptOutputLabel.className = "tryit-col-label";
    scriptOutputLabel.style.marginTop = "var(--space-3)";
    scriptOutputLabel.textContent = "Terminal output";
    scriptPanel.appendChild(scriptOutputLabel);

    var scriptOutputShell = document.createElement("div");
    scriptOutputShell.className = "syntax-annot-output-shell rvs-output-shell";
    scriptPanel.appendChild(scriptOutputShell);

    function resetScript() {
      scriptOutputShell.innerHTML = "";
      var ph = document.createElement("span");
      ph.className = "rvs-output-placeholder";
      ph.textContent = "(nothing yet \u2014 " + filename + " hasn't been run)";
      scriptOutputShell.appendChild(ph);
      runBtn.disabled = false;
      runBtn.textContent = "\u25b6 Run " + filename;
      if (mode === "script") setCaption(CAPTIONS.scriptIdle);
    }

    function runScript() {
      scriptOutputShell.innerHTML = "";
      var any = false;
      lines.forEach(function (line) {
        if (line.output) {
          any = true;
          var row = document.createElement("div");
          row.className = "rvs-output-line";
          row.textContent = line.output;
          scriptOutputShell.appendChild(row);
        }
      });
      if (!any) {
        var none = document.createElement("span");
        none.className = "rvs-output-placeholder";
        none.textContent = "(the file ran, but nothing was printed)";
        scriptOutputShell.appendChild(none);
      }
      runBtn.disabled = true;
      runBtn.textContent = "Ran \u2713";
      setCaption(CAPTIONS.scriptDone);
    }

    runBtn.addEventListener("click", runScript);
    scriptResetBtn.addEventListener("click", resetScript);

    // ---- mode switching ----
    var mode = "repl";
    function showMode(next) {
      mode = next;
      stage.innerHTML = "";
      replToggleBtn.classList.toggle("is-active", mode === "repl");
      scriptToggleBtn.classList.toggle("is-active", mode === "script");
      if (mode === "repl") {
        stage.appendChild(replPanel);
        setCaption(
          replStep === 0
            ? CAPTIONS.replIdle
            : replStep < lines.length
            ? CAPTIONS.replProgress
            : CAPTIONS.replDone
        );
      } else {
        stage.appendChild(scriptPanel);
        setCaption(runBtn.disabled ? CAPTIONS.scriptDone : CAPTIONS.scriptIdle);
      }
    }

    replToggleBtn.addEventListener("click", function () {
      showMode("repl");
    });
    scriptToggleBtn.addEventListener("click", function () {
      showMode("script");
    });

    resetRepl();
    resetScript();
    showMode("repl");

    tryItPanel.appendChild(wrap);

    activeTryIt = {
      destroy: function () {},
      refresh: function () {},
    };
  }

  // ---- Remix Challenge: same sample site, click-to-identify questions in
  // sequence, then an open (ungraded) reflection textarea.
  function renderRemixChallenge(card, data) {
    if (typeof data.__step !== "number") data.__step = 0;

    var wrap = document.createElement("div");
    wrap.className = "remix-wrap";

    var instructions = document.createElement("p");
    instructions.className = "tagmatch-instructions";
    instructions.textContent =
      "This is the same sample site from the last activity. Answer each question by clicking directly on the site.";
    wrap.appendChild(instructions);

    var promptEl = document.createElement("p");
    promptEl.className = "anatomy-quiz-title";
    wrap.appendChild(promptEl);

    var siteShell = document.createElement("div");
    siteShell.className = "anatomy-site-shell ssx-scope";
    siteShell.innerHTML = data.siteHtml;
    wrap.appendChild(siteShell);

    var feedbackEl = document.createElement("div");
    feedbackEl.className = "tagmatch-feedback";
    wrap.appendChild(feedbackEl);

    var reflectionSection = document.createElement("div");
    reflectionSection.className = "remix-reflection";
    wrap.appendChild(reflectionSection);

    siteShell.addEventListener("submit", function (e) {
      e.preventDefault();
    });

    function renderReflection() {
      reflectionSection.innerHTML = "";
      var label = document.createElement("p");
      label.className = "tryit-col-label";
      label.textContent = "Reflect";
      reflectionSection.appendChild(label);

      var promptText = document.createElement("p");
      promptText.className = "anatomy-quiz-title";
      promptText.textContent = data.reflectionPrompt;
      reflectionSection.appendChild(promptText);

      var textarea = document.createElement("textarea");
      textarea.className = "remix-textarea";
      textarea.placeholder = "Type your thoughts here...";
      textarea.value = data.__reflectionText || "";
      reflectionSection.appendChild(textarea);

      var saveBtn = document.createElement("button");
      saveBtn.type = "button";
      saveBtn.className = "tryit-btn";
      saveBtn.style.marginTop = "var(--space-3)";
      saveBtn.textContent = "Save My Reflection";
      reflectionSection.appendChild(saveBtn);

      var savedNote = document.createElement("p");
      savedNote.className = "remix-saved-note";
      if (data.__reflectionSaved) savedNote.textContent = "Saved \u2014 nice thinking!";
      reflectionSection.appendChild(savedNote);

      saveBtn.addEventListener("click", function () {
        data.__reflectionText = textarea.value;
        if (textarea.value.trim().length > 0) {
          data.__reflectionSaved = true;
          savedNote.textContent = "Saved \u2014 nice thinking!";
        } else {
          savedNote.textContent = "Type a few thoughts before saving.";
        }
      });
    }

    function renderStep() {
      feedbackEl.innerHTML = "";
      if (data.__step >= data.clickQuestions.length) {
        promptEl.textContent = "Nice work \u2014 you've mapped every part!";
        wrap.classList.add("is-complete");
        renderReflection();
        return;
      }
      var q = data.clickQuestions[data.__step];
      promptEl.textContent = q.prompt;
    }

    siteShell.addEventListener("click", function (e) {
      e.preventDefault();
      if (data.__step >= data.clickQuestions.length) return;
      var q = data.clickQuestions[data.__step];
      var hit = e.target.closest(q.targetSelector);
      feedbackEl.innerHTML = "";
      var banner = document.createElement("div");
      if (hit) {
        banner.className = "tagmatch-feedback-banner tagmatch-feedback-success";
        banner.textContent = q.correctFeedback;
        feedbackEl.appendChild(banner);
        data.__step += 1;
        setTimeout(renderStep, 900);
      } else {
        banner.className = "tagmatch-feedback-banner tagmatch-feedback-retry";
        banner.textContent = q.retryFeedback;
        feedbackEl.appendChild(banner);
      }
    });

    renderStep();
    tryItPanel.appendChild(wrap);

    activeTryIt = {
      destroy: function () {},
      refresh: function () {},
    };
  }

  // ---- Vibe Coding Extension: static "AI output" preview (deliberately
  // flawed) + chip-based diagnostic questions + a self-assessment checklist
  // + an open (ungraded) final reflection.
  function renderVibeCoding(card, data) {
    if (!data.__checked) data.__checked = {};
    if (!data.__checklist) data.__checklist = {};

    var wrap = document.createElement("div");
    wrap.className = "vibe-wrap";

    var promptLabel = document.createElement("p");
    promptLabel.className = "tryit-col-label";
    promptLabel.textContent = "Starter prompt given to the AI";
    wrap.appendChild(promptLabel);

    var promptBox = document.createElement("pre");
    promptBox.className = "vibe-prompt-box";
    promptBox.textContent = data.starterPrompt;
    wrap.appendChild(promptBox);

    var previewLabel = document.createElement("p");
    previewLabel.className = "tryit-col-label";
    previewLabel.style.marginTop = "var(--space-3)";
    previewLabel.textContent = "What the AI actually produced";
    wrap.appendChild(previewLabel);

    var previewShell = document.createElement("div");
    previewShell.className = "tagmatch-preview-shell vibe-preview-shell";
    var iframe = document.createElement("iframe");
    iframe.setAttribute("sandbox", "");
    iframe.title = "AI output preview";
    iframe.setAttribute("srcdoc", data.aiOutputHtml);
    previewShell.appendChild(iframe);
    wrap.appendChild(previewShell);

    var diagLabel = document.createElement("p");
    diagLabel.className = "tryit-col-label";
    diagLabel.style.marginTop = "var(--space-4)";
    diagLabel.textContent = "Diagnose the output";
    wrap.appendChild(diagLabel);

    var diagHost = document.createElement("div");
    diagHost.className = "vibe-diagnostics";
    wrap.appendChild(diagHost);

    data.diagnosticQuestions.forEach(function (q) {
      var qEl = document.createElement("div");
      qEl.className = "vibe-question";
      var qTitle = document.createElement("p");
      qTitle.className = "anatomy-quiz-title";
      qTitle.textContent = q.prompt;
      qEl.appendChild(qTitle);

      var palette = document.createElement("div");
      palette.className = "tagmatch-palette";

      var feedbackEl = document.createElement("div");
      feedbackEl.className = "tagmatch-feedback vibe-q-feedback";

      q.options.forEach(function (opt) {
        var chip = document.createElement("button");
        chip.type = "button";
        chip.className = "tagmatch-chip";
        chip.textContent = opt.label;
        chip.addEventListener("click", function () {
          if (data.__checked[q.id]) return;
          feedbackEl.innerHTML = "";
          var banner = document.createElement("div");
          if (opt.correct) {
            data.__checked[q.id] = true;
            banner.className = "tagmatch-feedback-banner tagmatch-feedback-success";
            banner.textContent = q.explanation;
            palette.querySelectorAll(".tagmatch-chip").forEach(function (c) {
              c.disabled = true;
            });
            chip.classList.add("is-active");
          } else {
            banner.className = "tagmatch-feedback-banner tagmatch-feedback-retry";
            banner.textContent = "Take another look at the preview above and try again.";
          }
          feedbackEl.appendChild(banner);
        });
        palette.appendChild(chip);
      });
      qEl.appendChild(palette);
      qEl.appendChild(feedbackEl);

      diagHost.appendChild(qEl);
    });

    var checklistLabel = document.createElement("p");
    checklistLabel.className = "tryit-col-label";
    checklistLabel.style.marginTop = "var(--space-4)";
    checklistLabel.textContent = "What would you fix for clarity? (select all that apply)";
    wrap.appendChild(checklistLabel);

    var checklistHost = document.createElement("div");
    checklistHost.className = "tagmatch-palette vibe-checklist";
    data.checklistOptions.forEach(function (opt, idx) {
      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "tagmatch-chip tagmatch-chip--wide";
      chip.textContent = opt;
      if (data.__checklist[idx]) chip.classList.add("is-active");
      chip.addEventListener("click", function () {
        data.__checklist[idx] = !data.__checklist[idx];
        chip.classList.toggle("is-active", !!data.__checklist[idx]);
      });
      checklistHost.appendChild(chip);
    });
    wrap.appendChild(checklistHost);

    var reflectionLabel = document.createElement("p");
    reflectionLabel.className = "tryit-col-label";
    reflectionLabel.style.marginTop = "var(--space-4)";
    reflectionLabel.textContent = "Final reflection";
    wrap.appendChild(reflectionLabel);

    var reflectionPrompt = document.createElement("p");
    reflectionPrompt.className = "anatomy-quiz-title";
    reflectionPrompt.textContent = data.reflectionPrompt;
    wrap.appendChild(reflectionPrompt);

    var textarea = document.createElement("textarea");
    textarea.className = "remix-textarea";
    textarea.placeholder = "Type your thoughts here...";
    textarea.value = data.__reflectionText || "";
    wrap.appendChild(textarea);

    var saveBtn = document.createElement("button");
    saveBtn.type = "button";
    saveBtn.className = "tryit-btn";
    saveBtn.style.marginTop = "var(--space-3)";
    saveBtn.textContent = "Save My Reflection";
    wrap.appendChild(saveBtn);

    var savedNote = document.createElement("p");
    savedNote.className = "remix-saved-note";
    if (data.__reflectionSaved) savedNote.textContent = "Saved \u2014 nice thinking!";
    wrap.appendChild(savedNote);

    saveBtn.addEventListener("click", function () {
      data.__reflectionText = textarea.value;
      if (textarea.value.trim().length > 0) {
        data.__reflectionSaved = true;
        savedNote.textContent = "Saved \u2014 nice thinking!";
      } else {
        savedNote.textContent = "Type a few thoughts before saving.";
      }
    });

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

    // ---- Match activity: click-to-match knowledge check, generalized for
    // any concept (CSS selectors, attributes, code syntax, etc.) \u2014 see
    // renderMatchActivity above for the full data shape.
    if (card.matchActivity) {
      if (tryItTabBtn) {
        tryItTabBtn.disabled = false;
        tryItTabBtn.classList.remove("is-disabled");
        tryItTabBtn.setAttribute("aria-disabled", "false");
        tryItTabBtn.removeAttribute("title");
      }
      renderMatchActivity(card, card.matchActivity);
      return;
    }

    // ---- Website Anatomy Lab: hover/click a real sample site instead of
    // free code entry.
    if (card.anatomyLab) {
      if (tryItTabBtn) {
        tryItTabBtn.disabled = false;
        tryItTabBtn.classList.remove("is-disabled");
        tryItTabBtn.setAttribute("aria-disabled", "false");
        tryItTabBtn.removeAttribute("title");
      }
      renderAnatomyLab(card, card.anatomyLab);
      return;
    }

    // ---- Syntax Annotate Lab: hoverable/tappable annotated code diagram
    // used to introduce syntax concepts before a match activity. If the card
    // ALSO has a playground, render the annotated diagram first, then a
    // "How This Shows Up In the IDE" section with the real, runnable editor
    // underneath it \u2014 scaffolding from the abstract breakdown to the real tool.
    if (card.syntaxAnnotate) {
      if (tryItTabBtn) {
        tryItTabBtn.disabled = false;
        tryItTabBtn.classList.remove("is-disabled");
        tryItTabBtn.setAttribute("aria-disabled", "false");
        tryItTabBtn.removeAttribute("title");
      }
      if (card.playground) {
        renderSyntaxAnnotateWithIde(card, card.syntaxAnnotate, card.playground);
      } else {
        renderSyntaxAnnotate(card, card.syntaxAnnotate);
      }
      return;
    }

    // ---- REPL vs Script Simulator: guided click-through comparison.
    if (card.replVsScript) {
      if (tryItTabBtn) {
        tryItTabBtn.disabled = false;
        tryItTabBtn.classList.remove("is-disabled");
        tryItTabBtn.setAttribute("aria-disabled", "false");
        tryItTabBtn.removeAttribute("title");
      }
      renderReplVsScript(card, card.replVsScript);
      return;
    }

    // ---- Remix Challenge: click-to-identify + open reflection.
    if (card.remixChallenge) {
      if (tryItTabBtn) {
        tryItTabBtn.disabled = false;
        tryItTabBtn.classList.remove("is-disabled");
        tryItTabBtn.setAttribute("aria-disabled", "false");
        tryItTabBtn.removeAttribute("title");
      }
      renderRemixChallenge(card, card.remixChallenge);
      return;
    }

    // ---- Vibe Coding Extension: diagnose a flawed "AI output" sample.
    if (card.vibeCoding) {
      if (tryItTabBtn) {
        tryItTabBtn.disabled = false;
        tryItTabBtn.classList.remove("is-disabled");
        tryItTabBtn.setAttribute("aria-disabled", "false");
        tryItTabBtn.removeAttribute("title");
      }
      renderVibeCoding(card, card.vibeCoding);
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

    // Playground exists â€” enable the tab.
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
      // hidden with display:none) â€” refresh on the next frame so CodeMirror
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


