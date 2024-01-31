// controllers/dataController.js
const DataModel = require("../Model/model");

exports.getData = async (req, res) => {
  try {
    const data = await DataModel.find();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

exports.getDataByYear = async (req, res) => {
  try {
    const year = req.params.year;
    const data = await DataModel.find({ end_year: year });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDataByTopic = async (req, res) => {
  try {
    const topic = req.params.topic;
    const data = await DataModel.find({ topic: topic });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDataBySector = async (req, res) => {
  try {
    const sector = req.params.sector;
    const data = await DataModel.find({ sector: sector });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDataByRegion = async (req, res) => {
  try {
    const region = req.params.region;
    const data = await DataModel.find({ region: region });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDataByPestle = async (req, res) => {
  try {
    const pestle = req.params.pestle;
    const data = await DataModel.find({ pestle: pestle });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDataBySource = async (req, res) => {
  try {
    const source = req.params.source;
    const data = await DataModel.find({ source: source });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getDataByCountry = async (req, res) => {
  try {
    const country = req.params.country;
    const data = await DataModel.find({ country: country });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDataByCity = async (req, res) => {
  try {
    const city = req.params.city;
    const data = await DataModel.find({ city: city });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getDataByLikelihood = async (req, res) => {
    try {
      const likelihood = req.params.likelihood;
      const data = await DataModel.find({ likelihood: likelihood });
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.getDataByRelevance = async (req, res) => {
    try {
      const relevance = req.params.relevance;
      const data = await DataModel.find({ relevance: relevance });
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };