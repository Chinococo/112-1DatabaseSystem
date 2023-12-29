import React from 'react';

import { useState } from 'react';

export default function bookinglist() {
  const [selectedFruit, setSelectedFruit] = useState('電影名稱');
  const [selectedVegs, setSelectedVegs] = useState(['票種']);
  return (
    <>查詢結果
      <label>
        
        電影:
        <select
          value={selectedFruit}
          onChange={e => setSelectedFruit(e.target.value)}
        >
          <option value="可可夜總會">可可夜總會</option>
          <option value="捍衛戰士">捍衛戰士</option>
          <option value="蜘蛛人">蜘蛛人</option>
        </select>
      </label>
      <hr />
      <label>
        票種:
        <select
          multiple={true}
          value={selectedVegs}
          onChange={e => {
            const options = [...e.target.selectedOptions];
            const values = options.map(option => option.value);
            setSelectedVegs(values);
          }}
        >
          <option value="優惠票">優惠票</option>
          <option value="學生票">學生票</option>
          <option value="一般票">一般票</option>
          <option value="敬老票">敬老票</option>
        </select>
      </label>
      <hr />
      <p>電影名稱: {selectedFruit}</p>
      <p>票種: {selectedVegs.join(', ')}</p>
      
    </>
  );
}