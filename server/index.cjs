async function startServer() {
  import("dotenv").then((dotenv) => dotenv.config());
  const express = (await import("express")).default;
  const app = express();
  const cors = (await import("cors")).default;
  const mongoose = (await import("mongoose")).default;
  const authRoutes = (await import("./routes/auth.cjs")).default;
  const morgan = (await import("morgan")).default;
  const { signup, signin, forgotPassword, resetPassword } = await import(
    "./controllers/auth.cjs"
  );

  mongoose
    .connect(process.env.DATABASE)
    .then(() => console.log("database connected"))
    .catch((err) => {
      console.log(err);
    });

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());
  app.use(morgan("combined"));

  app.post("/signup", signup);
  app.post("/signin", signin);
  app.post("/forgot-password", forgotPassword);
  app.post("/reset-password", resetPassword);

  // const { default: authRoutes } = await import("./routes/auth.cjs");
  // app.set("/api", authRoutes);
  // app.use("/api", (req, res) => {
  //   console.log("in app.use");
  //   return res.json({
  //     data: "hello",
  //   });
  // }); //needs to use app.use

  // app.use(authRoutes);

  app.listen(8000, () => console.log("Server running on port 8000"));
}

startServer().catch((error) => {
  console.error(error);
});
