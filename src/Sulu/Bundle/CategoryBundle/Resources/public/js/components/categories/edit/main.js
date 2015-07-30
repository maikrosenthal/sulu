/*
 * This file is part of the Sulu CMS.
 *
 * (c) MASSIVE ART WebServices GmbH
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

define(function () {

    'use strict';

    return {

        header: function () {
            return {
                tabs: {
                    url: '/admin/content-navigations?alias=category'
                },
                toolbar: {
                    buttons: [
                        'saveWithOptions',
                        {'settings': {
                            dropdownItems: ['delete']
                        }}
                    ],
                    languageChanger: {
                        preSelected: this.sandbox.sulu.user.locale
                    }
                }
            };
        }
    };
});
