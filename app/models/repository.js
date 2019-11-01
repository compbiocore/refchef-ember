import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default class RepoModel extends Model {
  @attr() full_name;
  @attr() name;
  @belongsTo() org;
}
