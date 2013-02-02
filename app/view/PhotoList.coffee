#
# @class gallaryist.view.Home
# @extends Ext.Panel
#

Ext.define "gallaryist.view.PhotoList"
  extend: 'Ext.navigation.View'
  xtype: 'photolist'
  requires: [
    'Ext.dataview.List'
    'Ext.data.proxy.JsonP'
    'Ext.data.Store'
    'Ext.plugin.ListPaging'
  ]
  config:
    title: 'photos'
    iconCls: 'photos2'
    items: [
      xtype: 'list'
      title: 'photo gallary'
      plugins: [
        xclass: 'Ext.plugin.ListPaging'
        autoPaging: true
      ]
      data: [
        { title: 'ham' }
        { title: 'egg' }
        { title: 'spam' }
      ]
      itemTpl: '{title}'
    ]

