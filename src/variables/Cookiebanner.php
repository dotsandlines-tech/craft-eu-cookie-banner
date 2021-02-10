<?php

/**
 * Cookiebanner plugin for Craft CMS 3.x
 *
 * Provides a javascript based cookie banner implementation.
 *
 * @link      https://dotsandlines.io
 * @copyright Copyright (c) 2020 dotsandlines GmbH
 */

namespace dotsandlines\cookiebanner\variables;


use Craft;
use craft\base\Component;
use craft\web\View;
use dotsandlines\cookiebanner\Cookiebanner as CookiebannerPlugin;


class Cookiebanner
{
	/**
	 * @return array
	 */
	public function renderCookieBanner()
	{
		return CookiebannerPlugin::$plugin->renderingService->renderCookieBanner();
	}

	public function renderCSSDefaultColorStylings()
	{
		return CookiebannerPlugin::$plugin->renderingService->renderCSSDefaultColorStylings();
	}

	public function renderJavaScriptOfCategories()
	{
		return CookiebannerPlugin::$plugin->renderingService->renderJavaScriptOfCategories();
	}
}
