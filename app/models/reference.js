import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default class ReferenceModel extends Model {
  @belongsTo() content;
}
