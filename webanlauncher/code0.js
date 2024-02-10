gdjs.BootCode = {};
gdjs.BootCode.GDLogoObjects1= [];
gdjs.BootCode.GDLogoObjects2= [];
gdjs.BootCode.GDLogoObjects3= [];
gdjs.BootCode.GDLogoObjects4= [];
gdjs.BootCode.GDWebAnLauncher_95952_9595labelObjects1= [];
gdjs.BootCode.GDWebAnLauncher_95952_9595labelObjects2= [];
gdjs.BootCode.GDWebAnLauncher_95952_9595labelObjects3= [];
gdjs.BootCode.GDWebAnLauncher_95952_9595labelObjects4= [];


gdjs.BootCode.asyncCallback9064956 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "launcher", true);
}}
gdjs.BootCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.BootCode.asyncCallback9064956(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BootCode.asyncCallback8801276 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "launcher");
}
{ //Subevents
gdjs.BootCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.BootCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.BootCode.asyncCallback8801276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BootCode.asyncCallback8831132 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("WebAnLauncher_2_label"), gdjs.BootCode.GDWebAnLauncher_95952_9595labelObjects2);

{for(var i = 0, len = gdjs.BootCode.GDWebAnLauncher_95952_9595labelObjects2.length ;i < len;++i) {
    gdjs.BootCode.GDWebAnLauncher_95952_9595labelObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.BootCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.BootCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.BootCode.GDWebAnLauncher_95952_9595labelObjects1) asyncObjectsList.addObject("WebAnLauncher_2_label", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2.5), (runtimeScene) => (gdjs.BootCode.asyncCallback8831132(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BootCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.BootCode.GDLogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("WebAnLauncher_2_label"), gdjs.BootCode.GDWebAnLauncher_95952_9595labelObjects1);
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Boot");
}{for(var i = 0, len = gdjs.BootCode.GDWebAnLauncher_95952_9595labelObjects1.length ;i < len;++i) {
    gdjs.BootCode.GDWebAnLauncher_95952_9595labelObjects1[i].hide();
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "startup.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs.BootCode.GDLogoObjects1.length ;i < len;++i) {
    gdjs.BootCode.GDLogoObjects1[i].getBehavior("Tween").addObjectPositionYTween("logo", 100, "linear", 1000, false);
}
}
{ //Subevents
gdjs.BootCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.BootCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BootCode.GDLogoObjects1.length = 0;
gdjs.BootCode.GDLogoObjects2.length = 0;
gdjs.BootCode.GDLogoObjects3.length = 0;
gdjs.BootCode.GDLogoObjects4.length = 0;
gdjs.BootCode.GDWebAnLauncher_95952_9595labelObjects1.length = 0;
gdjs.BootCode.GDWebAnLauncher_95952_9595labelObjects2.length = 0;
gdjs.BootCode.GDWebAnLauncher_95952_9595labelObjects3.length = 0;
gdjs.BootCode.GDWebAnLauncher_95952_9595labelObjects4.length = 0;

gdjs.BootCode.eventsList3(runtimeScene);

return;

}

gdjs['BootCode'] = gdjs.BootCode;
