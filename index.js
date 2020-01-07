let calculate = require('./model/calculate')

exports.handler = function(event, context) {
  
  try {

    let data = event.data;
    let value = calculate.add(data.num1, data.num2)
    let msg = JSON.stringify(`Hello World Lambda, your calculate result is: ${value }`) 
    const response = {  
      statusCode: 200,      
      body: msg,
      value: value
    }

    console.log('ok response:', JSON.stringify(response))
    return response
  } catch (error) {
    
    console.log('catch error:', JSON.stringify(error))
    const response = {  
      statusCode: 200,
      body: JSON.stringify(error),
      value: undefined
    }
    return response
  }
  

  
}
