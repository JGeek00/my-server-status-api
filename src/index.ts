import server from './server';

server.listen(server.get('port'), () => {
  console.log(`Server listening on ${server.get('port')}`)
});