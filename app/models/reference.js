import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default class ReferenceModel extends Model {
  @belongsTo() content;
  @attr() levels;
  @attr() name;
  @attr() organism;
  @attr() common_name;
  @attr() description;
  @attr() downloader;
  @attr() organization;
  @attr() taxon_id;
  @attr() ensembl_release;
  @attr() custom;
}
