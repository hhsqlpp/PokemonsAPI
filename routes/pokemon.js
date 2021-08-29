const express = require("express");
const router = express.Router();
const Pokemon = require("../models/Pokemon");

router.get("/", async (req, res) => {
  const pokemons = await Pokemon.find();
  res.json(pokemons);
});

router.delete("/:pokemonId", async (req, res) => {
  try {
    const removePokemon = await Pokemon.remove({
      _id: req.params.pokemonId,
    });
    res.json(removePokemon);
  } catch (e) {
    res.json({ message: e });
  }
});

router.post("/", async (req, res) => {
  const pokemon = new Pokemon({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
  });

  try {
    const savePokemon = await pokemon.save();
    res.json(savePokemon);
  } catch (e) {
    res.json({ message: e });
  }
});

module.exports = router;
