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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0VBQStFO0FBQzFHLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7QUMxRGM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFRO0FBQ2hCLHdEQUF3RCxvREFBUTtBQUNoRTtBQUNBLG9CQUFvQixvREFBUSxlQUFlO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQVE7QUFDaEIsUUFBUSxvREFBUTtBQUNoQixRQUFRLG9EQUFRO0FBQ2hCLFFBQVEsb0RBQVE7QUFDaEI7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELG9EQUFRO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGlFQUFlLEtBQUs7Ozs7OztVQ3BEcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUM0QjtBQUNNO0FBQ2xDO0FBQ0E7QUFDQSxpREFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLDhDQUFLLDhDQUE4QztBQUNuRCw4Q0FBSztBQUNMO0FBQ0EsOENBQUs7QUFDTDtBQUNBLGlEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFByb2plY3RzID0gKCgpID0+XHJcbntcclxuICAgIGxldCBwcm9qZWN0c0xpc3QgPSBbXTtcclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykgPT09IG51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgcHJvamVjdHNMaXN0ID0gWyB7IHRpdGxlOiAnRGVmYXVsdCBQcm9qZWN0JywgaWNvbjogJ2ZhLWhvbWUnLCBjb2xvcjogJ3Byb2plY3QtYmxhY2snLCB0YXNrczogW10sIH0sIF07XHJcbiAgICB9IGVsc2VcclxuICAgIHtcclxuICAgICAgICBwcm9qZWN0c0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBQcm9qZWN0XHJcbiAgICB7XHJcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGljb24sIGNvbG9yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgICAgICB0aGlzLmljb24gPSBpY29uO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgIHRoaXMudGFza3MgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCAodGl0bGUsIGljb24sIGNvbG9yKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSwgaWNvbiwgY29sb3IpO1xyXG4gICAgICAgIHByb2plY3RzTGlzdC5wdXNoKG5ld1Byb2plY3QpO1xyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvamVjdHMnKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0xpc3QpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlZGl0UHJvamVjdCAoaW5kZXgsIHRpdGxlLCBpY29uLCBjb2xvcilcclxuICAgIHtcclxuICAgICAgICBwcm9qZWN0c0xpc3RbIGluZGV4IF0udGl0bGUgPSB0aXRsZTtcclxuICAgICAgICBwcm9qZWN0c0xpc3RbIGluZGV4IF0uaWNvbiA9IGljb247XHJcbiAgICAgICAgcHJvamVjdHNMaXN0WyBpbmRleCBdLmNvbG9yID0gY29sb3I7XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9qZWN0cycpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzTGlzdCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVByb2plY3QgKGluZGV4KVxyXG4gICAge1xyXG4gICAgICAgIHByb2plY3RzTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvamVjdHMnKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0xpc3QpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb2plY3RzTGlzdCxcclxuICAgICAgICBjcmVhdGVQcm9qZWN0LFxyXG4gICAgICAgIGVkaXRQcm9qZWN0LFxyXG4gICAgICAgIHJlbW92ZVByb2plY3QsXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7IiwiaW1wb3J0IFByb2plY3RzIGZyb20gJy4vcHJvamVjdHMuanMnO1xyXG5cclxuY29uc3QgVGFza3MgPSAoKCkgPT5cclxue1xyXG5cclxuICAgIGNsYXNzIFRhc2tcclxuICAgIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgcHJpb3JpdHksIHRpbWUsIGRvbmUpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9uZSA9IGRvbmU7XHJcbiAgICAgICAgICAgIHRoaXMudGltZSA9IHRpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2sgKHByb2plY3RJbmRleCwgdGl0bGUsIHByaW9yaXR5ID0gJ25vcm1hbCcsIHRpbWUgPSAnJywgZG9uZSwgbGluayA9IHRpdGxlKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayh0aXRsZSwgcHJpb3JpdHksIHRpbWUsIGRvbmUpO1xyXG4gICAgICAgIFByb2plY3RzLnByb2plY3RzTGlzdFsgcHJvamVjdEluZGV4IF0udGFza3MucHVzaChuZXdUYXNrKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShQcm9qZWN0cy5wcm9qZWN0c0xpc3QpKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coUHJvamVjdHMucHJvamVjdHNMaXN0KTsvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9EZWJ1Z1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZWRpdFRhc2sgKHByb2plY3RJbmRleCwgdGFza0luZGV4LCB0aXRsZSwgcHJpb3JpdHksIHRpbWUsIGRvbmUpXHJcbiAgICB7XHJcbiAgICAgICAgUHJvamVjdHMucHJvamVjdHNMaXN0WyBwcm9qZWN0SW5kZXggXS50YXNrc1sgdGFza0luZGV4IF0udGl0bGUgPSB0aXRsZTtcclxuICAgICAgICBQcm9qZWN0cy5wcm9qZWN0c0xpc3RbIHByb2plY3RJbmRleCBdLnRhc2tzWyB0YXNrSW5kZXggXS5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIFByb2plY3RzLnByb2plY3RzTGlzdFsgcHJvamVjdEluZGV4IF0udGFza3NbIHRhc2tJbmRleCBdLnRpbWUgPSB0aW1lO1xyXG4gICAgICAgIFByb2plY3RzLnByb2plY3RzTGlzdFsgcHJvamVjdEluZGV4IF0udGFza3NbIHRhc2tJbmRleCBdLmRvbmUgPSBkb25lO1xyXG5cclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2plY3RzJyk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoUHJvamVjdHMucHJvamVjdHNMaXN0KSk7XHJcblxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlVGFzayAoKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGFzayBoYXZlIGJlZW4gcmVtb3ZlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNyZWF0ZVRhc2ssXHJcbiAgICAgICAgZWRpdFRhc2ssXHJcbiAgICAgICAgcmVtb3ZlVGFzayxcclxuICAgIH07XHJcbn0pKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXHJcbmltcG9ydCBUYXNrcyBmcm9tIFwiLi90YXNrc1wiO1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuXHJcblxyXG5Qcm9qZWN0cy5jcmVhdGVQcm9qZWN0KCdEZWJ1Z2dpbmcnLCAnZmEtZmxpZ2h0JywgJ3Byb2plY3QtcHVycGxlJyk7XHJcblxyXG5cclxuY29uc29sZS5sb2coXCJMaXN0IG9mIFRhc2tzOiBcIik7XHJcblRhc2tzLmNyZWF0ZVRhc2soMCwgJ3dvdycsICdoaWdoJywgJzEyaHInLCBmYWxzZSk7IC8vIHdpbGwgZ28gdG8gZGVmYXVsdCBwcm9qZWN0XHJcblRhc2tzLmNyZWF0ZVRhc2soMSwgJ3NlcnZlcicsICdtZWRpdW0nLCAnMjJocicsIHRydWUpO1xyXG5cclxuVGFza3MuZWRpdFRhc2soMSwgMCwgJ09rYXknLCAnbG93JywgJzNocicsIGZhbHNlKVxyXG5cclxuUHJvamVjdHMuZWRpdFByb2plY3QoMSwgJ0NsZWFuaW5nJywgJ2ZhLWJhbGwnLCAncHJvamVjdC15ZWxsb3cnKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9