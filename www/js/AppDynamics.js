let current = null;

module.exports = {
  vPageStart(unique) {
    if (window.ADRUM) {
      console.log("vPageStart");
      current = new window.ADRUM.events.VPageView({url: unique});
      current.start();
    }
  },

  startCorrelatingXhrs() {
    if (window.ADRUM && current) {
      current.startCorrelatingXhrs();
    }
  },

  markViewChangeStart() {
    if (window.ADRUM && current) {
      current.markViewChangeStart();
    }
  },

  markViewChangeEnd() {
    if (window.ADRUM && current) {
      current.markViewChangeEnd();
    }
  },

  markViewDOMLoaded() {
    if (window.ADRUM && current) {
      current.markViewDOMLoaded();
    }
  },

  markXhrRequestsCompleted() {
    if (window.ADRUM && current) {
      current.markXhrRequestsCompleted();
    }
  },

  markViewResourcesLoaded() {
    if (window.ADRUM && current) {
      current.markViewResourcesLoaded();
    }
  },

  markVirtualPageStart() {
    if (window.ADRUM && current) {
      current.markVirtualPageStart();
    }
  },

  markVirtualPageEnd() {
    if (window.ADRUM && current) {
      current.markVirtualPageEnd();
    }
  },

  vPageEnd() {
    if (window.ADRUM && current) {
      console.log("vPageEnd");
      current.markViewDOMLoaded();
      current.end();
      window.ADRUM.report(current);

      current = null;
    }
  }
};
