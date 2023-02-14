module.exports = function towelSort (matrix) {
   if ( ! matrix ) {
      return []
   }
   matrix.forEach((e, i) => { if (i % 2 !== 0 ) e.reverse()})
   return matrix.flat()
}
