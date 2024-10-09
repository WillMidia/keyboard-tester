import React, { useState, useEffect } from 'react';

const KeyboardTester = () => {
  const [pressedKeys, setPressedKeys] = useState(new Set());

  useEffect(() => {
    const handleKeyDown = (e) => {
      setPressedKeys((prevKeys) => new Set(prevKeys).add(e.code));
    };

    const handleKeyUp = (e) => {
      setPressedKeys((prevKeys) => {
        const newKeys = new Set(prevKeys);
        newKeys.delete(e.code);
        return newKeys;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const isKeyPressed = (keyCode) => pressedKeys.has(keyCode);

  const renderKey = (label, keyCode, className = '') => (
    <div
      className={`key ${className} ${isKeyPressed(keyCode) ? 'pressed' : ''}`}
    >
      {label}
    </div>
  );

  return (
    <div className="keyboard-tester">
      <div className="main-keyboard">
        <div className="row">
          {renderKey('Esc', 'Escape')}
          <div className="spacer"></div>
          {['F1', 'F2', 'F3', 'F4'].map((key) => renderKey(key, `F${key.slice(1)}`))}
          <div className="spacer"></div>
          {['F5', 'F6', 'F7', 'F8'].map((key) => renderKey(key, `F${key.slice(1)}`))}
          <div className="spacer"></div>
          {['F9', 'F10', 'F11', 'F12'].map((key) => renderKey(key, `F${key.slice(1)}`))}
          <div className="spacer"></div>
          {renderKey('PrtSc', 'PrintScreen')}
          {renderKey('ScrLk', 'ScrollLock')}
          {renderKey('Pause', 'Pause')}
        </div>

        <div className="row">
          {renderKey('`', 'Backquote')}
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((key) => renderKey(key, `Digit${key}`))}
          {renderKey('-', 'Minus')}
          {renderKey('=', 'Equal')}
          {renderKey('Backspace', 'Backspace', 'wide')}
          <div className="spacer"></div>
          {renderKey('Ins', 'Insert')}
          {renderKey('Home', 'Home')}
          {renderKey('PgUp', 'PageUp')}
        </div>

        <div className="row">
          {renderKey('Tab', 'Tab', 'wide-1-5')}
          {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((key) => renderKey(key, `Key${key}`))}
          {renderKey('[', 'BracketLeft')}
          {renderKey(']', 'BracketRight')}
          {renderKey('\\', 'Backslash')}
          <div className="spacer"></div>
          {renderKey('Del', 'Delete')}
          {renderKey('End', 'End')}
          {renderKey('PgDn', 'PageDown')}
        </div>

        <div className="row">
          {renderKey('Caps Lock', 'CapsLock', 'wide-1-75')}
          {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((key) => renderKey(key, `Key${key}`))}
          {renderKey('Ç', 'Semicolon')}
          {renderKey('~', 'Quote')}
          {renderKey('Enter', 'Enter', 'wide-2-25')}
        </div>

        <div className="row">
          {renderKey('Shift', 'ShiftLeft', 'wide-2-25')}
          {renderKey('\\', 'IntlBackslash')}
          {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((key) => renderKey(key, `Key${key}`))}
          {renderKey(',', 'Comma')}
          {renderKey('.', 'Period')}
          {renderKey('/', 'Slash')}
          {renderKey('Shift', 'ShiftRight', 'wide-2-75')}
        </div>

        <div className="row">
          {renderKey('Ctrl', 'ControlLeft')}
          {renderKey('Win', 'MetaLeft')}
          {renderKey('Alt', 'AltLeft')}
          {renderKey('', 'Space', 'space')}
          {renderKey('AltGr', 'AltRight')}
          {renderKey('Win', 'MetaRight')}
          {renderKey('Prt', 'ContextMenu')}
          {renderKey('Ctrl', 'ControlRight')}
        </div>
      </div>

      <div className="side-sections">
        <div className="arrow-keys">
          <div className="row">
            <div className="spacer"></div>
            {renderKey('↑', 'ArrowUp')}
            <div className="spacer"></div>
          </div>
          <div className="row">
            {renderKey('←', 'ArrowLeft')}
            {renderKey('↓', 'ArrowDown')}
            {renderKey('→', 'ArrowRight')}
          </div>
        </div>

        <div className="numpad">
          <div className="row">
            {renderKey('Num', 'NumLock')}
            {renderKey('/', 'NumpadDivide')}
            {renderKey('*', 'NumpadMultiply')}
            {renderKey('-', 'NumpadSubtract')}
          </div>
          <div className="row">
            {renderKey('7', 'Numpad7')}
            {renderKey('8', 'Numpad8')}
            {renderKey('9', 'Numpad9')}
            {renderKey('+', 'NumpadAdd', 'tall')}
          </div>
          <div className="row">
            {renderKey('4', 'Numpad4')}
            {renderKey('5', 'Numpad5')}
            {renderKey('6', 'Numpad6')}
          </div>
          <div className="row">
            {renderKey('1', 'Numpad1')}
            {renderKey('2', 'Numpad2')}
            {renderKey('3', 'Numpad3')}
            {renderKey('Enter', 'NumpadEnter', 'tall')}
          </div>
          <div className="row">
            {renderKey('0', 'Numpad0', 'wide')}
            {renderKey('.', 'NumpadDecimal')}
          </div>
        </div>
      </div>

      <style jsx>{`
        .keyboard-tester {
          background-color: #1a1a1a;
          padding: 20px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
        }
        .main-keyboard {
          margin-bottom: 20px;
        }
        .side-sections {
          display: flex;
          justify-content: space-between;
        }
        .row {
          display: flex;
          margin-bottom: 8px;
        }
        .key {
          width: 40px;
          height: 40px;
          background-color: #333;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 4px;
          border-radius: 4px;
          font-size: 12px;
          user-select: none;
        }
        .key.wide { width: 80px; }
        .key.wide-1-5 { width: 60px; }
        .key.wide-1-75 { width: 70px; }
        .key.wide-2-25 { width: 90px; }
        .key.wide-2-75 { width: 110px; }
        .key.space { width: 240px; }
        .key.tall { height: 84px; }
        .key.pressed { background-color: #4CAF50; }
        .spacer { width: 20px; }
        .numpad .row { justify-content: flex-end; }
      `}</style>
    </div>
  );
};

export default KeyboardTester;