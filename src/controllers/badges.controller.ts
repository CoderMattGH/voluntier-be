import { logger } from "../logger";
import { Request, Response, NextFunction } from "express";
import * as badgesModel from "../models/badges.model";

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

  const userIdNum = Number(req.params.user_id);
  if (Number.isNaN(userIdNum)) {
    next({ status: 400, msg: "user_id is not a number!" });

    return;
  }

  badgesModel
    .selectBadgesByUserId(userIdNum.toString())
    .then((badges) => {
      res.status(200).send({ badges });
    })
    .catch((err) => {
      next(err);
    });
}
