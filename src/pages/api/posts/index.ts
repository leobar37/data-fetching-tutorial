import { chainRouter } from "@App/utils";
import bd from "@App/lib/bd";
import { Post } from "@App/types";

const handler = chainRouter()
  .get(async (req, res) => {
    await bd.read();
    const { posts } = bd.data as any;
    return posts ?? [];
  })
  .post(async (req, res) => {
    await bd.read();
    const { title, description } = req.body;
    const { posts } = bd.data as { posts: Post[] };
    const lastId = posts[posts.length - 1].id;
    const newPost = {
      id: lastId + 1,
      title,
      description,
    };
    posts.push(newPost);
    await bd.write();
    return newPost;
  })
  .delete(async (req, res) => {
    console.log(req.query);

    return [];
  })
  .put(async () => {
    return [];
  })
  .handler();

export default handler;
