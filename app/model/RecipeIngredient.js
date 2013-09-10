/*
 * File: app/model/RecipeIngredient.js
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

Ext.define('BeerBuilder.model.RecipeIngredient', {
    extend: 'Ext.data.Model',

    uses: [
        'BeerBuilder.model.Recipe',
        'BeerBuilder.model.Unit',
        'BeerBuilder.model.Ingredient'
    ],

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'recipe_id'
        },
        {
            name: 'ingredient_id'
        },
        {
            name: 'unit_id'
        },
        {
            name: 'qty'
        }
    ],

    belongsTo: {
        model: 'BeerBuilder.model.Recipe'
    },

    hasOne: [
        {
            associationKey: 'unit',
            model: 'BeerBuilder.model.Unit',
            foreignKey: 'unit_id'
        },
        {
            associationKey: 'ingredient',
            model: 'BeerBuilder.model.Ingredient',
            foreignKey: 'ingredient_id'
        }
    ],

    idgen: {
        type: 'sequential'
    }
});