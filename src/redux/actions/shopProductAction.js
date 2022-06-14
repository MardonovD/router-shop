import actionType from "../contants/action-types";

export const shopProductAction = (data) => {
  return {
    type: actionType.SHOP__PRODUCTS,
    payload: data,
  };
};
