/*
 * File: app/model/Recipe.js
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

Ext.define('BeerBuilder.model.Recipe', {
    extend: 'Ext.data.Model',

    uses: [
        'BeerBuilder.model.RecipeIngredient'
    ],

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'name'
        },
        {
            name: 'type'
        },
        {
            name: 'style'
        },
        {
            name: 'instructions'
        },
        {
            name: 'description'
        }
    ],

    hasMany: {
        associationKey: 'recipeingredients',
        model: 'BeerBuilder.model.RecipeIngredient',
        foreignKey: 'recipe_id',
        name: 'recipeingredients'
    },

    idgen: {
        type: 'sequential'
    }
});