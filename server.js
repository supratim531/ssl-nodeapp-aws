const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");

dotenv.config();
const app = express();
const PORT = 8000 || process.env.PORT;

app.use(cors({
	origin: '*'
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/ssl-test", (req, res) => {
	return res.status(200).json({
		message: "This is for SSL Testing"
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
