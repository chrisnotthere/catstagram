function Story(props) {
  return (
    <div className='flex flex-col items-center'>
      <img 
        className='h-10 w-10 rounded-full border border-red-700 p-0.5'
        src={props.image} 
        alt='' 
        />
        <p className='overflow-ellipsis overflow-hidden w-16'>{props.username}</p>
    </div>
  )
}

export default Story
