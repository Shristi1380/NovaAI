# NovaAI 🌌 - Premium AI Assistant

A modern, production-ready AI chatbot built with React and OpenAI, featuring a beautiful purple-blue gradient theme, glassmorphic design, and premium user experience.

**Transformed from a basic student project into a polished SaaS-ready product.**

## 🎨 Features

### Visual Design
- **Premium Purple-Blue Gradient Theme**: Modern aesthetic with smooth transitions
- **Glassmorphism Effects**: Frosted glass backgrounds with backdrop blur
- **Smooth Animations**: All interactions feature fluid, responsive animations
- **Responsive Design**: Perfect on desktop, tablet, and mobile devices
- **Dark Mode**: Eye-friendly dark theme optimized for extended use

### User Experience
- ✨ **Welcome Screen**: Beautiful introduction with 4 AI-powered suggestion cards
- 💬 **Chat Interface**: Clean, modern message bubbles with avatars
- ⌨️ **Keyboard Support**: Press Enter to send messages
- 🎯 **Auto-Scroll**: Automatically jumps to the latest message
- ✏️ **Typing Indicator**: Visual feedback while AI is responding
- 📋 **Copy Button**: Easy message copying with hover reveal
- 🔄 **Chat History**: View and manage previous conversations
- 📱 **Mobile Optimized**: Fully responsive interface

### Technical
- **Modern React**: Latest React 19 with hooks and context
- **Markdown Support**: Full markdown rendering with syntax highlighting
- **Code Syntax Highlighting**: Beautiful code blocks with language detection
- **State Management**: Context API for clean data flow
- **Optimized Performance**: Smooth animations and efficient rendering

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Frontend setup
cd Frontend
npm install
npm run dev

# Backend should be running on http://localhost:8080
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
NovaAI-main/
├── Frontend/
│   ├── src/
│   │   ├── App.jsx - Main app component
│   │   ├── Chat.jsx - Chat display with welcome screen
│   │   ├── ChatWindow.jsx - Input area and controls
│   │   ├── Sidebar.jsx - Chat history navigation
│   │   ├── WelcomeScreen.jsx - Beautiful welcome experience
│   │   ├── MessageBubble.jsx - Reusable message component
│   │   ├── MyContext.jsx - Global state management
│   │   └── [CSS files] - Modern styling
│   ├── index.html
│   └── package.json
├── Backend/
│   ├── server.js
│   ├── routes/chat.js
│   ├── models/Thread.js
│   └── utils/openai.js
├── NovaAI_TRANSFORMATION.md - Detailed transformation docs
└── SETUP_GUIDE.md - Setup and deployment guide
```

## 🎯 Key Improvements Over Original

| Feature | Before | After |
|---------|--------|-------|
| **Design** | Basic gray theme | Premium purple-blue gradient |
| **Welcome** | Plain text | Interactive suggestion cards |
| **Messages** | Plain text | Styled bubbles with avatars |
| **Input** | Basic text box | Glassmorphic with gradient button |
| **Animations** | None | Smooth transitions throughout |
| **Responsiveness** | Limited | Mobile-first design |
| **Visual Feedback** | Minimal | Comprehensive interaction states |

## 🛠️ Technologies

- **Frontend**: React 19, Vite, CSS3
- **Backend**: Node.js, Express, OpenAI API
- **Libraries**: 
  - react-markdown (markdown rendering)
  - highlight.js (code syntax highlighting)
  - react-spinners (loading animations)
  - uuid (chat ID generation)

## 📱 Responsive Breakpoints

- **Desktop** (1024px+): Full layout with sidebar
- **Tablet** (769-1023px): Optimized spacing
- **Mobile** (480-768px): Compact touch-friendly layout
- **Small Mobile** (<480px): Maximum space efficiency

## 🎨 Color Palette

```
Primary Purple:   #7C3AED
Secondary Purple: #A855F7
Primary Blue:     #3B82F6
Dark Background:  #0F172A
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Netlify
```bash
npm run build
# Drag dist/ to Netlify
```

### Traditional Server
```bash
npm run build
# Copy dist/ to server
```

## 📚 Documentation

- **[SHIROGPT_TRANSFORMATION.md](./NovaAI_TRANSFORMATION.md)** - Complete transformation details
- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Setup, customization, and deployment guide

## 🎓 Learning Resources

This project demonstrates:
- Modern React patterns (hooks, context API)
- Advanced CSS techniques (gradients, animations, glassmorphism)
- Responsive design principles
- Component architecture
- State management
- Event handling and keyboard support

## 💡 Future Enhancements

- [ ] Chat search with time-based grouping
- [ ] Chat export (PDF/Markdown)
- [ ] Voice input/output
- [ ] Dark/Light mode toggle
- [ ] Image upload and vision support
- [ ] Multi-user support
- [ ] Analytics dashboard
- [ ] Custom themes

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your improvements
4. Submit a pull request

## 📝 License

This project builds upon the original SigmaGPT/NovaAI project and has been completely transformed and enhanced.

## 🎉 Credits

**Original Project**: SigmaGPT / NovaAI
**Modern Redesign & Enhancement**: NovaAI Transformation
**Built by**: Shristi 💜

---

## 🌟 Showcase Your Skills

This project is perfect for your software engineering portfolio, demonstrating:
- ✅ Full-stack development
- ✅ UI/UX design principles
- ✅ Modern React practices
- ✅ Advanced CSS techniques
- ✅ Responsive design expertise
- ✅ Component architecture
- ✅ State management
- ✅ Attention to detail

---

**Experience the premium AI chat interface with NovaAI! 🚀✨**
