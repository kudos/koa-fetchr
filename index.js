"use strict";

module.exports = function (fetchr) {
  return function* (next) {
    this.req.path = this.req.url;
    fetchr.middleware()(this.req, this.res);
    return yield* next;
  }
}
