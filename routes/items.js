const { Router } = require("express");
const router = Router();

const itemDao = require('../daos/items');

router.get("/", (req, res, next) => {
  res.json(itemDao.getAll())
});

router.get("/:id", (req, res, next) => {
  // TODO: complete this route
  let result = itemDao.getById(req.params.id);
  if(!result) {
    return res.sendStatus(404)
  }
  res.status(200).send(result);
  //res.sendStatus(501);
});

router.post("/", (req, res, next) => {
  itemDao.create(req.body);
  res.sendStatus(200);
});

router.put("/:id", (req, res, next) => {
  // TODO: complete this route
  if(!req.params.id) {
    return res.sendStatus(200)
  }
  itemDao.updateById(req.params.id, req.body)
  res.sendStatus(200)
  //res.sendStatus(501);
});

router.delete("/:id", (req, res, next) => {
  // TODO: complete this route
  itemDao.deleteById(req.params.id)
  res.sendStatus(200)
  //res.sendStatus(501);
});

module.exports = router;
