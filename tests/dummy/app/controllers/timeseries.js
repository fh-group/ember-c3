import { later } from '@ember/runloop';
import Controller from '@ember/controller';
/* eslint ember/avoid-leaking-state-in-ember-objects: "off" */

export default Controller.extend({

  init() {
    this._super(...arguments);

    later(this, function () {
      this.get('data.columns').push(
        ['data3', 400, 500, 450, 700, 600, 500]
      );
      this.notifyPropertyChange('data');
    }, 1000);

  },

  data: {
    x: 'x',
    //        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
    columns: [
      ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04',
        '2013-01-05', '2013-01-06'
      ],
      //            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
      ['data1', 30, 200, 100, 400, 150, 250],
      ['data2', 130, 340, 200, 500, 250, 350]
    ]
  },

  axis: {
    x: {
      type: 'timeseries',
      tick: {
        format: '%Y-%m-%d'
      }
    }
  }

});