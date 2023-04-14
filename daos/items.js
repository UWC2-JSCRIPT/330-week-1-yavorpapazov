const uuid = require('uuid');

let itemsModel = require('../models/items');

module.exports = {};


module.exports.getAll = () => {
  return itemsModel.items;
}

module.exports.getById = (itemId) => {
  // TODO: complete
  let singleItem = itemsModel.items.find(item => item.id === itemId)
  return singleItem
}

module.exports.deleteById = async (itemId) => {
    // TODO: complete
    let newItems = itemsModel.items.filter(item => item.id !== itemId)
    itemsModel.items = [...newItems]
}

module.exports.updateById = async (itemId, newObj) => {
    // TODO: complete
    let updatedItems = itemsModel.items.map(item => {
      if(item.id === itemId) {
        item = {...newObj, id: itemId}
      }
      return item
    })
    itemsModel.items = [...updatedItems]
}

module.exports.create = async (item) => {
  const id = uuid.v4();
  const newItem = { ...item, id };
  itemsModel.items.push(newItem);
  return newItem;
}