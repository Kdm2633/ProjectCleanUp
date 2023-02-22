const router = (await import("express")).Router();

const { signup, signin, forgotPassword, resetPassword } = await import(
  "../controllers/auth.js"
);

router.get("/", (req, res) => {
  return res.json({
    data: "hello",
  });
});

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;
