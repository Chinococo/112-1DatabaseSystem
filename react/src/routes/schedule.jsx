import React from 'react';

class GuiMaMaSchedule extends React.Component {
 render() {
    return (
      <div>
        <h1>OUR MOVIE SCHEDULE</h1>
        <table>
          <tr>
            <th>時間</th>
            <th>片名</th>
          </tr>
          <tr>
            <td>12:05</td>
            <td>水行俠 失落帝國 護 6</td>
          </tr>
          <tr>
            <td>14:05</td>
            <td>壞 男孩 輔 12</td>
          </tr>
          {/* ... */}
          <tr>
            <td>21:35</td>
            <td>鬼 媽媽 的 假期 普 0</td>
          </tr>
          <tr>
            <td>23:35</td>
            <td>旺卡 普 0</td>
          </tr>
        </table>
      </div>
    );
 }
}

export default GuiMaMaSchedule;