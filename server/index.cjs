async function startServer() {
  import("dotenv").then((dotenv) => dotenv.config());
  const module = await import("express");
  const express = module.default;
  const app = express();
  const cors = (await import("cors")).default;
  const mongoose = (await import("mongoose")).default;
  const authRoutes = (await import("./routes/auth.js")).default;
  const morgan = (await import("morgan")).default;
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(morgan("dev"));

  app.use("/api", authRoutes);

  app.listen(8000, () => console.log("Server running on port 8000"));
}

startServer().catch((error) => {
  console.error(error);
});
