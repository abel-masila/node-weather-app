const getUser=(id,callback)=>{
    const user={
        id:id,
        name: 'Abel'
    };
    setTimeout(()=>{
        callback(user);
    },3000)
}
getUser(32, (user)=>{
    console.log(user)
})