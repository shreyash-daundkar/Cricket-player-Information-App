const Player = require('../model/player');

exports.search = async (req, res, next) => {
    console.log(req.params.name)
    const players = await Player.findAll();
    players.forEach(player => {
        if(player.name === req.params.name) res.json(player);
    });
}

exports.add = async (req, res, next) => res.json(await Player.create(req.body));

exports.edit = async (req, res, next) => {
    const player = await Player.findByPk(req.params.id);
    player.name = req.body.name;
    player.birthplace = req.body.birthplace;
    player.career = req.body.career;
    player.matches = req.body.matches;
    player.centuries = req.body.centuries;
    player.score = req.body.score;
    player.wickets = req.body.wickets;
    player.save();
    res.json();
}

exports.delete = async (req, res, next) => {
    const player = await Player.findByPk(req.params.id);
    player.destroy();
    res.json();
}