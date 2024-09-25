const admin = require("firebase-admin");
const keys = require("../keys.json");
admin.initializeApp({
    credential:admin.credential.cert(keys)
});
const proyecto = admin.firestore();
const usuarios = proyecto.collection("miejemploBD");
const productos = proyecto.collection("producto");

module.exports={
    usuarios,
    productos
}

