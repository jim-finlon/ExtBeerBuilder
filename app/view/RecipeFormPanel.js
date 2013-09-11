/*
 * File: app/view/RecipeFormPanel.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('BeerBuilder.view.RecipeFormPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.recipeformpanel',

    id: 'recipeformpanel',
    itemId: 'recipeformpanel',
    title: 'Recipe',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'toolbar',
                    items: [
                        {
                            xtype: 'button',
                            action: 'saveRecipe',
                            text: 'Save Recipe'
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    id: 'recipenamefield',
                    padding: '2 0 0 0 ',
                    fieldLabel: 'Recipe Name',
                    name: 'name'
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    id: 'recipetypefield',
                    fieldLabel: 'Type',
                    name: 'type'
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    id: 'recipestylefield',
                    fieldLabel: 'Style',
                    name: 'style'
                },
                {
                    xtype: 'htmleditor',
                    anchor: '100%',
                    id: 'recipedescriptionfield',
                    fieldLabel: 'Description',
                    name: 'description'
                },
                {
                    xtype: 'htmleditor',
                    anchor: '100%',
                    id: 'recipeinstructionsfield',
                    fieldLabel: 'Instructions',
                    name: 'instructions'
                }
            ]
        });

        me.callParent(arguments);
    }

});