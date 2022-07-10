class ScenarioProperties {
  constructor({
    urlLanguage = 'en', currency = 'USD', distanceUnit = 'km', // custom properties
    rootUrl, rootReferenceUrl, urlAction, // custom properties
    label, onBeforeScript = '', cookiePath = '', url,
    referenceUrl, readyEvent = '', readySelector = '',
    delay = null, hideSelectors = [], removeSelectors = [],
    onReadyScript = '', keyPressSelectors = [],
    hoverSelectors = [], clickSelectors = [],
    postInteractionWait = null, scrollToSelector = '', selectors = [],
    selectorExpansion = false, misMatchThreshold = 0.1, requireSameDimensions = true,
  }) {
    this.urlLanguage = urlLanguage,
      this.currency = currency,
      this.distanceUnit = distanceUnit;
    this.rootUrl = rootUrl;
    this.rootReferenceUrl = rootReferenceUrl;
    this.urlAction = urlAction;
    this.label = label;
    this.onBeforeScript = onBeforeScript;
    this.cookiePath = cookiePath;
    this.url = url;
    this.referenceUrl = referenceUrl;
    this.readyEvent = readyEvent;
    this.readySelector = readySelector;
    this.delay = delay;
    this.hideSelectors = hideSelectors;
    this.removeSelectors = removeSelectors;
    this.onReadyScript = onReadyScript;
    this.keyPressSelectors = keyPressSelectors;
    this.hoverSelectors = hoverSelectors;
    this.clickSelectors = clickSelectors;
    this.postInteractionWait = postInteractionWait;
    this.scrollToSelector = scrollToSelector;
    this.selectors = selectors;
    this.selectorExpansion = selectorExpansion;
    this.misMatchThreshold = misMatchThreshold;
    this.requireSameDimensions = requireSameDimensions;
  }

  getProperties() {
    // The order of properties is important!
    // Be careful when you edit the "url" and "referenceUrl" properties
    return {
      label: this.label,
      onBeforeScript: this.onBeforeScript,
      cookiePath: this.cookiePath,
      url: `${this.rootUrl}${this.urlLanguage}${this.urlAction}?currency=${this.currency}&distance_unit=${this.distanceUnit}`,
      referenceUrl: `${this.rootReferenceUrl}${this.urlLanguage}${this.urlAction}?currency=${this.currency}&distance_unit=${this.distanceUnit}`,
      readyEvent: this.readyEvent,
      onReadyScript: this.onReadyScript,
      readySelector: this.readySelector,
      delay: this.delay,
      hideSelectors: this.hideSelectors,
      removeSelectors: this.removeSelectors,
      keyPressSelectors: this.keyPressSelectors,
      hoverSelectors: this.hoverSelectors,
      clickSelectors: this.clickSelectors,
      postInteractionWait: this.postInteractionWait,
      scrollToSelector: this.scrollToSelector,
      selectors: this.selectors,
      selectorExpansion: this.selectorExpansion,
      misMatchThreshold: this.misMatchThreshold,
      requireSameDimensions: this.requireSameDimensions,
    };
  }
}

module.exports = ScenarioProperties;
