function add(item, cart) {
  console.log("adding item to cart", { item, cart });

  let _cart;

  if (cart.some((i) => i.item === item.item)) {
    _cart = cart.reduce((acc, i) => {
      acc.push(
        i.item === item.item
          ? { ...i, quantity: i.quantity + item.quantity }
          : i
      );

      return acc;
    }, []);
  } else {
      _cart = [
          ...cart,
          item
      ];
  }

  console.log("returning updated cart", { _cart });
  return _cart;
}

function remove(item, cart) {
    console.log("removing item from cart", { item, cart });

    const _cart = cart.filter((i) => i.item !== item.item);

    console.log("returning updated cart", { _cart });
    return _cart
}

function replace(item, cart) {
    console.log("replacing item in cart", { item, cart });

    const _cart = cart.reduce((acc, i) => {
        acc.push(i.item === item.item ? item : i);
        return acc;
    }, [])

    console.log("returning updated cart", { _cart });
    return _cart;
}

module.exports = {
  add,
  remove,
  replace
};
