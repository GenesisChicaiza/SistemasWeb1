const axios = require('axios');
const cheerio = require('cheerio');

const URL = 'https://books.toscrape.com/';

async function extraerDatos() {
    console.log(`\n[${new Date().toLocaleTimeString()}] Iniciando descarga...`);
    
    try {
        const { data } = await axios.get(URL, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' 
            }
        });

        const $ = cheerio.load(data);

        console.log('--- Libros encontrados ---');
        $('h3 a').each((index, element) => {
            if (index < 3) {
                const titulo = $(element).attr('title');
                console.log(`- ${titulo}`);
            }
        });

    } catch (error) {
        console.error('❌ Error al descargar o procesar la web:', error.message);
    }
}

extraerDatos();

console.log('Servidor iniciado. Esperando para la próxima ejecución...');
setInterval(extraerDatos, 60000); 