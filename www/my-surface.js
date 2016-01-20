// Generated by CoffeeScript 1.10.0
(function() {
  window.bit6 || (window.bit6 = {});

  bit6.MySurface = (function() {
    function MySurface(phonertc) {
      this.phonertc = phonertc;
      this.counter = 0;
    }

    MySurface.prototype.onVideo = function(v, d, op) {
      console.log('Surface.video v=' + v + ' d=' + d + ' o=' + op);
      if (op > 0 && this.counter === 0) {
        this._show(v.parentNode);
      } else if (op < 0 && this.counter === 1) {
        this._hide();
      }
      return this.counter += op;
    };

    MySurface.prototype._show = function(container) {
      var opts;
      console.log('RtcSurface show ' + container);
      opts = {
        container: container,
        local: {
          position: [0, 0],
          size: [100, 100]
        }
      };
      return this.phonertc.setVideoView(opts);
    };

    MySurface.prototype._hide = function() {
      console.log('RtcSurface hide');
      return this.phonertc.hideVideoView();
    };

    return MySurface;

  })();

}).call(this);