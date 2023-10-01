const healthPath = '/health';
exports.handler = async function(event) {
    console.log('Request event:', event);
    let response;
    switch(true) {
        case event.httpMethod === 'GET' && event.path === healthPath:
            response = buildResponse(200);
            break;

        default:
            response = buildResponse(404, `404, Not Found, event path: ${event.path}`);
    }
    return response;
}

function buildResponse(statusCode, body) {
    return {
        statusCode: statusCode,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }
}
