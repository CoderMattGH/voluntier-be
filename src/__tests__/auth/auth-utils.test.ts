import * as authUtils from "../../auth/auth-utils";
const { hashPassword, checkPassword } = authUtils;

describe("hashPassword()", () => {
  test("Hashes an empty string", () => {
    const actual = hashPassword("");

    const expected =
      "$2a$10$mjBiK50OQB2g.s.QXSV8zuYevknA5dC0cQg1pINrYpJL5Ji0GhhUO";

    expect(actual).toBe(expected);
  });

  test("Hashes a password string", () => {
    const actual = hashPassword("mypassword");

    const expected =
      "$2a$10$mjBiK50OQB2g.s.QXSV8zuLm2nHnJcFGHjzlGxE3KZOjLvRNtF80a";

    expect(actual).toBe(expected);
  });
});

describe("checkPassword()", () => {
  test("Compares the same password correctly", () => {
    const hashedPass = hashPassword("mybadpassword");

    const actual = checkPassword("mybadpassword", hashedPass);

    expect(actual).toBe(true);
  });

  test("Compares a different password correctly", () => {
    const hashedPass: string = hashPassword("anotherpassword");

    const actual = checkPassword("aNotherpassword", hashedPass);

    expect(actual).toBe(false);
  });
});
