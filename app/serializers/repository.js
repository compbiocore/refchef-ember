import ApplicationSerializer from './application';

export default class RepositorySerializer extends ApplicationSerializer {
  normalize(type, payload) {
    let url = payload.contents_url.replace('{+path}', '')
    payload.links = {
      contents: url
    }
    return super.normalize(...arguments);
  }
}
