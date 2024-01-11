

<h1>使用必看指南</h1>
      <p>為了保持一致性和安全性，請確保所有資料操作都透過 RESTful API 進行。以下是一些基本的指南：</p>
  <h2>1. 通常情況</h2>  
    <p>apace與react再請求restful api時請使用 DockerHub port 前面的 port 進行資料請求</p>
  <h2>2. Pytest 特殊情況</h2>
      <p>在 Pytest 程式中，請確保使用 DockerHub port 後面的 port 進行 API 請求。這是唯二個特例。</p>

  <h2>3. Node.js 連接資料庫 特殊情況</h2>
  <p>在 Node.js 中連接到資料庫時，host請使用 "database" 作為主機名稱，同時確保填寫相應的 DockerHub port。</p>
  <h3>範例：</h3>
  <pre>
    <code>
      const dbConfig = {
          host: 'database',
          port: 3306, // Change this to the desired port
          user: 'docker',
          password: 'docker',
          database: 'database_project'
      };
    </code>
  </pre>
  <p>請記得在所有程式碼中嚴格遵守這些指南，以確保一致的資料存取和提高應用程式的安全性。</p>
## APACE/REACT CONNECT RESTFUL API EXAMPLE
### APACE index.html
請看程式碼


# How To Use it
## 環境需求
### Window
#### Step1 Install Docker hub
#### Step2 Install WSL1+WSL2
#### Step3 Open Docker hub
#### Step4 Open Powershell by adminster
Set-ExecutionPolicy RemoteSigned
#### Step5 use powershell to excute start.ps1 file start.
#### File Structure(非必要 請勿跟動Dokckerfile 跟 docker-compose.yml 我怕你改了整個壞掉 要改之前先問我)
```
-- bin 勿動
-- config 勿動
-- data
    -- 基本上這個架構有預設Volumn，所以可以將執行錯誤列在這裡，但好像只有apace跟mysql會列，所以加減用，我是覺得沒有需要使用，所以並沒有實作，不然我其實知道怎麼新增，只是懶
-- log
    -- 基本上這個架構有預設Volumn，所以可以將執行錯誤列在這裡，但好像只有apace跟mysql會列，所以加減用，我是覺得沒有需要使用，所以並沒有實作，不然我其實知道怎麼新增，只是懶
-- nodejs
    -- package.json 如果你需要其他的東西，請加在這裡，它會自動安裝，如果遇到無法順利執行，請查看docker hub 的log 應該能解決很多問題 再不然就問我 我應該可以解決
    -- index.js 就是我們的RESTFUL API的程式碼，可以將你的邏輯加在這裡
-- python 
    -- result 自動產生 pytest輸出文檔地方
    -- requirment.txt 如果你有需要什麼其餘的套件請加在這裡
    -- test*.py 這些就是測試檔，你如果需要測試檔名前綴一定要是test，且函數前綴也是
-- react
    -- 說實話我不懂，所以我只是讓他能動，要問會的人
-- sql
    -- init.sql 基本上，他會初始化整個資料庫後，執行這個檔案，當然你可以先差一些資料進去也是放在這裡
-- www 
    -- html 裡面放很多不同的html，只要部屬成功，你可以照著 .env 檔的 HOST_MACHINE_UNSECURE_HOST_PORT 參數，放在localhost:HOST_MACHINE_UNSECURE_HOST_PORT，後面加上路徑且加上檔名應該就可以正確顯示
.env 所以的環境變數在這裡，基本上這裡都是port，跟一些帳密設定
.sql.env 資料庫需要的參數，這個東西必須跟.env設定一致，不然在某些地方會出現問題，請注意
docker-compose.yml 這個我要拉出來介紹，基本上你們會遇到的問題我基本上的處理掉了，所以理論上你們應該可以很愉快地使用，下面會有介紹文檔，但應該很隨便，勿認真
LAMP_README.md 原始文檔介紹，基本忽略，我已經改很多，改到跟剛開始完全不一樣了
LICENSE 修改來源為:(來源)[https://github.com/sprintcube/docker-compose-lamp] 可以免費使用，也可以商用，但一定要帶有原始的LICENSE
README.md 解釋文檔 你現在正在看的這個就是 你都在看應該知道
Start.ps1 部屬腳本 如果無法順利執行，請檢察docker狀況並更新docker  
```
### 演示圖片
#### 如果你順立執行，可以來Docker hub的Containar裡面看到這張圖片
https://hackmd.io/_uploads/rJuEzEePa.png
#### 你可以按下Port的按鈕進行請求
https://hackmd.io/_uploads/SJBvfNxDa.png
##### Example 我按下 React的按鈕
https://hackmd.io/_uploads/S1qeNNeP6.png
#### EXTRA Step If you ngork to public server
1. https://ngrok.com/
2. Register
3. Login
4. Copy ngork token
