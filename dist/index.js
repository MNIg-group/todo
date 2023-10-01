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

_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].editTask(1, 0, 'Okay', 'low', '3hr', false)

_projects__WEBPACK_IMPORTED_MODULE_1__["default"].editProject(1, 'Cleaning', 'fa-ball', 'project-yellow');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQiwrRUFBK0U7QUFDMUcsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7OztBQzFEYzs7QUFFckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBUTtBQUNoQix3REFBd0Qsb0RBQVE7O0FBRWhFLG9CQUFvQixvREFBUSxlQUFlO0FBQzNDOzs7O0FBSUE7QUFDQTtBQUNBLFFBQVEsb0RBQVE7QUFDaEIsUUFBUSxvREFBUTtBQUNoQixRQUFRLG9EQUFRO0FBQ2hCLFFBQVEsb0RBQVE7OztBQUdoQjtBQUNBLHdEQUF3RCxvREFBUTs7QUFFaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxLQUFLOzs7Ozs7VUNwRHBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ0w0QjtBQUNNOzs7QUFHbEMsaURBQVE7OztBQUdSO0FBQ0EsOENBQUssOENBQThDO0FBQ25ELDhDQUFLOztBQUVMLDhDQUFLOztBQUVMLGlEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFByb2plY3RzID0gKCgpID0+XG57XG4gICAgbGV0IHByb2plY3RzTGlzdCA9IFtdO1xuXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpID09PSBudWxsKVxuICAgIHtcbiAgICAgICAgcHJvamVjdHNMaXN0ID0gWyB7IHRpdGxlOiAnRGVmYXVsdCBQcm9qZWN0JywgaWNvbjogJ2ZhLWhvbWUnLCBjb2xvcjogJ3Byb2plY3QtYmxhY2snLCB0YXNrczogW10sIH0sIF07XG4gICAgfSBlbHNlXG4gICAge1xuICAgICAgICBwcm9qZWN0c0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcbiAgICB9XG5cbiAgICBjbGFzcyBQcm9qZWN0XG4gICAge1xuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgaWNvbiwgY29sb3IpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0ICh0aXRsZSwgaWNvbiwgY29sb3IpXG4gICAge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUsIGljb24sIGNvbG9yKTtcbiAgICAgICAgcHJvamVjdHNMaXN0LnB1c2gobmV3UHJvamVjdCk7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2plY3RzJyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzTGlzdCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVkaXRQcm9qZWN0IChpbmRleCwgdGl0bGUsIGljb24sIGNvbG9yKVxuICAgIHtcbiAgICAgICAgcHJvamVjdHNMaXN0WyBpbmRleCBdLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHByb2plY3RzTGlzdFsgaW5kZXggXS5pY29uID0gaWNvbjtcbiAgICAgICAgcHJvamVjdHNMaXN0WyBpbmRleCBdLmNvbG9yID0gY29sb3I7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2plY3RzJyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzTGlzdCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVByb2plY3QgKGluZGV4KVxuICAgIHtcbiAgICAgICAgcHJvamVjdHNMaXN0LnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2plY3RzJyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzTGlzdCkpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb2plY3RzTGlzdCxcbiAgICAgICAgY3JlYXRlUHJvamVjdCxcbiAgICAgICAgZWRpdFByb2plY3QsXG4gICAgICAgIHJlbW92ZVByb2plY3QsXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzOyIsImltcG9ydCBQcm9qZWN0cyBmcm9tICcuL3Byb2plY3RzLmpzJztcblxuY29uc3QgVGFza3MgPSAoKCkgPT5cbntcblxuICAgIGNsYXNzIFRhc2tcbiAgICB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBwcmlvcml0eSwgdGltZSwgZG9uZSlcbiAgICAgICAge1xuXG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgICAgICB0aGlzLmRvbmUgPSBkb25lO1xuICAgICAgICAgICAgdGhpcy50aW1lID0gdGltZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2sgKHByb2plY3RJbmRleCwgdGl0bGUsIHByaW9yaXR5ID0gJ25vcm1hbCcsIHRpbWUgPSAnJywgZG9uZSwgbGluayA9IHRpdGxlKVxuICAgIHtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRpdGxlLCBwcmlvcml0eSwgdGltZSwgZG9uZSk7XG4gICAgICAgIFByb2plY3RzLnByb2plY3RzTGlzdFsgcHJvamVjdEluZGV4IF0udGFza3MucHVzaChuZXdUYXNrKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoUHJvamVjdHMucHJvamVjdHNMaXN0KSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coUHJvamVjdHMucHJvamVjdHNMaXN0KTsvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9EZWJ1Z1xuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBlZGl0VGFzayAocHJvamVjdEluZGV4LCB0YXNrSW5kZXgsIHRpdGxlLCBwcmlvcml0eSwgdGltZSwgZG9uZSlcbiAgICB7XG4gICAgICAgIFByb2plY3RzLnByb2plY3RzTGlzdFsgcHJvamVjdEluZGV4IF0udGFza3NbIHRhc2tJbmRleCBdLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIFByb2plY3RzLnByb2plY3RzTGlzdFsgcHJvamVjdEluZGV4IF0udGFza3NbIHRhc2tJbmRleCBdLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIFByb2plY3RzLnByb2plY3RzTGlzdFsgcHJvamVjdEluZGV4IF0udGFza3NbIHRhc2tJbmRleCBdLnRpbWUgPSB0aW1lO1xuICAgICAgICBQcm9qZWN0cy5wcm9qZWN0c0xpc3RbIHByb2plY3RJbmRleCBdLnRhc2tzWyB0YXNrSW5kZXggXS5kb25lID0gZG9uZTtcblxuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9qZWN0cycpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShQcm9qZWN0cy5wcm9qZWN0c0xpc3QpKTtcblxuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVUYXNrICgpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRhc2sgaGF2ZSBiZWVuIHJlbW92ZWRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlVGFzayxcbiAgICAgICAgZWRpdFRhc2ssXG4gICAgICAgIHJlbW92ZVRhc2ssXG4gICAgfTtcbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgVGFza3M7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbmltcG9ydCBUYXNrcyBmcm9tIFwiLi90YXNrc1wiO1xuaW1wb3J0IFByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzXCI7XG5cblxuUHJvamVjdHMuY3JlYXRlUHJvamVjdCgnRGVidWdnaW5nJywgJ2ZhLWZsaWdodCcsICdwcm9qZWN0LXB1cnBsZScpO1xuXG5cbmNvbnNvbGUubG9nKFwiTGlzdCBvZiBUYXNrczogXCIpO1xuVGFza3MuY3JlYXRlVGFzaygwLCAnd293JywgJ2hpZ2gnLCAnMTJocicsIGZhbHNlKTsgLy8gd2lsbCBnbyB0byBkZWZhdWx0IHByb2plY3RcblRhc2tzLmNyZWF0ZVRhc2soMSwgJ3NlcnZlcicsICdtZWRpdW0nLCAnMjJocicsIHRydWUpO1xuXG5UYXNrcy5lZGl0VGFzaygxLCAwLCAnT2theScsICdsb3cnLCAnM2hyJywgZmFsc2UpXG5cblByb2plY3RzLmVkaXRQcm9qZWN0KDEsICdDbGVhbmluZycsICdmYS1iYWxsJywgJ3Byb2plY3QteWVsbG93Jyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=