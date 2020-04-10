if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/mescroll-uni/components/mescroll-empty?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/mescroll-uni/components/mescroll-top?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/mescroll-uni/mescroll-body?hash=3607da1a9915067baeb85466f993b176d826f70a');
require('../../node-modules/npm-scope-dcloudio/uni-ui/lib/uni-icons/uni-icons?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node-modules/npm-scope-dcloudio/uni-ui/lib/uni-pagination/uni-pagination?hash=ad4238c8c59cc54c22f1db1abe7369ba1cab8766');
require('../../components/evan-form/evan-form?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/evan-form/evan-form-item?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/simple-address/simple-address?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/map/map?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/index/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/login/login?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/personal/personal?hash=b7553e7fc7c61f228e98952a32939dcc38c3fb7a');
require('../../pages/wordList/wordList?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/pagination/pagination?hash=0f666a8e652c935e65b1e172f872d56d00598f09');
require('../../pages/uniForm/uniForm?hash=3556e853bd22662dcfe03fc1f8a4e2b02f3d7b5d');
require('../../pages/picker/picker?hash=e3ca81ccb3cb20c22db9e8fc27b946136187cffd');
require('../../pages/landing/landing?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}