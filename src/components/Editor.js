import React, {useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt ,faExpandAlt } from '@fortawesome/free-solid-svg-icons'


export default function Editor(props) {
    const{
        language,
        displayName,
        value,
        onchange,
    } = props

    const [open,setopen]=useState(true)

    function handleChange(editor, data, value){
        onchange(value)
    }

  return (
    <div className={`editor-container ${open ? '' : "collapsed "}`}>
        <div className='editor-title'>
            {displayName}
            <button
              type='button'
              className='expand-collapse-btn'
              onClick={()=>setopen(prevOpen => ! prevOpen)}
            >
              <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
            </button>
        </div>
        <div className='nice'>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className=' code-mirror-wrapper '
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true
                }}
            />
        </div>
    </div>
  )
}



// CodeMirror cm-s-material CodeMirror-wrap code-mirror-wrapper

