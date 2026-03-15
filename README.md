# 寻梦星球 - React 应用

移动端 React 应用

## 📱 项目概述

这是一个名为"寻梦星球"的移动端应用界面。

## 🚀 功能特性

- ✅ iOS 风格状态栏（时间、信号、WiFi、电池）
- ✅ 底部导航栏（创作、寻梦、我的）
- ✅ 卡片式内容展示
- ✅ 四种等级卡片（SS/S/A/B级）
- ✅ 响应式移动端设计
- ✅ TypeScript + React 18
- ✅ Vite 构建工具

## 📁 项目结构

```
dream-planet/
├── index.html          # HTML 入口文件
├── package.json         # 项目依赖配置
├── tsconfig.json        # TypeScript 配置
├── vite.config.ts       # Vite 构建配置
├── src/
│   ├── App.tsx         # 主 React 组件
│   ├── App.css         # 样式文件
│   └── main.tsx        # 应用入口
└── README.md           # 项目说明
```

## 🛠️ 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式**: CSS3 (Flexbox 布局)
- **图标**: SVG 内联图标
- **代码规范**: ESLint + Prettier (建议)

## 📦 安装运行

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview
```

## 📱 界面组件

### 1. 状态栏组件 (StatusBar)
- 显示时间和系统图标
- iOS 风格刘海设计
- 信号、WiFi、电池指示器

### 2. 底部导航栏 (BottomNavBar)
- 三个导航项：创作、寻梦、我的
- 当前选中状态高亮
- 图标 + 文字组合

### 3. 卡片组件 (CardItem)
- 五种等级卡片：SS/S/A/B/未知
- 不同颜色标识不同等级
- 悬停和点击效果

### 4. 主内容区 (MainContent)
- 标题区域
- 卡片网格布局
- 滚动支持

## 🎯 设计亮点

1. **真实移动端尺寸**: 375x812px (iPhone X 系列尺寸)
2. **交互友好**: 符合 iOS 设计规范
4. **代码可维护**: 模块化组件设计
5. **性能优化**: 使用 Vite 快速构建

## 🔧 自定义配置

### 修改主题色
在 `src/App.css` 中修改 CSS 变量：

```css
:root {
  --primary-blue: #6caaf5;
  --text-primary: #333333;
  --background-light: #f5f6f8;
}
```

### 添加新卡片
在 `App.tsx` 的 `cardLevels` 数组中添加新条目：n
```typescript
const cardLevels = [
  // ... 现有卡片
  { level: 'NEW', color: '#your-color', text: '新卡片描述', width: 180 },
];
```

## 🐛 已知问题

- 图标使用了简化的 SVG 路径
- 需要手动配置 GitHub 连接器才能推送代码
- 建议在生产环境中添加更多错误处理

## 📄 许可证

本项目仅作为设计稿转代码的演示用途。

## 👥 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目。

---

**生成时间**: 2026-03-15