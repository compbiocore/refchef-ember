import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default class ContentModel extends Model {
  @attr('string') name;
  @attr('string') type;
  @attr('number') size;
  @hasMany() references;
}
