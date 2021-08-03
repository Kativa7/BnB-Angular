module.exports = () => (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, HEAD, POST,OPTIONS,DELETE,PUT"
  );
  res.setHeader("Access-Control-Allow-Headers", "content-type, authorization, x-auth-token, origin");

  next();
};
