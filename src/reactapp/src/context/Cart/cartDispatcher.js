import { setBillingAddressAction } from './billingAddress/actions';
import { updateCartItemAction } from './cartItems/actions';
import { setEmailOnGuestCartAction } from './email/actions';
import { getGuestCartInfoAction } from './guestCart/actions';
import { placeOrderAction } from './order/actions';
import { setPaymentMethodAction } from './paymentMethod/actions';
import {
  addCartShippingAddressAction,
  setSelectedShippingAddressAction,
} from './shippingAddress/actions';
import { setShippingMethodAction } from './shippingMethod/actions';

const dispatchMapper = {
  setEmailOnGuestCart: setEmailOnGuestCartAction,
  getGuestCartInfo: getGuestCartInfoAction,
  addCartShippingAddress: addCartShippingAddressAction,
  setCartSelectedShippingAddress: setSelectedShippingAddressAction,
  setCartBillingAddress: setBillingAddressAction,
  setShippingMethod: setShippingMethodAction,
  setPaymentMethod: setPaymentMethodAction,
  placeOrder: placeOrderAction,
  updateCartItem: updateCartItemAction,
};

function cartDispatchers(dispatch) {
  const dispatchers = {};

  Object.keys(dispatchMapper).forEach(dispatchName => {
    dispatchers[dispatchName] = dispatchMapper[dispatchName].bind(
      null,
      dispatch
    );
  });

  return dispatchers;
}

export default cartDispatchers;