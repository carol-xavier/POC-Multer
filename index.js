import express from "express";
// import multer from "multer";

const app = express();

// const storage = multer.diskStorage({
//     destination: (req,file,callback) => {
//         callback(null, 'uploads/')
//     },
//     filename: (req,file,callback) => {
//         callback(null, file.originalname+'-'+Date.now())
//     }
// });
// const upload = multer({dest:'uploads/'});

app.set('view engine', 'ejs');

app.get('/', (req,res) => res.render('home'));

app.post('/', (req,res) => {
    console.log(req.body, req.file);
    res.send("ok");
});

app.listen(3000, () => console.log("App running on port 3000"));

//upload.single('test'), 