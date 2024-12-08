const express = require("express")
const app = express();
const PORT = 4000


app.listen(PORT, () => (console.log(`server is running on PORT ${PORT}`)));
app.get("/users", (req , res) => {
res.status(200).json({messge: 'success'})

})
app.get("/", (req , res) => {
res.status(200).json({message: 'hello world'})

})