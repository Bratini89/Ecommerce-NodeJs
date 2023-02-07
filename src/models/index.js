const initModels = require('./init-models');
const db = require("../utils/database");

const models = initModels(db);

module.exports = models;