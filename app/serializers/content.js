import ApplicationSerializer from './application';
import DS from 'ember-data';
import { Base64 } from 'js-base64';
import yaml from 'js-yaml';

export default class ContentSerializer extends ApplicationSerializer.extend(DS.EmbeddedRecordsMixin) {
  primaryKey = 'path'

  attrs = {
    references: { embedded: 'always' }
  }

  normalizeResponse (store, primaryModelClass, payload, id, requestType)  {
    payload.references = payload.content;
    delete payload.content;
    const newPayload = { content: payload };
    return super.normalizeResponse(store, primaryModelClass, newPayload, id, requestType);
  }

  normalize(type, hash) {
    const rawContent = hash.references;
    const decodedContent = Base64.decode(rawContent);
    const contentJSON = yaml.load(decodedContent);
    const contentArray = Object.keys(contentJSON).map(key => contentJSON[key]);
    hash.references = contentArray;
    return super.normalize(...arguments);
  }
}
