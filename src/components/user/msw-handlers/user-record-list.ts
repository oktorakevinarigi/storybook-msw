import { rest } from "msw";
import { faker } from "@faker-js/faker/locale/id_ID";

import { ENV } from "../../../constants";
import { ListResponse } from "../user-model";

export function generateFakeUserList() {
  faker.seed(10);
  return Array.from(Array(10).keys()).map(() => {
      return {
        userId: faker.number.int({ min: 1, max: 1e5 }),
        id: faker.number.int({ min: 1, max: 1e5 }),
        title: faker.lorem.lines(1),
        completed: faker.datatype.boolean()
      };
    }) 
}

export const getUserList = rest.get<never, never, ListResponse[]>(
  `${ENV.API}/todos`,
  (_, res, ctx) => {
    return res(
      ctx.json(generateFakeUserList())
    );
  }
);
