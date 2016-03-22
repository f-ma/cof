import AppDispatcher from '../../dispatcher';
import { EventEmitter } from 'events';
import ActionTypes from '../../constants/ActionTypes.js';

const CHANGE_EVENT = 'change';

let _title = 'CART';
let _isCustomerAssigning = false;

function _toggleCustomerAssignment() {
  return _isCustomerAssigning = _isCustomerAssigning ? false : true;
}

class CartStore extends EventEmitter {
  constructor() {
    super();
    var self = this;
    this.dispatchToken = AppDispatcher.register(function(action) {
      switch (action.actionType) {
        case ActionTypes.CART_CUSTOMER_ASSIGNMENT_TOGGLE:
          _toggleCustomerAssignment();
          self.emitChange();
          break;
      }
    });
  }

  /**
   * @return callback
   */
  getTitle() {
    return _title;
  }

  /**
   * @return bool
   */
  getIsCustomerAssigning() {
    return _isCustomerAssigning;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  /**
   * @param callback
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  /**
   * @param callback
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

let cartStore = new CartStore();

export default cartStore;
