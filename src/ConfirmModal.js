import React, { Component } from 'react';
import PropTypes from "prop-types";
import Btns from 'ac-btns';
import Icon from 'bee-icon';
import Modal from 'bee-modal';


const propTypes = {
    title: PropTypes.string,
    keywords: PropTypes.string,
    content: PropTypes.string,
    confirmFn: PropTypes.func,
    cancelFn: PropTypes.func,
    show: PropTypes.bool,
};

const defaultProps = {
    title: "提示信息",
    confirmFn: ()=>{},
    cancelFn: ()=>{},
    content: "确认要删除吗 ?",
    show: false,
    keyword: '删除',
};

class AlertDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }  

    render() {
        let { close, title, keyword, content, confirmFn, cancelFn } = this.props;
        //按钮组 
        return (
            <span >
                <Modal
                    show={this.state.show}
                    className='ac-confirm'
                    onHide={close} 
                    draggable={true}
                    resizable={true}
                    width={400}
                    >
                    <Modal.Header closeButton className='ac-confirm-header'>
                        <Modal.Title className='ac-confirm-header-title'>{title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body className='ac-confirm-body'>
                        <span className='ac-confirm-body-title'>
                            <Icon type='uf-exc-c-2' className='ac-confirm-body-title-icon'></Icon>
                            <span className='ac-confirm-body-title-keyword'>{keyword}</span>
                        </span>
                        <span className='ac-confirm-body-content'>{content}</span>
                    </Modal.Body>

                    <Modal.Footer className='ac-confirm-footer'>
                        <Btns
                            btns={{
                                confirm:{
                                    onClick:()=>{
                                        this.setState({
                                            show:false
                                        })
                                        confirmFn()
                                    }
                                },
                                cancel:{
                                    onClick:()=>{
                                        this.setState({
                                            show:false
                                        })
                                        cancelFn()
                                    }
                                }
                            }}
                        />
                    </Modal.Footer>
                </Modal>
            </span>
        )
    }
}

AlertDialog.propTypes = propTypes;
AlertDialog.defaultProps = defaultProps;
export default AlertDialog;
