exports.handler = async function(event, context) {

  let data = event.data;
  let msg = JSON.stringify(`Hello World Lambda, your data ${data}`) 
  const response = {  
    statusCode: 200,
    body: msg,
  }

  return response
}
