import React from 'react';

const PopUp = ({ user, ExitPopUp, notifyFUN }) => {

  const handleClick = () => {
    notifyFUN(); ExitPopUp();
  }

  console.log("user", user);

  return (
    <section
      className='fixed top-0 left-0 w-full h-screen flex justify-center items-center z-10 p-5'
      style={{ backgroundColor: 'rgba(128, 128, 128, 0.55)' }} // Using inline style for background color with opacity
      onClick={ExitPopUp}
    >
      <div className='p-10 rounded-3xl bg-white max-w-lg max-h-[80vh] w-full relative' onClick={(e) => { e.stopPropagation(); }}>
        <div className='flex items-center justify-end mb-4'>
          <button onClick={ExitPopUp} className=''>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
              <path fill="#f44336" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path>
              <path fill="#fff" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"></path>
              <path fill="#fff" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"></path>
            </svg>
          </button>
        </div>
        <div className='text-center text-black mb-4'>
          <div className='text-2xl font-bold'>{user.id}</div>
          <div className='text-lg'>{user.title}</div>
        </div>
        <div className='flex items-center justify-center mx-1'>
          <button onClick={handleClick}
            className="px-8 py-1 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            Update
          </button>
        </div>
      </div>
    </section>
  )
}

export default PopUp;