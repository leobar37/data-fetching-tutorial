import { chainRouter } from "@App/utils";
import bd from "@App/lib/bd";
import { Post } from "@App/types";

const handler = chainRouter()
  .delete(async (req, res) => {
    const { id } = req.query;
    await bd.read();

    let { posts } = bd.data as { posts: Post[] };
    const idx = posts.findIndex((post) => post.id === Number(id));
    const deletedPost = posts[idx];
    posts.splice(idx, 1);
    await bd.write();
    return deletedPost;
  })
  .put(async () => {
    return {
      message: "not implement yet :)",
    };
  })
  .handler();

export default handler;
