
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const DataModel = require("./Model/model");
const dataRoutes=require("./Route/Routes")



const jsonData = require("./data.json");

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());

connectDB()
    .then(() => {
     
        DataModel.insertMany(jsonData)
            .then(() => {
                console.log("Data imported successfully");
            })
            .catch(err => {
                console.error("Error importing data:", err);
            });
app.use(express.static(path.join(__dirname, '../../frontend/visual/build')));
app.get("/",(req,res)=>{
    res.send("hello");

})
app.use("/data",dataRoutes);

      
        app.listen(PORT, () => {
            console.log(`Server listening at port number: ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err.message);
    });
