const Router = require("koa-router");
const { getUser, createUser, removeUser } = require("./controller/users");
const router = new Router();

router.get("/user/:id", getUser);
router.post("/create", createUser);
router.delete("/remove/:id", removeUser);

// router.put("/users/:id", putUser);
// router.patch("/users/:id", patchUser);

module.exports = router;
