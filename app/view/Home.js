(function() {

  Ext.define("gallaryist.view.Home", {
    extend: 'Ext.Panel',
    xtype: 'homepanel',
    config: {
      title: 'home',
      cls: 'home',
      iconCls: 'home',
      scrollable: true,
      styleHtmlContent: true,
      html: ['<h1>Gallaryist</h1>', '<p>powered by Sencha Touch 2</p>'].join('')
    }
  });

}).call(this);
