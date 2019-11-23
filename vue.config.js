const fs = require('fs');

module.exports = {
    devServer: {
        http2: true,
        https: {
            key: fs.readFileSync('./localTest/test+4-key.pem'),
            cert: fs.readFileSync('./localTest/test+4.pem'),
            ca: fs.readFileSync('/home/remzi/.local/share/mkcert/rootCA.pem'),
        }
    }
};