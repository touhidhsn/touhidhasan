/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/theme.js":
/*!***************************!*\
  !*** ./contexts/theme.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeProvider\": () => (/* binding */ ThemeProvider),\n/* harmony export */   \"ThemeContext\": () => (/* binding */ ThemeContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst ThemeProvider = ({ children  })=>{\n    const { 0: themeName , 1: setThemeName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('light');\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');\n        setThemeName(localStorage.getItem('themeName') || (darkMediaQuery.matches ? 'dark' : 'light'));\n    }, []);\n    const toggleTheme = ()=>{\n        const name = themeName === 'dark' ? 'light' : 'dark';\n        localStorage.setItem('themeName', name);\n        setThemeName(name);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: [\n            {\n                themeName,\n                toggleTheme\n            }\n        ],\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/touhid/Desktop/react/touhidhasan/contexts/theme.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined));\n};\nThemeProvider.propTypes = {\n    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired)\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy90aGVtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDeEI7QUFFbEMsS0FBSyxDQUFDSSxZQUFZLGlCQUFHSixvREFBYTtBQUVsQyxLQUFLLENBQUNLLGFBQWEsSUFBSSxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUN2QyxLQUFLLE1BQUVDLFNBQVMsTUFBRUMsWUFBWSxNQUFJTiwrQ0FBUSxDQUFDLENBQU87SUFFbERELGdEQUFTLEtBQU8sQ0FBQztRQUNmLEtBQUssQ0FBQ1EsY0FBYyxHQUFHQyxNQUFNLENBQUNDLFVBQVUsQ0FBQyxDQUE4QjtRQUN2RUgsWUFBWSxDQUNWSSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFXLGdCQUM3QkosY0FBYyxDQUFDSyxPQUFPLEdBQUcsQ0FBTSxRQUFHLENBQU87SUFFaEQsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLEtBQUssQ0FBQ0MsV0FBVyxPQUFTLENBQUM7UUFDekIsS0FBSyxDQUFDQyxJQUFJLEdBQUdULFNBQVMsS0FBSyxDQUFNLFFBQUcsQ0FBTyxTQUFHLENBQU07UUFDcERLLFlBQVksQ0FBQ0ssT0FBTyxDQUFDLENBQVcsWUFBRUQsSUFBSTtRQUN0Q1IsWUFBWSxDQUFDUSxJQUFJO0lBQ25CLENBQUM7SUFFRCxNQUFNLDZFQUNIWixZQUFZLENBQUNjLFFBQVE7UUFBQ0MsS0FBSyxFQUFFLENBQUM7WUFBQSxDQUFDO2dCQUFDWixTQUFTO2dCQUFFUSxXQUFXO1lBQUMsQ0FBQztRQUFBLENBQUM7a0JBQ3ZEVCxRQUFROzs7Ozs7QUFHZixDQUFDO0FBRURELGFBQWEsQ0FBQ2UsU0FBUyxHQUFHLENBQUM7SUFDekJkLFFBQVEsRUFBRUgsbUVBQXlCO0FBQ3JDLENBQUM7QUFFbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFuZm9saW8vLi9jb250ZXh0cy90aGVtZS5qcz9jOGJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgVGhlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXG5cbmNvbnN0IFRoZW1lUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFt0aGVtZU5hbWUsIHNldFRoZW1lTmFtZV0gPSB1c2VTdGF0ZSgnbGlnaHQnKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGFya01lZGlhUXVlcnkgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpXG4gICAgc2V0VGhlbWVOYW1lKFxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lTmFtZScpIHx8XG4gICAgICAgIChkYXJrTWVkaWFRdWVyeS5tYXRjaGVzID8gJ2RhcmsnIDogJ2xpZ2h0JylcbiAgICApXG4gIH0sIFtdKVxuXG4gIGNvbnN0IHRvZ2dsZVRoZW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSB0aGVtZU5hbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyaydcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWVOYW1lJywgbmFtZSlcbiAgICBzZXRUaGVtZU5hbWUobmFtZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3sgdGhlbWVOYW1lLCB0b2dnbGVUaGVtZSB9XX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuVGhlbWVQcm92aWRlci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgeyBUaGVtZVByb3ZpZGVyLCBUaGVtZUNvbnRleHQgfVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb3BUeXBlcyIsIlRoZW1lQ29udGV4dCIsIlRoZW1lUHJvdmlkZXIiLCJjaGlsZHJlbiIsInRoZW1lTmFtZSIsInNldFRoZW1lTmFtZSIsImRhcmtNZWRpYVF1ZXJ5Iiwid2luZG93IiwibWF0Y2hNZWRpYSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJtYXRjaGVzIiwidG9nZ2xlVGhlbWUiLCJuYW1lIiwic2V0SXRlbSIsIlByb3ZpZGVyIiwidmFsdWUiLCJwcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/theme.js\n");

/***/ }),

/***/ "./data/portfolio.js":
/*!***************************!*\
  !*** ./data/portfolio.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"about\": () => (/* binding */ about),\n/* harmony export */   \"projects\": () => (/* binding */ projects),\n/* harmony export */   \"skills\": () => (/* binding */ skills),\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nconst about = {\n    // each of these properties is optional - they can be left empty or deleted\n    // each element in the `description` array will be treated as a separate paragraph\n    name: 'Touhid Hasan',\n    greetingEmoji: '👋',\n    role: 'Software Engineer',\n    company: 'Acme Labs',\n    description: [\n        'I am a skilled professional with expertise in web development and graphic design. My proficiency lies in seamlessly combining both disciplines to create visually appealing and functional digital experiences. With a strong foundation in web development, I bring a versatile skill set to deliver creative and technically sound solutions.', \n    ],\n    resume: 'https://example.com',\n    social: {\n        github: 'https://github.com',\n        linkedin: 'https://linkedin.com'\n    }\n};\nconst projects = [\n    // projects can be added and removed\n    // if the array is left empty, the \"Projects\" section won't render\n    // each element in each `description` array will be treated as a separate paragraph\n    {\n        thumbnail: 'images/placeholder-image.jpeg',\n        name: 'Project 1',\n        description: [\n            'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam', \n        ],\n        stack: [\n            'SASS',\n            'TypeScript',\n            'React'\n        ],\n        sourceCode: 'https://github.com',\n        livePreview: 'https://example.com'\n    },\n    {\n        thumbnail: 'images/placeholder-image.jpeg',\n        name: 'Project 2',\n        description: [\n            'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam', \n        ],\n        stack: [\n            'SASS',\n            'TypeScript',\n            'React'\n        ],\n        sourceCode: 'https://github.com',\n        livePreview: 'https://example.com'\n    },\n    {\n        thumbnail: 'images/placeholder-image.jpeg',\n        name: 'Project 3',\n        description: [\n            'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam', \n        ],\n        stack: [\n            'SASS',\n            'TypeScript',\n            'React'\n        ],\n        sourceCode: 'https://github.com',\n        livePreview: 'https://example.com'\n    },\n    {\n        thumbnail: 'images/placeholder-image.jpeg',\n        name: 'Project 4',\n        description: [\n            'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam', \n        ],\n        stack: [\n            'SASS',\n            'TypeScript',\n            'React'\n        ],\n        sourceCode: 'https://github.com',\n        livePreview: 'https://example.com'\n    }, \n];\nconst skills = [\n    // skills can be added or removed\n    // if the array is left empty, the \"Skills\" section won't render\n    'HTML',\n    'CSS',\n    'JavaScript',\n    'TypeScript',\n    'React',\n    'Redux',\n    'SASS',\n    'Material UI',\n    'Git',\n    'CI/CD',\n    'Jest',\n    'Enzyme', \n];\nconst contact = {\n    // the `email` property is optional - it can be left empty or deleted\n    // if so, the \"Contact\" section won't render\n    email: 'johndoe@email.com'\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL3BvcnRmb2xpby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsS0FBSyxDQUFDQSxLQUFLLEdBQUcsQ0FBQztJQUNiLEVBQTJFO0lBQzNFLEVBQWtGO0lBQ2xGQyxJQUFJLEVBQUUsQ0FBYztJQUNwQkMsYUFBYSxFQUFFLENBQUc7SUFDbEJDLElBQUksRUFBRSxDQUFtQjtJQUN6QkMsT0FBTyxFQUFFLENBQVc7SUFDcEJDLFdBQVcsRUFBRSxDQUFDO1FBQ1osQ0FBaVY7SUFDblYsQ0FBQztJQUNEQyxNQUFNLEVBQUUsQ0FBcUI7SUFDN0JDLE1BQU0sRUFBRSxDQUFDO1FBQ1BDLE1BQU0sRUFBRSxDQUFvQjtRQUM1QkMsUUFBUSxFQUFFLENBQXNCO0lBQ2xDLENBQUM7QUFDSCxDQUFDO0FBRUQsS0FBSyxDQUFDQyxRQUFRLEdBQUcsQ0FBQztJQUNoQixFQUFvQztJQUNwQyxFQUFrRTtJQUNsRSxFQUFtRjtJQUNuRixDQUFDO1FBQ0NDLFNBQVMsRUFBRSxDQUErQjtRQUMxQ1YsSUFBSSxFQUFFLENBQVc7UUFDakJJLFdBQVcsRUFBRSxDQUFDO1lBQ1osQ0FBcUc7UUFDdkcsQ0FBQztRQUNETyxLQUFLLEVBQUUsQ0FBQztZQUFBLENBQU07WUFBRSxDQUFZO1lBQUUsQ0FBTztRQUFBLENBQUM7UUFDdENDLFVBQVUsRUFBRSxDQUFvQjtRQUNoQ0MsV0FBVyxFQUFFLENBQXFCO0lBQ3BDLENBQUM7SUFDRCxDQUFDO1FBQ0NILFNBQVMsRUFBRSxDQUErQjtRQUMxQ1YsSUFBSSxFQUFFLENBQVc7UUFDakJJLFdBQVcsRUFBRSxDQUFDO1lBQ1osQ0FBcUc7UUFDdkcsQ0FBQztRQUNETyxLQUFLLEVBQUUsQ0FBQztZQUFBLENBQU07WUFBRSxDQUFZO1lBQUUsQ0FBTztRQUFBLENBQUM7UUFDdENDLFVBQVUsRUFBRSxDQUFvQjtRQUNoQ0MsV0FBVyxFQUFFLENBQXFCO0lBQ3BDLENBQUM7SUFDRCxDQUFDO1FBQ0NILFNBQVMsRUFBRSxDQUErQjtRQUMxQ1YsSUFBSSxFQUFFLENBQVc7UUFDakJJLFdBQVcsRUFBRSxDQUFDO1lBQ1osQ0FBcUc7UUFDdkcsQ0FBQztRQUNETyxLQUFLLEVBQUUsQ0FBQztZQUFBLENBQU07WUFBRSxDQUFZO1lBQUUsQ0FBTztRQUFBLENBQUM7UUFDdENDLFVBQVUsRUFBRSxDQUFvQjtRQUNoQ0MsV0FBVyxFQUFFLENBQXFCO0lBQ3BDLENBQUM7SUFDRCxDQUFDO1FBQ0NILFNBQVMsRUFBRSxDQUErQjtRQUMxQ1YsSUFBSSxFQUFFLENBQVc7UUFDakJJLFdBQVcsRUFBRSxDQUFDO1lBQ1osQ0FBcUc7UUFDdkcsQ0FBQztRQUNETyxLQUFLLEVBQUUsQ0FBQztZQUFBLENBQU07WUFBRSxDQUFZO1lBQUUsQ0FBTztRQUFBLENBQUM7UUFDdENDLFVBQVUsRUFBRSxDQUFvQjtRQUNoQ0MsV0FBVyxFQUFFLENBQXFCO0lBQ3BDLENBQUM7QUFDSCxDQUFDO0FBRUQsS0FBSyxDQUFDQyxNQUFNLEdBQUcsQ0FBQztJQUNkLEVBQWlDO0lBQ2pDLEVBQWdFO0lBQ2hFLENBQU07SUFDTixDQUFLO0lBQ0wsQ0FBWTtJQUNaLENBQVk7SUFDWixDQUFPO0lBQ1AsQ0FBTztJQUNQLENBQU07SUFDTixDQUFhO0lBQ2IsQ0FBSztJQUNMLENBQU87SUFDUCxDQUFNO0lBQ04sQ0FBUTtBQUNWLENBQUM7QUFFRCxLQUFLLENBQUNDLE9BQU8sR0FBRyxDQUFDO0lBQ2YsRUFBcUU7SUFDckUsRUFBNEM7SUFDNUNDLEtBQUssRUFBRSxDQUFtQjtBQUM1QixDQUFDO0FBRXdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhbmZvbGlvLy4vZGF0YS9wb3J0Zm9saW8uanM/ZDhiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhYm91dCA9IHtcbiAgLy8gZWFjaCBvZiB0aGVzZSBwcm9wZXJ0aWVzIGlzIG9wdGlvbmFsIC0gdGhleSBjYW4gYmUgbGVmdCBlbXB0eSBvciBkZWxldGVkXG4gIC8vIGVhY2ggZWxlbWVudCBpbiB0aGUgYGRlc2NyaXB0aW9uYCBhcnJheSB3aWxsIGJlIHRyZWF0ZWQgYXMgYSBzZXBhcmF0ZSBwYXJhZ3JhcGhcbiAgbmFtZTogJ1RvdWhpZCBIYXNhbicsXG4gIGdyZWV0aW5nRW1vamk6ICfwn5GLJyxcbiAgcm9sZTogJ1NvZnR3YXJlIEVuZ2luZWVyJyxcbiAgY29tcGFueTogJ0FjbWUgTGFicycsXG4gIGRlc2NyaXB0aW9uOiBbXG4gICAgJ0kgYW0gYSBza2lsbGVkIHByb2Zlc3Npb25hbCB3aXRoIGV4cGVydGlzZSBpbiB3ZWIgZGV2ZWxvcG1lbnQgYW5kIGdyYXBoaWMgZGVzaWduLiBNeSBwcm9maWNpZW5jeSBsaWVzIGluIHNlYW1sZXNzbHkgY29tYmluaW5nIGJvdGggZGlzY2lwbGluZXMgdG8gY3JlYXRlIHZpc3VhbGx5IGFwcGVhbGluZyBhbmQgZnVuY3Rpb25hbCBkaWdpdGFsIGV4cGVyaWVuY2VzLiBXaXRoIGEgc3Ryb25nIGZvdW5kYXRpb24gaW4gd2ViIGRldmVsb3BtZW50LCBJIGJyaW5nIGEgdmVyc2F0aWxlIHNraWxsIHNldCB0byBkZWxpdmVyIGNyZWF0aXZlIGFuZCB0ZWNobmljYWxseSBzb3VuZCBzb2x1dGlvbnMuJyxcbiAgXSxcbiAgcmVzdW1lOiAnaHR0cHM6Ly9leGFtcGxlLmNvbScsXG4gIHNvY2lhbDoge1xuICAgIGdpdGh1YjogJ2h0dHBzOi8vZ2l0aHViLmNvbScsXG4gICAgbGlua2VkaW46ICdodHRwczovL2xpbmtlZGluLmNvbScsXG4gIH0sXG59XG5cbmNvbnN0IHByb2plY3RzID0gW1xuICAvLyBwcm9qZWN0cyBjYW4gYmUgYWRkZWQgYW5kIHJlbW92ZWRcbiAgLy8gaWYgdGhlIGFycmF5IGlzIGxlZnQgZW1wdHksIHRoZSBcIlByb2plY3RzXCIgc2VjdGlvbiB3b24ndCByZW5kZXJcbiAgLy8gZWFjaCBlbGVtZW50IGluIGVhY2ggYGRlc2NyaXB0aW9uYCBhcnJheSB3aWxsIGJlIHRyZWF0ZWQgYXMgYSBzZXBhcmF0ZSBwYXJhZ3JhcGhcbiAge1xuICAgIHRodW1ibmFpbDogJ2ltYWdlcy9wbGFjZWhvbGRlci1pbWFnZS5qcGVnJyxcbiAgICBuYW1lOiAnUHJvamVjdCAxJyxcbiAgICBkZXNjcmlwdGlvbjogW1xuICAgICAgJ0FtZXQgYXNwZXJpb3JlcyBldCBpbXBlZGl0IGFsaXF1YW0gY29uc2VjdGV0dXI/IFZvbHVwdGF0ZXMgc2VkIGEgbnVsbGEgaXBzYSBvZmZpY2lhIGV0IGVzc2UgYWxpcXVhbScsXG4gICAgXSxcbiAgICBzdGFjazogWydTQVNTJywgJ1R5cGVTY3JpcHQnLCAnUmVhY3QnXSxcbiAgICBzb3VyY2VDb2RlOiAnaHR0cHM6Ly9naXRodWIuY29tJyxcbiAgICBsaXZlUHJldmlldzogJ2h0dHBzOi8vZXhhbXBsZS5jb20nLFxuICB9LFxuICB7XG4gICAgdGh1bWJuYWlsOiAnaW1hZ2VzL3BsYWNlaG9sZGVyLWltYWdlLmpwZWcnLFxuICAgIG5hbWU6ICdQcm9qZWN0IDInLFxuICAgIGRlc2NyaXB0aW9uOiBbXG4gICAgICAnQW1ldCBhc3BlcmlvcmVzIGV0IGltcGVkaXQgYWxpcXVhbSBjb25zZWN0ZXR1cj8gVm9sdXB0YXRlcyBzZWQgYSBudWxsYSBpcHNhIG9mZmljaWEgZXQgZXNzZSBhbGlxdWFtJyxcbiAgICBdLFxuICAgIHN0YWNrOiBbJ1NBU1MnLCAnVHlwZVNjcmlwdCcsICdSZWFjdCddLFxuICAgIHNvdXJjZUNvZGU6ICdodHRwczovL2dpdGh1Yi5jb20nLFxuICAgIGxpdmVQcmV2aWV3OiAnaHR0cHM6Ly9leGFtcGxlLmNvbScsXG4gIH0sXG4gIHtcbiAgICB0aHVtYm5haWw6ICdpbWFnZXMvcGxhY2Vob2xkZXItaW1hZ2UuanBlZycsXG4gICAgbmFtZTogJ1Byb2plY3QgMycsXG4gICAgZGVzY3JpcHRpb246IFtcbiAgICAgICdBbWV0IGFzcGVyaW9yZXMgZXQgaW1wZWRpdCBhbGlxdWFtIGNvbnNlY3RldHVyPyBWb2x1cHRhdGVzIHNlZCBhIG51bGxhIGlwc2Egb2ZmaWNpYSBldCBlc3NlIGFsaXF1YW0nLFxuICAgIF0sXG4gICAgc3RhY2s6IFsnU0FTUycsICdUeXBlU2NyaXB0JywgJ1JlYWN0J10sXG4gICAgc291cmNlQ29kZTogJ2h0dHBzOi8vZ2l0aHViLmNvbScsXG4gICAgbGl2ZVByZXZpZXc6ICdodHRwczovL2V4YW1wbGUuY29tJyxcbiAgfSxcbiAge1xuICAgIHRodW1ibmFpbDogJ2ltYWdlcy9wbGFjZWhvbGRlci1pbWFnZS5qcGVnJyxcbiAgICBuYW1lOiAnUHJvamVjdCA0JyxcbiAgICBkZXNjcmlwdGlvbjogW1xuICAgICAgJ0FtZXQgYXNwZXJpb3JlcyBldCBpbXBlZGl0IGFsaXF1YW0gY29uc2VjdGV0dXI/IFZvbHVwdGF0ZXMgc2VkIGEgbnVsbGEgaXBzYSBvZmZpY2lhIGV0IGVzc2UgYWxpcXVhbScsXG4gICAgXSxcbiAgICBzdGFjazogWydTQVNTJywgJ1R5cGVTY3JpcHQnLCAnUmVhY3QnXSxcbiAgICBzb3VyY2VDb2RlOiAnaHR0cHM6Ly9naXRodWIuY29tJyxcbiAgICBsaXZlUHJldmlldzogJ2h0dHBzOi8vZXhhbXBsZS5jb20nLFxuICB9LFxuXVxuXG5jb25zdCBza2lsbHMgPSBbXG4gIC8vIHNraWxscyBjYW4gYmUgYWRkZWQgb3IgcmVtb3ZlZFxuICAvLyBpZiB0aGUgYXJyYXkgaXMgbGVmdCBlbXB0eSwgdGhlIFwiU2tpbGxzXCIgc2VjdGlvbiB3b24ndCByZW5kZXJcbiAgJ0hUTUwnLFxuICAnQ1NTJyxcbiAgJ0phdmFTY3JpcHQnLFxuICAnVHlwZVNjcmlwdCcsXG4gICdSZWFjdCcsXG4gICdSZWR1eCcsXG4gICdTQVNTJyxcbiAgJ01hdGVyaWFsIFVJJyxcbiAgJ0dpdCcsXG4gICdDSS9DRCcsXG4gICdKZXN0JyxcbiAgJ0VuenltZScsXG5dXG5cbmNvbnN0IGNvbnRhY3QgPSB7XG4gIC8vIHRoZSBgZW1haWxgIHByb3BlcnR5IGlzIG9wdGlvbmFsIC0gaXQgY2FuIGJlIGxlZnQgZW1wdHkgb3IgZGVsZXRlZFxuICAvLyBpZiBzbywgdGhlIFwiQ29udGFjdFwiIHNlY3Rpb24gd29uJ3QgcmVuZGVyXG4gIGVtYWlsOiAnam9obmRvZUBlbWFpbC5jb20nLFxufVxuXG5leHBvcnQgeyBhYm91dCwgcHJvamVjdHMsIHNraWxscywgY29udGFjdCB9XG4iXSwibmFtZXMiOlsiYWJvdXQiLCJuYW1lIiwiZ3JlZXRpbmdFbW9qaSIsInJvbGUiLCJjb21wYW55IiwiZGVzY3JpcHRpb24iLCJyZXN1bWUiLCJzb2NpYWwiLCJnaXRodWIiLCJsaW5rZWRpbiIsInByb2plY3RzIiwidGh1bWJuYWlsIiwic3RhY2siLCJzb3VyY2VDb2RlIiwibGl2ZVByZXZpZXciLCJza2lsbHMiLCJjb250YWN0IiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./data/portfolio.js\n");

/***/ }),

/***/ "./lib/google-analytics.js":
/*!*********************************!*\
  !*** ./lib/google-analytics.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ga_measurement_id\": () => (/* binding */ ga_measurement_id),\n/* harmony export */   \"pageview\": () => (/* binding */ pageview),\n/* harmony export */   \"event\": () => (/* binding */ event)\n/* harmony export */ });\nconst ga_measurement_id = process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID;\n// logs page views\nconst pageview = (url)=>{\n    window.gtag('config', ga_measurement_id, {\n        page_path: url\n    });\n};\n// logs specific events\nconst event = ({ action , params  })=>{\n    window.gtag('event', action, params);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ29vZ2xlLWFuYWx5dGljcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxLQUFLLENBQUNBLGlCQUFpQixHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsK0JBQStCO0FBRTVFLEVBQWtCO0FBQ1gsS0FBSyxDQUFDQyxRQUFRLElBQUlDLEdBQUcsR0FBSyxDQUFDO0lBQ2hDQyxNQUFNLENBQUNDLElBQUksQ0FBQyxDQUFRLFNBQUVQLGlCQUFpQixFQUFFLENBQUM7UUFDeENRLFNBQVMsRUFBRUgsR0FBRztJQUNoQixDQUFDO0FBQ0gsQ0FBQztBQUVELEVBQXVCO0FBQ2hCLEtBQUssQ0FBQ0ksS0FBSyxJQUFJLENBQUMsQ0FBQ0MsTUFBTSxHQUFFQyxNQUFNLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDNUNMLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLENBQU8sUUFBRUcsTUFBTSxFQUFFQyxNQUFNO0FBQ3JDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFuZm9saW8vLi9saWIvZ29vZ2xlLWFuYWx5dGljcy5qcz80ZmIzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnYV9tZWFzdXJlbWVudF9pZCA9IHByb2Nlc3MuZW52LkdPT0dMRV9BTkFMWVRJQ1NfTUVBU1VSRU1FTlRfSURcblxuLy8gbG9ncyBwYWdlIHZpZXdzXG5leHBvcnQgY29uc3QgcGFnZXZpZXcgPSAodXJsKSA9PiB7XG4gIHdpbmRvdy5ndGFnKCdjb25maWcnLCBnYV9tZWFzdXJlbWVudF9pZCwge1xuICAgIHBhZ2VfcGF0aDogdXJsLFxuICB9KVxufVxuXG4vLyBsb2dzIHNwZWNpZmljIGV2ZW50c1xuZXhwb3J0IGNvbnN0IGV2ZW50ID0gKHsgYWN0aW9uLCBwYXJhbXMgfSkgPT4ge1xuICB3aW5kb3cuZ3RhZygnZXZlbnQnLCBhY3Rpb24sIHBhcmFtcylcbn1cbiJdLCJuYW1lcyI6WyJnYV9tZWFzdXJlbWVudF9pZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQU5BTFlUSUNTX01FQVNVUkVNRU5UX0lEIiwicGFnZXZpZXciLCJ1cmwiLCJ3aW5kb3ciLCJndGFnIiwicGFnZV9wYXRoIiwiZXZlbnQiLCJhY3Rpb24iLCJwYXJhbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/google-analytics.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/portfolio */ \"./data/portfolio.js\");\n/* harmony import */ var _contexts_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/theme */ \"./contexts/theme.js\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/index.css */ \"./styles/index.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/App.css */ \"./styles/App.css\");\n/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_App_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_Header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Header.css */ \"./styles/Header.css\");\n/* harmony import */ var _styles_Header_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_Navbar_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Navbar.css */ \"./styles/Navbar.css\");\n/* harmony import */ var _styles_Navbar_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_About_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/About.css */ \"./styles/About.css\");\n/* harmony import */ var _styles_About_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_About_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_Projects_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Projects.css */ \"./styles/Projects.css\");\n/* harmony import */ var _styles_Projects_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Projects_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_ProjectCard_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/ProjectCard.css */ \"./styles/ProjectCard.css\");\n/* harmony import */ var _styles_ProjectCard_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_ProjectCard_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_Skills_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/Skills.css */ \"./styles/Skills.css\");\n/* harmony import */ var _styles_Skills_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Skills_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _styles_Contact_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/Contact.css */ \"./styles/Contact.css\");\n/* harmony import */ var _styles_Contact_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Contact_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _styles_ScrollToTop_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/ScrollToTop.css */ \"./styles/ScrollToTop.css\");\n/* harmony import */ var _styles_ScrollToTop_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_ScrollToTop_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _styles_Footer_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/Footer.css */ \"./styles/Footer.css\");\n/* harmony import */ var _styles_Footer_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_css__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! animate.css */ \"./node_modules/animate.css/animate.css\");\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _lib_google_analytics__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../lib/google-analytics */ \"./lib/google-analytics.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// google analytics\n\n\n\n// /google analytics\nfunction MyApp({ Component , pageProps  }) {\n    // google analytics\n    // will log page views on route change if new routes are added\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_17__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_16__.useEffect)(()=>{\n        if (!_lib_google_analytics__WEBPACK_IMPORTED_MODULE_18__.ga_measurement_id) return;\n        const handleRouteChange = (url)=>(0,_lib_google_analytics__WEBPACK_IMPORTED_MODULE_18__.pageview)(url)\n        ;\n        router.events.on('routeChangeComplete', handleRouteChange);\n        return ()=>router.events.off('routeChangeComplete', handleRouteChange)\n        ;\n    }, [\n        router.events\n    ]);\n    // /google analytics\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/touhid/Desktop/react/touhidhasan/pages/_app.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: _data_portfolio__WEBPACK_IMPORTED_MODULE_2__.about.name || 'Portfolio'\n                    }, void 0, false, {\n                        fileName: \"/Users/touhid/Desktop/react/touhidhasan/pages/_app.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/touhid/Desktop/react/touhidhasan/pages/_app.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_theme__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/touhid/Desktop/react/touhidhasan/pages/_app.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/touhid/Desktop/react/touhidhasan/pages/_app.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDYTtBQUNRO0FBQ3JCO0FBQ0Y7QUFDRztBQUNBO0FBQ0Q7QUFDRztBQUNHO0FBQ0w7QUFDQztBQUNJO0FBQ0w7QUFDVDtBQUVwQixFQUFtQjtBQUNjO0FBQ007QUFDOEI7QUFDckUsRUFBb0I7U0FFWE8sS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEMsRUFBbUI7SUFDbkIsRUFBOEQ7SUFDOUQsS0FBSyxDQUFDQyxNQUFNLEdBQUdOLHVEQUFTO0lBQ3hCRCxpREFBUyxLQUFPLENBQUM7UUFDZixFQUFFLEdBQUdFLHFFQUFpQixFQUFFLE1BQU07UUFDOUIsS0FBSyxDQUFDTSxpQkFBaUIsSUFBSUMsR0FBRyxHQUFLTixnRUFBUSxDQUFDTSxHQUFHOztRQUMvQ0YsTUFBTSxDQUFDRyxNQUFNLENBQUNDLEVBQUUsQ0FBQyxDQUFxQixzQkFBRUgsaUJBQWlCO1FBQ3pELE1BQU0sS0FBT0QsTUFBTSxDQUFDRyxNQUFNLENBQUNFLEdBQUcsQ0FBQyxDQUFxQixzQkFBRUosaUJBQWlCOztJQUN6RSxDQUFDLEVBQUUsQ0FBQ0Q7UUFBQUEsTUFBTSxDQUFDRyxNQUFNO0lBQUEsQ0FBQztJQUNsQixFQUFvQjtJQUVwQixNQUFNOzt3RkFFRGIsa0RBQUk7O2dHQUNGZ0IsQ0FBSTt3QkFBQ0MsSUFBSSxFQUFDLENBQVU7d0JBQUNDLE9BQU8sRUFBQyxDQUFxQzs7Ozs7O2dHQUNsRUMsQ0FBSztrQ0FBRWxCLHVEQUFVLElBQUksQ0FBVzs7Ozs7Ozs7Ozs7O3dGQUVsQ0MsMERBQWE7c0dBQ1hNLFNBQVM7dUJBQUtDLFNBQVM7Ozs7Ozs7Ozs7Ozs7QUFJaEMsQ0FBQztBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhbmZvbGlvLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IGFib3V0IH0gZnJvbSAnLi4vZGF0YS9wb3J0Zm9saW8nXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvdGhlbWUnXG5pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9BcHAuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvSGVhZGVyLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL05hdmJhci5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9BYm91dC5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9Qcm9qZWN0cy5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9Qcm9qZWN0Q2FyZC5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9Ta2lsbHMuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvQ29udGFjdC5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9TY3JvbGxUb1RvcC5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9Gb290ZXIuY3NzJ1xuaW1wb3J0ICdhbmltYXRlLmNzcydcblxuLy8gZ29vZ2xlIGFuYWx5dGljc1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IGdhX21lYXN1cmVtZW50X2lkLCBwYWdldmlldyB9IGZyb20gJy4uL2xpYi9nb29nbGUtYW5hbHl0aWNzJ1xuLy8gL2dvb2dsZSBhbmFseXRpY3NcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIC8vIGdvb2dsZSBhbmFseXRpY3NcbiAgLy8gd2lsbCBsb2cgcGFnZSB2aWV3cyBvbiByb3V0ZSBjaGFuZ2UgaWYgbmV3IHJvdXRlcyBhcmUgYWRkZWRcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWdhX21lYXN1cmVtZW50X2lkKSByZXR1cm5cbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmwpID0+IHBhZ2V2aWV3KHVybClcbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpXG4gICAgcmV0dXJuICgpID0+IHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpXG4gIH0sIFtyb3V0ZXIuZXZlbnRzXSlcbiAgLy8gL2dvb2dsZSBhbmFseXRpY3NcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJyAvPlxuICAgICAgICA8dGl0bGU+e2Fib3V0Lm5hbWUgfHwgJ1BvcnRmb2xpbyd9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxUaGVtZVByb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJIZWFkIiwiYWJvdXQiLCJUaGVtZVByb3ZpZGVyIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiZ2FfbWVhc3VyZW1lbnRfaWQiLCJwYWdldmlldyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJldmVudHMiLCJvbiIsIm9mZiIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/About.css":
/*!**************************!*\
  !*** ./styles/About.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "./styles/App.css":
/*!************************!*\
  !*** ./styles/App.css ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Contact.css":
/*!****************************!*\
  !*** ./styles/Contact.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Footer.css":
/*!***************************!*\
  !*** ./styles/Footer.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Header.css":
/*!***************************!*\
  !*** ./styles/Header.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Navbar.css":
/*!***************************!*\
  !*** ./styles/Navbar.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/ProjectCard.css":
/*!********************************!*\
  !*** ./styles/ProjectCard.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Projects.css":
/*!*****************************!*\
  !*** ./styles/Projects.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/ScrollToTop.css":
/*!********************************!*\
  !*** ./styles/ScrollToTop.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Skills.css":
/*!***************************!*\
  !*** ./styles/Skills.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();