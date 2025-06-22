# 蘆薈Villa民宿官網

> 宜蘭五結清水模工業風民宿官方網站

## 專案特色
- 🎨 **溫潤工業風 × 日系簡約** 設計風格
- 📱 **RWD 響應式設計** 完美適配所有裝置
- ⚡ **Tailwind CSS v3** 純 utility class 開發
- 🖼️ **WebP/AVIF 格式圖片** 最佳化載入效能
- 🎭 **AOS 動畫效果** 提升使用者體驗
- 🚀 **SEO 最佳化** 完整 meta 標籤和結構化資料

## 技術棧
- **CSS Framework**: Tailwind CSS v3
- **字體**: Google Fonts (Playfair Display + Noto Sans TC)
- **動畫**: AOS.js
- **圖片格式**: WebP, AVIF
- **開發工具**: Tailwind CLI

## 安裝與執行

### 1. 安裝依賴
```bash
npm install
```

### 2. 編譯 CSS (開發模式)
```bash
npm run dev
```

### 3. 編譯 CSS (生產模式)
```bash
npm run build
```

### 4. 開啟網站
直接開啟 `index.html` 檔案即可預覽網站

## 專案結構
```
luhui/
├── src/
│   └── input.css           # Tailwind CSS 輸入檔案
├── dist/
│   └── output.css          # 編譯後的 CSS 檔案
├── images/                 # 圖片資源目錄
│   ├── hero.webp           # Hero 背景圖片
│   ├── hero.avif           # Hero 背景圖片 (AVIF)
│   ├── room-dominica.webp  # 多明尼加二人房
│   ├── room-arizona.webp   # 亞歷桑那VIP四人房
│   └── room-grande.webp    # 格蘭德河谷四人房
├── index.html              # 首頁
├── tailwind.config.js      # Tailwind 配置
├── package.json            # 專案配置
└── README.md               # 說明文件
```

## 圖片需求

請準備以下圖片並放置於 `images/` 資料夾：

### 必要圖片
- `hero.webp` / `hero.avif` - Hero 背景圖片 (1920x1080)
- `room-dominica.webp` - 多明尼加二人房 (400x300)
- `room-arizona.webp` - 亞歷桑那VIP四人房 (400x300)  
- `room-grande.webp` - 格蘭德河谷四人房 (400x300)

### 圖片最佳化建議
- 主要格式：WebP (相容性) + AVIF (最佳壓縮)
- Hero 圖片：1920x1080px，檔案大小 < 200KB
- 房型圖片：400x300px，檔案大小 < 50KB
- 添加適當的 alt 標籤以改善 SEO

## 配色系統

### 主色調
- `#F2F2F2` - 溫潤白 (primary-100)
- `#B0B0B0` - 工業灰 (primary-400) 
- `#4A4A4A` - 深灰鋼 (primary-700)

### 輔助色
- `#FF7043` - 溫暖橘 (accent-orange)
- `#3E8EDE` - 天空藍 (accent-blue)
- `#8B4513` - 原木色 (accent-wood)

## 聯絡資訊
- **地址**: 宜蘭縣五結鄉三吉中路52巷15弄26號
- **電話**: 0900-776-585
- **Line**: @nfu4410b
- **WhatsApp**: 0912-590-321
- **合法民宿編號**: No.1612

## 授權
© 2025 蘆薈Villa Aloe Villa. All rights reserved. 