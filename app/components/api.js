export async function get(path) {
  const response = await fetch(path, {
    method: 'GET',
  });
  const message = await response.json();
  console.log('inside api get' + message);
  return message;
}

export async function post(path, body) {
  const response = await fetch(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((data) => data.json());
  console.log('inside api post' + response);

  return response;
}
