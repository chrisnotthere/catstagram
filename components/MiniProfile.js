function MiniProfile() {

  const signout = () => {
    alert('sign out');
  }

  return (
    <div className='flex items-center mt-14 ml-10'>
      <img
        className='w-16 h-16 rounded-full border border-red-700 p-[2px] '
        src='https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Rachel-Montan%CC%83ez.jpeg'
        alt=''
      />

      <div className='flex-1 mx-4'>
        <h2 className='font-bold'>Jane Doe</h2>
        <h3 className='text-sm text-green-600 font-semibold'>Welcome to Catstagram!</h3>
      </div>

      <button 
        onClick={signout}
        className='text-blue-500 text-sm font-semibold'
      >
        Sign Out
      </button>

    </div>
  )
}

export default MiniProfile
