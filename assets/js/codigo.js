const express = require('express');
const multer = require('multer');
const Jimp = require('jimp');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;

// Configuración de multer para manejar la carga de archivos
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/cargar', upload.single('imagen'), async (req, res) => {
    try {
        const imageBuffer = req.file.buffer;
        const image = await Jimp.read(imageBuffer);
        // Resto del procesamiento de la imagen...
    } catch (error) {
        console.error('Error al procesar la imagen:', error);
        res.status(500).send('Error al procesar la imagen.');
    }
});

        // Procesamiento de la imagen
        image.greyscale().resize(350, Jimp.AUTO);

        // Generación del nombre de archivo con UUID
        const filename = `${uuidv4()}.jpeg`;

        // Guard