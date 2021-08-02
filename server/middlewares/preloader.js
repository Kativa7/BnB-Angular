const { getById } = require("../services/listing");

module.exports =
  (paramName = "id") =>
  async (req, res, next) => {
    const id = req.params[paramName];

    try {
      const data = await getById(id);
      if(!data){
          throw new Error('Not Found')
      }
      req.data = data;
      next();
    } catch (err) {
      res.status(404).json({ message: "No such record." });
    }
  };
