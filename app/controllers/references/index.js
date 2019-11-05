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
      if (field != this.sortField) {
        this.set('sortAsc', true)
        this.set('sortField', field)
      }
      else {
        this.toggleProperty('sortAsc')
      }
    }
  }
}
