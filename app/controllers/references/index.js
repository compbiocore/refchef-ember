import Controller from '@ember/controller';
import { sort, filter } from '@ember/object/computed';
import { computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ReferencesController extends Controller {
  sortField = 'name';
  sortAsc = true;
  @tracked filterNameString;
  @tracked filterOrganismString;
  @tracked filterCommonNameString;
  @tracked filterOrganizationString;

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

  @filter('sortedReferences', ['filterNameString'], function(reference,/*, index, array*/) {
    if (!this.filterNameString) return true;
    return reference['name'].toLowerCase().includes(this.filterNameString.toLowerCase())
  })
  filteredByName;

  @filter('filteredByName', ['filterOrganismString'], function(reference,/*, index, array*/) {
    if (!this.filterOrganismString) return true;
    return reference['organism'].toLowerCase().includes(this.filterOrganismString.toLowerCase())
  })
  filteredByOrganism;

  @filter('filteredByOrganism', ['filterCommonNameString'], function(reference,/*, index, array*/) {
    if (!this.filterCommonNameString) return true;
    return reference['common_name'].toLowerCase().includes(this.filterCommonNameString.toLowerCase())
  })
  filteredByCommonName;

  @filter('filteredByCommonName', ['filterOrganizationString'], function(reference,/*, index, array*/) {
    if (!this.filterOrganizationString) return true;
    return reference['organization'].toLowerCase().includes(this.filterOrganizationString.toLowerCase())
  })
  filteredSamples;


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
