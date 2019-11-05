import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';
import { computed } from '@ember/object';

export default class ReferencesController extends Controller {
  sortField = 'name';
  sortAsc = true;

  @computed('sortAsc')
  get sortDirection() {
    const direction = (this.sortAsc) ? 'asc' : 'desc'
    return direction
  }

  @computed('sortField', 'sortDirection')
  get sortProperties() {
    return [`${this.sortField}:${this.sortDirection}`]
  }

  @sort('model', 'sortProperties')
  sortedReferences;

  actions = {
    setSortProperty(field) {
      this.toggleProperty('sortAsc')
      this.set('sortField', field)
    }
  }
}
