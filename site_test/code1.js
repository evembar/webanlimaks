gdjs.SiteCode = {};
gdjs.SiteCode.GDlogoObjects1= [];
gdjs.SiteCode.GDlogoObjects2= [];
gdjs.SiteCode.GDlogoObjects3= [];
gdjs.SiteCode.GDbgObjects1= [];
gdjs.SiteCode.GDbgObjects2= [];
gdjs.SiteCode.GDbgObjects3= [];
gdjs.SiteCode.GDlogo2Objects1= [];
gdjs.SiteCode.GDlogo2Objects2= [];
gdjs.SiteCode.GDlogo2Objects3= [];
gdjs.SiteCode.GDWelcomeObjects1= [];
gdjs.SiteCode.GDWelcomeObjects2= [];
gdjs.SiteCode.GDWelcomeObjects3= [];
gdjs.SiteCode.GDNewTextObjects1= [];
gdjs.SiteCode.GDNewTextObjects2= [];
gdjs.SiteCode.GDNewTextObjects3= [];
gdjs.SiteCode.GDwebanlauncherObjects1= [];
gdjs.SiteCode.GDwebanlauncherObjects2= [];
gdjs.SiteCode.GDwebanlauncherObjects3= [];
gdjs.SiteCode.GDWelcome2Objects1= [];
gdjs.SiteCode.GDWelcome2Objects2= [];
gdjs.SiteCode.GDWelcome2Objects3= [];
gdjs.SiteCode.GDNewText2Objects1= [];
gdjs.SiteCode.GDNewText2Objects2= [];
gdjs.SiteCode.GDNewText2Objects3= [];
gdjs.SiteCode.GDgetObjects1= [];
gdjs.SiteCode.GDgetObjects2= [];
gdjs.SiteCode.GDgetObjects3= [];
gdjs.SiteCode.GDORTANOObjects1= [];
gdjs.SiteCode.GDORTANOObjects2= [];
gdjs.SiteCode.GDORTANOObjects3= [];
gdjs.SiteCode.GDWelcome3Objects1= [];
gdjs.SiteCode.GDWelcome3Objects2= [];
gdjs.SiteCode.GDWelcome3Objects3= [];
gdjs.SiteCode.GDNIght_9595SoulObjects1= [];
gdjs.SiteCode.GDNIght_9595SoulObjects2= [];
gdjs.SiteCode.GDNIght_9595SoulObjects3= [];
gdjs.SiteCode.GDNewText3Objects1= [];
gdjs.SiteCode.GDNewText3Objects2= [];
gdjs.SiteCode.GDNewText3Objects3= [];
gdjs.SiteCode.GDget2Objects1= [];
gdjs.SiteCode.GDget2Objects2= [];
gdjs.SiteCode.GDget2Objects3= [];
gdjs.SiteCode.GDWelcome4Objects1= [];
gdjs.SiteCode.GDWelcome4Objects2= [];
gdjs.SiteCode.GDWelcome4Objects3= [];
gdjs.SiteCode.GDNewText4Objects1= [];
gdjs.SiteCode.GDNewText4Objects2= [];
gdjs.SiteCode.GDNewText4Objects3= [];
gdjs.SiteCode.GDget3Objects1= [];
gdjs.SiteCode.GDget3Objects2= [];
gdjs.SiteCode.GDget3Objects3= [];


gdjs.SiteCode.mapOfGDgdjs_9546SiteCode_9546GDNewTextObjects2Objects = Hashtable.newFrom({"NewText": gdjs.SiteCode.GDNewTextObjects2});
gdjs.SiteCode.mapOfGDgdjs_9546SiteCode_9546GDNewText2Objects2Objects = Hashtable.newFrom({"NewText2": gdjs.SiteCode.GDNewText2Objects2});
gdjs.SiteCode.mapOfGDgdjs_9546SiteCode_9546GDNewText3Objects2Objects = Hashtable.newFrom({"NewText3": gdjs.SiteCode.GDNewText3Objects2});
gdjs.SiteCode.mapOfGDgdjs_9546SiteCode_9546GDNewText4Objects2Objects = Hashtable.newFrom({"NewText4": gdjs.SiteCode.GDNewText4Objects2});
gdjs.SiteCode.asyncCallback8084116 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.SiteCode.GDNewTextObjects3);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.SiteCode.GDNewText2Objects3);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.SiteCode.GDNewText3Objects3);
gdjs.copyArray(asyncObjectsList.getObjects("NewText4"), gdjs.SiteCode.GDNewText4Objects3);

{for(var i = 0, len = gdjs.SiteCode.GDNewText3Objects3.length ;i < len;++i) {
    gdjs.SiteCode.GDNewText3Objects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.SiteCode.GDNewText2Objects3.length ;i < len;++i) {
    gdjs.SiteCode.GDNewText2Objects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.SiteCode.GDNewTextObjects3.length ;i < len;++i) {
    gdjs.SiteCode.GDNewTextObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.SiteCode.GDNewText4Objects3.length ;i < len;++i) {
    gdjs.SiteCode.GDNewText4Objects3[i].hide(false);
}
}}
gdjs.SiteCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.SiteCode.GDNewText4Objects2) asyncObjectsList.addObject("NewText4", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.SiteCode.asyncCallback8084116(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SiteCode.mapOfGDgdjs_9546SiteCode_9546GDgetObjects2Objects = Hashtable.newFrom({"get": gdjs.SiteCode.GDgetObjects2});
gdjs.SiteCode.mapOfGDgdjs_9546SiteCode_9546GDlogoObjects1Objects = Hashtable.newFrom({"logo": gdjs.SiteCode.GDlogoObjects1});
gdjs.SiteCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.SiteCode.GDNewTextObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SiteCode.mapOfGDgdjs_9546SiteCode_9546GDNewTextObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.SiteCode.GDNewTextObjects2 */
{for(var i = 0, len = gdjs.SiteCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.SiteCode.GDNewTextObjects2[i].hide();
}
}{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "0", 650, 1118, "", "easeInOutQuint", 2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.SiteCode.GDNewText2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SiteCode.mapOfGDgdjs_9546SiteCode_9546GDNewText2Objects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.SiteCode.GDNewText2Objects2 */
{for(var i = 0, len = gdjs.SiteCode.GDNewText2Objects2.length ;i < len;++i) {
    gdjs.SiteCode.GDNewText2Objects2[i].hide();
}
}{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "0", 650, 2236, "", "easeInOutQuint", 2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.SiteCode.GDNewText3Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SiteCode.mapOfGDgdjs_9546SiteCode_9546GDNewText3Objects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.SiteCode.GDNewText3Objects2 */
{for(var i = 0, len = gdjs.SiteCode.GDNewText3Objects2.length ;i < len;++i) {
    gdjs.SiteCode.GDNewText3Objects2[i].hide();
}
}{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "0", 650, 3400, "", "easeInOutQuint", 2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.SiteCode.GDNewText4Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SiteCode.mapOfGDgdjs_9546SiteCode_9546GDNewText4Objects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.SiteCode.GDNewText4Objects2 */
{for(var i = 0, len = gdjs.SiteCode.GDNewText4Objects2.length ;i < len;++i) {
    gdjs.SiteCode.GDNewText4Objects2[i].hide();
}
}{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "0", 650, 350, "", "easeInOutQuint", 2);
}
{ //Subevents
gdjs.SiteCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("get"), gdjs.SiteCode.GDgetObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SiteCode.mapOfGDgdjs_9546SiteCode_9546GDgetObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://evembar.github.io/webanlimaks/launcher.html", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.SiteCode.GDlogoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SiteCode.mapOfGDgdjs_9546SiteCode_9546GDlogoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://evembar.github.io/webanlimaks/", runtimeScene);
}}

}


};gdjs.SiteCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.SiteCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.SiteCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SiteCode.GDlogoObjects1.length = 0;
gdjs.SiteCode.GDlogoObjects2.length = 0;
gdjs.SiteCode.GDlogoObjects3.length = 0;
gdjs.SiteCode.GDbgObjects1.length = 0;
gdjs.SiteCode.GDbgObjects2.length = 0;
gdjs.SiteCode.GDbgObjects3.length = 0;
gdjs.SiteCode.GDlogo2Objects1.length = 0;
gdjs.SiteCode.GDlogo2Objects2.length = 0;
gdjs.SiteCode.GDlogo2Objects3.length = 0;
gdjs.SiteCode.GDWelcomeObjects1.length = 0;
gdjs.SiteCode.GDWelcomeObjects2.length = 0;
gdjs.SiteCode.GDWelcomeObjects3.length = 0;
gdjs.SiteCode.GDNewTextObjects1.length = 0;
gdjs.SiteCode.GDNewTextObjects2.length = 0;
gdjs.SiteCode.GDNewTextObjects3.length = 0;
gdjs.SiteCode.GDwebanlauncherObjects1.length = 0;
gdjs.SiteCode.GDwebanlauncherObjects2.length = 0;
gdjs.SiteCode.GDwebanlauncherObjects3.length = 0;
gdjs.SiteCode.GDWelcome2Objects1.length = 0;
gdjs.SiteCode.GDWelcome2Objects2.length = 0;
gdjs.SiteCode.GDWelcome2Objects3.length = 0;
gdjs.SiteCode.GDNewText2Objects1.length = 0;
gdjs.SiteCode.GDNewText2Objects2.length = 0;
gdjs.SiteCode.GDNewText2Objects3.length = 0;
gdjs.SiteCode.GDgetObjects1.length = 0;
gdjs.SiteCode.GDgetObjects2.length = 0;
gdjs.SiteCode.GDgetObjects3.length = 0;
gdjs.SiteCode.GDORTANOObjects1.length = 0;
gdjs.SiteCode.GDORTANOObjects2.length = 0;
gdjs.SiteCode.GDORTANOObjects3.length = 0;
gdjs.SiteCode.GDWelcome3Objects1.length = 0;
gdjs.SiteCode.GDWelcome3Objects2.length = 0;
gdjs.SiteCode.GDWelcome3Objects3.length = 0;
gdjs.SiteCode.GDNIght_9595SoulObjects1.length = 0;
gdjs.SiteCode.GDNIght_9595SoulObjects2.length = 0;
gdjs.SiteCode.GDNIght_9595SoulObjects3.length = 0;
gdjs.SiteCode.GDNewText3Objects1.length = 0;
gdjs.SiteCode.GDNewText3Objects2.length = 0;
gdjs.SiteCode.GDNewText3Objects3.length = 0;
gdjs.SiteCode.GDget2Objects1.length = 0;
gdjs.SiteCode.GDget2Objects2.length = 0;
gdjs.SiteCode.GDget2Objects3.length = 0;
gdjs.SiteCode.GDWelcome4Objects1.length = 0;
gdjs.SiteCode.GDWelcome4Objects2.length = 0;
gdjs.SiteCode.GDWelcome4Objects3.length = 0;
gdjs.SiteCode.GDNewText4Objects1.length = 0;
gdjs.SiteCode.GDNewText4Objects2.length = 0;
gdjs.SiteCode.GDNewText4Objects3.length = 0;
gdjs.SiteCode.GDget3Objects1.length = 0;
gdjs.SiteCode.GDget3Objects2.length = 0;
gdjs.SiteCode.GDget3Objects3.length = 0;

gdjs.SiteCode.eventsList2(runtimeScene);

return;

}

gdjs['SiteCode'] = gdjs.SiteCode;
