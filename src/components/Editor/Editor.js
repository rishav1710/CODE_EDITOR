import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import SouthWestIcon from '@mui/icons-material/SouthWest';
import NorthEastIcon from '@mui/icons-material/NorthEast';

export default function Editor({ displayName, language, value, onChange }) {
  const [open, setOpen] = React.useState(true);
  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <div className={`editor-container ${open ? '' : 'collapse'}`}>
      <div className="editor-title">
        {displayName}
        <div className="icon" onClick={() => setOpen((prev) => !prev)}>
          {!open ? (
            <NorthEastIcon
              sx={{
                height: '20px',
                width: '20px',
              }}
            />
          ) : (
            <SouthWestIcon
              sx={{
                height: '20px',
                width: '20px',
              }}
            />
          )}
        </div>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          lineNumbers: true,
          mode: language,
          theme: 'material',
        }}
      />
    </div>
  );
}
