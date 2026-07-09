import { readFileSync } from "node:fs";
import test from "node:test";
import assert from "node:assert/strict";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("primary header keeps the public navigation focused", () => {
  const header = read("components/SiteHeader.tsx");

  assert.match(header, /\["Kurs", "\/kurs"\]/);
  assert.match(header, /\["Timeplan", "\/timeplan"\]/);
  assert.match(header, /\["Om oss", "\/om-oss"\]/);
  assert.match(header, /\["Kontakt", "\/kontakt"\]/);
  assert.doesNotMatch(header, /\["Pris", "\/pris"\]/);
  assert.doesNotMatch(header, /\["Nyheter", "\/nyheter"\]/);
  assert.doesNotMatch(header, /\["Show", "\/show"\]/);
});

test("public schedule does not reveal draft seasons", () => {
  const schedulePage = read("app/timeplan/page.tsx");

  assert.doesNotMatch(schedulePage, /draftSeason/);
  assert.doesNotMatch(schedulePage, /åpner senere|Ã¥pner senere/);
});

test("course page groups course types instead of rendering one flat list", () => {
  const coursesPage = read("app/kurs/page.tsx");

  assert.match(coursesPage, /courseGroups/);
  assert.doesNotMatch(coursesPage, /courseTypes\.map/);
});
