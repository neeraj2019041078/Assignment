const express = require('express');
const router = express.Router();

const dataController=require("../Controller/controller")
router.get("/hello",dataController.getData);
router.get('/year/:year', dataController.getDataByYear);
router.get('/topic/:topic', dataController.getDataByTopic);
router.get('/sector/:sector', dataController.getDataBySector);
router.get('/region/:region', dataController.getDataByRegion);
router.get('/region/:pestle', dataController.getDataByPestle);
router.get('/source/:source', dataController.getDataBySource);
router.get('/country/:country', dataController.getDataByCountry);
router.get('/city/:city', dataController.getDataByCity);
router.get('/likelihood/:likelihood', dataController.getDataByLikelihood);
router.get('/relevance/:relevance', dataController.getDataByRelevance);



module.exports=router;