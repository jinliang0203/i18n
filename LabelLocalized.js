const i18n = require('i18n');
cc.Class({
    extends: cc.Label,

    properties: {
        textKey: {
            default: 'TEXT_KEY',
            multiline: true,
            tooltip: 'Enter i18n key here',
            notify: function () {
                this.string = this.localizedString;
            }
        },
        localizedString: {
            override: true,
            tooltip: 'Here shows the localized string of Text Key',
            get: function () {
                return i18n.t(this.textKey);
            },
            set: function (value) {
                this.textKey = value;
                if (CC_EDITOR) {
                    cc.warn('Please set label text key in Text Key property.');
                }
            }
        },
    },

    onLoad() {
        if (this.localizedString) {
            this.string = this.localizedString;
        }
    }
});
