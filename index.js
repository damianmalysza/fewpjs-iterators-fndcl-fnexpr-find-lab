function superbowlWin(objectArray){
  let match = objectArray.find(object => {
    return object['result'] === 'W'
  })
  if (match) {return match['year']}
}
