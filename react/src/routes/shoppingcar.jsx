import React, { Component } from 'react';
import { List, Button, Modal } from 'antd';  // Import List, Button, and Modal from Ant Design


class Shoppingcar extends Component {
 state = {
    visible: false,
 };

 showModal = () => {
    this.setState({
      visible: true,
    });
 };

 handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
 };

 handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
 };

 render() {
    const { visible } = this.state;

    const data = [
      '捍衛戰士',
      '金額小計 $150',
    ];

    return (
      <div>
        <List
          header={<div>購物車</div>}
          bordered
          dataSource={data}
          
          renderItem={item => <List.Item>{item}</List.Item>}
        />
        <Button type="primary" onClick={this.showModal}>
          確認
        </Button>
        <Modal
          title="確認"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>共1項商品,數量 1 個</p>
          <p>NT$150 元</p>
        </Modal>
        
      </div>
    );
 }
}

export default Shoppingcar;