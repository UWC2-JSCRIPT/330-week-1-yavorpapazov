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
    console.log(itemId)
    console.log(newObj)
    console.log(itemsModel.items)
    let updatedItems = itemsModel.items.map(item => {
      if(item.id === itemId) {
        let temp = newObj.field
        item.field = 'updated'
        item.newField = newObj.newField
      }
      return item
    })
    itemsModel.items = [...updatedItems]
    console.log(itemsModel.items)
}

module.exports.create = async (item) => {
  const id = uuid.v4();
  const newItem = { ...item, id };
  itemsModel.items.push(newItem);
  return newItem;
}