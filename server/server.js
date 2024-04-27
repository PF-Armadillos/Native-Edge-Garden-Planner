const path = require('path');
const express = require('express');




const app = express();
const port = process.env.PORT || 3000;


// app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(express.json());


app.get('/', (req,res) =>{
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});





module.exports = app.listen(port, () => console.log(`Listening on port ${port}`));

