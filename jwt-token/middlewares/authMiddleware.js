import jwt from "jsonwebtoken";

export const tokenValidation = (req, res, next) => {
  try {
    const checkToken = req.headers.authorization;

    if (!checkToken) {
      res.status(404).json({ msg: "Invalid Token" });
      return;
    }

    const verifyToken = jwt.verify(checkToken, process.env.JWT_SECURE);

    req.setUser = verifyToken;

    next();
  } catch (error) {
    console.log("error", error);
    res.status(400).json({ error: error });
  }
};
