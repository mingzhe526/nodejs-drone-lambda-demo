exports.handler = async function(event, context) {
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello World Lambda Mingzhe'),
  }
  return response
}
