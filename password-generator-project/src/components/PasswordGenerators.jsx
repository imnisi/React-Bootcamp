// Password Generator Function using useEffect

import React from "react";
import { useState, useEffect, useRef } from "react";

function PasswordGenerators() {
  // State Management
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [password, setPassword] = useState("");

  const copyPasswordRef = useRef(null);

  const copyToClipboard = () => {
    copyPasswordRef.current?.select();
    window.navigator.clipboard.writeText(copyPasswordRef.current.value);
  };

  useEffect(
    function pwdGenerator() {
      let pwd = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if (includeNumbers) {
        str += "0123456789";
      }

      if (includeSpecialChars) {
        str += "!@#$%^&*-_+=[]{}~`";
      }

      for (let index = 1; index <= length; index++) {
        const charIndex = Math.floor(Math.random() * str.length);
        pwd += str.charAt(charIndex);
      }

      setPassword(pwd);
    },
    [length, includeNumbers, includeSpecialChars] // Whenever these states change → password regenerate automatically
  );

  return (
    <div className="w-full max-w-lg mx-auto shadow-lg rounded-lg px-6 py-4 my-8 bg-gradient-to-br from-pink-500 to-sky-400">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">
            Password Generator
          </h1>
          <p className="text-sm text-black mt-1">
            Fast, simple and customizable passwords
          </p>
        </div>

        <div className="text-right">
          <div className="inline-flex items-center gap-2 bg-gradient-to-tr from-indigo-600 to-purple-600 text-white px-3 py-1.5 rounded-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c0-1.657-1.343-3-3-3S6 9.343 6 11s1.343 3 3 3 3-1.343 3-3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11c0 4.418-3.582 8-8 8S3 15.418 3 11"
              />
            </svg>
            <span className="text-xs">Auto</span>
          </div>
        </div>
      </header>

      {/* PASSWORD DISPLAY */}
      <div className="mt-6">
        <label className="block text-xs font-medium mb-2 text-black">
          Generated password
        </label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={password}
            ref={copyPasswordRef}
            readOnly
            className="flex-1 px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 outline-none text-sm font-mono text-slate-800 placeholder:text-slate-400"
            placeholder="Your password will appear here"
          />

          <button
            onClick={copyToClipboard}
            title="Copy password"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium shadow hover:scale-[1.01] transition-transform cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 2a2 2 0 00-2 2v1H5a2 2 0 00-2 2v7a2 2 0 002 2h7a2 2 0 002-2v-1h1a2 2 0 002-2V8a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H8z" />
            </svg>
            <span>Copy</span>
          </button>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Length */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-black">Length</label>
            <div className="text-sm text-black">{length}</div>
          </div>
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className="w-full h-2 accent-indigo-600 cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>

        {/* Options */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-black">
                Include numbers
              </label>
              <p className="text-xs text-slate-500">Add digits 0-9</p>
            </div>
            <div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={includeNumbers}
                  onChange={() => setIncludeNumbers((p) => !p)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-indigo-600 transition-colors"></div>
                <div
                  className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                    includeNumbers ? "translate-x-5" : ""
                  }`}
                />
              </label>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-black">
                Include symbols
              </label>
              <p className="text-xs text-slate-500">e.g. !@#$%^&*</p>
            </div>
            <div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={includeSpecialChars}
                  onChange={() => setIncludeSpecialChars((p) => !p)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-indigo-600 transition-colors"></div>
                <div
                  className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                    includeSpecialChars ? "translate-x-5" : ""
                  }`}
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Footer / Explanation */}
      <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-white rounded-lg border border-indigo-100">
        <h2 className="text-sm font-semibold text-slate-800">How it works</h2>
        <div className="mt-2 text-xs text-slate-600 grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2" />
            <div>
              <div className="font-medium text-slate-700">State updates</div>
              <div className="text-slate-500">
                Slider and toggles update internal state
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
            <div>
              <div className="font-medium text-slate-700">Auto-generate</div>
              <div className="text-slate-500">
                Password regenerates on changes
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2" />
            <div>
              <div className="font-medium text-slate-700">Lightweight</div>
              <div className="text-slate-500">
                Generation is fast and runs on the client
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
            <div>
              <div className="font-medium text-slate-700">Copy</div>
              <div className="text-slate-500">
                Use the copy button to copy password
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerators;
