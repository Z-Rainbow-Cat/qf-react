import React from 'react'
import PropTypes from "prop-types"
export default function slidebar(props) {
    let { bg, position } = props
    let obj = {
        backgroundColor:bg,
        position:"fixed",
        width:200,
    }
    let obj1 = {
        left:0
    }
    let obj2 = {
        right:0,
    }

    let styleObj = position==="left"?{...obj,...obj1}:{...obj,...obj2}
    return (
        <div>
            <ol style={styleObj}>
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
// /、函数式组件设置默认值  和  类型
slidebar.defaultProps = {
    bg:"blue",
    position:"left"
}

slidebar.propTypes = {
    bg:PropTypes.string,
    position:PropTypes.string
}
