// MemberCenterMenu.js
import React, { useState, useEffect }  from 'react';
import '../css/MemberCenterMenu.css';

  
const MemberCenterMenu = () => {
    const pairContainerStyle = {
        display: 'flex',
        marginRight: '20px', // Add margin between pairs
      };
    
      const containerStyle = {
        border: '1px solid #ccc',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative', // Add position relative to allow absolute positioning of h2
      };
    
      const liStyle = {
        listStyleType: 'none',
        margin: '5px', // Add margin between list items
        width: '150px', // Set a specific width for each item
      };
  return (
    <div id='MemberMenu'>
        <div id='MemberInfo' style={containerStyle}>
            <h2 style={{  zIndex: '1' }}>個人資訊管理</h2>
            <div id='li-container'>
                <div style={pairContainerStyle}>
                <li style={liStyle}>帳號名稱</li>
                <li style={liStyle}>會員條碼</li>
                </div>
                <div style={pairContainerStyle}>
                <li style={liStyle}>備援信箱設定</li>
                <li style={liStyle}>訊息信箱</li>
                </div>
            </div>
        </div>
        <div id='OrderInfo'>
            <h2>訂票管理</h2>
            <ul>
                <li>待付款訂單</li>
                <li>已完成訂單</li>
                <li>折價券</li>
            </ul>
        </div>
        <h2>訂票管理</h2>
        <div id='RecentOrderInfo'style={{ display: 'flex', alignItems: 'center' }}>
            <img src='https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-02/7148f050-546f-11ea-bada-f406c57022e2' style={{ maxHeight: '100px', width: 'auto' }}></img>
            <div id='MovieInfo' style={{textAlign: 'left',marginLeft:'10px'}}>
                <h3>電影資訊</h3>
                <ul style={{ listStyleType: 'none', paddingInlineStart: '20px'  }}>
                    <li>電影名稱</li>
                    <li>日期/時間</li>
                    <li>影廳編號</li>
                    <li>訂單座位</li>
                    <li>訂單編號</li>
                </ul>
            </div>
        </div>
    </div>
    
   
  );
}

export default MemberCenterMenu;
