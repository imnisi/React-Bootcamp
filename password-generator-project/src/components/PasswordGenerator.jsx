import React, { useState, useEffect, useCallback, useRef } from "react";

function PasswordGenerator() {
  // STATE MANAGEMENT
  const [length, setLength] = useState(8); // Password length (default: 8)
  const [includeNumbers, setIncludeNumbers] = useState(false); // Include numbers?
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false); // Include special chars?
  const [password, setPassword] = useState(""); // Generated password

  const copyPasswordRef = useRef(); // useRef for copy button

  // COPY PASSWORD TO CLIPBOARD FUNCTION
  const copyToClipboard = () => {
    copyPasswordRef.current?.select();
    copyPasswordRef.current?.setSelectionRange(0, 999); // it will select only first 999 characters
    window.navigator.clipboard.writeText(copyPasswordRef.current.value);
  };

  // OPTIMIZED PASSWORD GENERATOR FUNCTION
  const pwdGenerator = useCallback(() => {
    let pwd = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // Base alphabet

    // Add numbers if checkbox is checked
    if (includeNumbers) {
      str += "0123456789";
    }

    // Add special characters if checkbox is checked
    if (includeSpecialChars) {
      str += "!@#$%^&*-_+=[]{}~`";
    }

    // Generate password character by character
    for (let index = 1; index <= length; index++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pwd += str.charAt(charIndex);
    }

    setPassword(pwd);
  }, [length, includeNumbers, includeSpecialChars]); // Dependencies

  // TRIGGER PASSWORD GENERATION WHEN DEPENDENCIES CHANGE
  useEffect(() => {
    pwdGenerator();
  }, [pwdGenerator]); // Runs only when function actually changes

  return (
    <div className="w-full max-w-lg mx-auto shadow-lg rounded-lg px-6 py-4 my-8 bg-gradient-to-br from-blue-500 to-purple-400">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
        🔐 Password Generator
      </h1>

      {/* Password Display */}
      <div className="flex shadow rounded-lg overflow-hidden mb-6 border">
        <input
          ref={copyPasswordRef}
          type="text"
          value={password}
          className="outline-none w-full py-3 px-4 font-mono text-lg text-black cursor-pointer"
          placeholder="Generated password will appear here..."
          readOnly
        />
        <button
          onClick={copyToClipboard}
          className="outline-none bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition-colors duration-200 font-semibold cursor-pointer"
        >
          Copy
        </button>
      </div>

      {/* Controls */}
      <div className="space-y-4">
        {/* Length Control */}
        <div className="flex items-center gap-3">
          <label className="font-semibold text-black min-w-20">Length:</label>
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className="cursor-pointer flex-1"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <span className="bg-blue-100 px-3 py-1 rounded font-bold min-w-12 text-center text-black">
            {length}
          </span>
        </div>

        {/* Options */}
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer text-black">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="w-4 h-4 cursor-pointer"
            />
            <span>Include Numbers (0-9)</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer text-black">
            <input
              type="checkbox"
              checked={includeSpecialChars}
              onChange={(e) => setIncludeSpecialChars(e.target.checked)}
              className="w-4 h-4 cursor-pointer"
            />
            <span>Special Characters (!@#$...)</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
