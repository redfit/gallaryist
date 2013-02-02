Ext.define('gallaryist.view.Main', {
  extend: 'Ext.tab.Panel',
  xtype: 'main',
  requires: [
    'Ext.TitleBar',
    'Ext.Video'
  ],
  config: {
    tabBarPosition: 'bottom',
    items: [
      {
        xtype: 'homepanel'
      },
      {
        xtype: 'photolist'
      }
    ]
  }
});
