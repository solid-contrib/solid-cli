class IdentityManager {
  constructor(providers = {}) {
    this._providers = providers;
  }

  addProviderSettings(providerSettings) {
    const url = providerSettings.provider.url;
    const provider = this._providers[url] || (this._providers[url] = {});
    provider.providerSettings = providerSettings;
  }

  getProviderSettings(url) {
    return this._providers[url] && this._providers[url].providerSettings;
  }

  toJSON() {
    return JSON.stringify({
      providers: this._providers,
    });
  }

  static fromJSON(json) {
    const { providers } = JSON.parse(json);
    return new IdentityManager(providers || {});
  }
}

module.exports = IdentityManager;
