gdjs.loadingCode = {};
gdjs.loadingCode.GDLogoObjects1= [];
gdjs.loadingCode.GDLogoObjects2= [];
gdjs.loadingCode.GDloading_9595siteObjects1= [];
gdjs.loadingCode.GDloading_9595siteObjects2= [];


gdjs.loadingCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Site");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getSceneLoadingProgress(runtimeScene, "Site") == 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Site", false);
}}

}


};

gdjs.loadingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.loadingCode.GDLogoObjects1.length = 0;
gdjs.loadingCode.GDLogoObjects2.length = 0;
gdjs.loadingCode.GDloading_9595siteObjects1.length = 0;
gdjs.loadingCode.GDloading_9595siteObjects2.length = 0;

gdjs.loadingCode.eventsList0(runtimeScene);

return;

}

gdjs['loadingCode'] = gdjs.loadingCode;
