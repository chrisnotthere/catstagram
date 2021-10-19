import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from '@firebase/firestore';
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react';
import React, { useEffect, useRef, useState } from 'react';
import { db } from '../firebase';
import Moment from 'react-moment';

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState ([]);
  const [hasLiked, setHasLiked] = useState([]);
  const textInput = useRef(null);

  // get comments from firestore
  useEffect(
    () => 
      onSnapshot(
        query(
          collection(db, 'posts', id, 'comments'),
          orderBy('timestamp', 'desc')
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db, id]
  );

  function focusTextInput() {
    textInput.current.focus();
  }

  const likePost = () => {
    alert('like the post');
  }

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment('');

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });

  };

  const message = () => {
    alert('under construction')
  }

  return (
    <div className='bg-white my-7 border rounded-sm mx-2'>

      {/* header */}
      <div className='flex items-center p-5'>
        <img
          src={userImg}
          className='rounded-full h-12 w-12 object-contain border
          border-yellow-300 p-1 mr-3 '
          alt=''
        />
        <p className='flex-1 font-bold'> {username}</p>
        {/* <DotsHorizontalIcon className='h-5' /> */}
      </div>
      
      {/* image */}
      <img 
        src={img}
        className='object-cover w-full'
        alt=''
      />
      
      {/* icons */}
      <div className='flex justify-between px-4 py-4'>
        <div className='flex space-x-4'>
          <HeartIcon onClick={likePost} className='btn' />
          <ChatIcon className='btn' onClick={focusTextInput} />
          <PaperAirplaneIcon className='btn rotate-45' onClick={message} />
        </div>
        <BookmarkIcon className='btn' />
      </div>
      
      {/* captions */}
      <div className='p-5 truncate'>
        <p className='font-bold mb-1'> likes</p>
        <span className='font-bold mr-1'>{username} </span>
      {caption}
      </div>
      
      {/* comments */}
      {comments.length > 0 && (
        <div className='ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
          {comments.map(comment => (
            <div 
              key={comment.id}
              className='flex items-center space-x-2 mb-3'
            >
              <img 
                className='h-7 rounded-full'
                src={comment.data().userImage}
                alt='' 
              />
              <p className='text-sm flex-1'>
                <span className='font-bold'>
                  {comment.data().username}
                </span>
                {' '}
                {comment.data().comment}
              </p>

              <Moment fromNow className='pr-5 text-xs'>
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}

      
      
      {/* input box */}
      <form className='flex items-center p-4'>
        <EmojiHappyIcon className='h-7' />
        <input
          type='text'
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder='Add a comment...'
          className='mx-2 border-none flex-1 focus:ring-black focus:border-black rounded-full '
          ref={textInput}
        />
        <button 
          type='submit' 
          disable={!comment.trim()} 
          className='font-semibold text-blue-400' 
          onClick={sendComment}
        >Post</button>
      </form>


    </div>
  )
}

export default Post
