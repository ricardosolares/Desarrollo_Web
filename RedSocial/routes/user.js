const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/user");
const auth = require("../middlewares/auth");
const multer = require("multer");

//Configuración de subida
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "./uploads/avatars/")
    },
    filename:(req, file,cb) =>{
        cb(null, "avatar-"+Date.now()+"-"+file.originalname);
    }
});

const uploads = multer({storage});

//Definir rutas
router.get("/prueba-usuario",auth.auth , UserController.pruebaUser);
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/profile/:id", auth.auth, UserController.profile);
router.get("/list/:page?", auth.auth, UserController.list);
router.put("/update", auth.auth, UserController.update);
router.post("/upload", [auth.auth, uploads.single("file0")], UserController.upload);

//exportar router
module.exports = router;
