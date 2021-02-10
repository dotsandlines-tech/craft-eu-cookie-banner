<?php
/**
 * Cookiebanner plugin for Craft CMS 3.x
 *
 * Provides a javascript based cookie banner implementation.
 *
 * @link      https://dotsandlines.io
 * @copyright Copyright (c) 2020 dotsandlines GmbH
 */

namespace dotsandlines\cookiebanner\assetbundles\cookiebannercpsection;

use Craft;
use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

/**
 * @author    dotsandlines GmbH
 * @package   Cookiebanner
 * @since     1.0.0
 */
class CookiebannerCPSectionAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function init()
    {
        $this->sourcePath = "@dotsandlines/cookiebanner/assetbundles/cookiebannercpsection/dist";

        $this->depends = [
            CpAsset::class,
        ];

        $this->js = [
            'js/cookiebannercpsection.js',
        ];

        $this->css = [
            'css/cookiebannercpsection.css',
        ];

        parent::init();
    }
}
