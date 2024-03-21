import React from 'react';

function NormalModeButtons() {
  return (
    // Flex container with vertical direction, justify-end to push content to the bottom
    <div className="flex h-screen flex-col justify-end">
      <div className="w-full bg-gray-900 p-4">
        {' '}
        {/* This div represents your footer area */}
        {/* Grid with two columns for the buttons */}
        <div className="mb-4 grid grid-cols-2 gap-4">
          <button className="btn w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 font-bold text-white shadow-md hover:bg-gray-700">
            Secure chat
          </button>
          <button className="btn w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 font-bold text-white shadow-md hover:bg-gray-700">
            Fast chat
          </button>
          <button className="btn w-full  rounded-lg border border-gray-600 px-4 py-2 font-bold text-white shadow-md hover:bg-gray-700">
            Chat with your data
          </button>
          <button className="btn w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 font-bold text-white shadow-md hover:bg-gray-700">
            Generate images
          </button>
        </div>
      </div>
    </div>
  );
}

export default NormalModeButtons;
