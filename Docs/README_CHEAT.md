# README Markdown Cheat Sheet 📚

A complete guide to writing professional README files with Markdown - from absolute beginner to advanced techniques.

## Table of Contents

- [Basic Syntax](#basic-syntax)
- [Headers & Structure](#headers--structure)
- [Text Formatting](#text-formatting)
- [Lists](#lists)
- [Links & Images](#links--images)
- [Code Blocks](#code-blocks)
- [Tables](#tables)
- [Advanced Features](#advanced-features)
- [Best Practices](#best-practices)
- [Examples & Templates](#examples--templates)

---

## Basic Syntax

### Headers & Structure

```markdown
# H1 - Main Title (use only once)

## H2 - Section Headers

### H3 - Subsections

#### H4 - Minor Headers

##### H5 - Small Headers

###### H6 - Tiny Headers
```

**Pro Tip:** Use only one H1 per document. Structure your README like a book outline.

### Text Formatting

```markdown
**Bold text** or **Bold text**
_Italic text_ or _Italic text_
**_Bold and italic_** or **_Bold and italic_**
~~Strikethrough text~~
`Inline code` with backticks
```

**Result:**

- **Bold text** or **Bold text**
- _Italic text_ or _Italic text_
- **_Bold and italic_** or **_Bold and italic_**
- ~~Strikethrough text~~
- `Inline code` with backticks

---

## Lists

### Unordered Lists

```markdown
- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2
- Item 3

* Alternative bullet

- Another alternative
```

### Ordered Lists

```markdown
1. First item
2. Second item
   1. Nested numbered item
   2. Another nested item
3. Third item
```

### Task Lists (GitHub)

```markdown
- [x] Completed task
- [ ] Incomplete task
- [x] Another completed task
```

---

## Links & Images

### Links

```markdown
[Link text](https://example.com)
[Link with title](https://example.com 'Title text')
[Relative link](./docs/README.md)
[Email link](mailto:user@example.com)
[Anchor link](#section-name)
```

### Images

```markdown
![Alt text](image-url.jpg)
![Alt text](image-url.jpg 'Title text')
![Alt text](./images/logo.png)
```

### Reference-style Links

```markdown
[Link text][reference]
[Another link][reference2]

[reference]: https://example.com
[reference2]: https://another-site.com 'Optional title'
```

---

## Code Blocks

### Inline Code

```markdown
Use `console.log()` to debug your code.
```

### Code Blocks with Language

````markdown
```javascript
function greet(name) {
  console.log(`Hello, ${name}!`)
}
```

```python
def greet(name):
    print(f"Hello, {name}!")
```

```bash
npm install
npm run dev
```
````

### Code Blocks with Line Numbers

````markdown
```javascript:1:5:src/app.js
function greet(name) {
  console.log(`Hello, ${name}!`);
  return true;
}
```
````

---

## Tables

### Basic Table

```markdown
| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Row 1    | Data 1   | Data 2   |
| Row 2    | Data 3   | Data 4   |
```

### Aligned Table

```markdown
| Left Aligned | Center Aligned | Right Aligned |
| :----------- | :------------: | ------------: |
| Left         |     Center     |         Right |
| More left    |  More center   |    More right |
```

### Table with Emojis

```markdown
| Feature  | Status | Description                |
| -------- | ------ | -------------------------- |
| Auth     | ✅     | Google OAuth + Magic Links |
| Database | ✅     | MongoDB with Prisma        |
| UI       | 🚧     | In Progress                |
| Tests    | ❌     | Not Started                |
```

---

## Advanced Features

### Blockquotes

```markdown
> This is a blockquote
> It can span multiple lines
>
> > Nested blockquote
>
> Regular text after blockquote
```

### Horizontal Rules

```markdown
---

---

---
```

### Line Breaks

```markdown
Line 1
Line 2

Paragraph break (empty line)

Line 3<br>
Line 4 (forced break)
```

### HTML in Markdown

```markdown
<details>
<summary>Click to expand</summary>

Hidden content here!

</details>

<kbd>Ctrl</kbd> + <kbd>C</kbd>

<div align="center">
  <img src="logo.png" alt="Logo" width="200">
</div>
```

---

## Best Practices

### 1. Structure Your README

```markdown
# Project Name

Brief description

## ✨ Features

- Feature 1
- Feature 2

## 🚀 Quick Start

1. Install dependencies
2. Configure environment
3. Run the project

## 📖 Documentation

- [Setup Guide](./docs/setup.md)
- [API Reference](./docs/api.md)

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

## 📄 License

MIT License
```

### 2. Use Emojis Wisely

```markdown
## ✨ Features

## 🚀 Quick Start

## 📖 Documentation

## 🛠️ Development

## 🤝 Contributing

## 📄 License

## 🐛 Issues

## 💡 Ideas
```

### 3. Badges (Shields.io)

```markdown
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)
![Coverage](https://img.shields.io/badge/coverage-85%25-yellow.svg)
```

### 4. Table of Contents

```markdown
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
```

---

## Examples & Templates

### Minimal README

````markdown
# Project Name

One-line description of what your project does.

## Installation

```bash
npm install project-name
```
````

## Usage

```javascript
import { ProjectName } from 'project-name'

const instance = new ProjectName()
```

## License

MIT

````

### Comprehensive README
```markdown
# 🚀 Project Name

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/user/repo)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/user/repo/actions)

> A modern, feature-rich application built with cutting-edge technologies.

## ✨ Features

- 🎯 **Feature 1**: Description of what it does
- 🚀 **Feature 2**: Another cool feature
- 🔒 **Security**: Built-in security features
- 📱 **Responsive**: Works on all devices

## 🖼️ Screenshots

| Desktop | Mobile |
|---------|--------|
| ![Desktop](screenshots/desktop.png) | ![Mobile](screenshots/mobile.png) |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/user/repo.git
   cd repo
````

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. **Run the application**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Documentation

- [Getting Started](./docs/getting-started.md)
- [API Reference](./docs/api.md)
- [Deployment Guide](./docs/deployment.md)
- [Contributing Guide](./CONTRIBUTING.md)

## 🛠️ Development

### Project Structure

```
src/
├── components/     # React components
├── pages/         # Next.js pages
├── styles/        # CSS files
├── utils/         # Utility functions
└── types/         # TypeScript types
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vercel](https://vercel.com/) - Deployment platform

## 📞 Support

If you have any questions or need help, please:

- Open an [issue](https://github.com/user/repo/issues)
- Contact us at [email@example.com](mailto:email@example.com)

---

<div align="center">
  Made with ❤️ by [Your Name](https://github.com/yourusername)
</div>
```

---

## Pro Tips 💡

1. **Keep it updated** - Update your README when you add new features
2. **Use consistent formatting** - Stick to one style throughout
3. **Add visual elements** - Screenshots, GIFs, and diagrams help
4. **Write for your audience** - Technical users vs. beginners
5. **Test your links** - Make sure all links work
6. **Use a README generator** - Tools like [readme.so](https://readme.so) can help
7. **Version control** - Track README changes in git
8. **Mobile-friendly** - Test how it looks on mobile devices

---

## Tools & Resources

- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)
- [Shields.io](https://shields.io/) - Badge generator
- [readme.so](https://readme.so/) - README generator
- [Mermaid](https://mermaid-js.github.io/) - Diagrams in Markdown

---

**Happy Writing! 🎉**

Remember: A good README is like a good first impression - it can make or break your project's success!
