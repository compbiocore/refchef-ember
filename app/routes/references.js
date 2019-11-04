import Route from '@ember/routing/route';

export default class ReferencesRoute extends Route {
  model() {
    return this.modelFor('application')
  }
}
