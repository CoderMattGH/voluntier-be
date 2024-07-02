import { logger } from "../logger";
import { Request, Response, NextFunction } from "express";
import * as badgesModel from "../models/badges.model";
import { checkUserCredentials } from "../auth/auth-utils";

export function getBadges(req: Request, res: Response, next: NextFunction) {
  logger.debug(`In getBadges() in badges.controller`);

  badgesModel
    .selectBadges()
    .then((badges) => {
      res.status(200).send({ badges });
    })
    .catch((err) => {
      next(err);
    });
}

export function getBadgesByUserId(
  req: Request,
  res: Response,
  next: NextFunction
) {
  logger.debug(`In getBadgesByUserId() in badges.controller`);
  const { user_id } = req.params;

  if (Number.isNaN(user_id)) {
    next({ status: 400, msg: "user_id is not a number!" });

    return;
  }

  let userIdNum = Number(user_id);

  // Check authorisation
  const volAuthObj = checkUserCredentials(req, userIdNum, "volunteer");
  if (!volAuthObj.authorised) {
    next(volAuthObj.respObj);

    return;
  }

  badgesModel
    .selectBadgesByUserId(user_id)
    .then((badges) => {
      res.status(200).send({ badges });
    })
    .catch((err) => {
      next(err);
    });
}
