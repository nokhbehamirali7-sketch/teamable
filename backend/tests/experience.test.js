const request = require("supertest");
const app = require("../server");
const mongoose = require("mongoose");

describe("Experience API", () => {
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("should save experience data and return success message", async () => {
    const response = await request(app)
      .post("/api/experience")
      .send({
        teamName: "Test Team",
        member: "Amirali",
        experience: "Great experience",
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe(
      "Success! Experience received successfully"
    );
  });

  it("should fetch all experiences", async () => {
    const response = await request(app).get("/api/experiences");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
