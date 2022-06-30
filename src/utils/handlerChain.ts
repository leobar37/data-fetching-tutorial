import { NextApiRequest, NextApiResponse } from "next";


type HandlerType = (
  req: NextApiRequest,
  res: NextApiResponse
) => Promise<any>;

enum Method {
  POST = "POST",
  GET = "GET",
  PUT = "PUT",
  DELETE="DELETE"
}
/**
 * this class is and aid to manage the next api handler
 *  @note this is code is for educational purposes only, 
 * it is not recommended to use in production
 */
class Router {
  private handlers: { method: Method; handler: HandlerType }[] = [];
  public post(handler: HandlerType) {
    this.validateHandlers(Method.POST);
    this.handlers.push({
      handler,
      method: Method.POST,
    });
    return this;
  }
  public get(handler: HandlerType) {
    this.validateHandlers(Method.GET);
    this.handlers.push({
      handler,
      method: Method.GET,
    });
    return this;
  }
  public put(handler: HandlerType) {
    this.validateHandlers(Method.PUT);
    this.handlers.push({
      handler,
      method: Method.PUT,
    });
    return this;
  }

  public delete(handler: HandlerType) {
    this.validateHandlers(Method.DELETE);
    this.handlers.push({
      handler,
      method: Method.DELETE,
    });
    return this;
  }

  private validateHandlers(method: Method) {
    const handler = this.handlers.find((d) => d.method === method);
    if (handler) {
      throw new Error(`Method ${method} already exist`);
    }
  }
  public handler() {
    return async (req: NextApiRequest, res: NextApiResponse) => {
      const method = req.method;
      const handler = this.handlers.find((d) => d.method === method);
      if (!handler) return res.status(404);
      const resp = await handler.handler(req, res);
      return  res.json(resp)
    };
  }
}

export const chainRouter =() => {
    return new Router();
}