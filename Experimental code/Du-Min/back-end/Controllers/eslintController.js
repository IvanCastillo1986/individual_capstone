const eslint = require("express").Router();
const { ESLint } = require("eslint");

eslint.get("/", (req, res) => {
    res.json({ result: "Please use POST method to get a result" });
})

eslint.post("/", async (req, res) => {
    const lint = new ESLint();
    const result = await lint.lintText(req.body.input);
    res.json({ result });
})

module.exports = eslint;
