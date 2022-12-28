// function greeting(message) {
//   return alert(`${message}`);
// }

// let greeting = (message) => alert(`${message}`);

// greeting("olá");

let createBlog = (title, body) =>{
  if(!title)
  {
    throw new Error("Titilo necessário");
  }
  if(!body)
  {
    throw new Error("Body vazio");
  }

  return alert(`${title} - ${body}`);
}

createBlog('titilo','bláblá')