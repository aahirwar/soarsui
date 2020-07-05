/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['knockout', 'accUtils', 'ojs/ojarraydataprovider', 'ojs/ojknockouttemplateutils', 'ojs/ojdatacollection-utils',
  'ojs/ojknockout', 'ojs/ojdatagrid', 'ojs/ojinputtext'],
  function (ko, accUtils, ArrayDataProvider, KnockoutTemplateUtils, DataCollectionEditUtils) {
    function DashboardViewModel() {
      var self = this;

      self.handleEditEnd = DataCollectionEditUtils.basicHandleEditEnd;

      self.getCellTemplate = function (cellContext) {
        var mode;
        mode = cellContext.mode;
        if (mode === 'edit') {
          return KnockoutTemplateUtils.getRenderer('editCellTemplate')(cellContext);
        } else if (mode === 'navigation') {
          return KnockoutTemplateUtils.getRenderer('cellTemplate')(cellContext);
        }
        return '';
      };
      self.deptArray = ko.observableArray([
        { DepartmentId: 3, DepartmentName: 'ADFPM 1001 neverending', LocationId: 200, ManagerId: 300 },
        { DepartmentId: 24022, DepartmentName: 'Human Resources1', LocationId: 200, ManagerId: 300 }]);


      self.deptid = 313023;
      self.dataSource = new ArrayDataProvider(this.deptArray, { keyAttributes: 'DepartmentId' });
      self.push = function () {
        this.deptid += 1;
        this.deptArray.push({ DepartmentId: this.deptid, DepartmentName: '' });
      }.bind(this);

      self.pop = function () {
        this.deptArray.pop();
      }.bind(this);

      self.unshift = function () {
        this.deptid += 1;
        this.deptArray.unshift({ DepartmentId: this.deptid, DepartmentName: 'Unshift', LocationId: 1, ManagerId: 1 });
      }.bind(this);

      self.shift = function () {
        this.deptArray.shift();
      }.bind(this);
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      this.connected = () => {
        accUtils.announce('Dashboard page loaded.');
        document.title = "Dashboard";
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return DashboardViewModel;
  }
);
