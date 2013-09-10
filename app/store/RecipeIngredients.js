/*
 * File: app/store/RecipeIngredients.js
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

Ext.define('BeerBuilder.store.RecipeIngredients', {
    extend: 'Ext.data.Store',

    singleton: true,
    requires: [
        'BeerBuilder.model.RecipeIngredient'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            autoSync: true,
            model: 'BeerBuilder.model.RecipeIngredient',
            storeId: 'RecipeIngredients',
            data: [
                {
                    id: 1,
                    recipe_id: '1',
                    ingredient_id: '1',
                    unit_id: '1',
                    qty: '4'
                },
                {
                    id: 2,
                    recipe_id: '1',
                    ingredient_id: '2',
                    unit_id: '1',
                    qty: '2'
                },
                {
                    id: 3,
                    recipe_id: '1',
                    ingredient_id: '3',
                    unit_id: '1',
                    qty: '1'
                },
                {
                    id: 4,
                    recipe_id: '2',
                    ingredient_id: '1',
                    unit_id: '1',
                    qty: '4'
                },
                {
                    id: 5,
                    recipe_id: '2',
                    ingredient_id: '2',
                    unit_id: '1',
                    qty: '2'
                }
            ],
            proxy: {
                type: 'localstorage',
                id: 'recipe_i_ls'
            }
        }, cfg)]);
    }
});