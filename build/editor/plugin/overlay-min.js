/*
Copyright 2013, KISSY UI Library v1.40dev
MIT Licensed
build time: Jun 21 01:23
*/
KISSY.add("editor/plugin/overlay",function(d,a,b,c){return b.extend({bindUI:function(){c.init(this)}},{ATTRS:{prefixCls:{value:"ks-editor-"},zIndex:{value:a.baseZIndex(a.zIndexManager.OVERLAY)}}})},{requires:["editor","overlay","./focus-fix"]});