async function callAPI() {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await result.json();
    console.log(data);
    let htmlString = `
    <tr>
        <th> user id </th>
        <th> Id </th>
        <th> title </th>
        <th> body</th>
     <tr/>

    `

    data.forEach(post => {
      htmlString += `
      <tr>
      <td> ${post.userId}</td>
      <td> ${post.Id}</td>
       <td> ${post.title}</td>
       <td> ${post.body}</td>
      </tr>
      `
    })

    document.getElementById("post-table").innerHTML = htmlString;

  } catch (error) {
    console.log(error);
  }
}
