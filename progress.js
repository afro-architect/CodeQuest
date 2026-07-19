// progress.js
// Shared quest-progress engine for the Teen Adventure Quest Map course.
// Holds the ordered lesson sequence + node metadata (icon/theme) and every
// localStorage read/write/unlock helper. Imported by roadmap.html and every
// lesson-N.html page. Lesson copy itself lives in content.js — this file
// only adds the map-specific metadata (icon file, short label, banner file).

const STORAGE_KEY = "questMapProgress";

// Ordered node sequence — the single source of truth for stop order,
// icon assets, and banner assets. Titles/themes are pulled from
// LESSON_CONTENT (content.js) at render time so copy never duplicates.
const QUEST_NODES = [
  { id: "lesson-1",  icon: "assets/icons/node-1-campsite.svg",    banner: "assets/banners/banner-1-campsite.webp",    shortLabel: "Trailhead" },
  { id: "lesson-2",  icon: "assets/icons/node-2-skatepark.svg",   banner: "assets/banners/banner-2-skatepark.webp",   shortLabel: "Skate Park" },
  { id: "lesson-3",  icon: "assets/icons/node-3-snacktruck.svg",  banner: "assets/banners/banner-3-snacktruck.webp",  shortLabel: "Snack Trucks" },
  { id: "lesson-4",  icon: "assets/icons/node-4-mall.svg",        banner: "assets/banners/banner-4-mall.webp",        shortLabel: "The Mall" },
  { id: "lesson-5",  icon: "assets/icons/node-5-arcade.svg",      banner: "assets/banners/banner-5-arcade.webp",      shortLabel: "Arcade" },
  { id: "lesson-6",  icon: "assets/icons/node-6-surf.svg",        banner: "assets/banners/banner-6-surf.webp",        shortLabel: "Surf Break" },
  { id: "lesson-7",  icon: "assets/icons/node-7-basecamp.svg",    banner: "assets/banners/banner-7-basecamp.webp",    shortLabel: "Basecamp" },
  { id: "lesson-8",  icon: "assets/icons/node-8-zipline.svg",     banner: "assets/banners/banner-8-zipline.webp",     shortLabel: "Zipline" },
  { id: "lesson-9",  icon: "assets/icons/node-9-nightmarket.svg", banner: "assets/banners/banner-9-nightmarket.webp", shortLabel: "Night Market" },
  { id: "lesson-10", icon: "assets/icons/node-10-backstage.svg",  banner: "assets/banners/banner-10-backstage.webp",  shortLabel: "Backstage" },
  { id: "lesson-11", icon: "assets/icons/node-11-stadium.svg",    banner: "assets/banners/banner-11-stadium.webp",    shortLabel: "Stadium" },
  { id: "lesson-12", icon: "assets/icons/node-12-chatbot.svg",    banner: "assets/banners/banner-12-chatbot.webp",    shortLabel: "Chatbot Alley" },
  { id: "lesson-13", icon: "assets/icons/node-13-photobooth.svg", banner: "assets/banners/banner-13-photobooth.webp", shortLabel: "Photo Booth" },
  { id: "lesson-14", icon: "assets/icons/node-14-observatory.svg",banner: "assets/banners/banner-14-observatory.webp",shortLabel: "Observatory" },
  { id: "lesson-15", icon: "assets/icons/node-15-summit.svg",     banner: "assets/banners/banner-15-summit.webp",     shortLabel: "Summit" }
];

const LESSON_SEQUENCE = QUEST_NODES.map((n) => n.id);

/** Build the default first-visit state: lesson-1 unlocked, rest locked. */
function defaultProgress() {
  const state = {};
  LESSON_SEQUENCE.forEach((id, i) => {
    state[id] = i === 0 ? "unlocked" : "locked";
  });
  return state;
}

/** Read progress from localStorage, seeding defaults on first visit or corruption. */
function getProgress() {
  let raw;
  try {
    raw = localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    return defaultProgress();
  }
  if (!raw) {
    const seeded = defaultProgress();
    saveProgress(seeded);
    return seeded;
  }
  try {
    const parsed = JSON.parse(raw);
    // Backfill any missing ids (e.g. sequence grew) without clobbering saved progress.
    const seeded = defaultProgress();
    LESSON_SEQUENCE.forEach((id) => {
      if (parsed[id]) seeded[id] = parsed[id];
    });
    return seeded;
  } catch (e) {
    const seeded = defaultProgress();
    saveProgress(seeded);
    return seeded;
  }
}

function saveProgress(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    /* localStorage unavailable — progress just won't persist this session */
  }
}

function getLessonState(lessonId) {
  const progress = getProgress();
  return progress[lessonId] || "locked";
}

/** Mark a lesson completed + unlock the next one in sequence. Returns updated state. */
function completeLesson(lessonId) {
  const progress = getProgress();
  progress[lessonId] = "completed";
  const idx = LESSON_SEQUENCE.indexOf(lessonId);
  const nextId = LESSON_SEQUENCE[idx + 1];
  if (nextId && progress[nextId] === "locked") {
    progress[nextId] = "unlocked";
  }
  saveProgress(progress);
  return progress;
}

/** Count of completed stops, for the passport tracker. */
function getCompletedCount() {
  const progress = getProgress();
  return LESSON_SEQUENCE.filter((id) => progress[id] === "completed").length;
}

function getTotalCount() {
  return LESSON_SEQUENCE.length;
}

function getPreviousLessonTitle(lessonId) {
  const idx = LESSON_SEQUENCE.indexOf(lessonId);
  const prevId = LESSON_SEQUENCE[idx - 1];
  if (!prevId || typeof LESSON_CONTENT === "undefined") return null;
  const prev = LESSON_CONTENT.find((l) => l.id === prevId);
  return prev ? prev.title : null;
}

/** Dev/testing helper — wipes all progress back to first-visit defaults. */
function resetProgress() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    /* no-op */
  }
}

function getNodeMeta(lessonId) {
  return QUEST_NODES.find((n) => n.id === lessonId) || null;
}
