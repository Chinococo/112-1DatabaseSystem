# 使用 Node.js 的官方映像
FROM node:18-alpine

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json 來避免重複安裝依賴
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製應用程序代碼到容器
COPY . .

EXPOSE 80
# 執行應用程序
CMD ["npm", "run","dev"]
