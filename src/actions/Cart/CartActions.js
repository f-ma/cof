import AppDispatcher from '../../dispatcher';
import ActionTypes from '../../constants/ActionTypes.js';

class CartActions {
  toggleCustomerAssignment() {
    AppDispatcher.dispatch({
      actionType: ActionTypes.CART_CUSTOMER_ASSIGNMENT_TOGGLE
    });
  }
}

export default new CartActions();
