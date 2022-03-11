"use strict";

module.exports = Franz => class Calendar extends Franz {
  modifyRequestHeaders() {
    return [{
      headers: {
        origin: 'RefererHost'
      },
      requestFilters: {
        urls: ['*://people-pa.clients6.google.com/*', '*://clients6.google.com/drive/*', '*://clients6.google.com/gmail/*', '*://signaler-pa.clients6.google.com/*', '*://addons-pa.clients6.google.com/*', '*://chat-pa.clients6.google.com/*', '*://clients6.google.com/voice/*', '*://hangouts.google.com/*', '*://peoplestack-pa.clients6.google.com/*', '*://calendar-pa.clients6.google.com/*', '*://play.google.com/*']
      }
    }];
  }

};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvb2dsZWNhbGVuZGFyL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJGcmFueiJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsT0FBUCxHQUFpQkMsU0FBU0EsS0FBMUIiLCJmaWxlIjoiZ29vZ2xlY2FsZW5kYXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IEZyYW56ID0+IEZyYW56O1xuIl19
