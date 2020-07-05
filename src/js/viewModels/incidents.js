/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['knockout','accUtils','ojs/ojarraydataprovider','ojs/ojknockout', 'ojs/ojchart','ojs/ojselectsingle'],
function(ko,accUtils,ArrayDataProvider) {
    function IncidentsViewModel() {
      var self = this;

      self.selectVal = ko.observable('bar');
  
      var browsers = [
        { value: 'pie', label: 'Pie' },
        { value: 'bar', label: 'Bar' }
      ];
  
      self.browsersDP = new ArrayDataProvider(browsers, { keyAttributes: 'value' });
          /* chart data */
          self.dataProvider = new ArrayDataProvider([
            {
              "id": 0,
              "series": "Series 1",
              "group": "Group A",
              "value": 42
            },
            {
              "id": 1,
              "series": "Series 2",
              "group": "Group A",
              "value": 55
            },
            {
              "id": 2,
              "series": "Series 3",
              "group": "Group A",
              "value": 36
            },
            {
              "id": 3,
              "series": "Series 4",
              "group": "Group A",
              "value": 22
            },
            {
              "id": 4,
              "series": "Series 5",
              "group": "Group A",
              "value": 22
            }
          ], {keyAttributes: 'id'});


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
      self.connected = () => {
        accUtils.announce('Incidents page loaded.');
        document.title = "Incidents";
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = () => {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return IncidentsViewModel;
  }
);
