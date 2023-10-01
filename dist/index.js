/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Projects = (() =>
{
    let projectsList = [];

    if (localStorage.getItem('projects') === null)
    {
        projectsList = [ { title: 'Default Project', icon: 'fa-home', color: 'project-black', tasks: [], }, ];
    } else
    {
        projectsList = JSON.parse(localStorage.getItem('projects'));
    }

    
    class Project
    {
        constructor(title, icon, color)
        {
            this.title = title;
            this.icon = icon;
            this.color = color;
            this.tasks = [];
        }
    }

    function createProject (title, icon, color)
    {
        const newProject = new Project(title, icon, color);
        projectsList.push(newProject);

        localStorage.removeItem('projects');
        localStorage.setItem('projects', JSON.stringify(projectsList));
    }

    function editProject (index, title, icon, color)
    {
        projectsList[ index ].title = title;
        projectsList[ index ].icon = icon;
        projectsList[ index ].color = color;

        localStorage.removeItem('projects');
        localStorage.setItem('projects', JSON.stringify(projectsList));
    }

    function removeProject (index)
    {
        projectsList.splice(index, 1);

        localStorage.removeItem('projects');
        localStorage.setItem('projects', JSON.stringify(projectsList));
    }

    return {
        projectsList,
        createProject,
        editProject,
        removeProject,
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");


const Tasks = (() =>
{

    class Task
    {
        constructor(title, priority, time, done)
        {

            this.title = title;
            this.priority = priority;
            this.done = done;
            this.time = time;
        }
    }

    function createTask (projectIndex, title, priority = 'normal', time = '', done, link = title)
    {
        const newTask = new Task(title, priority, time, done);
        _projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectsList[ projectIndex ].tasks.push(newTask);
        localStorage.setItem('projects', JSON.stringify(_projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectsList));

        console.log(_projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectsList);//////////////////////////////Debug
    }
     
    

    function editTask (projectIndex, taskIndex, title, priority, time, done)
    {
        _projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectsList[ projectIndex ].tasks[ taskIndex ].title = title;
        _projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectsList[ projectIndex ].tasks[ taskIndex ].priority = priority;
        _projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectsList[ projectIndex ].tasks[ taskIndex ].time = time;
        _projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectsList[ projectIndex ].tasks[ taskIndex ].done = done;


        localStorage.removeItem('projects');
        localStorage.setItem('projects', JSON.stringify(_projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectsList));

    }
    function removeTask ()
    {
        console.log("Task have been removed");
    }

    return {
        createTask,
        editTask,
        removeTask,
    };
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tasks);

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const UI =(()=>{
    const root = document.createElement('div');
    root.innerHTML=`<h1>Hello Everyone I'm back</h1>`


    document.body.appendChild(root);

})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./src/ui.js");





_projects__WEBPACK_IMPORTED_MODULE_1__["default"].createProject('Debugging', 'fa-flight', 'project-purple');


console.log("List of Tasks: ");
_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].createTask(0, 'wow', 'high', '12hr', false); // will go to default project
_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].createTask(1, 'server', 'medium', '22hr', true);

_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].editTask(1, 0, 'Okay', 'low', '3hr', false)


_projects__WEBPACK_IMPORTED_MODULE_1__["default"].editProject(1, 'Cleaning', 'fa-ball', 'project-yellow');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQiwrRUFBK0U7QUFDMUcsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7O0FDM0RjOztBQUVyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFRO0FBQ2hCLHdEQUF3RCxvREFBUTs7QUFFaEUsb0JBQW9CLG9EQUFRLGVBQWU7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLG9EQUFRO0FBQ2hCLFFBQVEsb0RBQVE7QUFDaEIsUUFBUSxvREFBUTtBQUNoQixRQUFRLG9EQUFROzs7QUFHaEI7QUFDQSx3REFBd0Qsb0RBQVE7O0FBRWhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsS0FBSzs7Ozs7Ozs7Ozs7Ozs7QUNwRHBCO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsQ0FBQzs7O0FBR0QsaUVBQWUsRUFBRTs7Ozs7O1VDVmpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNMNEI7QUFDTTtBQUNaOztBQUV0QixpREFBUTs7O0FBR1I7QUFDQSw4Q0FBSyw4Q0FBOEM7QUFDbkQsOENBQUs7O0FBRUwsOENBQUs7OztBQUdMLGlEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUHJvamVjdHMgPSAoKCkgPT5cbntcbiAgICBsZXQgcHJvamVjdHNMaXN0ID0gW107XG5cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykgPT09IG51bGwpXG4gICAge1xuICAgICAgICBwcm9qZWN0c0xpc3QgPSBbIHsgdGl0bGU6ICdEZWZhdWx0IFByb2plY3QnLCBpY29uOiAnZmEtaG9tZScsIGNvbG9yOiAncHJvamVjdC1ibGFjaycsIHRhc2tzOiBbXSwgfSwgXTtcbiAgICB9IGVsc2VcbiAgICB7XG4gICAgICAgIHByb2plY3RzTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuICAgIH1cblxuICAgIFxuICAgIGNsYXNzIFByb2plY3RcbiAgICB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBpY29uLCBjb2xvcilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICAgICAgdGhpcy5pY29uID0gaWNvbjtcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QgKHRpdGxlLCBpY29uLCBjb2xvcilcbiAgICB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSwgaWNvbiwgY29sb3IpO1xuICAgICAgICBwcm9qZWN0c0xpc3QucHVzaChuZXdQcm9qZWN0KTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvamVjdHMnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNMaXN0KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZWRpdFByb2plY3QgKGluZGV4LCB0aXRsZSwgaWNvbiwgY29sb3IpXG4gICAge1xuICAgICAgICBwcm9qZWN0c0xpc3RbIGluZGV4IF0udGl0bGUgPSB0aXRsZTtcbiAgICAgICAgcHJvamVjdHNMaXN0WyBpbmRleCBdLmljb24gPSBpY29uO1xuICAgICAgICBwcm9qZWN0c0xpc3RbIGluZGV4IF0uY29sb3IgPSBjb2xvcjtcblxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvamVjdHMnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNMaXN0KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdCAoaW5kZXgpXG4gICAge1xuICAgICAgICBwcm9qZWN0c0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvamVjdHMnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNMaXN0KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvamVjdHNMaXN0LFxuICAgICAgICBjcmVhdGVQcm9qZWN0LFxuICAgICAgICBlZGl0UHJvamVjdCxcbiAgICAgICAgcmVtb3ZlUHJvamVjdCxcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7IiwiaW1wb3J0IFByb2plY3RzIGZyb20gJy4vcHJvamVjdHMuanMnO1xuXG5jb25zdCBUYXNrcyA9ICgoKSA9Plxue1xuXG4gICAgY2xhc3MgVGFza1xuICAgIHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIHByaW9yaXR5LCB0aW1lLCBkb25lKVxuICAgICAgICB7XG5cbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgICAgIHRoaXMuZG9uZSA9IGRvbmU7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFzayAocHJvamVjdEluZGV4LCB0aXRsZSwgcHJpb3JpdHkgPSAnbm9ybWFsJywgdGltZSA9ICcnLCBkb25lLCBsaW5rID0gdGl0bGUpXG4gICAge1xuICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sodGl0bGUsIHByaW9yaXR5LCB0aW1lLCBkb25lKTtcbiAgICAgICAgUHJvamVjdHMucHJvamVjdHNMaXN0WyBwcm9qZWN0SW5kZXggXS50YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShQcm9qZWN0cy5wcm9qZWN0c0xpc3QpKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhQcm9qZWN0cy5wcm9qZWN0c0xpc3QpOy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0RlYnVnXG4gICAgfVxuICAgICBcbiAgICBcblxuICAgIGZ1bmN0aW9uIGVkaXRUYXNrIChwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCwgdGl0bGUsIHByaW9yaXR5LCB0aW1lLCBkb25lKVxuICAgIHtcbiAgICAgICAgUHJvamVjdHMucHJvamVjdHNMaXN0WyBwcm9qZWN0SW5kZXggXS50YXNrc1sgdGFza0luZGV4IF0udGl0bGUgPSB0aXRsZTtcbiAgICAgICAgUHJvamVjdHMucHJvamVjdHNMaXN0WyBwcm9qZWN0SW5kZXggXS50YXNrc1sgdGFza0luZGV4IF0ucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgUHJvamVjdHMucHJvamVjdHNMaXN0WyBwcm9qZWN0SW5kZXggXS50YXNrc1sgdGFza0luZGV4IF0udGltZSA9IHRpbWU7XG4gICAgICAgIFByb2plY3RzLnByb2plY3RzTGlzdFsgcHJvamVjdEluZGV4IF0udGFza3NbIHRhc2tJbmRleCBdLmRvbmUgPSBkb25lO1xuXG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2plY3RzJyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KFByb2plY3RzLnByb2plY3RzTGlzdCkpO1xuXG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZVRhc2sgKClcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGFzayBoYXZlIGJlZW4gcmVtb3ZlZFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVUYXNrLFxuICAgICAgICBlZGl0VGFzayxcbiAgICAgICAgcmVtb3ZlVGFzayxcbiAgICB9O1xufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrczsiLCJjb25zdCBVSSA9KCgpPT57XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvb3QuaW5uZXJIVE1MPWA8aDE+SGVsbG8gRXZlcnlvbmUgSSdtIGJhY2s8L2gxPmBcblxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyb290KTtcblxufSkoKTtcblxuXG5leHBvcnQgZGVmYXVsdCBVSTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuaW1wb3J0IFRhc2tzIGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCBVSSBmcm9tIFwiLi91aVwiO1xuXG5Qcm9qZWN0cy5jcmVhdGVQcm9qZWN0KCdEZWJ1Z2dpbmcnLCAnZmEtZmxpZ2h0JywgJ3Byb2plY3QtcHVycGxlJyk7XG5cblxuY29uc29sZS5sb2coXCJMaXN0IG9mIFRhc2tzOiBcIik7XG5UYXNrcy5jcmVhdGVUYXNrKDAsICd3b3cnLCAnaGlnaCcsICcxMmhyJywgZmFsc2UpOyAvLyB3aWxsIGdvIHRvIGRlZmF1bHQgcHJvamVjdFxuVGFza3MuY3JlYXRlVGFzaygxLCAnc2VydmVyJywgJ21lZGl1bScsICcyMmhyJywgdHJ1ZSk7XG5cblRhc2tzLmVkaXRUYXNrKDEsIDAsICdPa2F5JywgJ2xvdycsICczaHInLCBmYWxzZSlcblxuXG5Qcm9qZWN0cy5lZGl0UHJvamVjdCgxLCAnQ2xlYW5pbmcnLCAnZmEtYmFsbCcsICdwcm9qZWN0LXllbGxvdycpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9