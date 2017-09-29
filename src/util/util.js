/*
* @Author: Marte
* @Date:   2017-09-29 14:36:44
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-29 14:45:55
*/

'use strict';

import Vue from 'vue'


Vue.prototype.utils = {
    replaceDate :  function(data) {
        if(data.indexOf('-') == -1){
            data = data.split('/');
        }else{
            data = data.split('-');
        }

        let newDate = data[0] + '-' + (+data[1] < 10 ?　'0' + (+data[1]) : data[1]) + '-' + (+data[2] < 10 ? '0' + (+data[2]) : data[2]);
        return newDate
    },
    initweek : function(data) {
        data = data.indexOf('/') !== -1 ? data.split('/') : data.split('-');;
        let sdate =new Date(data[0],parseInt(data[1]-1),data[2]);
        let curday = sdate.getDay();
        let weeks = ['周日','周一','周二','周三','周四','周五','周六'];
        return weeks[curday]
    }
}
