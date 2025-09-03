// tests/searchApi.test.js
const API_URL = "https://jsonplaceholder.typicode.com/users";

describe("Users API with fetch", () => {
  test("Should return users", async () => {
    const response = await fetch(API_URL);
    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data.length).toBeGreaterThan(0);
  });

  test("Should return specific user by ID", async () => {
    const response = await fetch(`${API_URL}/1`);
    expect(response.status).toBe(200);

    const user = await response.json();
    expect(user).toHaveProperty("id", 1);
    expect(user).toHaveProperty("name");
  });

  test("Should return 404 for non-existent user", async () => {
    const response = await fetch(`${API_URL}/999`);
    expect(response.status).toBe(404);
  });
});
