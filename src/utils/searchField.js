const searchField = (obj, fieldName) => {
   for (const key in obj) {
      if (key === fieldName) {
         return obj[key]
      } else if (typeof obj[key] === 'object') {
         const result = searchField(obj[key], fieldName)
         if (result) {
            return result
         }
      }
   }
}
export default searchField
