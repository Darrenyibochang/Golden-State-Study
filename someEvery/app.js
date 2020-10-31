function allEven(nums){ 
    let result = nums.every(num => {
      let temp = num%2
      return temp===0
    })
    return result
    }
  