const i18n = require('i18n');

cc.Class({
    extends: cc.Component,

    properties: {
        zh_spriteFrame: {
            default: null,
            type: cc.SpriteFrame,
            notify: function () {
                this.fetchRender();
            }
        },
        en_spriteFrame: {
            default: null,
            type: cc.SpriteFrame,
            notify: function () {
                this.fetchRender();
            }
        }
    },


    onLoad() {
        this.fetchRender();
    },


    fetchRender() {
        let sprite = this.getComponent(cc.Sprite);
        if (sprite) {
            this.sprite = sprite;
            this.updateSprite();
        }
    },

    getSpriteFrameByLang() {
        let lang = i18n.lang;
        if ("en" === lang) {
            return this.en_spriteFrame;
        } else {
            return this.zh_spriteFrame;
        }
    },

    updateSprite() {
        if (!this.sprite) {
            return;
        }

        let spriteFrame = this.getSpriteFrameByLang();
        if (!spriteFrame && this.zh_spriteFrame) {
            spriteFrame = this.zh_spriteFrame;
        }

        this.sprite.spriteFrame = spriteFrame;

    }


});
