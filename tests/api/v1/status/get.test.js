test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const receveidDate = new Date(responseBody.updated_at).toISOString();
  expect(receveidDate).toEqual(responseBody.updated_at);

  expect(responseBody.dependencies.database.version).toBe("16.0");
  expect(
    responseBody.dependencies.database.used_connections,
  ).toBeGreaterThanOrEqual(1);
  //expect(!isNaN(responseBody.dependencies.database.max_connections)).toBe(true);
  expect(responseBody.dependencies.database.max_connections).toEqual(100);
});
