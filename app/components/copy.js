import Component from '@glimmer/component'
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking'
import { later } from '@ember/runloop'

export default class CopyComponent extends Component {
  @tracked wasSuccessful = false
  @tracked errored = false

  @action
  onSuccess() {
    this.wasSuccessful = true
    later(
      this,
      function() {
        this.wasSuccessful = false
      },
      1500
    )
  }

  onError() {
    this.errored = true
    later(
      this,
      function() {
        this.wasSuccessful = false
      },
      1500
    )
  }
}
