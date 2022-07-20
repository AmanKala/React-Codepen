import React, { useState } from 'react'
import { Controlled } from 'react-codemirror2'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt,faCode } from '@fortawesome/free-solid-svg-icons'

const Editor = (props) => {
  const {language, displayName, value, onChange} = props
  const [open, setOpen] = useState(true)

  function handleChange(editor, data, val) {
    onChange(val)
  }

  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className="editor-title">
        <span>
          <FontAwesomeIcon icon={ faCode } />
          &nbsp;
          {displayName}
        </span>
        
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen(prev => !prev)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <Controlled
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          mode: language,
          theme: 'material',
          lineNumbers: true
        }}
      />
    </div>
  )
}

export default Editor;
