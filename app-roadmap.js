// app-roadmap.js — renders the 15 trail nodes from LESSON_CONTENT + QUEST_NODES,
// applies locked/unlocked/completed states from progress.js, wires up the
// passport tracker, toast, confetti, dark-mode toggle, and reset control.

(function () {
  "use strict";

  var LOCK_ICON_SVG =
    '<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="15" fill="#1B2A4A" stroke="#0B1626" stroke-width="1.5"/><rect x="10" y="15" width="12" height="10" rx="2" fill="#F7F3E9"/><path d="M12.5 15V11.5C12.5 8.5 14 7 16 7C18 7 19.5 8.5 19.5 11.5V15" stroke="#F7F3E9" stroke-width="2.4" fill="none" stroke-linecap="round"/><circle cx="16" cy="19.5" r="1.8" fill="#1B2A4A"/></svg>';

  var STAMP_ICON_SVG =
    '<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="15" fill="#FFD84A" stroke="#1B2A4A" stroke-width="2"/><path d="M9 16.5l4.5 4.5L23 11" stroke="#1B2A4A" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var trailPathEl = document.getElementById("trail-path");
  var passportCountEl = document.getElementById("passport-count");
  var toastEl = document.getElementById("toast");
  var confettiLayer = document.getElementById("confetti-layer");
  var toastTimer = null;

  // Track which nodes were "locked" on the previous render pass (e.g. a lesson
  // was just completed via lesson page) so we can animate the pop-in once.
  var JUST_UNLOCKED_KEY = "questMapJustUnlocked";

  function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.add("visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove("visible");
    }, 2400);
  }

  function fireConfetti() {
    var colors = ["#FF5A3D", "#0EA5A0", "#FFB238", "#FF4F9A", "#1B2A4A"];
    for (var i = 0; i < 36; i++) {
      var piece = document.createElement("div");
      piece.className = "confetti-piece";
      var left = 50 + (Math.random() * 40 - 20);
      piece.style.left = left + "%";
      piece.style.top = "40%";
      piece.style.background = colors[i % colors.length];
      piece.style.animationDelay = Math.random() * 180 + "ms";
      piece.style.transform = "rotate(" + Math.random() * 360 + "deg)";
      confettiLayer.appendChild(piece);
      (function (el) {
        setTimeout(function () {
          el.remove();
        }, 1700);
      })(piece);
    }
  }

  function loadSvgInto(container, url) {
    fetch(url)
      .then(function (res) {
        if (!res.ok) throw new Error("icon fetch failed");
        return res.text();
      })
      .then(function (svgText) {
        container.innerHTML = svgText;
      })
      .catch(function () {
        container.innerHTML = "";
      });
  }

  function buildNode(lesson, node, index, state, isJustUnlocked) {
    var wrap = document.createElement("div");
    wrap.className = "trail-node-wrap";

    var connector = document.createElement("div");
    connector.className = "trail-connector" + (state !== "locked" ? " filled" : "");
    wrap.appendChild(connector);

    var isClickable = state !== "locked";
    var nodeEl = document.createElement(isClickable ? "a" : "button");
    nodeEl.className = "quest-node is-" + state + (isJustUnlocked ? " just-unlocked" : "");
    nodeEl.style.setProperty("--rot", index % 2 === 0 ? "-2.5deg" : "2.5deg");

    if (isClickable) {
      nodeEl.href = lesson.id + ".html";
    } else {
      nodeEl.setAttribute("type", "button");
      nodeEl.setAttribute("aria-disabled", "true");
    }
    nodeEl.setAttribute(
      "aria-label",
      lesson.title + " — " + (state === "completed" ? "completed" : state === "unlocked" ? "unlocked, start lesson" : "locked")
    );

    var badge = document.createElement("div");
    badge.className = "node-badge";
    var iconWrap = document.createElement("div");
    iconWrap.style.width = "100%";
    iconWrap.style.height = "100%";
    loadSvgInto(iconWrap, node.icon);
    badge.appendChild(iconWrap);

    var lockChip = document.createElement("div");
    lockChip.className = "lock-chip";
    lockChip.innerHTML = LOCK_ICON_SVG;
    badge.appendChild(lockChip);

    var stampChip = document.createElement("div");
    stampChip.className = "stamp-badge";
    stampChip.innerHTML = STAMP_ICON_SVG;
    badge.appendChild(stampChip);

    nodeEl.appendChild(badge);

    var label = document.createElement("div");
    label.className = "node-label";
    label.innerHTML = '<span class="node-index">Stop ' + (index + 1) + "</span>" + lesson.title;
    nodeEl.appendChild(label);

    if (!isClickable) {
      nodeEl.addEventListener("click", function () {
        nodeEl.classList.add("shake");
        setTimeout(function () {
          nodeEl.classList.remove("shake");
        }, 450);
        var prevTitle = getPreviousLessonTitle(lesson.id);
        showToast(
          prevTitle
            ? "Finish \u201c" + prevTitle + "\u201d to unlock this stop!"
            : "Complete the previous stop to unlock this one!"
        );
      });
    }

    wrap.appendChild(nodeEl);
    return wrap;
  }

  function render() {
    var progress = getProgress();
    var justUnlockedId = null;
    try {
      justUnlockedId = sessionStorage.getItem(JUST_UNLOCKED_KEY);
    } catch (e) {}

    trailPathEl.innerHTML = "";
    QUEST_NODES.forEach(function (node, index) {
      var lesson = LESSON_CONTENT.find(function (l) {
        return l.id === node.id;
      });
      if (!lesson) return;
      var state = progress[node.id] || "locked";
      var isJustUnlocked = state === "unlocked" && node.id === justUnlockedId;
      var el = buildNode(lesson, node, index, state, isJustUnlocked);
      trailPathEl.appendChild(el);
    });

    passportCountEl.textContent = String(getCompletedCount());

    if (justUnlockedId) {
      try {
        sessionStorage.removeItem(JUST_UNLOCKED_KEY);
      } catch (e) {}
    }

    // Confetti burst if we just arrived here right after completing a lesson.
    var justCompleted = null;
    try {
      justCompleted = sessionStorage.getItem("questMapJustCompleted");
    } catch (e) {}
    if (justCompleted) {
      fireConfetti();
      showToast("Stop stamped! On to the next adventure. \uD83C\uDF89");
      try {
        sessionStorage.removeItem("questMapJustCompleted");
      } catch (e) {}
    }
  }

  // Dark mode toggle
  (function () {
    var t = document.querySelector("[data-theme-toggle]"),
      r = document.documentElement;
    var d = matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light";
    r.setAttribute("data-theme", d);
    t &&
      t.addEventListener("click", function () {
        d = d === "dark" ? "light" : "dark";
        r.setAttribute("data-theme", d);
        t.setAttribute("aria-label", "Switch to " + (d === "dark" ? "light" : "dark") + " mode");
        t.innerHTML =
          d === "dark"
            ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
            : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
      });
  })();

  var resetBtn = document.getElementById("reset-progress-btn");
  resetBtn.addEventListener("click", function () {
    if (confirm("Reset all quest progress? This clears every stamp.")) {
      resetProgress();
      showToast("Progress reset. Fresh trail ahead!");
      render();
    }
  });

  render();
})();
