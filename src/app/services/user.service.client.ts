export class UserServiceClient {

  findUser() {
    return fetch('https://api.mockaroo.com/api/6e080890?count=10&key=0d003600', {
      method: 'get',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }

}
