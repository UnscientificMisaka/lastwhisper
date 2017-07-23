import Button from './components/button/button.vue';

let lastwhisper = {
   Button, 
};

const install = function (Vue) {
    Object.keys(lastwhisper).forEach((key) => {
        let tagName = key.replace(/(\w)/, (v) => v.toUpperCase());
        Vue.component(`la${tagName}`, lastwhisper[key]);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

lastwhisper.install = install;

export default lastwhisper;