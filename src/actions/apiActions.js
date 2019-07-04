import request from 'superagent';

export const spCall = body => {  //eslint-disable-line
  return request
    .post('/api/v1/user/spcall')
    .send(body)
    .then(res => res.body);
};
