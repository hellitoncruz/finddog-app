const express = require("express");
const router = express.Router();
const animalController = require("../controllers/animalController")

// Exemplo de rota GET
router.get("/", animalController.searchAnimals)
// Exemplo de rota POST
router.post("/", animalController.createAnimal)

module.exports = router;
