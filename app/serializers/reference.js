import ApplicationSerializer from './application';


export default class ReferenceSerializer extends ApplicationSerializer {
  normalize(type, hash) {
    hash.id = hash.metadata.name;
    console.log(hash);
    return super.normalize(type, hash);
  }
}
