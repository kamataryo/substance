import substance from "./";
import test from "ava";

test("it should return JSON", async t => t.deepEqual(await substance({}), {}));

test("it should parse JSON", async t => t.deepEqual(await substance("{}"), {}));

test("it should repace null with undefined", async t =>
  t.deepEqual(await substance({ a: null, b: 1 }), { b: 1 }));

test("it should replace null deeply", async t =>
  t.deepEqual(await substance({ a: { b: null }, c: 1 }), { a: {}, c: 1 }));

test("it return error with circular object", t => {
  const input = { a: { b: 1, x: {} }, c: 2 };
  input.a.x = input.a;
  t.throwsAsync(async () => await substance(input));
});
