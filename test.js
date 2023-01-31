import fetch from "node-fetch";

// fetch("http://http://local,169.254/16/", {
        // fetch("http://192.168.15.35/rpc/Switch.GetStatus?id=0", {
    fetch("http://reqres.in/api/users", {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            name: "Juan"
        })
    })
    // fetch("http://localhost:8000/posts")
    .then(res => {
        return res.json()}
    )
    .then(data => console.log(data))
    .catch(error => console.log('error'))
    //   return res.json()

    // .then((data) => {
    //   console.log(data)
    // //   setPosts(data)
    // })
//   }, [])

// console.log('hello')