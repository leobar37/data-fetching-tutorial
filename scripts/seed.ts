import { faker } from "@faker-js/faker";
import { writeFileSync } from "fs";
import { resolve } from "path";

const generatePosts =  () => {
  const posts = Array.from({ length: 10 }).map((_, idx) => {
    return {
      id: idx,
      title: faker.lorem.words(5),
      description: faker.lorem.text(),
    };
  });

  writeFileSync(resolve("bd.json"), JSON.stringify({posts}), {
    encoding: "utf-8",
  });
};


generatePosts()