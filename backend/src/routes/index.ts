const router = require("express").Router();
const usersRoute = require("@/src/controllers/users")
router.use("/users", usersRoute);


module.exports = router;



