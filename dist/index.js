"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var addTask = function (taskList, task) {
    return __spreadArrays(taskList, [task]);
};
var completeTask = function (taskList, taskId) {
    return taskList.map(function (task) {
        return task.id == taskId ? __assign(__assign({}, task), { completed: true }) : task;
    });
};
var filterTasks = function (taskList, filter) {
    if (filter === "completed") {
        return taskList.filter(function (task) { return task.completed; });
    }
    else if (filter === "notCompleted") {
        return taskList.filter(function (task) { return !task.completed; });
    }
    else {
        return taskList;
    }
};
var printTaskList = function (taskList) {
    return taskList.forEach(function (task) {
        return console.log("title: " + task.title + " completed: " + task.completed);
    });
};
var runApp = function () {
    var tasks = [
        { id: 1, title: 'Completar taller de TypeScript', completed: false },
        { id: 2, title: 'Estudiar programación funcional', completed: false },
        { id: 3, title: 'Preparar presentación sobre TypeScript', completed: true },
        { id: 4, title: 'Leer libro de TypeScript avanzado', completed: false },
        { id: 5, title: 'Resolver ejercicios de TypeScript', completed: false },
        { id: 6, title: 'Hacer ejercicio', completed: true },
        { id: 7, title: 'Comprar víveres', completed: false },
        { id: 8, title: 'Llamar al médico', completed: false },
        { id: 9, title: 'Limpiar la casa', completed: true },
        { id: 10, title: 'Actualizar el CV', completed: false }
    ];
    var task11 = { id: 11, title: 'Completar Readme del proyecto', completed: true };
    var task12 = { id: 12, title: 'Completar retos pendientes', completed: false };
    tasks = addTask(tasks, task11);
    tasks = addTask(tasks, task12);
    tasks = completeTask(tasks, 10);
    var completedTasks = filterTasks(tasks, "completed");
    printTaskList(completedTasks);
};
runApp();
