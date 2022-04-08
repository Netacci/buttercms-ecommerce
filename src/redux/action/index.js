// add item
export const addProduct = (product) => {
  return {
    type: 'ADDITEM',
    payload: product,
  };
};

// delete item
export const delProduct = (product) => {
  return {
    type: 'DELITEM',
    payload: product,
  };
};
