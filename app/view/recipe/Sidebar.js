/*
 * File: app/view/recipe/Sidebar.js
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

Ext.define('BeerBuilder.view.recipe.Sidebar', {
    extend: 'Ext.view.View',
    alias: 'widget.recipesidebar',

    border: false,
    cls: 'sidebar-list',
    itemSelector: '.product',
    store: 'Recipes',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            tpl: [
                '<div class="sidebar-title">Recipes</div>',
                '<tpl for=".">',
                '    <div class="product">{name}</div>',
                '</tpl>'
            ]
        });

        me.callParent(arguments);
    }

});