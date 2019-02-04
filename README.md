# Zehner Layout Demo

---

__Zehner Layout Demo__ is a plain landing page with styles completed according to the design prototype.
This project does not use any frameworks. The only preprocessing step is the compilation from `.less` to `.css` files.
Build files are located in the `./dist/`  directory and can be ran as is.

---

__Live URL:__ [http://zehner-demo.kseniacodes.com/](http://zehner-demo.kseniacodes.com/)

---

## Views

* Landing Page Screenshot:

![Main screen][main_screen]

[main_screen]: https://github.com/kseniacold/zehner-layout-demo/blob/master/docs/main-screen.png?raw=true "Zehner Layout Demo Screen"

---

## Getting Started

### Prerequisites

You will need the following installed:

* [npm, nodejs v.10.xx](https://nodejs.org/en/)

### To install the project:

1. `git clone https://github.com/kseniacold/zehner-layout-demo`

2. In the project directory: `npm install `

---

## Main Scripts

In the project directory, you can run:

#### `npm run start`

Builds the landing page in the `./dist/` directory and serves in on the port `5000`<br>

Open __http://localhost:5000__ to view it in the browser.

#### `npm run serve`

Serves the landing page locally on __http://localhost:5000__

#### `npm run build`

Compiles `.less` to `.css` files. Copies necessary files to the `./dist/` directory


---

## Project Structure & Layout

* Project naming and styling principles adhere to [BEM methodology](https://en.bem.info/methodology/).
* CSS selector in `index.html` file are formed to describe __blocks__, __elements__ & __modifiers__.
* Each __block__ has it's own folder in `./src/common.blocks` that provides modularity for stylesheets and allows easy refactoring for `React.js` components if needed.
* Other stylesheets include `./src/styles/declarations.less` - provide commons variables & mixins, `./src/styles/commons.less` - provide site-wide styles, `./src/styles/reset.less` - provide base stylesheet for reseting some __css__ rules. 

---

## Notes

* __DINPro__ font is replaced with [PT Sans Google Font](https://fonts.google.com/specimen/PT+Sans).
* __Units__: I prefer using one base font size for `<body></body>` element and use relative units for all other elements. I use `less mixins` as functions for easy conversion. Example givien in `./src/common.blocks/menu/menu.less`. In this layout demo most elements use `px` units for simplicity.  
* __Background Images__: In this layout demo background images are not productions quality. For simplicity I extracted flatten background images from the design prototype. For production, either larger background images should be used or images should be saved as `.png` al overlayed on the colored background.  
* __Prefixes & Minification__: For production it would be better to minify all the scripts and stylesheet and add automatically broswer prefixes. Here, for simplicity, basic `less` mixin arte used for prefixing.  

<br>
<br>

__author__ [Ksenia  Koldaeva](https://kseniacodes.com)
