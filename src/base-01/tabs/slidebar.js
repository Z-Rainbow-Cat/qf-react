import React from 'react'
// import PropTypes from "prop-types"
export default function slidebar(props) {
    let { bg, position } = props
    return (
        <div>
            <ol style={{backgroundColor:bg,textAlign:position}}>
                <li>111</li>
                <li>222</li>
                <li>333</li>
                <li>444</li>
                <li>555</li>
                <li>666</li>
                <li>777</li>
                <li>888</li>
                <li>999</li>
            </ol>
        </div>
    )
}
