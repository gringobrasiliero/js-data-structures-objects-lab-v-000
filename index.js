// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, {[key]:value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  return Object.assign(driver, {[key]:value})

}

function deleteFromDriverByKey(driver, key){
const newdriver = Object.assign({}, driver)
delete newdriver[key]
return newdriver

}

function destructivelyDeleteFromDriverByKey(driver, key){
  let newdriver = delete driver[key]
return newdriver
}