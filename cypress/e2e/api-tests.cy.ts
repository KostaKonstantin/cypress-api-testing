import "../support/commands";
import {
  assertUser,
  assertPageData,
  assertColorUserValues,
} from "../support/utility";

const expectedUsers = require("../fixtures/example.json");

describe("Cypress Api Testing Of Reqres Site", () => {
  it("GET - Get Users by Page", () => {
    // Act
    cy.getUsersByPage().then((response) => {
      // Assert
      expect(response.status).to.eq(200);

      const userData = response.body.data;

      expect(userData).to.be.an("array");
      /*Check each user in the response*/
      userData.forEach((user: any) => {
        const expectedUser = expectedUsers.find(
          (expected: any) => expected.id === user.id
        );

        assertUser(user);

        expect(user).to.deep.equal(expectedUser);
      });
    });
  });

  it("GET - Get User by ID", () => {
    // Act
    cy.getUsersById().then((response) => {
      // Assert
      expect(response.status).to.eq(200);

      const userData = response.body.data;

      assertUser(userData);
      expect(userData.id).to.eq(2);
      expect(userData.email).to.eq("janet.weaver@reqres.in");
      expect(userData.first_name).to.eq("Janet");
      expect(userData.last_name).to.eq("Weaver");
      expect(userData.avatar).to.eq("https://reqres.in/img/faces/2-image.jpg");
    });
  });

  it("GET - User Not Found", () => {
    // Act
    cy.getUserNotFound().then((response) => {
      // Assert
      expect(response.status).to.eq(404);
      expect(response.body).to.deep.eq({});
    });
  });

  it("GET - Unknown List", () => {
    // Act
    cy.getUnknown().then((response) => {
      // Assert
      expect(response.status).to.eq(200);

      const pageData = response.body;

      assertPageData(pageData);

      const colors = pageData.data;

      colors.forEach((color: any) => {
        assertColorUserValues(color);
      });
    });
  });
});
