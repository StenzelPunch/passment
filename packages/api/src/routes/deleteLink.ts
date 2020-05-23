import { Request, Response, Router } from "express";

import { Link } from "../models";
import { SuccessResponse, FailureResponse } from "../models/response";
import { catchAsync, checkToken } from "../middleware";

const router = Router();

interface DeleteLinkBody {
  ids: string[];
}

const deleteLinks = async (req: Request, res: Response) => {
  const { ids }: DeleteLinkBody = req.body;

  if (ids.length) {
    ids.forEach(async (id) => {
      await Link.findOneAndRemove({ id });
    });
  } else {
    return res.json(new FailureResponse("No links to delete"));
  }

  return res.json(new SuccessResponse("Sucessfully deleted"));
};

router.delete(
  "/deleteLinks",
  checkToken,
  catchAsync(async (req: Request, res: Response) => {
    await deleteLinks(req, res);
  })
);

export default router;
