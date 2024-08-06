import React, { Suspense, useEffect, useState } from "react";
import "./style.css";

function ShopingList() {
  const [items, setItems] = useState([
    {
      itemName: "item 1",
      quantity: 1,
      isSelected: false,
    },
    {
      itemName: "item 2",
      quantity: 3,
      isSelected: false,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [total, setTotal] = useState(0);

  function handleaddButton() {
    const newItem = {
      itemName: inputValue,
      quantity: 1,
      isSelected: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setInputValue("");
  }
  function increaseQuantity(e, index) {
    e.stopPropagation();
    const newItems = [...items];

    newItems[index].quantity++;

    setItems(newItems);
  }
  function decreaseQuantity(e, index) {
    e.stopPropagation();
    const newItems = [...items];

    newItems[index].quantity--;

    setItems(newItems);
  }
  function calcTotal() {
    const sum = items.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity,
      0
    );
    setTotal(sum);
  }
  useEffect(() => {
    calcTotal();
  }, [items]);

  function deleteItem(index) {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  }

  return (
    <>
      <h1>Shopping List</h1>

      <div className="container">
        <div className="add-item-box">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add an item..."
          />
          <button
            className="btn-add"
            type="submit"
            onClick={() => handleaddButton()}
          >
            +
          </button>
        </div>
        <div className="showList">
          <ul>
            {items.map((item, index) => {
              return (
                <>
                  {item.quantity >= 1 ? (
                    <li onClick={() => deleteItem(index)} className="item">
                      {item.itemName}
                      <div>
                        <button onClick={(e) => decreaseQuantity(e, index)}>
                          -
                        </button>

                        <span className="quantity">{item.quantity}</span>
                        <button onClick={(e) => increaseQuantity(e, index)}>
                          +
                        </button>
                      </div>
                    </li>
                  ) : (
                    ""
                  )}
                </>
              );
            })}
          </ul>
        </div>
        <div className="total">
          total:
          {total}
        </div>
      </div>
    </>
  );
}

export default ShopingList;
