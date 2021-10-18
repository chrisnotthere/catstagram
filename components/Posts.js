import Post from "./Post"

function Posts() {
  const posts = [
    {
      key: 1,
      id: 1,
      username: 'Jane Doe',
      userImg: 'https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Rachel-Montan%CC%83ez.jpeg',
      image: 'https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      caption: 'blah blah blah blah blah blah blah blah ',
      likes: 5,
      comments: [
        {
          id: 123,
          userImage: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          username: 'guy12',
          comment: 'I want one!!',
          timestamp: 1519129858900,
        },
        {
          id: 124,
          userImage: 'https://images.pexels.com/photos/6633/car-superhero-symbol-batman.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          username: 'batman',
          comment: 'nice grass',
          timestamp: 1519129864400,
        },
      ],
    },
    {
      key: 2,
      id: 2,
      username: 'someperson91',
      userImg: 'https://images.pexels.com/photos/6973832/pexels-photo-6973832.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      image: 'https://images.pexels.com/photos/9916904/pexels-photo-9916904.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      caption: "He's a silly goose ",
      likes: 2,
      comments: [
        {
          id: 123,
          userImage: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          username: 'guy12',
          comment: 'Oooh! soo cute :)',
          timestamp: 1519129858900,
        },
        {
          id: 124,
          userImage: 'https://images.pexels.com/photos/6633/car-superhero-symbol-batman.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          username: 'batman',
          comment: 'nice cat',
          timestamp: 1519129864400,
        },
      ],
    },


  ];

  return (
    <div>
      {posts.map((post) => (
        <Post 
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.image}
          caption={post.caption}
          likes={post.likes}
          comments={post.comments}
        />
      ))}

    </div>
  )
}

export default Posts
