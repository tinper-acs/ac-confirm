/**
*
* @title 基础示例
* @description 基础示例
*
*/
import React, { Component } from 'react';
import AcConfirm from '../../src';
import Button from 'bee-button'


class Demo1 extends Component {

    confirm=()=>{
        AcConfirm.create({
            title:'提示信息',
            keyword:'删除',
            content:"确定要删除吗?",
            confirmFn:()=>{
                console.log('确认')
            },
            cancelFn:()=>{
                console.log('取消')
            },
        })
    }

    render () {
        return (
            <div>
                <Button onClick={this.confirm} colors='primary'>
                    confirm
                </Button>
            </div>
        )
    }
}
export default Demo1