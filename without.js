let without = function(source, itemsToRemove) {
  return source.filter(function(item) {
    return !itemsToRemove.includes(item);
  });
}

module.exports = without;