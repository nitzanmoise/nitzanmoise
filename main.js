
const getFirsData = async () => {
    // get postss list
    const response = await fetch('http://nitzanmoise.com/t7-portfolio/wp-json/wp/v2/posts')
    // parse JSON
    const posts = await response.json()
    // activate render function with posts list
    console.log(posts);
    renderPosts(posts)

}

const renderPosts = posts => {
    posts.forEach(post => {
        console.log(post.slug);
        var node = document.createElement("LI");
        var textnode = document.createTextNode(post.slug);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);

    })
}

getFirsData()
