(async () => {
  const router = (await import("express")).Router();
  const { signup, signin, forgotPassword, resetPassword } = await import(
    "../controllers/auth.cjs"
  );

  router.get("/", (req, res) => {
    console.log("in router get");
    return res.json({
      data: "hello",
    });
  });
  // console.log("signup type: ", typeof signup);
  router.post("/signup", signup);
  router.post("/signin", signin);
  router.post("/forgot-password", forgotPassword);
  router.post("/reset-password", resetPassword);

  module.exports = router;
})();
