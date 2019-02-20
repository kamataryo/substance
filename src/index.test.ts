import substance from "./";
import test from "ava";

test("it should return JSON", async t => {
  t.deepEqual(await substance({}), {});
});
