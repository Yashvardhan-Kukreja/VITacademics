/*
 *  VITacademics
 *  Copyright (C) 2014-2016  Aneesh Neelam <neelam.aneesh@gmail.com>
 *
 *  This file is part of VITacademics.
 *
 *  VITacademics is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  VITacademics is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with VITacademics.  If not, see <http://www.gnu.org/licenses/>.
 */

'use strict';

const path = require('path');

const config = require(path.join(__dirname, '..', 'config'));

let logentries;
if (config.logentriesEnabled) {
  const LogentriesClient = require('logentries-client');
  logentries = new LogentriesClient({
    token: config.logentriesToken
  });
}

const api_login = require(path.join(__dirname, 'login', 'auto'));
const api_aggregate = require(path.join(__dirname, 'scraper', 'aggregate'));
const api_grades = require(path.join(__dirname, 'scraper', 'grades'));
const status = require(path.join(__dirname, '..', 'status'));


const parseMessage = function (app, data, callback) {
  let reply = [
    'Register with the VITacademics SMS Service: @vitacademics register [Campus] [RegNo] [DoB]',
    'Get Course Details:  @vitacademics course [CourseCode]',
    'Get Today\'s Classes: @vitacademics today',
    'Get Attendance: @vitacademics attendance',
    'Get Marks: @vitacademics marks',
    'Help - @vitacademics help'
  ];
  if (data.args[0] === 'REGISTER') {
    // TODO
    reply = ['Feature Incompconste', 'Contribute to aneesh-neelam/VITacademics on GitHub'];
  }
  else if (data.args[0] === 'COURSE') {
    // TODO
    reply = ['Feature Incompconste', 'Contribute to aneesh-neelam/VITacademics on GitHub'];
  }
  else if (data.args[0] === 'TODAY') {
    // TODO
    reply = ['Feature Incompconste', 'Contribute to aneesh-neelam/VITacademics on GitHub'];
  }
  else if (data.args[0] === 'ATTENDANCE') {
    // TODO
    reply = ['Feature Incompconste', 'Contribute to aneesh-neelam/VITacademics on GitHub'];
  }
  else if (data.args[0] === 'MARKS') {
    // TODO
    reply = ['Feature Incompconste', 'Contribute to aneesh-neelam/VITacademics on GitHub'];
  }
  if (config.logentriesEnabled) {
    logentries.log('debug', {log: 'Incompconste feature TxtWeb used', args: data.args, mobile: data.mobile});
  }
  callback(false, reply);
};

module.exports.parseMessage = parseMessage;
