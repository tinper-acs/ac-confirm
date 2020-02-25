import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ConfirmModal from './ConfirmModal';

let Confirm = {
    create:(options)=>{
        options = Object.assign({
            confirmFn:()=>{
                // console.log('确认')
            },
            cancelFn:()=>{
                // console.log('取消')
            },
            title:'提示信息',
            keyword:'删除',
            content:'确定要删除吗?',
        },options);
        let toast = document.createElement('div');
        toast.id='acConfirm';
        document.body.appendChild(toast);
        ReactDOM.render(<ConfirmModal {...options} />,toast);
    }
}


export default Confirm;