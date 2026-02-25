# Calculator App

A fully functional calculator built with HTML, CSS, and JavaScript as part of The Odin Project￼ curriculum.

This project demonstrates core JavaScript logic, DOM manipulation, state management, and user interaction handling without relying on external libraries.

---

## 🔗 Live Demo

👉 Preview the project here:  
[https://ramicoder.github.io/CalculatorJS-top/](https://ramicoder.github.io/CalculatorJS-top/)

---

## 📌 Project Overview

This calculator performs basic arithmetic operations and was built from scratch using vanilla JavaScript.

The primary focus of this project was:  
- Practicing DOM manipulation  
- Managing application state  
- Handling user input dynamically  
- Structuring clean, readable logic  

---

## ⚙️ Features

- ➕ Addition  
- ➖ Subtraction  
- ✖️ Multiplication  
- ➗ Division (returns "Undefined" when dividing by 0)  
- 🧮 Sequential operation handling  
- 🔄 Clear (AC) functionality  
- ⌫ Backspace support  
- 🔢 Decimal input (single decimal per number)  
- 🔊 Click sound feedback on every button press  
- 📱 Clean UI built with Flexbox  

---

## 🧠 How It Works

The calculator processes one operation at a time.  

Instead of parsing full mathematical expressions, it follows this logic:

1. Store first operand (`a`)  
2. Store operator (`operation`)  
3. Store second operand (`b`)  
4. Execute operation via an `operate()` function  
5. Store result and allow chaining of operations  

---

## 🏗️ Technologies Used

- **HTML5** – Structure  
- **CSS3 (Flexbox)** – Layout & Styling  
- **JavaScript (ES6)** – Logic & Interactivity  
- **Git & GitHub Pages** – Version control & deployment

---

## 📁 Project Structure

```text
├── index.html
├── style.css
├── script.js
├── click.mp3
```
## 🚧 Current Limitations

This project was intentionally scoped for learning fundamentals. Current limitations include:

- ❌ **No order-of-operations (PEMDAS) support**  
- Operations are evaluated **sequentially (one at a time)**  
- ❌ **No keyboard input support**  
- ❌ **No responsive media queries for smaller screens**  
- ❌ **No advanced expression parsing**

---

## 🔮 Future Improvements

Planned upgrades could include:

- Implementing **full expression parsing (PEMDAS)**  
- Adding **keyboard input support**  
- Adding **responsive design** with media queries  
- Improving **UI polish and animations**  
- Refactoring logic into a **class-based structure**  
- Adding **unit tests**

---

## 👨‍💻 What I Learned

Through this project, I strengthened my understanding of:

- Managing **state** in JavaScript applications  
- Separating **logic from UI updates**   
- Using **event listeners** and dynamic DOM updates  
- Debugging **sequential user input flows**  

---

## 📌 Author

**Rami Daood**  
Created as part of **The Odin Project** curriculum.
