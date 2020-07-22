'use strict';

const mock = require('egg-mock');

describe('test/gitlab.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/gitlab-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, gitlab')
      .expect(200);
  });
});
