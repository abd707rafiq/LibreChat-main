import React from 'react';
 // Assuming you have a custom hook to use ChatContext

// Example component for sending messages and attaching files
function NormalModeButtons() {
  
  // Handler for sending a text message
  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <header className="text-center">
        {/* Replace with your actual logo or image */}
        <img src="logo.svg" className="mx-auto w-1/2" alt="logo" />
        <div className="mt-8">
          <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">Secure chat</button>
          <button className="btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2">Fast chat</button>
          <button className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2">Chat with your data</button>
        </div>
        <div className="mt-4">
          <button className="btn bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mx-2">Generate images</button>
          <button className="btn bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mx-2">Analyse images</button>
        </div>
        <footer className="absolute bottom-0 w-full py-4 bg-gray-900 text-white">
          <p>VismaGPT can make mistakes. Consider checking important information.</p>
        </footer>
      </header>
    </div>
  );
}

export default NormalModeButtons;
