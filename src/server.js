const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const mediaHandler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (req, res) => {
  console.log(req.url);

  switch (req.url) {
    case '/':
        htmlHandler.getIndex(req, res);
        break;
    case '/page2':
        htmlHandler.getClient2(req, res);
        break;
    case '/page3':
        htmlHandler.getClient3(req, res);
        break;
    case '/party.mp4':
        mediaHandler.getMedia(req, res, '../client/party.mp4', 'video/mp4');
        break;
    case '/bling.mp3':
        mediaHandler.getMedia(req, res, '../client/bling.mp3', 'audio/mpeg');
        break;
    case '/bird.mp4':
        mediaHandler.getMedia(req, res, '../client/bird.mp4', 'video/mp4');
        break;
    default:
        htmlHandler.getIndex(req, res);
        break;
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
