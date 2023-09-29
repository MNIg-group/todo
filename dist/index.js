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
        localStorage.setItem('projects', JSON.stringify(projectsList));
    }

    function editProject (index, title, icon, color)
    {
        projectsList[ index ].title = title;
        projectsList[ index ].icon = icon;
        projectsList[ index ].color = color;

        localStorage.setItem('projects', JSON.stringify(projectsList));
    }

    function removeProject (index)
    {
        projectsList.splice(index, 1);
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



    function editTask (projectIndex, taskIndex, title, priority, time)
    {
        _projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectsList[ projectIndex ].tasks[ taskIndex ].title = title;
        _projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectsList[ projectIndex ].tasks[ taskIndex ].priority = priority;
        _projects_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectsList[ projectIndex ].tasks[ taskIndex ].time = time;
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





_projects__WEBPACK_IMPORTED_MODULE_1__["default"].createProject('Debugging', 'fa-flight', 'project-purple');


console.log("List of Tasks: ");
_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].createTask(0, 'wow', 'high', '12hr', false); // will go to default project
_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].createTask(1, 'server', 'medium', '22hr', true);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0VBQStFO0FBQzFHLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7OztBQ3JEYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQVE7QUFDaEIsd0RBQXdELG9EQUFRO0FBQ2hFO0FBQ0Esb0JBQW9CLG9EQUFRLGVBQWU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBUTtBQUNoQixRQUFRLG9EQUFRO0FBQ2hCLFFBQVEsb0RBQVE7QUFDaEIsd0RBQXdELG9EQUFRO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGlFQUFlLEtBQUs7Ozs7OztVQ2hEcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUM0QjtBQUNNO0FBQ2xDO0FBQ0E7QUFDQSxpREFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLDhDQUFLLDhDQUE4QztBQUNuRCw4Q0FBSyxpRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQcm9qZWN0cyA9ICgoKSA9PlxyXG57XHJcbiAgICBsZXQgcHJvamVjdHNMaXN0ID0gW107XHJcblxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpID09PSBudWxsKVxyXG4gICAge1xyXG4gICAgICAgIHByb2plY3RzTGlzdCA9IFsgeyB0aXRsZTogJ0RlZmF1bHQgUHJvamVjdCcsIGljb246ICdmYS1ob21lJywgY29sb3I6ICdwcm9qZWN0LWJsYWNrJywgdGFza3M6IFtdLCB9LCBdO1xyXG4gICAgfSBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgcHJvamVjdHNMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgUHJvamVjdFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBpY29uLCBjb2xvcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICAgICAgdGhpcy5pY29uID0gaWNvbjtcclxuICAgICAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QgKHRpdGxlLCBpY29uLCBjb2xvcilcclxuICAgIHtcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUsIGljb24sIGNvbG9yKTtcclxuICAgICAgICBwcm9qZWN0c0xpc3QucHVzaChuZXdQcm9qZWN0KTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0xpc3QpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlZGl0UHJvamVjdCAoaW5kZXgsIHRpdGxlLCBpY29uLCBjb2xvcilcclxuICAgIHtcclxuICAgICAgICBwcm9qZWN0c0xpc3RbIGluZGV4IF0udGl0bGUgPSB0aXRsZTtcclxuICAgICAgICBwcm9qZWN0c0xpc3RbIGluZGV4IF0uaWNvbiA9IGljb247XHJcbiAgICAgICAgcHJvamVjdHNMaXN0WyBpbmRleCBdLmNvbG9yID0gY29sb3I7XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzTGlzdCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVByb2plY3QgKGluZGV4KVxyXG4gICAge1xyXG4gICAgICAgIHByb2plY3RzTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzTGlzdCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvamVjdHNMaXN0LFxyXG4gICAgICAgIGNyZWF0ZVByb2plY3QsXHJcbiAgICAgICAgZWRpdFByb2plY3QsXHJcbiAgICAgICAgcmVtb3ZlUHJvamVjdCxcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0czsiLCJpbXBvcnQgUHJvamVjdHMgZnJvbSAnLi9wcm9qZWN0cy5qcyc7XHJcblxyXG5jb25zdCBUYXNrcyA9ICgoKSA9PlxyXG57XHJcblxyXG4gICAgY2xhc3MgVGFza1xyXG4gICAge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBwcmlvcml0eSwgdGltZSwgZG9uZSlcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICAgICAgdGhpcy5kb25lID0gZG9uZTtcclxuICAgICAgICAgICAgdGhpcy50aW1lID0gdGltZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFzayAocHJvamVjdEluZGV4LCB0aXRsZSwgcHJpb3JpdHkgPSAnbm9ybWFsJywgdGltZSA9ICcnLCBkb25lLCBsaW5rID0gdGl0bGUpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRpdGxlLCBwcmlvcml0eSwgdGltZSwgZG9uZSk7XHJcbiAgICAgICAgUHJvamVjdHMucHJvamVjdHNMaXN0WyBwcm9qZWN0SW5kZXggXS50YXNrcy5wdXNoKG5ld1Rhc2spO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KFByb2plY3RzLnByb2plY3RzTGlzdCkpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhQcm9qZWN0cy5wcm9qZWN0c0xpc3QpOy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0RlYnVnXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBlZGl0VGFzayAocHJvamVjdEluZGV4LCB0YXNrSW5kZXgsIHRpdGxlLCBwcmlvcml0eSwgdGltZSlcclxuICAgIHtcclxuICAgICAgICBQcm9qZWN0cy5wcm9qZWN0c0xpc3RbIHByb2plY3RJbmRleCBdLnRhc2tzWyB0YXNrSW5kZXggXS50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIFByb2plY3RzLnByb2plY3RzTGlzdFsgcHJvamVjdEluZGV4IF0udGFza3NbIHRhc2tJbmRleCBdLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgUHJvamVjdHMucHJvamVjdHNMaXN0WyBwcm9qZWN0SW5kZXggXS50YXNrc1sgdGFza0luZGV4IF0udGltZSA9IHRpbWU7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoUHJvamVjdHMucHJvamVjdHNMaXN0KSk7XHJcblxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlVGFzayAoKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGFzayBoYXZlIGJlZW4gcmVtb3ZlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNyZWF0ZVRhc2ssXHJcbiAgICAgICAgZWRpdFRhc2ssXHJcbiAgICAgICAgcmVtb3ZlVGFzayxcclxuICAgIH07XHJcbn0pKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXHJcbmltcG9ydCBUYXNrcyBmcm9tIFwiLi90YXNrc1wiO1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuXHJcblxyXG5Qcm9qZWN0cy5jcmVhdGVQcm9qZWN0KCdEZWJ1Z2dpbmcnLCAnZmEtZmxpZ2h0JywgJ3Byb2plY3QtcHVycGxlJyk7XHJcblxyXG5cclxuY29uc29sZS5sb2coXCJMaXN0IG9mIFRhc2tzOiBcIik7XHJcblRhc2tzLmNyZWF0ZVRhc2soMCwgJ3dvdycsICdoaWdoJywgJzEyaHInLCBmYWxzZSk7IC8vIHdpbGwgZ28gdG8gZGVmYXVsdCBwcm9qZWN0XHJcblRhc2tzLmNyZWF0ZVRhc2soMSwgJ3NlcnZlcicsICdtZWRpdW0nLCAnMjJocicsIHRydWUpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==