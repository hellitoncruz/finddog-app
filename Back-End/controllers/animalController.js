const Animal = require('../models/Animals');

// GET: Lista todos os animais
exports.searchAnimals = async (req, res) => {
  try {
    const animais = await Animal.find();
    res.json(animais);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar animais", error });
  }
};

// POST: Cadastra um novo animal
exports.createAnimal = async (req, res) => {
  try {
    const novoAnimal = new Animal(req.body);
    await novoAnimal.save();
    res.status(201).json(novoAnimal);
  } catch (error) {
    res.status(400).json({ message: "Erro ao cadastrar animal", error });
  }
};
