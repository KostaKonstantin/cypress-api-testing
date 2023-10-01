export function assertUser(user: any) {
  expect(user).to.have.property("id").that.is.a("number");
  expect(user).to.have.property("email").that.is.a("string");
  expect(user).to.have.property("first_name").that.is.a("string");
  expect(user).to.have.property("last_name").that.is.a("string");
  expect(user).to.have.property("avatar").that.is.a("string");
}

export function assertPageData(colorsData: any) {
  expect(colorsData).to.have.property("page").that.is.a("number");
  expect(colorsData).to.have.property("per_page").that.is.a("number");
  expect(colorsData).to.have.property("total").that.is.a("number");
  expect(colorsData).to.have.property("total_pages").that.is.a("number");
  expect(colorsData).to.have.property("data").that.is.an("array");
}

export function assertColorUserValues(color: any) {
  expect(color).to.have.property("id").that.is.a("number");
  expect(color).to.have.property("name").that.is.a("string");
  expect(color).to.have.property("year").that.is.a("number");
  expect(color).to.have.property("color").that.is.a("string");
  expect(color).to.have.property("pantone_value").that.is.a("string");
}