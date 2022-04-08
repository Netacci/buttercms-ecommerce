/* eslint-disable no-unreachable */
const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case 'ADDITEM':
      //    check if item exist
      const checkItem = state.find((item) => item.meta.id === product.meta.id);
      if (checkItem) {
        return state.map((item) =>
          item.meta.id === product.meta.id
            ? {
                ...item,
                qty: item.qty + 1,
                newPrice: item.price * (item.qty + 1),
              }
            : item
        );
      } else {
        const product = action.payload;

        return [
          ...state,
          {
            ...product,
            qty: 1,
            newPrice: product.price,
          },
        ];
      }
      break;
    case 'DELITEM':
      const checkDelItem = state.find(
        (item) => item.meta.id === product.meta.id
      );
      if (checkDelItem.qty === 1) {
        return state.filter((item) => item.meta.id !== product.meta.id);
      } else {
        return state.map((item) =>
          item.meta.id === product.meta.id
            ? {
                ...item,
                qty: item.qty - 1,
                newPrice: item.price * (item.qty - 1),
              }
            : item
        );
      }
      break;
    default:
      return state;
      break;
  }
};

export default handleCart;
