<?php
/**
 * Cookiebanner plugin for Craft CMS 3.x
 *
 * Provides a javascript based cookie banner implementation.
 *
 * @link      https://dotsandlines.io
 * @copyright Copyright (c) 2020 dotsandlines GmbH
 */
namespace dotsandlines\cookiebanner\assetbundles\cookiebanner;

use Craft;
use craft\web\AssetBundle;

/**
 * @author    dotsandlines GmbH
 * @package   Cookiebanner
 * @since     1.0.0
 */
class CookiebannerAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function init()
    {
        $this->sourcePath = "@dotsandlines/cookiebanner/assetbundles/cookiebanner/dist";

        $this->depends = [
        ];

        $this->js = [
            'js/cookiebanner.js',
        ];

        $this->css = [
            'css/cookiebanner.css',
        ];

        parent::init();
    }
}
